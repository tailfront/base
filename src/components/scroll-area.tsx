/**
 * @file scroll-area.tsx
 * @overview Augments native scroll functionality for custom, cross-browser styling.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { ScrollArea } from '@/components/scroll-are';

  const tags = Array.from({ length: 11 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
  );

  <ScrollArea>
    <div className="pr-1.5 h-[154px] space-y-2">
      <h4 className="text-sm pt-3 font-medium text-type-950 pl-4 flex items-center">
        Tags
      </h4>
      <div className="pl-1">
        {tags.map((tag) => (
        <>
          <div
          key={tag}
          className="text-sm hover:bg-container-100 px-3 py-2 rounded-lg squircle"
          >
            {tag}
          </div>
        </>
        ))}
      </div>
    </div>
  </ScrollArea>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i @radix-ui/react-scroll-area
 */

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={twMerge(
      clsx(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' &&
          'h-full w-1.5 border-l border-l-transparent pt-[4px]',
        orientation === 'horizontal' &&
          'h-2.5 flex-col border-t border-r-transparent p-[1px]',
        className,
      ),
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative w-1.5 right-1 flex-1 rounded-full bg-container-200" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={twMerge(
      clsx(
        'relative overflow-hidden border squircle text-type-950 pl-0.5 pr-2',
        className,
      ),
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollBar, ScrollArea };
