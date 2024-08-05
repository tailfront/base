/**
 * @file badge.tsx
 * @overview Displays a badge or a component that looks like a badge.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example
 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i class-variance-authority
 */
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const badgeVariants = cva(
  'inline-flex items-center h-5 w-[53px] text-sm rounded-full px-2 py-0.5 text-xs font-medium font-sans transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ',
  {
    variants: {
      variant: {
        default: 'bg-accent-800 text-type-50 font-medium rounded-lg squircle',
        secondary: 'bg-container-100 text-type-950 rounded-lg',
        outline: 'bg-container-50 border border-stroke-200',
        destructive: 'bg-red-800 rounded-lg text-type-50 ',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

/**
 *
 */
function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={twMerge(clsx(badgeVariants({ variant }), className))}
      {...props}
    />
  );
}
export { Badge, badgeVariants };
