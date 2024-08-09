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

import { AlertDialogExample } from './examples/alert-dialog';
import { BreadcrumbExample } from './examples/breadcrumb';
import { ButtonExample } from './examples/button';
import { CardExample } from './examples/card';
import { CarouselExample } from './examples/carousel';
import { DialogExample } from './examples/dialog';
import { DropdownMenuExample } from './examples/dropdown-menu';
import { InputExample } from './examples/input';
import { ProgressExample } from './examples/progress';
import { SeparatorExample } from './examples/separator';
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
  {
    path: '/card',
    element: <CardExample />,
  },
  {
    path: '/input',
    element: <InputExample />,
  },
  {
    path: '/separator',
    element: <SeparatorExample />,
  },
  {
    path: '/dialog',
    element: <DialogExample />,
  },
  {
    path: '/carousel',
    element: <CarouselExample />,
  },
  {
    path: '/alert-dialog',
    element: <AlertDialogExample />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
