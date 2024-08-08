/**
 * @file button.tsx
 * @overview Displays a button or a component that looks like a button.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i tailwind-merge
 * @npm i @tabler/icons-react
 * @npm npm i clsx
 * @npm i @radix-ui/react-slot
 * @npm i class-variance-authority
 */

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium gap-2 font-inter font-medium h-9 disabled:pointer-events-none disabled:opacity-50 font-inter cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-800 text-lg text-type-50 hover:bg-accent-700 focus:outline-none focus:ring focus:ring-accent-100 active:bg-accent-900 disabled:bg-accent-800 focus:bg-accent-800',
        secondary:
          'bg-container-100 text-type-950 hover:bg-container-100 focus:ring focus:ring-accent-100 focus:bg-container-100 active:bg-container-100 disabled:bg-container-100',
        destructive:
          'bg-red-800 text-type-50 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-100 focus:bg-red-800 active:bg-red-900 desabled:bg-red-800 ',
        outline:
          'bg-container-50 border border-stroke-200 hover:bg-container-50 focus:outline-none focus:ring text-type-950 focus:ring-accent-100 active:bg-stroke-200 disabled:bg-container-50 ',
        ghost:
          'hover:bg-container-100 text-type-950 active:bg-container-100 squircle',
      },
      size: {
        lg: 'h-10 w-33 px-4 py-2 text-base',
        default: 'h-9  w-30 px-3 py-2 text-sm',
        sm: 'h-8 w-23 px-2 py-2 text-xs',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={twMerge(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
