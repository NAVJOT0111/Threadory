import { Link } from 'react-router';
import { ArchImage } from '@/components/ui/ArchImage';
import { Heading } from '@/components/ui/Heading';
import { Label } from '@/components/ui/Label';
import { Section } from '@/components/ui/Section';
import { TextLink } from '@/components/ui/TextLink';
import { useCategories, useSiteContent } from '@/hooks/useContent';

/** Six arch tiles: snap scroller on mobile, 3 by 2 on tablet, one row on desktop. */
export function CategoryArches() {
  const categories = useCategories();
  const { headings } = useSiteContent();

  return (
    <Section surface="petal" aria-labelledby="shop-by-piece">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6">
          <Heading level={2} size="h2" id="shop-by-piece">
            {headings.shopByPiece}
          </Heading>
          <TextLink to="/shop">View all</TextLink>
        </div>

        <ul className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 scroll-px-5 tab:mx-0 tab:mt-12 tab:grid tab:grid-cols-3 tab:gap-6 tab:overflow-visible tab:px-0 desk:grid-cols-6">
          {categories.map((c) => (
            <li key={c.slug} className="w-35 shrink-0 snap-start tab:w-auto">
              <Link to={`/shop/${c.slug}`} className="group block">
                <ArchImage image={c.image} ratio="3:4" sizes="(min-width: 64rem) 14vw, (min-width: 37.5rem) 30vw, 140px" />
                <div className="mt-3">
                  <Label className="text-ink-muted">{c.number}</Label>
                  <p className="mt-1 font-display text-product group-hover:name-underline">{c.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
