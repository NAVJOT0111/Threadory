import type { ImageAsset } from '@/types/product';
import type { Ratio } from '@/lib/images';
import { cn } from '@/lib/cn';

const RATIO_CLASS: Record<Ratio, string> = {
  '4:5': 'aspect-4/5',
  '3:4': 'aspect-3/4',
  '1:1': 'aspect-square',
  '21:9': 'aspect-21/9',
};

interface ProductImageProps {
  image: ImageAsset;
  ratio: Ratio;
  sizes: string;
  /** Hero and first product row only. Everything else lazy-loads. */
  priority?: boolean;
  /** Decorative images get an empty alt. */
  decorative?: boolean;
  className?: string;
}

/** Reserves space with Plaster and explicit dimensions so nothing jumps. */
export function ProductImage({ image, ratio, sizes, priority = false, decorative = false, className }: ProductImageProps) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={decorative ? '' : image.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      style={image.focal ? { objectPosition: `${image.focal.x * 100}% ${image.focal.y * 100}%` } : undefined}
      className={cn('block w-full bg-plaster object-cover', RATIO_CLASS[ratio], className)}
    />
  );
}
