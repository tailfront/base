/**
 * @file main.tsx
 */
import { Navigation } from '@/examples/_components.tsx';
import { AccordionExample } from '@/examples/accordion.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../config/themes/base/lib';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AvatarExample } from './examples/avatar';
import { BadgeExample } from './examples/badge';
import { ProgressExample } from './examples/progress';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
  },
  {
    path: '/accordion',
    element: <AccordionExample />,
  },
  {
    path: '/avatar',
    element: <AvatarExample />,
  },
  {
    path: '/progress',
    element: <ProgressExample />,
  },
  {
    path: '/badge',
    element: <BadgeExample />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
