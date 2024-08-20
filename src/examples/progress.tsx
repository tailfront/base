/**
 * @file progress.tsx
 * @overview Sandbox of components.
 */

import { Progress } from '@/components/progress';

/**
 * @returns {JSX.Element} Example of progress usage
 * @example
 * import {ProgressExample} from '@/examples/progress.tsx';

 * <ProgressExample />
 */
function ProgressExample(): JSX.Element {
  document.title = 'Progress';
  return (
    <div className="w-[412px] m-8 bg-white p-4">
      <Progress value={34.5} />
    </div>
  );
}

export { ProgressExample };
