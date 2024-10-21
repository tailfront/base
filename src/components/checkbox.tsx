/**
 * @file checkbox.tsx
 * @overview A control that allows the user to toggle between checked and not checked.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Checkbox } from "@/components/checkbox"

	<Checkbox />

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i class-variance-authority
 * @npm i @radix-ui/react-checkbox
 */
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import clsx from 'clsx';
import { Check } from 'lucide-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={twMerge(
      clsx(
        'peer size-4 shrink-0 rounded-[4px] border border-stroke-200 bg-container-50  disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent-800 data-[state=checked]:border-none data-[state=checked]:text-type-50',
        className,
      ),
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={twMerge(clsx('flex items-center justify-center text-current'))}
    >
      <Check className="size-3" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
