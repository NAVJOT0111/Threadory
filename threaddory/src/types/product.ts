export type CategorySlug =
  | 'bouquets'
  | 'single-flowers'
  | 'vases'
  | 'keychains'
  | 'mini-gifts'
  | 'gift-sets';

export type OccasionSlug = 'birthday' | 'anniversary' | 'thank-you' | 'just-because' | 'graduation';

export type Backdrop = 'plaster' | 'wine' | 'butter' | 'tomato';

export type ImageKind = 'front' | 'angle' | 'macro' | 'held' | 'gift';

export interface ImageAsset {
  id: string;
  src: string;
  srcSet?: string;
  width: number;
  height: number;
  alt: string;
  focal?: { x: number; y: number };
  backdrop: Backdrop;
  kind?: ImageKind;
}

export interface OptionValue {
  id: string;
  label: string;
  hex?: string;
}

export interface OptionGroup {
  id: 'colour' | 'size' | 'stems';
  label: string;
  values: OptionValue[];
}

export interface Variant {
  id: string;
  sku: string;
  options: Partial<Record<OptionGroup['id'], string>>;
  price: number;
  compareAtPrice?: number;
  stock: number;
  imageId?: string;
}

export interface Product {
  id: string;
  slug: string;
  number: number;
  name: string;
  category: CategorySlug;
  occasions: OccasionSlug[];
  shortDescription: string;
  description: string[];
  optionGroups: OptionGroup[];
  variants: Variant[];
  images: ImageAsset[];
  details: { yarn: string; sizeCm: string; stems?: number; hoursToMake: number; care: string };
  flags: {
    isNew?: boolean;
    bestseller?: boolean;
    giftReady?: boolean;
    madeToOrder?: boolean;
    featured?: boolean;
  };
  relatedIds?: string[];
  createdAt: string;
}

export type BadgeKind =
  | 'sold-out'
  | 'sale'
  | 'low-stock'
  | 'new'
  | 'bestseller'
  | 'gift-ready'
  | 'made-to-order';
