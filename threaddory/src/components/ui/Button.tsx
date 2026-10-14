import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';
import { cn } from '@/lib/cn';
import { RunningStitch } from './RunningStitch';

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'inverse-secondary';
export type ButtonSize = 'lg' | 'md' | 'sm';

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'border-wine bg-wine text-petal hover:border-ink hover:bg-ink',
  secondary: 'border-ink bg-transparent text-ink hover:bg-ink hover:text-petal',
  inverse: 'border-butter bg-butter text-ink hover:border-petal hover:bg-petal',
  'inverse-secondary': 'border-petal bg-transparent text-petal hover:bg-petal hover:text-wine',
};

const SIZE_CLASS: Record<ButtonSize, string> = {
  lg: 'h-14 min-w-40 px-7',
  md: 'h-13 min-w-40 px-7',
  sm: 'h-11 px-5',
};

interface StyleOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

function buttonClasses({ variant = 'primary', size = 'md', fullWidth = false, className }: StyleOptions): string {
  return cn(
    'inline-flex items-center justify-center whitespace-nowrap border-control font-sans text-control uppercase',
    'transition-colors duration-150 ease-out active:translate-y-px',
    'disabled:cursor-default disabled:border-hairline disabled:bg-hairline disabled:text-ink-muted',
    VARIANT_CLASS[variant],
    SIZE_CLASS[size],
    fullWidth && 'w-full',
    className,
  );
}

interface ButtonProps extends StyleOptions, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  loading?: boolean;
  children: ReactNode;
}

export function Button({ variant, size, fullWidth, className, loading = false, children, type = 'button', ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, fullWidth, className })}
      aria-busy={loading || undefined}
      {...rest}
    >
      {loading ? <RunningStitch className="w-12" /> : children}
    </button>
  );
}

interface ButtonLinkProps extends StyleOptions {
  to: string;
  children: ReactNode;
  onClick?: () => void;
}

export function ButtonLink({ variant, size, fullWidth, className, to, children, onClick }: ButtonLinkProps) {
  return (
    <Link to={to} onClick={onClick} className={buttonClasses({ variant, size, fullWidth, className })}>
      {children}
    </Link>
  );
}
