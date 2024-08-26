/**
 * @file scroll-area.tsx
 * @overview Sanbox of components.
 */

import { ScrollArea } from '@/components/scroll-area';

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`,
);

/**
 * @returns {JSX.Element} Example of scroll-area usage
 * @example
  import {ScrollAreaExample} from '@/examples/scroll-area.tsx';

  <ScrollAreaExample />
 */
function ScrollAreaExample(): JSX.Element {
  document.title = 'ScrollArea';
  return (
    <div className="bg-white p-4 m-8">
      <div className="w-[226px] h-[152px]">
        <ScrollArea>
          <div className="pr-1.5 h-[154px] space-y-2">
            <h4 className="text-sm pt-3 font-medium text-type-950 pl-4 flex items-center">
              Tags
            </h4>
            <div className="pl-1">
              {tags
                .map((tag) => (
                  <>
                    <div
                      key={tag}
                      className="text-sm hover:bg-container-100 px-3 py-2 rounded-lg squircle"
                    >
                      {tag}
                    </div>
                  </>
                ))
                .slice(0, 14)}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export { ScrollAreaExample };
