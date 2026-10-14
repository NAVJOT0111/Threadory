import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from '@/app/router';
import '@/styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Plaster fallback while the first content promise resolves. */}
    <Suspense fallback={<div className="min-h-dvh bg-plaster" />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
