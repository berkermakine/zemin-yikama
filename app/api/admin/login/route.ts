import {ADMIN_COOKIE, SESSION_TTL_SECONDS, createSessionToken, credentialsMatch, isSameOrigin, privateHeaders} from '../../../lib/admin-auth';

const attempts = new Map<string, {count: number; resetAt: number}>();

function clientKey(request: Request) {
  return request.headers.get('cf-connecting-ip') || request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return new Response(JSON.stringify({ok: false, message: 'Geçersiz istek.'}), {status: 403, headers: privateHeaders});
  if (Number(request.headers.get('content-length') || 0) > 4096) return new Response(JSON.stringify({ok: false}), {status: 413, headers: privateHeaders});

  const now = Date.now();
  const key = clientKey(request);
  const state = attempts.get(key);
  if (state && state.resetAt > now && state.count >= 5) {
    return new Response(JSON.stringify({ok: false, message: 'Çok fazla deneme yapıldı. Lütfen 15 dakika sonra tekrar deneyin.'}), {status: 429, headers: {...privateHeaders, 'Retry-After': '900'}});
  }

  let body: {username?: unknown; password?: unknown};
  try { body = await request.json(); } catch { return new Response(JSON.stringify({ok: false}), {status: 400, headers: privateHeaders}); }
  const username = typeof body.username === 'string' ? body.username.slice(0, 100) : '';
  const password = typeof body.password === 'string' ? body.password.slice(0, 256) : '';
  if (!(await credentialsMatch(username, password))) {
    attempts.set(key, state && state.resetAt > now ? {...state, count: state.count + 1} : {count: 1, resetAt: now + 15 * 60 * 1000});
    return new Response(JSON.stringify({ok: false, message: 'Kullanıcı adı veya parola hatalı.'}), {status: 401, headers: privateHeaders});
  }

  attempts.delete(key);
  const token = await createSessionToken();
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
  return new Response(JSON.stringify({ok: true}), {
    status: 200,
    headers: {...privateHeaders, 'Set-Cookie': `${ADMIN_COOKIE}=${encodeURIComponent(token)}; HttpOnly; SameSite=Strict; Path=/; Max-Age=${SESSION_TTL_SECONDS}${secure}`},
  });
}
