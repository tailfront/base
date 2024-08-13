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
import { AlertDialogExample } from './examples/alert-dialog';
import { AvatarExample } from './examples/avatar';
import { BadgeExample } from './examples/badge';
import { BreadcrumbExample } from './examples/breadcrumb';
import { ButtonExample } from './examples/button';
import { CardExample } from './examples/card';
import { CarouselExample } from './examples/carousel';
import { DialogExample } from './examples/dialog';
import { DropdownMenuExample } from './examples/dropdown-menu';
import { InputExample } from './examples/input';
import { ProgressExample } from './examples/progress';
import { ResizableExample } from './examples/resizable';
import { SeparatorExample } from './examples/separator';
import { SkeletonExample } from './examples/skeleton';
import { SwitchExample } from './examples/switch';
import { TableDemo } from './examples/table';
import { TextareaExample } from './examples/textarea';
import { ToggleExample } from './examples/toggle';
import { ToggleGroupExample } from './examples/toggle-group';

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
  {
    path: '/skeleton',
    element: <SkeletonExample />,
  },
  {
    path: '/textarea',
    element: <TextareaExample />,
  },
  {
    path: '/switch',
    element: <SwitchExample />,
  },
  {
    path: '/resizable',
    element: <ResizableExample />,
  },
  {
    path: '/toggle-group',
    element: <ToggleGroupExample />,
  },
  {
    path: '/table',
    element: <TableDemo />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
