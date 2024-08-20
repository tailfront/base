/**
 * @file skeleton.tsx
 * @overview Sandbox of components.
 */

import { Skeleton } from '@/components/skeleton';

/**
 * @returns {JSX.Element} Example of skeleton usage
 * @example
	import {SkeletonExample} from '@/examples/skeleton.tsx';

	<SkeletonExample />
 */
function SkeletonExample(): JSX.Element {
  document.title = 'Skeleton';
  return (
    <div className="flex items-center space-x-3 m-8 bg-white p-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[140px]" />
        <Skeleton className="h-4 w-[140px]" />
      </div>
    </div>
  );
}

export { SkeletonExample };
