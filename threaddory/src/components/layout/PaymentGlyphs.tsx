const METHODS = ['UPI', 'Visa', 'Mastercard', 'RuPay'] as const;

/** Single-colour Petal glyphs. Simple outlined marks stand in for licensed brand artwork. */
export function PaymentGlyphs() {
  return (
    <ul className="flex flex-wrap items-center gap-3" aria-label="Accepted payment methods">
      {METHODS.map((m) => (
        <li key={m}>
          <svg role="img" aria-label={m} viewBox="0 0 64 40" className="h-8 w-12 text-petal">
            <rect x="0.75" y="0.75" width="62.5" height="38.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <text
              x="32"
              y="25"
              textAnchor="middle"
              fill="currentColor"
              fontFamily="Schibsted Grotesk Variable, system-ui, sans-serif"
              fontWeight="600"
              fontSize={m.length > 5 ? 7.5 : 12}
              letterSpacing={m.length > 5 ? 0.2 : 0.5}
            >
              {m.toUpperCase()}
            </text>
          </svg>
        </li>
      ))}
    </ul>
  );
}
