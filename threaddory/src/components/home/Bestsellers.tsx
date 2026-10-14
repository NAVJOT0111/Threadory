import { ProductGrid } from '@/components/product/ProductGrid';
import { ButtonLink } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { RunningStitch } from '@/components/ui/RunningStitch';
import { Section } from '@/components/ui/Section';
import { useSiteContent } from '@/hooks/useContent';
import { useBestsellers } from '@/hooks/useProducts';

/** Four proven pieces before any storytelling. The first row loads eagerly. */
export function Bestsellers() {
  const products = useBestsellers(4);
  const { headings } = useSiteContent();

  return (
    <Section surface="petal" bordered aria-labelledby="bestsellers">
      <div className="container-page">
        <Heading level={2} size="h2" id="bestsellers">
          {headings.bestsellers}
        </Heading>
        <RunningStitch className="mt-4" />
        <div className="mt-8 desk:mt-12">
          <ProductGrid products={products} eagerCount={4} />
        </div>
        <div className="mt-8 flex justify-center desk:mt-12">
          <ButtonLink to="/shop" variant="secondary" size="lg" className="w-full tab:w-auto">
            Shop all
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
