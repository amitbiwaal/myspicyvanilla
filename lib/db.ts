import fs from 'node:fs';
import path from 'node:path';
import { createClient, type Client } from '@libsql/client';

/**
 * Database access (Turso / libSQL).
 *
 * On Vercel the Turso integration provides TURSO_DATABASE_URL and TURSO_AUTH_TOKEN.
 * Without them (local `npm run dev`) a SQLite file in .data/ is used instead, so the
 * site and the admin panel work offline without touching the live database.
 */
let client: Client | undefined;
let schemaReady: Promise<void> | undefined;

function connect(): Client {
  const url = process.env.TURSO_DATABASE_URL;
  if (url) {
    return createClient({
      // Plain HTTP requests suit serverless functions better than a long-lived WebSocket.
      url: url.replace(/^libsql:\/\//, 'https://'),
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  }
  if (process.env.VERCEL) {
    throw new Error('TURSO_DATABASE_URL is not set. Connect the Turso database to this Vercel project.');
  }
  const dir = path.join(process.cwd(), '.data');
  fs.mkdirSync(dir, { recursive: true });
  return createClient({ url: `file:${path.join(dir, 'local.db').replace(/\\/g, '/')}` });
}

const SCHEMA = [
  // One row per post. `data` holds the whole post as JSON; the other columns exist for lookups.
  `CREATE TABLE IF NOT EXISTS posts (
     id TEXT PRIMARY KEY,
     slug TEXT NOT NULL UNIQUE,
     status TEXT NOT NULL,
     published_at TEXT,
     updated_at TEXT NOT NULL,
     data TEXT NOT NULL
   )`,
  // Failed sign-in counter per client address, used to slow down password guessing.
  `CREATE TABLE IF NOT EXISTS login_attempts (
     client TEXT PRIMARY KEY,
     count INTEGER NOT NULL,
     window_start INTEGER NOT NULL
   )`,
];

/** Connected client with the tables guaranteed to exist. */
export async function db(): Promise<Client> {
  client ??= connect();
  schemaReady ??= client
    .batch(SCHEMA, 'write')
    .then(() => undefined)
    .catch((err) => {
      schemaReady = undefined; // try again on the next call
      throw err;
    });
  await schemaReady;
  return client;
}
