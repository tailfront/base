/**
 * @file checkbox.tsx
 * @overview Sandbox of components.
 */

import { Checkbox } from '@/components/checkbox';

/**
 * @returns {JSX.Element} Example of checkbox usage
 * @example
   import { Checkbox } from "@/componentscheckbox"

	<Checkbox />
 */
function CheckboxPage(): JSX.Element {
  document.title = 'Alert';
  return (
    <div className="bg-white m-8 p-4 space-y-4">
      <Checkbox />
    </div>
  );
}

export { CheckboxPage };
