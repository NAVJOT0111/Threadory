import type { ComponentProps } from 'react';
import { cn } from '@/lib/cn';

interface IconButtonProps extends Omit<ComponentProps<'button'>, 'aria-label'> {
  label: string;
}

/** 44 by 44px square icon button. React 19 passes `ref` as a normal prop. */
export function IconButton({ label, className, children, type = 'button', ...rest }: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        'inline-flex size-11 shrink-0 items-center justify-center bg-transparent',
        'transition-colors duration-150 ease-out hover:bg-ink hover:text-petal',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
