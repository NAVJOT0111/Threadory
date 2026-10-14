import { Fragment } from 'react';
import { Heading } from '@/components/ui/Heading';
import { Label } from '@/components/ui/Label';
import { RunningStitch } from '@/components/ui/RunningStitch';
import { Section } from '@/components/ui/Section';
import { useReviews, useSiteContent } from '@/hooks/useContent';

/** Pull-quote reviews separated by vertical running stitch lines. Real reviews only at launch. */
export function Reviews() {
  const reviews = useReviews();
  const { reviewsHeading } = useSiteContent();

  return (
    <Section surface="petal" aria-labelledby="reviews">
      <div className="container-page">
        <Heading level={2} size="h2" id="reviews" className="max-w-160">
          {reviewsHeading}
        </Heading>
        <ul className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 scroll-px-5 tab:mx-0 tab:mt-12 tab:grid tab:grid-cols-3 tab:overflow-visible tab:px-0 desk:flex">
          {reviews.map((review, i) => (
            <Fragment key={review.id}>
              {i > 0 && (
                <li aria-hidden="true" className="hidden desk:mx-6 desk:block">
                  <RunningStitch orientation="vertical" />
                </li>
              )}
              <li className="w-5/6 shrink-0 snap-start tab:w-auto desk:flex-1">
                <blockquote className="font-display text-quote italic">
                  <p>{review.quote}</p>
                </blockquote>
                <p className="mt-6">
                  <Label className="block">{review.author}</Label>
                  {review.verified && <Label className="mt-1 block text-ink-muted">Verified purchase</Label>}
                </p>
              </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </Section>
  );
}
