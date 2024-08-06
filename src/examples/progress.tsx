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
    <div className="w-[380px] m-8">
      <Progress value={38} />
    </div>
  );
}
export { ProgressExample };
