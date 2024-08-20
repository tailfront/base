/**
 * @file radio-group.tsx
 * @overview A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example
 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i @radix-ui/react-radio-group
 */

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { IconCircle } from '@tabler/icons-react';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={twMerge(clsx('grid gap-2', className))}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={twMerge(
        clsx(
          'aspect-square size-4 rounded-full data-[state=unchecked]:border text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ring-acecent-800 focus-visible::ring-offset-2 disabled:cursor-not-allowed data-[state=checked]:bg-accent-800 disabled:opacity-50',
          className,
        ),
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <IconCircle className="size-2 fill-current text-type-50" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
