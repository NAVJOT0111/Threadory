import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

interface TextLinkProps {
  to: string;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function TextLink({ to, arrow = true, className, children }: TextLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex items-center gap-2 font-sans text-control uppercase link-underline',
        'transition-colors duration-150 ease-out hover:text-wine',
        className,
      )}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          strokeWidth={1.5}
          strokeLinecap="butt"
          className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
