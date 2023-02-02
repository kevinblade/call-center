import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals, url }) => {
  const user = locals?.user

  const isGuestPage = url.pathname.indexOf(import.meta.env.VITE_LOGIN_PATH) >= 0
    || url.pathname.indexOf("/register") >= 0
    || url.pathname.indexOf("/forgot-password") >= 0

  if (user && isGuestPage) {
    throw redirect(302, '/')
  }

  if (!user && !isGuestPage) {
    throw redirect(302, import.meta.env.VITE_LOGIN_PATH)
  }

  return { user }
}
