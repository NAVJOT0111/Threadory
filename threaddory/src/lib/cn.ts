import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * tailwind-merge only knows Tailwind's default scale. Our type tokens
 * (text-control, text-label ...) and border utilities (border-control ...)
 * must be registered, otherwise they are mistaken for colours and silently
 * dropped when a colour class such as text-petal or border-ink follows.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'display-xl',
            'display-l',
            'h2',
            'h3',
            'product',
            'quote',
            'body-l',
            'body',
            'small',
            'label',
            'control',
            'price',
            'index',
            'band',
            'wordmark',
            'announce',
          ],
        },
      ],
      'border-w': ['border-control', 'border-structure'],
      'border-w-t': ['border-t-structure'],
      'border-w-b': ['border-b-structure', 'border-b-control'],
      'border-w-l': ['border-l-structure'],
    },
  },
});

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
