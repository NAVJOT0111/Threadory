import { getBestsellers, getProducts } from '@/api/products';
import { useAsyncData } from './useAsyncData';
import type { Product } from '@/types/product';

export function useProducts(): Product[] {
  return useAsyncData('products', getProducts);
}

export function useBestsellers(limit = 4): Product[] {
  return useAsyncData(`bestsellers:${limit}`, () => getBestsellers(limit));
}
