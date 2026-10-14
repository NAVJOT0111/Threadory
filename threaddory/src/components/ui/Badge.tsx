import type { BadgeKind } from '@/types/product';
import { cn } from '@/lib/cn';

const BADGES: Record<BadgeKind, { label: string; className: string }> = {
  'sold-out': { label: 'Sold out', className: 'bg-ink text-petal' },
  sale: { label: 'Sale', className: 'bg-tomato-deep text-petal' },
  'low-stock': { label: 'Low stock', className: 'bg-wine text-petal' },
  new: { label: 'New', className: 'bg-butter text-ink' },
  bestseller: { label: 'Bestseller', className: 'bg-ink text-petal' },
  'gift-ready': { label: 'Gift-ready', className: 'border-control border-ink bg-petal text-ink' },
  'made-to-order': { label: 'Made to order', className: 'border-structure border-ink bg-plaster text-ink' },
};

export function Badge({ kind, className }: { kind: BadgeKind; className?: string }) {
  const badge = BADGES[kind];
  return (
    <span
      className={cn(
        'inline-flex h-6 items-center px-2.5 font-sans text-label uppercase tab:h-7',
        badge.className,
        className,
      )}
    >
      {badge.label}
    </span>
  );
}
