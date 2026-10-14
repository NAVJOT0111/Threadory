import { cn } from '@/lib/cn';

interface StampProps {
  children: string;
  className?: string;
}

/** Round Butter stamp. One of the three permitted rounded shapes. */
export function Stamp({ children, className }: StampProps) {
  return (
    <div
      className={cn(
        'round flex size-22 items-center justify-center bg-butter p-3 text-center font-sans text-label uppercase text-ink desk:size-28',
        className,
      )}
    >
      {children}
    </div>
  );
}
