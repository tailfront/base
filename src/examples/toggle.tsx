/**
 * @file toggle.tsx
 * @overview Sandbox of components.
 */

import { Toggle } from '@/components/toggle';
import { IconBold } from '@tabler/icons-react';

/**
 * @returns {JSX.Element} Example of toogle usage
 * @example
 * import {ToogleExample} from '@/examples/toogle.tsx';

 * <ToogleExample />
 */
function ToggleExample(): JSX.Element {
  document.title = 'Toogle';
  return (
    <div className="m-8 flex items-center gap-4 p-4 bg-white">
      <Toggle aria-label="Toggle bold">
        <IconBold className="size-4 text-type-500" />
      </Toggle>
    </div>
  );
}

export { ToggleExample };
