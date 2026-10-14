import { Link } from 'react-router';
import type { Product } from '@/types/product';
import { getBadge, getHoverImage, getPriceInfo } from '@/lib/badges';
import { Badge } from '@/components/ui/Badge';
import { PieceNumber } from '@/components/ui/PieceNumber';
import { Price } from '@/components/ui/Price';
import { ProductImage } from '@/components/ui/ProductImage';

interface ProductCardProps {
  product: Product;
  /** First product row loads eagerly with high priority. */
  priority?: boolean;
}

const CARD_SIZES = '(min-width: 64rem) 22vw, (min-width: 37.5rem) 30vw, 46vw';

/** A photograph, a number, a name and a price. No border, no background, no shadow. */
export function ProductCard({ product, priority = false }: ProductCardProps) {
  const badge = getBadge(product);
  const price = getPriceInfo(product);
  const hover = getHoverImage(product);
  const front = product.images[0];

  return (
    <article className="product-card group relative">
      <div className="relative">
        <ProductImage image={front} ratio="4:5" sizes={CARD_SIZES} priority={priority} />
        {hover && (
          <ProductImage
            image={hover}
            ratio="4:5"
            sizes={CARD_SIZES}
            decorative
            className="absolute inset-0 h-full opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
          />
        )}
        {badge && <Badge kind={badge} className="absolute left-3 top-3" />}
      </div>
      <div className="mt-3">
        <PieceNumber number={product.number} />
        <h3 className="mt-1 line-clamp-2 font-display text-product text-ink">
          <Link
            to={`/product/${product.slug}`}
            className="group-hover:name-underline after:absolute after:inset-0"
          >
            {product.name}
          </Link>
        </h3>
        <Price className="mt-2" amount={price.amount} compareAt={price.compareAt} from={price.from} />
      </div>
    </article>
  );
}
