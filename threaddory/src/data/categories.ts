import { makeImage } from '@/lib/images';
import type { Category } from '@/types/content';
import type { Backdrop, CategorySlug } from '@/types/product';

const ROTATION: Backdrop[] = ['wine', 'butter', 'tomato'];

function category(i: number, slug: CategorySlug, name: string, blurb: string, imageAlt: string): Category {
  const backdrop = ROTATION[i % ROTATION.length];
  const number = String(i + 1).padStart(2, '0');
  return {
    slug,
    name,
    number,
    backdrop,
    blurb,
    image: makeImage({
      id: `category-${slug}`,
      alt: imageAlt,
      backdrop,
      ratio: '3:4',
      label: `${number} ${name}`,
      focal: { x: 0.5, y: 0.65 },
    }),
  };
}

export const categories: Category[] = [
  category(0, 'bouquets', 'Bouquets', 'Hand-crocheted bunches that keep their colour.', 'Bouquets: red crochet tulips held against a plain backdrop.'),
  category(1, 'single-flowers', 'Single flowers', 'One stem, any colour.', 'Single flowers: one crochet tulip on a wired stem.'),
  category(2, 'vases', 'Vases', 'Glass with a crocheted collar.', 'Vases: a clear glass vase with a crochet petal collar.'),
  category(3, 'keychains', 'Keychains', 'Small enough to carry everywhere.', 'Keychains: a pair of crochet cherries on a metal clasp.'),
  category(4, 'mini-gifts', 'Mini gifts', 'Boxed, tagged and ready to give.', 'Mini gifts: a small box with crochet flowers and a tag.'),
  category(5, 'gift-sets', 'Gift sets', 'A bouquet and a keepsake, wrapped.', 'Gift sets: a boxed crochet bouquet with a numbered tag.'),
];
