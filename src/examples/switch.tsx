/**
 * @file switch.tsx
 * @overview Sandbox of components.
 */

import { Switch } from '@/components/switch';

/**
 * @returns {JSX.Element} Example of switch usage
 * @example
	import {SwitchExample} from '@/examples/switch.tsx';

	<SwitchExample />
 */
function SwitchExample(): JSX.Element {
  document.title = 'Switch';
  return (
    <div className="m-8 bg-white p-4">
      <Switch />
    </div>
  );
}

export { SwitchExample };
