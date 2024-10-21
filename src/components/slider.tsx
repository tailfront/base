/**
 * @file slider.tsx
 * @overview An input where the user selects a value from within a given range.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Slider } from "@/components/slider"

  <Slider defaultValue={[20]} />

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i @radix-ui/react-slider
 */

import * as SliderPrimitive from '@radix-ui/react-slider';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  className?: string;
}
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={twMerge(clsx('relative flex w-full items-center', className))}
    {...props}
  >
    <SliderPrimitive.Track className="relative p-1 w-full overflow-hidden rounded-full bg-container-100">
      <SliderPrimitive.Range className="absolute h-full bg-accent-800 -translate-y-1/2" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="size-6 rounded-full border border-stroke-200 bg-container-50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 flex items-center justify-center">
      <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V11C2 11.5523 1.55228 12 1 12C0.447715 12 0 11.5523 0 11V1Z"
          fill="#E5E5E5"
        />
        <path
          d="M4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1V11C6 11.5523 5.55228 12 5 12C4.44772 12 4 11.5523 4 11V1Z"
          fill="#E5E5E5"
        />
        <path
          d="M8 1C8 0.447715 8.44772 0 9 0C9.55228 0 10 0.447715 10 1V11C10 11.5523 9.55228 12 9 12C8.44772 12 8 11.5523 8 11V1Z"
          fill="#E5E5E5"
        />
      </svg>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider, type SliderProps };
