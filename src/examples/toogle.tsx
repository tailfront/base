/**
 * @file toogle.tsx
 * @overview Sandbox of components.
 */

import { Toggle } from '@/components/toogle';
import { IconBold } from '@tabler/icons-react';

/**
 * @returns {JSX.Element} Example of toogle usage
 * @example
 * import {ToogleExample} from '@/examples/toogle.tsx';
 * <ToogleExample />
 */
function ToogleExample(): JSX.Element {
  document.title = 'Toogle';
  return (
    <div className="m-8 flex flex-col gap-4">
      <Toggle aria-label="Toggle bold">
        <IconBold className="h-4 w-4 text-type-500" />
      </Toggle>
    </div>
  );
}
export { ToogleExample };
