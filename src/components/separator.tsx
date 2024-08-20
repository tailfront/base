/**
 * @file separator.tsx
 * @overview Visually or semantically separates content.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Separator } from '@/components/separator';

	<Separator />

 * @npm i react
 * @npm i @radix-ui/react-separator
 * @npm i clsx
 * @npm i tailwind-merge
 */

import * as SeparatorPrimitive from '@radix-ui/react-separator';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={twMerge(
        clsx(
          'shrink-0 bg-stroke-200',
          orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
          className,
        ),
      )}
      {...props}
    />
  ),
);

export { Separator };
