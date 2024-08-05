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
    <div className="m-8 h-[400px] w-[80vh] bg-white mt-4 fixed">
      <Progress value={40} className="w-[380px] mt-9" />
    </div>
  );
}
export { ProgressExample };
