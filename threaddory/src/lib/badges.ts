import type { BadgeKind, ImageAsset, Product } from '@/types/product';

export function totalStock(product: Product): number {
  return product.variants.reduce((sum, v) => sum + v.stock, 0);
}

/** At most one badge, in the brief's priority order. */
export function getBadge(product: Product): BadgeKind | null {
  const stock = totalStock(product);
  if (stock === 0) return 'sold-out';
  if (product.variants.some((v) => v.compareAtPrice !== undefined && v.compareAtPrice > v.price)) {
    return 'sale';
  }
  if (stock >= 1 && stock <= 5) return 'low-stock';
  if (product.flags.isNew) return 'new';
  if (product.flags.bestseller) return 'bestseller';
  if (product.flags.giftReady) return 'gift-ready';
  if (product.flags.madeToOrder) return 'made-to-order';
  return null;
}

export interface PriceInfo {
  amount: number;
  compareAt?: number;
  from: boolean;
}

export function getPriceInfo(product: Product): PriceInfo {
  const prices = product.variants.map((v) => v.price);
  const amount = Math.min(...prices);
  const cheapest = product.variants.find((v) => v.price === amount);
  const compareAt =
    cheapest?.compareAtPrice !== undefined && cheapest.compareAtPrice > cheapest.price
      ? cheapest.compareAtPrice
      : undefined;
  return { amount, compareAt, from: new Set(prices).size > 1 };
}

/** First "held" shot, otherwise the second image. */
export function getHoverImage(product: Product): ImageAsset | undefined {
  return product.images.find((i) => i.kind === 'held') ?? product.images[1];
}
