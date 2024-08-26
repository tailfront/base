/**
 * @file switch.tsx
 * @overview A control that allows the user to toggle between checked and not checked.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Switch } from '@/components/switch';

  <Switch />

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i @radix-ui/react-switch
 */

import * as SwitchPrimitives from '@radix-ui/react-switch';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={twMerge(
      clsx(
        'inline-flex h-5 w-9 items-center rounded-full border-2 border-transparent  focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent-800 data-[state=unchecked]:bg-container-200',
        className,
      ),
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={twMerge(
        clsx(
          'size-4 rounded-full bg-type-50 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        ),
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
