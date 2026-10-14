import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface LabelProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** 12px uppercase tracked label. Keep to three words or fewer. */
export function Label({ as: Tag = 'span', className, children }: LabelProps) {
  return <Tag className={cn('font-sans text-label uppercase', className)}>{children}</Tag>;
}
