import { ArchImage } from '@/components/ui/ArchImage';
import { ButtonLink } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { useSiteContent } from '@/hooks/useContent';

export function NotFoundPage() {
  const { emptyStateImage } = useSiteContent();
  return (
    <Section surface="petal">
      <title>Page not found | Threaddory</title>
      <meta name="description" content="That page does not exist. Head back to the shop or the homepage." />
      <div className="container-page grid items-center gap-12 desk:grid-cols-12 desk:gap-6">
        <div className="desk:col-span-6">
          <Heading level={1} size="display-l" id="page-title" tabIndex={-1}>
            Nothing here.
          </Heading>
          <p className="mt-6 max-w-160 font-sans text-body-l">
            The page you were looking for has moved, or never existed. The flowers are still here.
          </p>
          <div className="mt-8 flex flex-col gap-3 tab:flex-row tab:gap-6">
            <ButtonLink to="/shop" variant="primary" size="lg">
              Shop
            </ButtonLink>
            <ButtonLink to="/" variant="secondary" size="lg">
              Home
            </ButtonLink>
          </div>
        </div>
        <div className="desk:col-span-4 desk:col-start-8">
          <ArchImage image={emptyStateImage} ratio="3:4" sizes="30vw" decorative className="mx-auto w-3/5 desk:w-full" />
        </div>
      </div>
    </Section>
  );
}
