import type { Product } from '@/types/product';

/** Search text matches name, short description, category and occasions. */
export function searchProducts(products: Product[], query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter((p) => {
    const haystack = [p.name, p.shortDescription, p.category.replace('-', ' '), ...p.occasions.map((o) => o.replace('-', ' '))]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}
