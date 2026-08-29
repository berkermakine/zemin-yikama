const encoder = new TextEncoder();

export const ADMIN_COOKIE = 'zy_admin_session';
export const SESSION_TTL_SECONDS = 60 * 60;

function base64Url(bytes: Uint8Array) {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function fromBase64Url(value: string) {
  const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
  const binary = atob(normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '='));
  return Uint8Array.from(binary, char => char.charCodeAt(0));
}

async function hmac(value: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) throw new Error('ADMIN_SESSION_SECRET is not configured securely');
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), {name: 'HMAC', hash: 'SHA-256'}, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', key, encoder.encode(value)));
}

async function digest(value: string) {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
}

function constantTimeEqual(left: Uint8Array, right: Uint8Array) {
  if (left.length !== right.length) return false;
  let difference = 0;
  for (let index = 0; index < left.length; index++) difference |= left[index] ^ right[index];
  return difference === 0;
}

export async function credentialsMatch(username: string, password: string) {
  const configuredUsername = process.env.ADMIN_USERNAME;
  const configuredPassword = process.env.ADMIN_PASSWORD;
  if (!configuredUsername || !configuredPassword) return false;
  const [givenUser, savedUser, givenPassword, savedPassword] = await Promise.all([
    digest(username.normalize('NFKC')),
    digest(configuredUsername.normalize('NFKC')),
    digest(password),
    digest(configuredPassword),
  ]);
  return constantTimeEqual(givenUser, savedUser) && constantTimeEqual(givenPassword, savedPassword);
}

export async function createSessionToken() {
  const payload = base64Url(encoder.encode(JSON.stringify({exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS})));
  return `${payload}.${base64Url(await hmac(payload))}`;
}

export async function verifySessionToken(token?: string | null) {
  if (!token) return false;
  const [payload, signature, extra] = token.split('.');
  if (!payload || !signature || extra) return false;
  try {
    const expected = await hmac(payload);
    if (!constantTimeEqual(expected, fromBase64Url(signature))) return false;
    const parsed = JSON.parse(new TextDecoder().decode(fromBase64Url(payload))) as {exp?: number};
    return typeof parsed.exp === 'number' && parsed.exp > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

export function cookieValue(request: Request, name: string) {
  const cookie = request.headers.get('cookie') || '';
  for (const entry of cookie.split(';')) {
    const [key, ...value] = entry.trim().split('=');
    if (key === name) return decodeURIComponent(value.join('='));
  }
  return null;
}

export function isSameOrigin(request: Request) {
  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite === 'same-origin') return true;
  const origin = request.headers.get('origin');
  return Boolean(origin && origin === new URL(request.url).origin);
}

export const privateHeaders = {
  'Cache-Control': 'no-store, max-age=0',
  'Content-Type': 'application/json; charset=utf-8',
  'X-Content-Type-Options': 'nosniff',
};
