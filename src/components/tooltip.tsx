/**
 * @file tooltip.tsx
 * @overview A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  } from "@/components/tooltip"

  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>Hover</TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i @radix-ui/react-tooltip
 */

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={twMerge(
      clsx(
        'overflow-hidden rounded-md squircle border bg-container-50 px-3 py-1.5 text-sm text-type-950',
        className,
      ),
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

const TooltipProvider = TooltipPrimitive.Provider;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
