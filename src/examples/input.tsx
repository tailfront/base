/**
 * @file input.tsx
 * @overview Sandbox of components.
 */

import { Input } from '@/components/input';

/**
 * @returns {JSX.Element} Example of input usage
 * @example
  import {InputExample} from '@/examples/input.tsx';

  <InputExample />
 */
function InputExample(): JSX.Element {
  document.title = 'Input';
  return (
    <div className="w-[312px] m-8 bg-white p-4">
      <Input type="email" placeholder="Text" />
    </div>
  );
}
export { InputExample };
