/**
 * @file progress.tsx
 * @overview Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Progress } from '@/components/progress';

  Progress value={40} />

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i @radix-ui/react-progress
 * @npm i clsx
 * @npm i tailwind-merge
 */

import * as ProgressPrimitive from '@radix-ui/react-progress';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={twMerge(
      clsx(
        'relative h-2 w-full overflow-hidden rounded-full bg-container-100',
        className,
      ),
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-accent-800 transition-all rounded-full"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
