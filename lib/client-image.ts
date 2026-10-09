/**
 * Shrink large photos in the browser before upload. Phone photos are often 5-10 MB, which is more
 * than a Vercel function accepts in one request; the server resizes to 1600px anyway, so nothing
 * visible is lost. Small files, and anything the browser cannot decode, are returned untouched.
 */
export async function shrinkImage(file: File, maxSide = 2400): Promise<File> {
  if (file.size <= 1_500_000 || typeof createImageBitmap !== 'function') return file;
  try {
    const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
    const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const context = canvas.getContext('2d');
    if (!context) return file;
    // JPEG has no transparency, so put white behind see-through areas instead of black.
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.9));
    if (!blob || blob.size >= file.size) return file;
    return new File([blob], file.name.replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' });
  } catch {
    return file;
  }
}
