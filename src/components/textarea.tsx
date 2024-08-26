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

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        rows={3}
        className={twMerge(
          clsx(
            'flex w-full rounded-lg border border-stroke-200 bg-container-50 px-3 text-type-950 text-sm placeholder:text-type-400 leading-9 focus-visible:outline-none focus-visible:ring-4 focus:ring-accent-100 disabled:cursor-not-allowed disabled:opacity-50',
            className,
          ),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

export { type TextareaProps, Textarea };
