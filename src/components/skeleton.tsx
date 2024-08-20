/**
 * @file skeleton.tsx
 * @overviewUse to show a placeholder while content is loading.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Skeleton } from '@/components/skeleton';

  <Skeleton />

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 */

import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const Skeleton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        clsx('animate-pulse rounded-full bg-container-100', className),
      )}
      {...props}
    />
  );
};

export { Skeleton };
