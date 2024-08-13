/**
 * @file toggle-group.tsx
 * @overview A set of two-state buttons that can be toggled on or off.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example
 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i @radix-ui/react-toggle-group
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i class-variance-authority
 * @npx i tailfront elements toggle
 * @npm i @radix-ui/react-toggle-group
 */

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { toggleVariants } from './toggle';

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={twMerge(
      clsx('flex items-center justify-center gap-1', className),
    )}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={twMerge(
        clsx(
          toggleVariants({
            variant: context.variant || variant,
            size: context.size || size,
          }),
          className,
        ),
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
