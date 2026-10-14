import { Section } from '@/components/ui/Section';
import { useSiteContent } from '@/hooks/useContent';

export function AnnouncementBar() {
  const { announcement } = useSiteContent();
  return (
    <Section surface="ink" padded={false} as="div" className="h-announce">
      <p className="container-page flex h-full items-center justify-center whitespace-nowrap text-center font-sans text-announce">
        {announcement}
      </p>
    </Section>
  );
}
