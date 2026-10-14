import { ButtonLink } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Label } from '@/components/ui/Label';
import { ProductImage } from '@/components/ui/ProductImage';
import { Section } from '@/components/ui/Section';
import { useSiteContent } from '@/hooks/useContent';

/** Butter feature: image bleeds to the left edge on desktop, sits on top on mobile. */
export function GiftFeature() {
  const { giftFeature } = useSiteContent();

  return (
    <Section surface="butter" padded={false} aria-labelledby="gift-feature">
      <div className="desk:container-page desk:grid desk:grid-cols-12 desk:items-center desk:gap-6">
        <div className="desk:col-span-6 desk:bleed-left">
          <ProductImage
            image={giftFeature.image}
            ratio="4:5"
            sizes="(min-width: 64rem) 50vw, 100vw"
            className="tab:mx-auto tab:max-w-160 desk:max-w-none"
          />
        </div>
        <div className="mx-auto max-w-160 px-5 py-16 tab:px-8 desk:col-span-4 desk:col-start-8 desk:mx-0 desk:max-w-none desk:px-0 desk:py-24">
          <Label className="text-wine">{giftFeature.label}</Label>
          <Heading level={2} size="h2" id="gift-feature" className="mt-3">
            {giftFeature.headline}
          </Heading>
          <ol className="mt-8 flex flex-col gap-4">
            {giftFeature.steps.map((step, i) => (
              <li key={step} className="flex items-baseline gap-4">
                <span aria-hidden="true" className="w-6 shrink-0 font-display text-h3 text-wine">
                  {i + 1}
                </span>
                <span className="font-sans text-body-l">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <ButtonLink to={giftFeature.cta.to} variant="primary" size="lg" className="w-full tab:w-auto">
              {giftFeature.cta.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
