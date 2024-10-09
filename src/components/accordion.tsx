/**
 * @file accordion.tsx
 * @overview Collapsible sections for organizing and revealing content efficiently.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/accordion';

  <Accordion type="single" collapsible defaultValue="1">
    <AccordionItem value="1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>
        The leaves danced gently in the breeze, their rustling a symphony of
        nature’s.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>
        The leaves danced gently in the breeze, their rustling a symphony of
        nature’s.
      </AccordionContent>
    </AccordionItem>
  </Accordion>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i @radix-ui/react-accordion
 * @npm i @tabler/icons-react
 */

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { IconChevronDown } from '@tabler/icons-react';
import { clsx } from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={twMerge(clsx('[&>*:not(:last-child)]:mb-2', className))}
    {...props}
  />
));
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={twMerge(
      clsx('squircle border rounded-lg bg-container-50', className),
    )}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={twMerge(
        clsx(
          'flex flex-1 py-3 px-4 items-center justify-between text-sm font-medium text-type-950 transition-all [&[data-state=open]>svg]:rotate-180',
          className,
        ),
      )}
      {...props}
    >
      {children}
      <IconChevronDown
        size={20}
        className="text-type-950 transition-transform duration-200"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm text-type-500 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={twMerge(clsx('px-4 py-3 pt-1', className))}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
