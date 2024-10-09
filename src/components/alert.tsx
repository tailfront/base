/**
 * @file alert.tsx
 * @overview Displays a callout for user attention.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

  <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
      You can add components and dependencies to your app using the cli.
    </AlertDescription>
  </Alert>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i class-variance-authority
 */

import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const alertVariants = cva(
  'relative w-full rounded-lg border border-stroke-200 px-4 py-3 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-1px] [&>svg]:absolute [&>svg]:left-3.5 [&>svg]:top-3.5 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-container-50 text-type-950',
        destructive:
          'border-red-100 text-red-800 bg-red-50 [&>svg]:text-red-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div className="squircle">
    <div
      ref={ref}
      role="alert"
      className={twMerge(clsx(alertVariants({ variant }), className))}
      {...props}
    />
  </div>
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={twMerge(
      clsx(
        'flex items-center font-medium text-sm leading-5 tracking-tight',
        className,
      ),
    )}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(clsx('text-sm [&_p]:leading-relaxed', className))}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
