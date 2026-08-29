import {ADMIN_COOKIE, isSameOrigin, privateHeaders} from '../../../lib/admin-auth';

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return new Response(JSON.stringify({ok: false}), {status: 403, headers: privateHeaders});
  const secure = new URL(request.url).protocol === 'https:' ? '; Secure' : '';
  return new Response(JSON.stringify({ok: true}), {headers: {...privateHeaders, 'Set-Cookie': `${ADMIN_COOKIE}=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0${secure}`}});
}
