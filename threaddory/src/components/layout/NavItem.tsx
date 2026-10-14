import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import { cn } from '@/lib/cn';

/** Shared nav label styling: hover shows a 2px running stitch 6px below, current page a solid 2px underline. */
export const NAV_LABEL_CLASS = cn(
  'relative inline-block font-sans text-control uppercase',
  'after:absolute after:inset-x-0 after:top-full after:mt-1.5 after:h-0.5 after:opacity-0 after:stitch-rule',
  'after:text-ink hover:after:opacity-100 focus-visible:after:opacity-100',
);

interface NavItemProps {
  to: string;
  onClick?: () => void;
  children: ReactNode;
}

export function NavItem({ to, onClick, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      end
      className="inline-flex h-11 items-center"
    >
      {({ isActive }) => (
        <span className={cn(NAV_LABEL_CLASS, isActive && 'after:bg-ink after:bg-none after:opacity-100')}>
          {children}
        </span>
      )}
    </NavLink>
  );
}
