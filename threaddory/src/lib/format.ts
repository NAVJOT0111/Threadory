const inr = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

/** Whole rupees to "₹1,299" using Indian digit grouping. */
export function formatPrice(amount: number): string {
  return inr.format(amount).replace(/\s/g, '');
}

/** 14 becomes "No. 014". */
export function formatPieceNumber(n: number): string {
  return `No. ${String(n).padStart(3, '0')}`;
}
