import { makeImage } from '@/lib/images';
import type {
  Backdrop,
  CategorySlug,
  ImageAsset,
  ImageKind,
  OccasionSlug,
  OptionGroup,
  Product,
  Variant,
} from '@/types/product';

const CAMPAIGN: Backdrop[] = ['wine', 'butter', 'tomato'];

const KIND_CONTEXT: Record<ImageKind, string> = {
  front: 'front view on plaster',
  angle: 'three-quarter angle',
  macro: 'close-up of the stitch texture',
  held: 'held in one hand for scale',
  gift: 'in gift wrapping with its numbered tag',
};

function pad(n: number): string {
  return String(n).padStart(3, '0');
}

function buildImages(number: number, name: string, type: string, rotate: number): ImageAsset[] {
  const kinds: ImageKind[] = ['front', 'angle', 'macro', 'held', 'gift'];
  return kinds.map((kind, i) => {
    const backdrop: Backdrop = i < 3 ? 'plaster' : CAMPAIGN[(rotate + i) % CAMPAIGN.length];
    const alt = `No. ${pad(number)} ${name}: ${type}, ${KIND_CONTEXT[kind]}.`.slice(0, 125);
    return makeImage({
      id: `${pad(number)}-${kind}`,
      alt,
      kind,
      backdrop,
      ratio: '4:5',
      label: `No. ${pad(number)} ${kind}`,
      focal: { x: 0.5, y: 0.5 },
    });
  });
}

interface Spec {
  number: number;
  slug: string;
  name: string;
  type: string;
  category: CategorySlug;
  occasions: OccasionSlug[];
  short: string;
  description: [string, string];
  optionGroups?: OptionGroup[];
  variants: { options?: Variant['options']; price: number; compareAt?: number; stock?: number }[];
  details: Product['details'];
  flags?: Product['flags'];
  related?: string[];
  createdAt: string;
}

function build(s: Spec): Product {
  const id = pad(s.number);
  return {
    id,
    slug: s.slug,
    number: s.number,
    name: s.name,
    category: s.category,
    occasions: s.occasions,
    shortDescription: s.short,
    description: s.description,
    optionGroups: s.optionGroups ?? [],
    variants: s.variants.map((v, i) => ({
      id: `${id}-v${i + 1}`,
      sku: `TD-${id}-${i + 1}`,
      options: v.options ?? {},
      price: v.price,
      compareAtPrice: v.compareAt,
      stock: v.stock ?? 10,
    })),
    images: buildImages(s.number, s.name, s.type, s.number),
    details: s.details,
    flags: s.flags ?? {},
    relatedIds: s.related,
    createdAt: s.createdAt,
  };
}

const colour = (values: [string, string, string?][]): OptionGroup => ({
  id: 'colour',
  label: 'Colour',
  values: values.map(([label, hex, id]) => ({ id: id ?? label.toLowerCase().replace(/\s+/g, '-'), label, hex })),
});

