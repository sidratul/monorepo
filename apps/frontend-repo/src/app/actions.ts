'use server'

import { cookies } from 'next/headers'
import { TOKEN_COOKIE_NAME } from '../constants';
import { redirect } from 'next/navigation';

export async function login(token: string) {
  const cookieStore = await cookies()
  cookieStore.set(TOKEN_COOKIE_NAME, token);

  redirect('/');
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete(TOKEN_COOKIE_NAME);

  redirect('/login');
}


