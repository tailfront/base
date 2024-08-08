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

import { BreadcrumbExample } from './examples/breadcrumb';
import { ButtonExample } from './examples/button';
import { DropdownMenuExample } from './examples/dropdown-menu';
import { ProgressExample } from './examples/progress';
import { ToggleExample } from './examples/toggle';

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
  {
    path: '/toogle',
    element: <ToggleExample />,
  },
  {
    path: '/breadcrumb',
    element: <BreadcrumbExample />,
  },
  {
    path: '/dropdown-menu',
    element: <DropdownMenuExample />,
  },
  {
    path: '/button',
    element: <ButtonExample />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
