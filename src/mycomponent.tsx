/**
 * @file Copybox is a wrapper to copy associated value to clipboard.1
 * @example
 * ```tsx
 * import {Copybox} from '@/components/copybox';
 *
 * <Copybox value="abc123"><span>ABC123</span></Copybox>
 * ```
 */

import React from 'react';
import {toClipboard} from '@/lib/utils';
import {toast} from '@/components/use-toast';

interface CopyboxProps {
  value: string;
  children: React.ReactElement;
}

const Copybox = ({value, children}: CopyboxProps): JSX.Element => {
  return (
    <span
      className="cursor-pointer"
      onClick={() => {
        toClipboard(value);
        toast({
          title: 'Скопировано в буфер обмена',
          description: value,
        });
      }}
    >
      {children}
    </span>
  );
};

export type {CopyboxProps};
export {Copybox};
