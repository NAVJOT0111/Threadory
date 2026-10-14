import { cn } from '@/lib/cn';

interface RunningStitchProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

/** Decorative running stitch. Colour comes from --stitch-color (set by Section) or a text colour class. */
export function RunningStitch({ orientation = 'horizontal', className }: RunningStitchProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(orientation === 'horizontal' ? 'stitch-rule w-full' : 'stitch-rule-v h-full', className)}
    />
  );
}
