/**
 * @file badge.tsx
 * @overview Displays a badge or a component that looks like a badge.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Badge } from '@/components/badge';

  <Badge variant="default">Badge</Badge>

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

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const badgeVariants = cva(
  'text-xs font-medium px-2 py-1 leading-3 rounded-lg max-h-5',
  {
    variants: {
      variant: {
        default:     'bg-accent-800 text-type-50',
        secondary:   'bg-container-100 text-type-950',
        outline:     'bg-container-50 border border-stroke-200 box-border text-type-950',
        destructive: 'bg-red-800 text-type-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }) => {
  return (
    <div
      className={twMerge(clsx(badgeVariants({ variant }), className))}
      {...props}
    />
  );
};

export { type BadgeProps, badgeVariants, Badge };
