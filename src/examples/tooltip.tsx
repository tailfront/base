/**
 * @file tooltip.tsx
 * @overview Sandbox of components.
 */

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/tooltip';

/**
 * @returns {JSX.Element} Example of tooltip usage
 * @example
  import {TooltipExample} from '@/examples/tooltip.tsx';

  <TooltipExample />
 */
function TooltipExample(): JSX.Element {
  document.title = 'Tooltip';
  return (
    <div className="bg-white p-4 m-8">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="bg-black px-2 py-1 rounded-lg text-xs text-type-50 font-normal">
            Label
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export { TooltipExample };
