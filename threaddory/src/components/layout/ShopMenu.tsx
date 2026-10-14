import { Link } from 'react-router';
import { Label } from '@/components/ui/Label';
import { ProductImage } from '@/components/ui/ProductImage';
import { useCategories, useOccasions, useSiteContent } from '@/hooks/useContent';

interface ShopMenuProps {
  id: string;
  onNavigate: () => void;
}

/** Full-width panel under the header: categories, occasions and two image tiles. Desktop only. */
export function ShopMenu({ id, onNavigate }: ShopMenuProps) {
  const categories = useCategories();
  const occasions = useOccasions();
  const { shopMenuTiles } = useSiteContent();

  return (
    <div
      id={id}
      className="fade-in absolute inset-x-0 top-full hidden border-b-structure border-ink bg-petal py-12 desk:block"
    >
      <div className="container-page grid grid-cols-12 gap-6">
        <nav aria-label="Shop by piece" className="col-span-4">
          <Label className="text-ink-muted">Shop by piece</Label>
          <ul className="mt-6 flex flex-col gap-3">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/shop/${c.slug}`}
                  onClick={onNavigate}
                  className="font-display text-quote transition-colors duration-150 ease-out hover:text-wine"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Shop by occasion" className="col-span-3 col-start-5">
          <Label className="text-ink-muted">Shop by occasion</Label>
          <ul className="mt-6 flex flex-col gap-3">
            {occasions.map((o) => (
              <li key={o.slug}>
                <Link
                  to={`/shop?occasion=${o.slug}`}
                  onClick={onNavigate}
                  className="font-sans text-body transition-colors duration-150 ease-out hover:text-wine"
                >
                  {o.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="col-span-5 col-start-8 grid grid-cols-2 gap-6">
          {shopMenuTiles.map((tile) => (
            <li key={tile.label}>
              <Link to={tile.to} onClick={onNavigate} className="group block">
                <ProductImage image={tile.image} ratio="4:5" sizes="14vw" />
                <span className="mt-3 inline-block font-sans text-control uppercase group-hover:link-underline">
                  {tile.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
