/**
 * @file main.tsx
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../config/themes/base/lib';
import { Navigation } from '@/examples/_components.tsx';
import { AccordionExample } from '@/examples/accordion.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
  },
  {
    path: '/accordion',
    element: <AccordionExample />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
