import { Heading } from '@/components/ui/Heading';
import { ProductImage } from '@/components/ui/ProductImage';
import { Section } from '@/components/ui/Section';
import { useSiteContent } from '@/hooks/useContent';

/** Wine strip: macro stitch photography, Butter numerals, short Petal text. */
export function ProcessStrip() {
  const { process } = useSiteContent();

  return (
    <Section surface="wine" aria-labelledby="process">
      <div className="container-page">
        <Heading level={2} size="h2" id="process" className="max-w-160">
          {process.heading}
        </Heading>
        <ol className="mt-8 grid gap-12 tab:grid-cols-3 tab:gap-6 desk:mt-12">
          {process.steps.map((step) => (
            <li key={step.numeral}>
              <ProductImage image={step.image} ratio="1:1" sizes="(min-width: 37.5rem) 30vw, 100vw" />
              <p className="mt-6 font-display text-h3 text-butter" aria-hidden="true">
                {step.numeral}
              </p>
              <h3 className="mt-2 font-display text-h3">{step.title}</h3>
              <p className="mt-3 max-w-120 font-sans text-body">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
