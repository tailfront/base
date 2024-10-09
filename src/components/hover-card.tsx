/**
 * @file hover-card.tsx
 * @overview For sighted users to preview content available behind a link.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  } from "@/components/hover-card"

  <HoverCard>
    <HoverCardTrigger>Hover</HoverCardTrigger>
    <HoverCardContent>
    The React Framework – created and maintained by @vercel.
    </HoverCardContent>
  </HoverCard>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i @radix-ui/react-hover-card
 */

import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={twMerge(
      clsx(
        'z-50 mt-3 rounded-lg squircle shadow-md border bg-container-50 p-4 text-type-950 ml-1',
        className,
      ),
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardContent, HoverCardTrigger };
