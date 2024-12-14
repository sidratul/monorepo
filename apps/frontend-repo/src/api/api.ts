'use client'

import { logout } from '@/app/actions';
import UseSwr from 'swr';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return getFetchResponse(res);
}

export const getSwr = <T>(url: string | null) => {
  return UseSwr<T>(url, fetcher);
}

export const patch = async <T,D>(url: string, data: D) => {
  const res = await fetch(url, {
    body: JSON.stringify(data),
    method: 'PATCH'
  })

  return getFetchResponse(res) as T;
}

const getFetchResponse = async (res: Response) => {
  const resJson = await res.json();
  if (res.status === 200) {
    return resJson;
  }

  if(res.status === 401) {
    logout();
    return;
  }

  throw new Error(resJson?.data?.message || 'Error');
}