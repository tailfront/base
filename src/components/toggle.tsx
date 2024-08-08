/**
 * @file toogle.tsx
 * @overview A two-state button that can be either on or off.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Toggle } from '@/components/toogle';

  <Toggle aria-label="Toggle bold">
    <IconBold className="h-4 w-4 text-type-500" />
  </Toggle>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i @radix-ui/react-toggle
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i class-variance-authority
 * @npm i @tabler/icons-react
 */

import * as TooglePrimitive from '@radix-ui/react-toggle';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium data-[state=on]:bg-container-100 data-[state=on]:text-type-500 squircle rounded-lg',
  {
    variants: {
      variant: {
        default: 'bg-none',
      },
      size: {
        default: 'size-9 px-2.5 py-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TooglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TooglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TooglePrimitive.Root
    ref={ref}
    className={twMerge(clsx(toggleVariants({ variant, size }), className))}
    {...props}
  />
));
Toggle.displayName = TooglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
