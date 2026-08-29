import {ADMIN_COOKIE, cookieValue, privateHeaders, verifySessionToken} from '../../../lib/admin-auth';

export async function GET(request: Request) {
  const authenticated = await verifySessionToken(cookieValue(request, ADMIN_COOKIE));
  return new Response(JSON.stringify({authenticated}), {status: authenticated ? 200 : 401, headers: privateHeaders});
}
