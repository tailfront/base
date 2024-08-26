/**
 * @file tabs.tsx
 * @overview A set of layered sections of content—known as tab panels—that are displayed one at a time.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs"

  <Tabs defaultValue="account" className="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">Make changes to your account here.</TabsContent>
    <TabsContent value="password">Change your password here.</TabsContent>
  </Tabs>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 */

import * as TabsPrimitive from '@radix-ui/react-tabs';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={twMerge(
      clsx(
        'inline-flex space-x-1 items-center justify-center rounded-[12px] bg-container-100 p-1 text-type-950 squircle',
        className,
      ),
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={twMerge(
      clsx(
        'items-center data-[state=active]:border rounded-lg squircle px-3 py-1 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-container-50 text-type-950',
        className,
      ),
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={twMerge(clsx('mt-2 text-type-950', className))}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

const Tabs = TabsPrimitive.Root;

export { TabsContent, TabsList, TabsTrigger, Tabs };
