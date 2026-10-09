'use client';

import { useRef, useState } from 'react';
import { EditorContent, useEditor, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import { Placeholder } from '@tiptap/extensions';
import { shrinkImage } from '@/lib/client-image';
import { countWords } from '@/lib/post-types';

type LinkRel = '' | 'nofollow' | 'sponsored nofollow';

function normalizeUrl(raw: string): string {
  const url = raw.trim();
  if (!url) return '';
  if (/^(https?:\/\/|mailto:|\/|#)/i.test(url)) return url;
  return `https://${url}`;
}

function ToolButton({
  label,
  title,
  active = false,
  disabled = false,
  onClick,
}: {
  label: React.ReactNode;
  title: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={`adm-tb${active ? ' on' : ''}`}
      title={title}
      aria-label={title}
      aria-pressed={active}
      disabled={disabled}
      // Keep the text selection in the editor when a toolbar button is pressed.
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

/** WYSIWYG article editor (TipTap). Emits clean HTML through `onChange`. */
export default function RichTextEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (html: string) => void;
}) {
  const [panel, setPanel] = useState<null | 'link' | 'image'>(null);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkRel, setLinkRel] = useState<LinkRel>('');
  const [imageAlt, setImageAlt] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3, 4] },
        link: {
          openOnClick: false,
          // With autolink on, TipTap keeps extending a link as you type past its end.
          autolink: false,
          defaultProtocol: 'https',
          // Links are plain by default; rel/target for external links is added on save.
          HTMLAttributes: { rel: null, target: null },
        },
      }),
      Image.configure({ inline: false, allowBase64: false }),
      Placeholder.configure({ placeholder: 'Start writing your article…' }),
    ],
    content: value,
    editorProps: {
      attributes: { 'aria-label': 'Article content', role: 'textbox', 'aria-multiline': 'true' },
    },
    onUpdate: ({ editor: instance }) => onChange(instance.getHTML()),
  });

  if (!editor) {
    return (
      <div className="adm-rte">
        <div className="adm-rte-foot">Loading editor…</div>
      </div>
    );
  }

  const chain = () => editor.chain().focus();

  function openLinkPanel(instance: Editor) {
    const attrs = instance.getAttributes('link');
    setLinkUrl(typeof attrs.href === 'string' ? attrs.href : '');
    const rel = typeof attrs.rel === 'string' ? attrs.rel : '';
    setLinkRel(rel.includes('sponsored') ? 'sponsored nofollow' : rel.includes('nofollow') ? 'nofollow' : '');
    setError('');
    setPanel(panel === 'link' ? null : 'link');
  }

  function applyLink() {
    const href = normalizeUrl(linkUrl);
    if (!href) {
      chain().extendMarkRange('link').unsetLink().run();
      setPanel(null);
      return;
    }
    const attrs = { href, rel: linkRel || null };
    if (editor!.state.selection.empty && !editor!.isActive('link')) {
      // Nothing selected: insert the address itself as the link text.
      chain()
        .insertContent({ type: 'text', text: href, marks: [{ type: 'link', attrs }] })
        .run();
    } else {
      chain().extendMarkRange('link').setLink(attrs).run();
    }
    setPanel(null);
  }

  async function insertImage() {
    const file = fileRef.current?.files?.[0];
    if (!file) {
      setError('Choose an image first.');
      return;
    }
    if (!imageAlt.trim()) {
      setError('Describe the image in the alt text box. Search engines and screen readers rely on it.');
      return;
    }
    setUploading(true);
    setError('');
    try {
      const body = new FormData();
      body.append('file', await shrinkImage(file));
      const res = await fetch('/api/admin/upload/', { method: 'POST', body });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Upload failed.');
      // Insert the image followed by an empty paragraph, so the cursor lands below it ready to keep writing.
      chain()
        .insertContent([
          { type: 'image', attrs: { src: data.url, alt: imageAlt.trim(), width: data.width, height: data.height } },
          { type: 'paragraph' },
        ])
        .run();
      setImageAlt('');
      if (fileRef.current) fileRef.current.value = '';
      setPanel(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.');
    } finally {
      setUploading(false);
    }
  }

  const words = countWords(editor.getHTML());

  return (
    <div className="adm-rte">
      <div className="adm-toolbar" role="toolbar" aria-label="Formatting">
        <ToolButton label="P" title="Paragraph" active={editor.isActive('paragraph')} onClick={() => chain().setParagraph().run()} />
        <ToolButton label="H2" title="Heading 2 (main section)" active={editor.isActive('heading', { level: 2 })} onClick={() => chain().toggleHeading({ level: 2 }).run()} />
        <ToolButton label="H3" title="Heading 3 (sub-section)" active={editor.isActive('heading', { level: 3 })} onClick={() => chain().toggleHeading({ level: 3 }).run()} />
        <ToolButton label="H4" title="Heading 4" active={editor.isActive('heading', { level: 4 })} onClick={() => chain().toggleHeading({ level: 4 }).run()} />
        <span className="sep" aria-hidden="true" />
        <ToolButton label={<b>B</b>} title="Bold" active={editor.isActive('bold')} onClick={() => chain().toggleBold().run()} />
        <ToolButton label={<i>I</i>} title="Italic" active={editor.isActive('italic')} onClick={() => chain().toggleItalic().run()} />
        <ToolButton label={<u>U</u>} title="Underline" active={editor.isActive('underline')} onClick={() => chain().toggleUnderline().run()} />
        <ToolButton label={<s>S</s>} title="Strikethrough" active={editor.isActive('strike')} onClick={() => chain().toggleStrike().run()} />
        <span className="sep" aria-hidden="true" />
        <ToolButton label="• List" title="Bullet list" active={editor.isActive('bulletList')} onClick={() => chain().toggleBulletList().run()} />
        <ToolButton label="1. List" title="Numbered list" active={editor.isActive('orderedList')} onClick={() => chain().toggleOrderedList().run()} />
        <ToolButton label="“ Quote" title="Quote" active={editor.isActive('blockquote')} onClick={() => chain().toggleBlockquote().run()} />
        <ToolButton label="―" title="Divider line" onClick={() => chain().setHorizontalRule().run()} />
        <span className="sep" aria-hidden="true" />
        <ToolButton label="Link" title="Add or edit link" active={editor.isActive('link') || panel === 'link'} onClick={() => openLinkPanel(editor)} />
        <ToolButton
          label="Image"
          title="Insert image"
          active={panel === 'image'}
          onClick={() => {
            setError('');
            setPanel(panel === 'image' ? null : 'image');
          }}
        />
        <span className="sep" aria-hidden="true" />
        <ToolButton label="↶" title="Undo" disabled={!editor.can().undo()} onClick={() => chain().undo().run()} />
        <ToolButton label="↷" title="Redo" disabled={!editor.can().redo()} onClick={() => chain().redo().run()} />
        <ToolButton label="Clear" title="Clear formatting" onClick={() => chain().unsetAllMarks().clearNodes().run()} />
      </div>

      {panel === 'link' ? (
        <div className="adm-pop">
          <div className="adm-field grow2">
            <label htmlFor="rte-link-url">Link address</label>
            <input
              id="rte-link-url"
              type="text"
              inputMode="url"
              placeholder="/ai-fanfiction-generator/ or https://example.com"
              value={linkUrl}
              autoFocus
              onChange={(e) => setLinkUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  applyLink();
                }
              }}
            />
          </div>
          <div className="adm-field">
            <label htmlFor="rte-link-rel">Link type</label>
            <select id="rte-link-rel" value={linkRel} onChange={(e) => setLinkRel(e.target.value as LinkRel)}>
              <option value="">Normal</option>
              <option value="nofollow">Nofollow</option>
              <option value="sponsored nofollow">Sponsored / affiliate</option>
            </select>
          </div>
          <button type="button" className="adm-btn primary small" onClick={applyLink}>
            Apply link
          </button>
          {editor.isActive('link') ? (
            <button
              type="button"
              className="adm-btn small"
              onClick={() => {
                chain().extendMarkRange('link').unsetLink().run();
                setPanel(null);
              }}
            >
              Remove link
            </button>
          ) : null}
        </div>
      ) : null}

      {panel === 'image' ? (
        <div className="adm-pop">
          <div className="adm-field">
            <label htmlFor="rte-image-file">Image file</label>
            <input id="rte-image-file" ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif,image/avif" />
          </div>
          <div className="adm-field grow2">
            <label htmlFor="rte-image-alt">Alt text (describe the image)</label>
            <input id="rte-image-alt" type="text" value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} />
          </div>
          <button type="button" className="adm-btn primary small" disabled={uploading} onClick={insertImage}>
            {uploading ? 'Uploading…' : 'Upload & insert'}
          </button>
        </div>
      ) : null}

      {error ? (
        <div className="adm-msg err" role="alert" style={{ margin: 12 }}>
          {error}
        </div>
      ) : null}

      <EditorContent editor={editor} />

      <div className="adm-rte-foot">
        <span>
          {words} {words === 1 ? 'word' : 'words'} · about {Math.max(1, Math.round(words / 220))} min read
        </span>
        <span>Tip: use H2 for main sections and H3 for sub-sections.</span>
      </div>
    </div>
  );
}