export const products: Product[] = [
  build({
    number: 1,
    slug: 'cherry-tulip-bouquet',
    name: 'Cherry Tulip Bouquet',
    type: 'five red crochet tulips wrapped in cream paper',
    category: 'bouquets',
    occasions: ['birthday', 'anniversary', 'just-because'],
    short: 'Five hand-crocheted tulips that keep their colour long after the vase would have given up.',
    description: [
      'Each stem is worked in mercerised cotton, one tulip at a time, with a wire core so the head tilts just so. The cherry shade is a deep, saturated red that photographs the way it looks in a room.',
      'It arrives wrapped in cream paper with a numbered hangtag. Keep it in a vase, on a shelf, or hand it to someone you want to be remembered by.',
    ],
    optionGroups: [colour([['Cherry', '#B22A3A'], ['Petal pink', '#F1B8C4'], ['Butter', '#EBCB75']])],
    variants: [
      { options: { colour: 'cherry' }, price: 2299 },
      { options: { colour: 'petal-pink' }, price: 2299 },
      { options: { colour: 'butter' }, price: 2299 },
    ],
    details: { yarn: 'Mercerised cotton, 4-ply', sizeCm: '38 cm tall', stems: 5, hoursToMake: 14, care: 'Dust with a soft brush. Spot clean with a damp cloth.' },
    flags: { bestseller: true, giftReady: true },
    related: ['002', '003', '005', '007'],
    createdAt: '2026-03-12',
  }),
  build({
    number: 2,
    slug: 'poppy-field-bouquet',
    name: 'Poppy Field Bouquet',
    type: 'crochet poppies in red and ink with wrapped stems',
    category: 'bouquets',
    occasions: ['birthday', 'thank-you'],
    short: 'A loose bunch of poppies with dark centres, in five, nine or twelve stems.',
    description: [
      'Poppies are all about the dark centre, so each one is stitched with a tight black-cherry heart and a ruffled red skirt of petals. The stems are hand-wrapped and bend where you want them to.',
      'Choose a small posy or a full armful. Larger bunches are worked in the same dye lot so the reds stay matched.',
    ],
    optionGroups: [
      { id: 'stems', label: 'Stems', values: [{ id: '5', label: '5 stems' }, { id: '9', label: '9 stems' }, { id: '12', label: '12 stems' }] },
    ],
    variants: [
      { options: { stems: '5' }, price: 1899 },
      { options: { stems: '9' }, price: 2799 },
      { options: { stems: '12' }, price: 3599 },
    ],
    details: { yarn: 'Mercerised cotton, 4-ply', sizeCm: '35 cm tall', stems: 9, hoursToMake: 18, care: 'Dust with a soft brush. Keep out of direct sun.' },
    flags: { bestseller: true },
    related: ['001', '003', '006', '012'],
    createdAt: '2026-02-20',
  }),
  build({
    number: 3,
    slug: 'butter-daisy-bouquet',
    name: 'Butter Daisy Bouquet',
    type: 'butter and cream crochet daisies tied with twine',
    category: 'bouquets',
    occasions: ['just-because', 'graduation'],
    short: 'Butter-yellow daisies with cream petals, tied by hand.',
    description: [
      'Small, round and cheerful, these daisies are worked flat and shaped with a firm centre. The butter shade is bright enough to hold up against any wall colour.',
      'A good first bouquet, and a good graduation one too.',
    ],
    optionGroups: [colour([['Butter', '#EBCB75'], ['Cream', '#F4ECDD']])],
    variants: [
      { options: { colour: 'butter' }, price: 1499 },
      { options: { colour: 'cream' }, price: 1499 },
    ],
    details: { yarn: 'Mercerised cotton, 4-ply', sizeCm: '30 cm tall', stems: 7, hoursToMake: 11, care: 'Dust with a soft brush. Spot clean only.' },
    flags: { isNew: true },
    related: ['001', '002', '010', '005'],
    createdAt: '2026-10-02',
  }),
  build({
    number: 4,
    slug: 'wine-rose-bouquet',
    name: 'Wine Rose Bouquet',
    type: 'deep wine crochet roses in cream wrapping paper',
    category: 'bouquets',
    occasions: ['anniversary'],
    short: 'Deep wine roses, made to order and wrapped for giving.',
    description: [
      'Each rose is coiled from a single length of yarn, then stitched closed so it holds its shape. The wine shade is the brand colour, dyed to match.',
      'Made to order, so it takes a few extra days. We think that is part of the gift.',
    ],
    variants: [{ price: 2499 }],
    details: { yarn: 'Mercerised cotton, 4-ply', sizeCm: '36 cm tall', stems: 6, hoursToMake: 20, care: 'Dust with a soft brush. Keep out of direct sun.' },
    flags: { madeToOrder: true, giftReady: true },
    related: ['001', '014', '011', '007'],
    createdAt: '2026-01-18',
  }),
  build({
    number: 5,
    slug: 'single-cherry-tulip',
    name: 'Single Cherry Tulip',
    type: 'one red crochet tulip on a wired stem',
    category: 'single-flowers',
    occasions: ['just-because', 'thank-you'],
    short: 'One tulip on a wired stem, in four colours.',
    description: [
      'The smallest way to say it. One tulip, a bendable wire stem, and enough weight to stand in a bottle.',
      'Buy a few in different colours and make your own bunch.',
    ],
    optionGroups: [colour([['Cherry', '#B22A3A'], ['Petal pink', '#F1B8C4'], ['Butter', '#EBCB75'], ['Cream', '#F4ECDD']])],
    variants: [
      { options: { colour: 'cherry' }, price: 349 },
      { options: { colour: 'petal-pink' }, price: 349 },
      { options: { colour: 'butter' }, price: 349 },
      { options: { colour: 'cream' }, price: 349 },
    ],
    details: { yarn: 'Mercerised cotton, 4-ply', sizeCm: '34 cm tall', stems: 1, hoursToMake: 3, care: 'Dust with a soft brush.' },
    related: ['001', '006', '007', '009'],
    createdAt: '2026-03-12',
  }),
  build({
    number: 6,
    slug: 'tomato-poppy-stem',
    name: 'Tomato Poppy Stem',
    type: 'one bright red crochet poppy on a wired stem',
    category: 'single-flowers',
    occasions: ['birthday'],
    short: 'A single bright poppy, currently on sale.',
    description: [
      'A tomato-red poppy with a dark centre and a ruffled skirt. It bends, it stands, it does not drop petals.',
      'A small gift with a lot of colour in it.',
    ],
    variants: [{ price: 249, compareAt: 329 }],
    details: { yarn: 'Mercerised cotton, 4-ply', sizeCm: '32 cm tall', stems: 1, hoursToMake: 3, care: 'Dust with a soft brush.' },
    related: ['002', '005', '009', '010'],
    createdAt: '2026-02-20',
  }),
  build({
    number: 7,
    slug: 'petal-glass-vase',
    name: 'Petal Glass Vase',
    type: 'clear glass vase with a crochet petal collar',
    category: 'vases',
    occasions: ['birthday', 'thank-you'],
    short: 'A clear glass vase with a hand-crocheted petal collar.',
    description: [
      'The glass is plain on purpose, so the petal collar does the talking. It keeps stems upright and adds a soft edge to a hard surface.',
      'Pairs well with any bouquet from the shop. Very few left in each size.',
    ],
    optionGroups: [
      { id: 'size', label: 'Size', values: [{ id: 'small', label: 'Small' }, { id: 'large', label: 'Large' }] },
    ],
    variants: [
      { options: { size: 'small' }, price: 1099, stock: 2 },
      { options: { size: 'large' }, price: 1399, stock: 1 },
    ],
    details: { yarn: 'Mercerised cotton, 4-ply', sizeCm: '16 cm or 22 cm tall', hoursToMake: 6, care: 'Remove the collar before washing the glass. Hand wash only.' },
    related: ['001', '008', '011', '004'],
    createdAt: '2026-04-05',
  }),
  build({
    number: 8,
    slug: 'arch-vase',
    name: 'Arch Vase',
    type: 'arch-shaped glass vase with a crochet band',
    category: 'vases',
    occasions: ['just-because'],
    short: 'An arch-shaped vase wrapped in a crocheted band. Sold out for now.',
    description: [
      'The silhouette is the shop window arch, in glass, with a stitched band around the base. It holds a small bunch or one very good stem.',
      'This one is sold out. Join the list and we will tell you when it is back.',
    ],
    variants: [{ price: 1299, stock: 0 }],
    details: { yarn: 'Mercerised cotton, 4-ply', sizeCm: '20 cm tall', hoursToMake: 5, care: 'Remove the band before washing the glass.' },
    related: ['007', '001', '011', '004'],
    createdAt: '2026-04-05',
  }),
  build({
    number: 9,
    slug: 'cherry-keychain',
    name: 'Cherry Keychain',
    type: 'crochet cherry pair keychain with a metal clasp',
    category: 'keychains',
    occasions: ['birthday', 'graduation'],
    short: 'A pair of cherries on a metal clasp, small enough to carry everywhere.',
    description: [
      'Two cherries, one stem, a leaf. Stuffed firmly so they keep their shape in a bag.',
      'Small enough to tuck into a card, and the first thing people notice on a set of keys.',
    ],
    optionGroups: [colour([['Cherry', '#B22A3A'], ['Butter', '#EBCB75']])],
    variants: [
      { options: { colour: 'cherry' }, price: 449 },
      { options: { colour: 'butter' }, price: 449 },
    ],
    details: { yarn: 'Cotton, 3-ply', sizeCm: '9 cm long', hoursToMake: 2, care: 'Spot clean with a damp cloth.' },
    flags: { bestseller: true },
    related: ['010', '005', '006', '011'],
    createdAt: '2026-05-10',
  }),
  build({
    number: 10,
    slug: 'daisy-charm-keychain',
    name: 'Daisy Charm Keychain',
    type: 'small crochet daisy charm on a metal clasp',
    category: 'keychains',
    occasions: ['just-because'],
    short: 'A small daisy on a clasp, for keys or a bag strap.',
    description: [
      'One daisy, one clasp, no fuss. The petals are stitched flat and the centre is a tight butter-yellow knot.',
      'New this month.',
    ],
    variants: [{ price: 349 }],
    details: { yarn: 'Cotton, 3-ply', sizeCm: '7 cm long', hoursToMake: 1.5, care: 'Spot clean with a damp cloth.' },
    flags: { isNew: true },
    related: ['009', '003', '005', '011'],
    createdAt: '2026-09-28',
  }),
  build({
    number: 11,
    slug: 'posy-mini-gift',
    name: 'Posy Mini Gift',
    type: 'small crochet posy in a gift box with a tag',
    category: 'mini-gifts',
    occasions: ['thank-you', 'birthday'],
    short: 'A little posy in a gift box with a handwritten tag.',
    description: [
      'Three small flowers, a ribbon, and a box that does the wrapping for you. It is the easy answer to a thank-you.',
      'Add a handwritten note at the bag and we will write it ourselves.',
    ],
    variants: [{ price: 799 }],
    details: { yarn: 'Cotton, 3-ply', sizeCm: '14 cm tall', stems: 3, hoursToMake: 5, care: 'Dust with a soft brush.' },
    flags: { giftReady: true },
    related: ['013', '012', '009', '010'],
    createdAt: '2026-05-22',
  }),
  build({
    number: 12,
    slug: 'birthday-gift-set',
    name: 'Birthday Gift Set',
    type: 'crochet bouquet and keychain in a gift box',
    category: 'gift-sets',
    occasions: ['birthday'],
    short: 'A bouquet and a keepsake, wrapped and ready, with your note.',
    description: [
      'The set we make most. A bouquet, a keychain, wrapping paper, a numbered tag and a space for your handwritten note.',
      'You choose the bouquet and the keepsake. We do the wrapping.',
    ],
    variants: [{ price: 3299 }],
    details: { yarn: 'Mercerised cotton, 4-ply', sizeCm: 'Box 30 x 24 x 12 cm', hoursToMake: 22, care: 'Dust with a soft brush. Keep dry.' },
    flags: { bestseller: true, giftReady: true, featured: true },
    related: ['014', '013', '011', '001'],
    createdAt: '2026-03-01',
  }),
  build({
    number: 13,
    slug: 'thank-you-mini-box',
    name: 'Thank-You Mini Box',
    type: 'small gift box with crochet flowers and a thank-you tag',
    category: 'mini-gifts',
    occasions: ['thank-you'],
    short: 'A small box of crochet flowers for saying thank you properly.',
    description: [
      'A compact box with a few stems, a keepsake and a tag. Enough to say it, small enough to post.',
      'Add a handwritten note and it arrives ready to give.',
    ],
    variants: [{ price: 999 }],
    details: { yarn: 'Cotton, 3-ply', sizeCm: 'Box 18 x 14 x 8 cm', hoursToMake: 7, care: 'Dust with a soft brush.' },
    flags: { giftReady: true },
    related: ['011', '012', '009', '005'],
    createdAt: '2026-05-22',
  }),
  build({
    number: 14,
    slug: 'anniversary-gift-set',
    name: 'Anniversary Gift Set',
    type: 'wine rose bouquet and keepsake in a gift box',
    category: 'gift-sets',
    occasions: ['anniversary'],
    short: 'Wine roses and a keepsake in a box, made to order.',
    description: [
      'Our deepest-red set. A rose bouquet, a keepsake, hand wrapping and a note in your own words.',
      'Made to order, so it takes a few extra days, and arrives with a numbered tag.',
    ],
    variants: [{ price: 3499 }],
    details: { yarn: 'Mercerised cotton, 4-ply', sizeCm: 'Box 32 x 26 x 12 cm', hoursToMake: 26, care: 'Dust with a soft brush. Keep dry.' },
    flags: { madeToOrder: true, giftReady: true },
    related: ['004', '012', '011', '013'],
    createdAt: '2026-01-18',
  }),
];
