import { ArchImage } from '@/components/ui/ArchImage';
import { ButtonLink } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Label } from '@/components/ui/Label';
import { Section } from '@/components/ui/Section';
import { Stamp } from '@/components/ui/Stamp';
import { useSiteContent } from '@/hooks/useContent';

/** Wine hero: text in columns 1 to 6, arch image in columns 8 to 12, flush with the bottom edge. */
export function Hero() {
  const { hero } = useSiteContent();
  const headline = `${hero.headlineBefore} ${hero.headlineItalic}${hero.headlineAfter}`.trim();

  return (
    <Section surface="wine" padded={false} aria-labelledby="page-title" className="hero-min overflow-hidden">
      <title>Threaddory | Hand-crocheted flowers and gifts</title>
      <meta
        name="description"
        content="Hand-crocheted bouquets, keepsakes and gift sets, made one stitch at a time."
      />
      <div className="container-page grid pt-12 tab:pt-16 desk:grid-cols-12 desk:gap-6 desk:pt-32">
        <div className="pb-12 desk:col-span-6 desk:self-center desk:pb-32">
          <Label className="text-butter">{hero.eyebrow}</Label>
          <Heading
            level={1}
            size="display-xl"
            id="page-title"
            tabIndex={-1}
            italicWord={hero.headlineItalic}
            className="mt-4"
          >
            {headline}
          </Heading>
          <p className="mt-6 max-w-120 font-sans text-body-l">{hero.subline}</p>
          <div className="mt-8 flex flex-col gap-3 tab:flex-row tab:gap-6">
            <ButtonLink to={hero.primaryCta.to} variant="inverse" size="md" className="w-full tab:w-auto">
              {hero.primaryCta.label}
            </ButtonLink>
            <ButtonLink to={hero.secondaryCta.to} variant="inverse-secondary" size="md" className="w-full tab:w-auto">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative mx-auto w-4/5 tab:w-3/5 desk:col-span-5 desk:col-start-8 desk:mx-0 desk:w-full desk:self-end">
          <ArchImage image={hero.image} ratio="4:5" sizes="(min-width: 64rem) 40vw, 80vw" priority />
          <Stamp className="absolute left-0 top-12 -translate-x-1/3 desk:top-16 desk:-translate-x-1/2">{hero.stamp}</Stamp>
        </div>
      </div>
    </Section>
  );
}
