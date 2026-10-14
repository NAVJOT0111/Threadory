import { makeImage } from '@/lib/images';
import type { SiteContent } from '@/types/content';

/** Sample copy from the brief. Replace with final copy before launch. */
export const siteContent: SiteContent = {
  announcement: 'Handwritten gift notes with every order.',
  hero: {
    eyebrow: 'New: cherry tulips',
    headlineBefore: 'Flowers that never',
    headlineItalic: 'wilt.',
    headlineAfter: '',
    subline: 'Hand-crocheted bouquets, keepsakes and gift sets, made one stitch at a time.',
    primaryCta: { label: 'Shop bouquets', to: '/shop/bouquets' },
    secondaryCta: { label: 'Build a gift set', to: '/shop/gift-sets' },
    stamp: 'Made by hand',
    image: makeImage({
      id: 'hero',
      alt: 'No. 001 Cherry Tulip Bouquet: five red crochet tulips on a butter backdrop, held in one hand.',
      backdrop: 'butter',
      ratio: '4:5',
      label: 'Hero 4:5',
      focal: { x: 0.5, y: 0.7 },
    }),
  },
  runningBand: ['Bouquets', 'Single flowers', 'Vases', 'Keychains', 'Mini gifts', 'Gift sets'],
  giftFeature: {
    label: 'The gift edit',
    headline: 'Give something they will keep.',
    steps: ['Pick a bouquet.', 'Add a keepsake.', 'We wrap it and add your note.'],
    cta: { label: 'Build a gift set', to: '/shop/gift-sets' },
    image: makeImage({
      id: 'gift-feature',
      alt: 'No. 012 Birthday Gift Set: crochet bouquet and keychain in a wrapped box on a wine backdrop.',
      backdrop: 'wine',
      ratio: '4:5',
      label: 'Gift set 4:5',
      focal: { x: 0.5, y: 0.55 },
    }),
  },
  lookbook: [
    {
      caption: 'No. 001 Cherry Tulip Bouquet',
      productSlug: 'cherry-tulip-bouquet',
      image: makeImage({ id: 'look-1', alt: 'No. 001 Cherry Tulip Bouquet: red crochet tulips held in a hand against a wine backdrop.', backdrop: 'wine', ratio: '3:4', label: 'Lookbook 3:4' }),
    },
    {
      caption: 'No. 003 Butter Daisy Bouquet',
      productSlug: 'butter-daisy-bouquet',
      image: makeImage({ id: 'look-2', alt: 'No. 003 Butter Daisy Bouquet: butter and cream crochet daisies on a tomato backdrop.', backdrop: 'tomato', ratio: '1:1', label: 'Lookbook 1:1' }),
    },
    {
      caption: 'No. 009 Cherry Keychain',
      productSlug: 'cherry-keychain',
      image: makeImage({ id: 'look-3', alt: 'No. 009 Cherry Keychain: crochet cherries on a clasp, held against a butter backdrop.', backdrop: 'butter', ratio: '3:4', label: 'Lookbook 3:4' }),
    },
  ],
  process: {
    heading: 'Made by hand, stitch by stitch.',
    steps: [
      {
        numeral: '01',
        title: 'Chosen yarn',
        text: 'Mercerised cotton in dyed-to-match shades, so reds stay red from the first stem to the last.',
        image: makeImage({ id: 'process-1', alt: 'Macro of mercerised cotton yarn stitches in cherry red.', backdrop: 'plaster', ratio: '1:1', label: 'Macro 1:1' }),
      },
      {
        numeral: '02',
        title: 'Counted hours',
        text: 'Every piece is worked and numbered by one maker. A bouquet takes between eleven and twenty hours.',
        image: makeImage({ id: 'process-2', alt: 'Macro of tight single-crochet petal stitches in petal pink.', backdrop: 'plaster', ratio: '1:1', label: 'Macro 1:1' }),
      },
      {
        numeral: '03',
        title: 'Wrapped to keep',
        text: 'Cream paper, a numbered hangtag and, if you like, a handwritten note.',
        image: makeImage({ id: 'process-3', alt: 'Macro of a numbered hangtag tied with cream thread.', backdrop: 'plaster', ratio: '1:1', label: 'Macro 1:1' }),
      },
    ],
  },
  reviewsHeading: 'Kept, and kept talking about.',
  headings: {
    shopByPiece: 'Shop by piece',
    bestsellers: 'Bestsellers',
    occasions: 'Shop by occasion',
    lookbook: 'Lookbook',
  },
  navigation: [
    { label: 'Gift sets', to: '/shop/gift-sets' },
    { label: 'Occasions', to: '/shop?occasion=birthday' },
    { label: 'About', to: '/about' },
  ],
  shopMenuTiles: [
    {
      label: 'New in',
      to: '/shop?sort=newest',
      image: makeImage({ id: 'menu-new', alt: 'New in: butter daisy crochet bouquet on a butter backdrop.', backdrop: 'butter', ratio: '4:5', label: 'New in 4:5' }),
    },
    {
      label: 'Gift sets',
      to: '/shop/gift-sets',
      image: makeImage({ id: 'menu-gift', alt: 'Gift sets: wrapped crochet gift set on a wine backdrop.', backdrop: 'wine', ratio: '4:5', label: 'Gift sets 4:5' }),
    },
  ],
  popularSearches: ['Tulip', 'Bouquet', 'Keychain', 'Gift set', 'Vase'],
  newsletter: {
    label: 'Join the thread',
    headline: 'First look at every new stem',
    placeholder: 'you@example.com',
    cta: 'Subscribe',
    success: 'Thank you. You are on the thread.',
  },
  brandStatement: 'Threaddory is the label for things you hold on to. Hand-crocheted flowers and gifts, made in small numbers.',
  socialLinks: [
    { label: 'Instagram', to: '/about' },
    { label: 'Pinterest', to: '/about' },
  ],
  footerColumns: [
    {
      heading: 'Shop',
      links: [
        { label: 'Bouquets', to: '/shop/bouquets' },
        { label: 'Single flowers', to: '/shop/single-flowers' },
        { label: 'Vases', to: '/shop/vases' },
        { label: 'Keychains', to: '/shop/keychains' },
        { label: 'Mini gifts', to: '/shop/mini-gifts' },
        { label: 'Gift sets', to: '/shop/gift-sets' },
      ],
    },
    {
      heading: 'Help',
      links: [
        { label: 'Shipping', to: '/help/shipping' },
        { label: 'Returns', to: '/help/returns' },
        { label: 'Care guide', to: '/help/care-guide' },
        { label: 'Contact', to: '/help/contact' },
      ],
    },
    {
      heading: 'About',
      links: [
        { label: 'Our process', to: '/about' },
        { label: 'Journal', to: '/help/journal' },
      ],
    },
  ],
  legalLinks: [
    { label: 'Privacy', to: '/help/privacy' },
    { label: 'Terms', to: '/help/terms' },
  ],
  emptyStateImage: makeImage({
    id: 'empty-state',
    alt: '',
    backdrop: 'wine',
    ratio: '3:4',
    label: 'Arch 3:4',
  }),
  stubCopy: {
    about:
      'Threaddory is a small crochet label. Every piece is worked by hand, numbered in the order it was made, and wrapped to keep. This page is a placeholder for the full story.',
    help: 'This help page is a placeholder. The final policy and care details will be written here before launch.',
    shop: 'The shop opens in the next milestone. For now, the homepage shows the brand, the categories and the bestsellers.',
  },
};
