import type { Backdrop, CategorySlug, ImageAsset, OccasionSlug } from './product';

export interface Category {
  slug: CategorySlug;
  name: string;
  number: string;
  backdrop: Backdrop;
  image: ImageAsset;
  blurb: string;
}

export interface Occasion {
  slug: OccasionSlug;
  name: string;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  productId: string;
  verified: boolean;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface LookbookEntry {
  image: ImageAsset;
  caption: string;
  productSlug: string;
}

export interface ProcessStep {
  numeral: string;
  title: string;
  text: string;
  image: ImageAsset;
}

export interface SiteContent {
  announcement: string;
  hero: {
    eyebrow: string;
    headlineBefore: string;
    headlineItalic: string;
    headlineAfter: string;
    subline: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
    stamp: string;
    image: ImageAsset;
  };
  runningBand: string[];
  giftFeature: {
    label: string;
    headline: string;
    steps: string[];
    cta: NavLink;
    image: ImageAsset;
  };
  lookbook: LookbookEntry[];
  process: { heading: string; steps: ProcessStep[] };
  reviewsHeading: string;
  headings: { shopByPiece: string; bestsellers: string; occasions: string; lookbook: string };
  navigation: NavLink[];
  shopMenuTiles: { label: string; to: string; image: ImageAsset }[];
  popularSearches: string[];
  newsletter: { label: string; headline: string; placeholder: string; cta: string; success: string };
  brandStatement: string;
  socialLinks: NavLink[];
  footerColumns: { heading: string; links: NavLink[] }[];
  legalLinks: NavLink[];
  emptyStateImage: ImageAsset;
  stubCopy: { about: string; help: string; shop: string };
}
