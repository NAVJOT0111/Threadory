import type { ImageAsset } from '@/types/product';
import type { Ratio } from '@/lib/images';
import { cn } from '@/lib/cn';
import { ProductImage } from './ProductImage';

interface ArchImageProps {
  image: ImageAsset;
  ratio: Ratio;
  sizes: string;
  priority?: boolean;
  /** The arch masks are decorative framing; alt text stays on the image unless hidden. */
  decorative?: boolean;
  className?: string;
}

/** Image with a full semicircular top and square bottom corners. Never narrower than 140px. */
export function ArchImage({ image, ratio, sizes, priority, decorative, className }: ArchImageProps) {
  return (
    <div className={cn('arch min-w-35', className)}>
      <ProductImage image={image} ratio={ratio} sizes={sizes} priority={priority} decorative={decorative} />
    </div>
  );
}
