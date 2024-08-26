/**
 * @file input.tsx
 * @overview Displays a form input field or a component that looks like an input field.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import { Input } from '@/components/input';

	<Input type="email" placeholder="Text" />

 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 */
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          clsx(
            'flex w-full border border-stroke-200 rounded-lg bg-container-50 px-3 py-2 text-sm placeholder:text-type-400 focus-visible:outline-none focus-visible:ring focus:ring-accent-100 disabled:cursor-not-allowed disabled:opacity-50 text-type-950 file:text-type-950 tracking-normal file:border-0 file:bg-transparent file:text-sm file:font-medium',
            className,
          ),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

export { Input };
