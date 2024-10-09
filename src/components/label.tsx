/**
 * @file label.tsx
 * @overview Renders an accessible label associated with controls.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Label } from "@/components/label"

  <Label htmlFor="email">Your email address</Label>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i @radix-ui/react-label
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i class-variance-authority
 */

import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const labelVariants = cva(
  'text-sm font-medium peer-disabled:cursor-not-allowed peer-desabled:opacity-70  text-type-950',
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={twMerge(clsx(labelVariants(), className))}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { labelVariants, Label };
