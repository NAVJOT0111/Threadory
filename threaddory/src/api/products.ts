import { products } from '@/data/products';
import type { Product } from '@/types/product';

const tick = <T,>(value: T): Promise<T> => Promise.resolve(value);

export function getProducts(): Promise<Product[]> {
  return tick(products);
}

export function getProductBySlug(slug: string): Promise<Product | undefined> {
  return tick(products.find((p) => p.slug === slug));
}

export function getProductsByIds(ids: string[]): Promise<Product[]> {
  return tick(ids.map((id) => products.find((p) => p.id === id)).filter((p): p is Product => Boolean(p)));
}

export function getBestsellers(limit = 4): Promise<Product[]> {
  // Homepage order from the spec: 001, 002, 009, 012.
  const order = ['001', '002', '009', '012'];
  const picked = order
    .map((id) => products.find((p) => p.id === id && p.flags.bestseller))
    .filter((p): p is Product => Boolean(p));
  return tick(picked.slice(0, limit));
}
