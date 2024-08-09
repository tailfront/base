/**
 * @file separator.tsx
 * @overview Sandbox of components.
 */

import { Separator } from '@/components/separator';

/**
 * @returns {JSX.Element} Example of separator usage
 * @example
  import {SeparatorExample} from '@/examples/separator.tsx';

  <SeparatorExample />
 */
function SeparatorExample(): JSX.Element {
  document.title = 'Separator';
  return (
    <div className="size-[252px] m-8 bg-white p-4 flex gap-2">
      <Separator orientation="horizontal" />

      <Separator orientation="vertical" />
    </div>
  );
}

export { SeparatorExample };
