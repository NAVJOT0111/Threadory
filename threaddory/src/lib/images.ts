import type { Backdrop, ImageAsset, ImageKind } from '@/types/product';

/**
 * Placeholder generator. Real photography replaces these by changing data only.
 * Hex values are allowed here because the output is a standalone SVG data URI
 * that cannot read CSS variables.
 */
const FILL: Record<Backdrop, { bg: string; fg: string }> = {
  plaster: { bg: '#EFDFD9', fg: '#302126' },
  wine: { bg: '#6F1937', fg: '#F7E9E5' },
  butter: { bg: '#EBCB75', fg: '#302126' },
  tomato: { bg: '#D74338', fg: '#F7E9E5' },
};

export type Ratio = '4:5' | '3:4' | '1:1' | '21:9';

const DIMENSIONS: Record<Ratio, [number, number]> = {
  '4:5': [1080, 1350],
  '3:4': [1080, 1440],
  '1:1': [1080, 1080],
  '21:9': [2100, 900],
};

interface PlaceholderOptions {
  backdrop: Backdrop;
  label: string;
  ratio: Ratio;
}

export function placeholder({ backdrop, label, ratio }: PlaceholderOptions): {
  src: string;
  width: number;
  height: number;
} {
  const [width, height] = DIMENSIONS[ratio];
  const { bg, fg } = FILL[backdrop];
  const safe = label.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">` +
    `<rect width="${width}" height="${height}" fill="${bg}"/>` +
    `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" ` +
    `font-family="Schibsted Grotesk Variable, system-ui, sans-serif" font-weight="600" ` +
    `font-size="${Math.round(width * 0.035)}" letter-spacing="${Math.round(width * 0.004)}" fill="${fg}">${safe.toUpperCase()}</text>` +
    `</svg>`;
  return { src: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`, width, height };
}

interface MakeImageOptions extends PlaceholderOptions {
  id: string;
  alt: string;
  kind?: ImageKind;
  focal?: { x: number; y: number };
}

export function makeImage({ id, alt, kind, focal, ...rest }: MakeImageOptions): ImageAsset {
  const { src, width, height } = placeholder(rest);
  return { id, src, width, height, alt, kind, focal, backdrop: rest.backdrop };
}
