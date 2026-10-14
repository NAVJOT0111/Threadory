import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { Heading } from '@/components/ui/Heading';
import { RunningStitch } from '@/components/ui/RunningStitch';
import { Section } from '@/components/ui/Section';
import { useOccasions, useSiteContent } from '@/hooks/useContent';

/** Index list, one row per occasion. Hover turns the text Wine and moves the arrow 4px right. */
export function OccasionIndex() {
  const occasions = useOccasions();
  const { headings } = useSiteContent();

  return (
    <Section surface="petal" aria-labelledby="occasions">
      <div className="container-page">
        <Heading level={2} size="h2" id="occasions">
          {headings.occasions}
        </Heading>
        <ul className="mt-8 desk:mt-12">
          {occasions.map((o, i) => (
            <li key={o.slug}>
              {i === 0 && <RunningStitch />}
              <Link
                to={`/shop?occasion=${o.slug}`}
                className="group flex h-16 items-center justify-between font-display text-index transition-colors duration-150 ease-out hover:text-wine tab:h-20 desk:h-24"
              >
                {o.name}
                <ArrowRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  strokeLinecap="butt"
                  className="size-6 shrink-0 transition-transform duration-150 ease-out group-hover:translate-x-1 desk:size-8"
                />
              </Link>
              <RunningStitch />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
