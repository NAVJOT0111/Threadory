import { getCategories, getOccasions, getReviews, getSiteContent } from '@/api/content';
import { useAsyncData } from './useAsyncData';
import type { Category, Occasion, Review, SiteContent } from '@/types/content';

export const useSiteContent = (): SiteContent => useAsyncData('site', getSiteContent);
export const useCategories = (): Category[] => useAsyncData('categories', getCategories);
export const useOccasions = (): Occasion[] => useAsyncData('occasions', getOccasions);
export const useReviews = (): Review[] => useAsyncData('reviews', getReviews);
