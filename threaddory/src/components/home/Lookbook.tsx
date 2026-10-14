import { Heading } from '@/components/ui/Heading';
import { ProductImage } from '@/components/ui/ProductImage';
import { Section } from '@/components/ui/Section';
import { TextLink } from '@/components/ui/TextLink';
import { cn } from '@/lib/cn';
import { useSiteContent } from '@/hooks/useContent';
import type { Ratio } from '@/lib/images';

const RATIOS: Ratio[] = ['3:4', '1:1', '3:4'];

/** Three images (3:4, 1:1, 3:4); on desktop the middle one is offset down 48px. */
export function Lookbook() {
  const { lookbook, headings } = useSiteContent();

  return (
    <Section surface="petal" bordered aria-labelledby="lookbook">
      <div className="container-page">
        <Heading level={2} size="h2" id="lookbook">
          {headings.lookbook}
        </Heading>
        <ul className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory items-start gap-3 overflow-x-auto px-5 scroll-px-5 tab:mx-0 tab:mt-12 tab:grid tab:grid-cols-3 tab:gap-6 tab:overflow-visible tab:px-0">
          {lookbook.map((entry, i) => (
            <li
              key={entry.productSlug}
              className={cn('w-2/3 shrink-0 snap-start tab:w-auto', i === 1 && 'desk:mt-12')}
            >
              <ProductImage image={entry.image} ratio={RATIOS[i]} sizes="(min-width: 37.5rem) 30vw, 66vw" />
              <p className="mt-4 font-display text-product">{entry.caption}</p>
              <TextLink to={`/product/${entry.productSlug}`} className="mt-2 min-h-11">
                Shop this piece
              </TextLink>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
