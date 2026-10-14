import { createBrowserRouter } from 'react-router';
import { ContentStubPage } from '@/pages/ContentStubPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RootLayout } from './RootLayout';

/**
 * Milestone 1 routes. Shop, product and search routes resolve to a stub page
 * so no header or footer link is dead; milestone 2 replaces them.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shop', element: <ContentStubPage kind="shop" /> },
      { path: 'shop/:category', element: <ContentStubPage kind="shop" /> },
      { path: 'product/:slug', element: <ContentStubPage kind="shop" /> },
      { path: 'search', element: <ContentStubPage kind="shop" /> },
      { path: 'about', element: <ContentStubPage kind="about" /> },
      { path: 'help/:topic', element: <ContentStubPage kind="help" /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
