import { Suspense, useEffect, useRef, useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import { Price } from '@/components/ui/Price';
import { PieceNumber } from '@/components/ui/PieceNumber';
import { ProductImage } from '@/components/ui/ProductImage';
import { ProductGrid } from '@/components/product/ProductGrid';
import { useBestsellers, useProducts } from '@/hooks/useProducts';
import { useSiteContent } from '@/hooks/useContent';
import { useDebouncedValue } from '@/hooks/useDebouncedValue';
import { getPriceInfo } from '@/lib/badges';
import { searchProducts } from '@/lib/filters';

interface SearchPanelProps {
  id: string;
  onClose: () => void;
}

function Results({ query, onClose }: { query: string; onClose: () => void }) {
  const products = useProducts();
  const bestsellers = useBestsellers(4);
  const matches = searchProducts(products, query).slice(0, 4);

  if (matches.length === 0) {
    return (
      <div className="mt-8" aria-live="polite">
        <p className="font-sans text-body">Nothing matches “{query}”. Here are our bestsellers.</p>
        <div className="mt-6" onClickCapture={onClose}>
          <ProductGrid products={bestsellers} />
        </div>
      </div>
    );
  }

  return (
    <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-6 tab:gap-x-6 desk:grid-cols-4" aria-live="polite">
      {matches.map((p) => {
        const price = getPriceInfo(p);
        return (
          <li key={p.id}>
            <Link to={`/product/${p.slug}`} onClick={onClose} className="group block">
              <ProductImage image={p.images[0]} ratio="4:5" sizes="22vw" />
              <div className="mt-3">
                <PieceNumber number={p.number} />
                <p className="mt-1 font-display text-product group-hover:name-underline">{p.name}</p>
                <Price className="mt-2" amount={price.amount} compareAt={price.compareAt} from={price.from} />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/** Opens under the header like the Shop menu. Focus goes to the input; Escape is handled by the header. */
export function SearchPanel({ id, onClose }: SearchPanelProps) {
  const { popularSearches } = useSiteContent();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const debounced = useDebouncedValue(value, 200);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const q = value.trim();
    if (!q) return;
    onClose();
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const showResults = debounced.trim().length >= 2;

  return (
    <div id={id} className="fade-in absolute inset-x-0 top-full max-h-panel overflow-y-auto border-b-structure border-ink bg-petal py-12">
      <div className="container-page">
        <form role="search" onSubmit={submit}>
          <label htmlFor="site-search" className="sr-only">
            Search the shop
          </label>
          <input
            ref={inputRef}
            id="site-search"
            type="search"
            autoComplete="off"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search tulips, keychains, gift sets"
            className="h-16 w-full border-b-control border-ink bg-transparent font-display text-h3 font-normal text-ink placeholder:text-ink-muted"
          />
        </form>
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {popularSearches.map((term) => (
            <Link
              key={term}
              to={`/search?q=${encodeURIComponent(term)}`}
              onClick={onClose}
              className="inline-flex h-11 items-center font-sans text-control uppercase link-underline hover:text-wine"
            >
              {term}
            </Link>
          ))}
        </div>
        {showResults && (
          <Suspense fallback={null}>
            <Results query={debounced} onClose={onClose} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
