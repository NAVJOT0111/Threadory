import type { Product } from '@/types/product';
import { cn } from '@/lib/cn';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  /** Number of cards in the first row that load eagerly. */
  eagerCount?: number;
  className?: string;
}

/** 2 columns mobile, 3 tablet, 4 desktop. */
export function ProductGrid({ products, eagerCount = 0, className }: ProductGridProps) {
  return (
    <ul className={cn('grid grid-cols-2 gap-x-3 gap-y-8 tab:grid-cols-3 tab:gap-x-6 tab:gap-y-10 desk:grid-cols-4', className)}>
      {products.map((product, i) => (
        <li key={product.id}>
          <ProductCard product={product} priority={i < eagerCount} />
        </li>
      ))}
    </ul>
  );
}
