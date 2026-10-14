import { Link } from 'react-router';
import { Accordion } from '@/components/ui/Accordion';
import { Heading } from '@/components/ui/Heading';
import { Label } from '@/components/ui/Label';
import { RunningStitch } from '@/components/ui/RunningStitch';
import { Section } from '@/components/ui/Section';
import { useSiteContent } from '@/hooks/useContent';
import { NewsletterForm } from './NewsletterForm';
import { PaymentGlyphs } from './PaymentGlyphs';

const LINK_CLASS =
  'inline-flex min-h-11 items-center font-sans text-body text-petal transition-colors duration-150 ease-out hover:text-butter hover:link-underline';

export function Footer() {
  const { newsletter, brandStatement, socialLinks, footerColumns, legalLinks } = useSiteContent();

  return (
    <Section surface="ink" as="footer" padded={false} className="overflow-hidden pt-16 desk:pt-24">
      <div className="container-page">
        {/* Newsletter and brand */}
        <div className="grid gap-12 desk:grid-cols-12 desk:gap-6">
          <div className="desk:col-span-6">
            <Label className="text-butter">{newsletter.label}</Label>
            <Heading level={2} size="h3" className="mb-8 mt-3 max-w-120 text-petal">
              {newsletter.headline}
            </Heading>
            <NewsletterForm />
          </div>
          <div className="desk:col-span-5 desk:col-start-8">
            <p className="max-w-120 font-display text-quote italic text-petal">{brandStatement}</p>
            <ul className="mt-6 flex gap-6">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={LINK_CLASS}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <RunningStitch className="my-12 desk:my-16" />

        {/* Link groups: accordions on mobile, columns from tablet */}
        <nav aria-label="Footer" className="hidden gap-6 tab:grid tab:grid-cols-3 desk:grid-cols-12">
          {footerColumns.map((col, i) => (
            <div key={col.heading} className={i === 0 ? 'desk:col-span-3 desk:col-start-1' : 'desk:col-span-3'}>
              <Label as="h2" className="text-butter">
                {col.heading}
              </Label>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className={LINK_CLASS}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <nav aria-label="Footer" className="tab:hidden">
          <Accordion
            ruleClassName="border-petal"
            headingClassName="text-butter"
            items={footerColumns.map((col) => ({
              value: col.heading,
              heading: col.heading,
              content: (
                <ul className="flex flex-col gap-3 pb-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className={LINK_CLASS}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ),
            }))}
          />
        </nav>

        <RunningStitch className="my-12" />

        {/* Legal row */}
        <div className="flex flex-col gap-6 tab:flex-row tab:items-center tab:justify-between">
          <p className="font-sans text-small text-petal">© Threaddory {new Date().getFullYear()}</p>
          <ul className="flex gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className={LINK_CLASS.replace('text-body', 'text-small')}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <PaymentGlyphs />
        </div>
      </div>

      {/* Closing wordmark: decorative, cropped by the bottom edge */}
      <div aria-hidden="true" className="container-page mt-12 select-none overflow-hidden desk:mt-16">
        <p className="closing-wordmark whitespace-nowrap font-display italic text-wine">Threaddory</p>
      </div>
    </Section>
  );
}
