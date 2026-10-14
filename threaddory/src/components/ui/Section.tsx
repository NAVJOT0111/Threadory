import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type Surface = 'petal' | 'wine' | 'tomato' | 'butter' | 'ink';

const SURFACE_CLASS: Record<Surface, string> = {
  petal: 'bg-petal text-ink',
  wine: 'bg-wine text-petal',
  tomato: 'bg-tomato text-petal',
  butter: 'bg-butter text-ink',
  ink: 'bg-ink text-petal',
};

interface SectionProps {
  surface: Surface;
  as?: ElementType;
  /** Adds a 1px Ink rule on top, used between two Petal sections. */
  bordered?: boolean;
  /** Set false when the section controls its own vertical padding. */
  padded?: boolean;
  className?: string;
  children: ReactNode;
  'aria-labelledby'?: string;
  'aria-label'?: string;
  id?: string;
}

export function Section({
  surface,
  as: Tag = 'section',
  bordered = false,
  padded = true,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      data-surface={surface}
      className={cn(
        SURFACE_CLASS[surface],
        padded && 'py-section',
        bordered && 'border-t-structure border-ink',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
