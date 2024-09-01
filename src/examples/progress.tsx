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
    <div className="w-96 m-8 p-4 bg-white">
      <Progress value={22} />
    </div>
  );
}

export { ProgressExample };
