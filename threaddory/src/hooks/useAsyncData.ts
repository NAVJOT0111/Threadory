import { use } from 'react';

const cache = new Map<string, Promise<unknown>>();

/**
 * Suspense-based data hook. Promises are cached by key so a component can read
 * data synchronously after the first resolve; a real API swaps in behind src/api.
 */
export function useAsyncData<T>(key: string, load: () => Promise<T>): T {
  let promise = cache.get(key) as Promise<T> | undefined;
  if (!promise) {
    promise = load();
    cache.set(key, promise);
  }
  return use(promise);
}
