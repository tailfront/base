/**
 * @file textarea.tsx
 * @overview Displays a form textarea or a component that looks like a textarea.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example
  import { Textarea } from '@/components/textarea';

  <Textarea placeholder="Text" />

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 */

import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={twMerge(
          clsx(
            'flex min-h-[72px] w-full rounded-lg border border-stroke-200 border-input bg-container-50 px-3 py-2 text-type-950 text-sm placeholder:text-type-400 focus-visible:outline-none focus-visible:ring-4 focus:ring-accent-100 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          ),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

export { Textarea };
