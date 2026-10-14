import { formatPieceNumber } from '@/lib/format';
import { cn } from '@/lib/cn';
import { Label } from './Label';

interface PieceNumberProps {
  number: number;
  className?: string;
}

export function PieceNumber({ number, className }: PieceNumberProps) {
  return <Label className={cn('text-ink-muted', className)}>{formatPieceNumber(number)}</Label>;
}
