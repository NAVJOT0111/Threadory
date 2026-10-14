import { formatPrice } from '@/lib/format';
import { cn } from '@/lib/cn';

interface PriceProps {
  amount: number;
  compareAt?: number;
  from?: boolean;
  className?: string;
}

export function Price({ amount, compareAt, from = false, className }: PriceProps) {
  if (compareAt !== undefined) {
    return (
      <p className={cn('tabular font-sans text-price', className)}>
        <span className="sr-only">Sale price </span>
        <span className="font-semibold text-tomato-deep">{formatPrice(amount)}</span>
        <span className="sr-only"> Original price </span>
        <s className="ml-2 text-ink-muted">{formatPrice(compareAt)}</s>
      </p>
    );
  }
  return (
    <p className={cn('tabular font-sans text-price text-ink', className)}>
      {from ? `From ${formatPrice(amount)}` : formatPrice(amount)}
    </p>
  );
}
