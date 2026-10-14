import { useParams } from 'react-router';
import { ButtonLink } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { Label } from '@/components/ui/Label';
import { Section } from '@/components/ui/Section';
import { useCategories, useSiteContent } from '@/hooks/useContent';
import { NotFoundPage } from './NotFoundPage';

type StubKind = 'about' | 'help' | 'shop';

function titleCase(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

/** Placeholder so no navigation target is dead in milestone 1. */
export function ContentStubPage({ kind }: { kind: StubKind }) {
  const { topic, category } = useParams();
  const { stubCopy } = useSiteContent();
  const categories = useCategories();

  if (kind === 'shop' && category && !categories.some((c) => c.slug === category)) {
    return <NotFoundPage />;
  }

  const title =
    kind === 'about' ? 'About' : kind === 'help' ? titleCase(topic ?? 'Help') : category ? titleCase(category) : 'Shop';

  return (
    <Section surface="petal">
      <title>{`${title} | Threaddory`}</title>
      <meta name="description" content={stubCopy[kind].slice(0, 150)} />
      <div className="container-page">
        <Label className="text-ink-muted">{kind === 'shop' ? 'Coming next' : 'Placeholder'}</Label>
        <Heading level={1} size="display-l" id="page-title" tabIndex={-1} className="mt-3">
          {title}
        </Heading>
        <p className="mt-6 max-w-160 font-sans text-body-l">{stubCopy[kind]}</p>
        <div className="mt-8">
          <ButtonLink to="/" variant="secondary" size="lg">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
