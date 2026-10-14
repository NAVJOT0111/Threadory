import type { Review } from '@/types/content';

/**
 * PLACEHOLDER REVIEWS. These are sample text to exercise the layout and must be
 * replaced with real customer reviews before launch (brief, open items).
 */
export const reviews: Review[] = [
  {
    id: 'r1',
    quote: 'Placeholder review: the tulips arrived wrapped like a present and the colour matched the photos.',
    author: 'Sample reviewer',
    productId: '001',
    verified: true,
  },
  {
    id: 'r2',
    quote: 'Placeholder review: the stitching is tight, the stems stand up, and the note was handwritten.',
    author: 'Sample reviewer',
    productId: '012',
    verified: true,
  },
  {
    id: 'r3',
    quote: 'Placeholder review: small, sturdy and exactly the right red. It lives on my keys now.',
    author: 'Sample reviewer',
    productId: '009',
    verified: true,
  },
];
