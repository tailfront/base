/**
 * @file popover.tsx
 * @overview Displays rich content in a portal, triggered by a button.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  } from "@/components/popover"

	<Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>Place content for the popover here.</PopoverContent>
  </Popover>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i @radix-ui/react-popover
 */

import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={twMerge(
        clsx(
          'border mt-3 border-stroke-200 rounded-lg squircle ml-1.5 bg-container-50 p-4 text-type-950 shadow-md',
          className,
        ),
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const Popover = PopoverPrimitive.Root;

export { PopoverContent, PopoverTrigger, Popover };
