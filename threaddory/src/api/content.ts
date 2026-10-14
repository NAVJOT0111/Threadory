import { categories } from '@/data/categories';
import { occasions } from '@/data/occasions';
import { reviews } from '@/data/reviews';
import { siteContent } from '@/data/site';
import type { Category, Occasion, Review, SiteContent } from '@/types/content';

const tick = <T,>(value: T): Promise<T> => Promise.resolve(value);

export const getCategories = (): Promise<Category[]> => tick(categories);
export const getOccasions = (): Promise<Occasion[]> => tick(occasions);
export const getReviews = (): Promise<Review[]> => tick(reviews);
export const getSiteContent = (): Promise<SiteContent> => tick(siteContent);
