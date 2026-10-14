import { Link } from 'react-router';
import { cn } from '@/lib/cn';

interface WordmarkProps {
  className?: string;
  onClick?: () => void;
}

/** "Threaddory" in Bodoni italic with a 1.5px Tomato running stitch 2px beneath. */
export function Wordmark({ className, onClick }: WordmarkProps) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Threaddory, home"
      className={cn('inline-flex flex-col items-stretch', className)}
    >
      <span className="font-display text-wordmark italic">Threaddory</span>
      <span aria-hidden="true" className="stitch-rule stitch-fine stitch-tomato mt-0.5 w-full" />
    </Link>
  );
}
