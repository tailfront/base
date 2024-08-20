/**
 * @file label.tsx
 * @overview Sandbox of components.
 */

import { Input } from '@/components/input';
import { Label } from '@/components/label';

/**
 * @returns {JSX.Element} Example of label usage
 * @example
 * import {LabelExample} from '@/examples/label.tsx';
 *
 * <LabelExample />
 */
function LabelExample(): JSX.Element {
  document.title = 'Label';
  return (
    <div>
      <div className="bg-white p-4 m-4">
        <div className="w-80 px-2 space-y-2">
          <Label htmlFor="terms">The label component</Label>
          <Input placeholder="Label" />
        </div>
      </div>
    </div>
  );
}

export { LabelExample };
