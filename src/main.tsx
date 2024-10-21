/**
 * @file main.tsx
 */
import { Navigation } from '@/examples/_components.tsx';
import { AccordionExample } from '@/examples/accordion.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../config/themes/base/lib';
import { Toaster } from './components/toaster';
import { AlertExample } from './examples/alert';
import { AlertDialogExample } from './examples/alert-dialog';
import { AvatarExample } from './examples/avatar';
import { BadgeExample } from './examples/badge';
import { BreadcrumbExample } from './examples/breadcrumb';
import { ButtonExample } from './examples/button';
import { CalendarExample } from './examples/calendar';
import { CardExample } from './examples/card';
import { CarouselExample } from './examples/carousel';
import { CheckboxPage } from './examples/checkbox';
import { DialogExample } from './examples/dialog';
import { DrawerExample } from './examples/drawer';
import { DropdownMenuExample } from './examples/dropdown-menu';
import { FormExample } from './examples/form';
import { HoverCardExample } from './examples/hover-card';
import { InputExample } from './examples/input';
import { InputOTPExample } from './examples/input-otp';
import { LabelExample } from './examples/label';
import { NavigationMenuExample } from './examples/navigation-menu';
import { PopoverExample } from './examples/popover';
import { ProgressExample } from './examples/progress';
import { RadioGroupExample } from './examples/radio-group';
import { ResizableExample } from './examples/resizable';
import { ScrollAreaExample } from './examples/scroll-area';
import { SelectExample } from './examples/select';
import { SeparatorExample } from './examples/separator';
import { SheetExample } from './examples/sheet';
import { SkeletonExample } from './examples/skeleton';
import { SliderExample } from './examples/slider';
import { SwitchExample } from './examples/switch';
import { TableDemo } from './examples/table';
import { TabsExample } from './examples/tabs';
import { TextareaExample } from './examples/textarea';
import { ToastExample } from './examples/toast';
import { ToggleExample } from './examples/toggle';
import { ToggleGroupExample } from './examples/toggle-group';
import { TooltipExample } from './examples/tooltip';
import './index.css';

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
    path: '/checkbox',
    element: <CheckboxPage />,
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
  {
    path: '/label',
    element: <LabelExample />,
  },
  {
    path: '/form',
    element: <FormExample />,
  },
  {
    path: '/select',
    element: <SelectExample />,
  },
  {
    path: '/toast',
    element: <ToastExample />,
  },
  {
    path: '/popover',
    element: <PopoverExample />,
  },
  {
    path: '/tooltip',
    element: <TooltipExample />,
  },
  {
    path: '/input-otp',
    element: <InputOTPExample />,
  },
  {
    path: '/scroll-area',
    element: <ScrollAreaExample />,
  },
  {
    path: '/tabs',
    element: <TabsExample />,
  },
  {
    path: '/radio-group',
    element: <RadioGroupExample />,
  },
  {
    path: '/hover-card',
    element: <HoverCardExample />,
  },
  {
    path: '/drawer',
    element: <DrawerExample />,
  },
  {
    path: '/sheet',
    element: <SheetExample />,
  },
  {
    path: '/slider',
    element: <SliderExample />,
  },
  {
    path: '/navigation-menu',
    element: <NavigationMenuExample />,
  },
  {
    path: '/alert',
    element: <AlertExample />,
  },
  {
    path: '/calendar',
    element: <CalendarExample />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
);
