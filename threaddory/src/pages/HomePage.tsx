import { Bestsellers } from '@/components/home/Bestsellers';
import { CategoryArches } from '@/components/home/CategoryArches';
import { GiftFeature } from '@/components/home/GiftFeature';
import { Hero } from '@/components/home/Hero';
import { Lookbook } from '@/components/home/Lookbook';
import { OccasionIndex } from '@/components/home/OccasionIndex';
import { ProcessStrip } from '@/components/home/ProcessStrip';
import { Reviews } from '@/components/home/Reviews';
import { RunningBand } from '@/components/home/RunningBand';

/**
 * Surface rhythm (with the announcement bar above and footer below):
 * Ink, Petal (header), Wine, Tomato, Petal, Petal, Butter, Petal, Petal, Wine, Petal, Ink.
 */
export function HomePage() {
  return (
    <>
      <Hero />
      <RunningBand />
      <CategoryArches />
      <Bestsellers />
      <GiftFeature />
      <OccasionIndex />
      <Lookbook />
      <ProcessStrip />
      <Reviews />
    </>
  );
}
