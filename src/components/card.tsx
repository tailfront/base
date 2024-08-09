/**
 * @file card.tsx
 * @overview Displays a card with header, content, and footer.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  } from '@/components/card';

	<Card className="w-[320px] h-[184px]">
    <CardHeader>
      <CardTitle>Title</CardTitle>
      <CardDescription>Subtitle</CardDescription>
    </CardHeader>
    <CardContent>
      <input className="w-[288px] h-9 border" />
    </CardContent>
    <CardFooter className="flex justify-between">
      <Button variant={'outline'}>Cancel</Button>
      <Button>Done</Button>
    </CardFooter>
  </Card>

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 */

import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(
      clsx(
        'rounded-lg border border-stroke-200 squircle bg-container-50',
        className,
      ),
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(clsx('flex flex-col space-y-1 px-4 pt-4', className))}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={twMerge(
      clsx(
        'text-base font-medium text-type-950 h-6 flex items-center leading-none tracking-tight',
        className,
      ),
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={twMerge(clsx('text-sm font-normal text-type-500', className))}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge(clsx('px-4 pt-4', className))} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(clsx('flex items-center px-4 pt-4', className))}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
