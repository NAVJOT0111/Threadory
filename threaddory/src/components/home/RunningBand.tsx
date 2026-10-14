import { Link } from 'react-router';
import { Section } from '@/components/ui/Section';
import { useCategories, useSiteContent } from '@/hooks/useContent';

function BandCopy({ hidden }: { hidden: boolean }) {
  const { runningBand } = useSiteContent();
  const categories = useCategories();
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {runningBand.map((label) => {
        const category = categories.find((c) => c.name.toLowerCase() === label.toLowerCase());
        return (
          <li key={label} className="flex items-center">
            <Link
              to={category ? `/shop/${category.slug}` : '/shop'}
              tabIndex={hidden ? -1 : undefined}
              className="whitespace-nowrap px-4 hover:underline"
            >
              {label}
            </Link>
            <span aria-hidden="true">×</span>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Static content repeated so the CSS loop is seamless. Only the first copy is exposed to assistive
 * technology; the animation pauses on hover and focus and stops under reduced motion.
 */
export function RunningBand() {
  return (
    <Section
      surface="tomato"
      as="nav"
      padded={false}
      aria-label="Shop by type"
      className="running-band flex h-12 items-center overflow-hidden tab:h-14 desk:h-16"
    >
      <div className="running-band-track flex font-display text-band italic">
        <div className="flex">
          <BandCopy hidden={false} />
          <BandCopy hidden />
        </div>
        <div className="flex" aria-hidden="true">
          <BandCopy hidden />
          <BandCopy hidden />
        </div>
      </div>
    </Section>
  );
}
