/**
 * @file badge.tsx
 * @overview Sandbox of components.
 */

import { Badge } from '@/components/badge';

/**
 * @returns {JSX.Element} Example of badge usage
 * @example
	import {BadgeExample} from '@/examples/badge.tsx';

	<BadgeExample />
 */
function BadgeExample(): JSX.Element {
  document.title = 'Badge';
  return (
    <div className="fixed h-[400px] w-[80vh] bg-white flex gap-4 m-8 ">
      <Badge variant="default">Badge</Badge>
      <Badge variant="secondary">Badge</Badge>
      <Badge variant={'outline'}>Badge</Badge>
      <Badge variant="destructive">Badge</Badge>
    </div>
  );
}
export { BadgeExample };
