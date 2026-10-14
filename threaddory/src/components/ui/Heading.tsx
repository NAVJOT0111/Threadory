import { createElement, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export type HeadingSize = 'display-xl' | 'display-l' | 'h2' | 'h3' | 'product' | 'index';

const SIZE_CLASS: Record<HeadingSize, string> = {
  'display-xl': 'text-display-xl',
  'display-l': 'text-display-l',
  h2: 'text-h2',
  h3: 'text-h3',
  product: 'text-product',
  index: 'text-index',
};

interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  size: HeadingSize;
  children: string;
  /** One italic word at most, H3 size or larger. */
  italicWord?: string;
  /** Colour the italic word Wine. Only valid on Petal surfaces. */
  accent?: boolean;
  id?: string;
  tabIndex?: number;
  className?: string;
  trailing?: ReactNode;
}

/** Renders the semantic level independently of the visual size. */
export function Heading({ level, size, children, italicWord, accent = false, className, ...rest }: HeadingProps) {
  let content: ReactNode = children;
  if (italicWord && children.includes(italicWord)) {
    const [before, ...after] = children.split(italicWord);
    content = (
      <>
        {before}
        <em className={cn('italic', accent && 'text-wine')}>{italicWord}</em>
        {after.join(italicWord)}
      </>
    );
  }
  return createElement(
    `h${level}`,
    { className: cn('font-display', SIZE_CLASS[size], className), ...rest },
    content,
  );
}
