/**
 * @file scroll-area.tsx
 * @overview Sanbox of components.
 */

import { ScrollArea } from '@/components/scroll-are';

const tags = Array.from({ length: 10 }).map(
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
      <ScrollArea className="h-[152px] w-[224px] rounded-md border">
        <div className="pl- pr-2 h-[152px]">
          <h4 className="text-sm h-9 font-medium text-type-950 px-3 flex items-center">
            Tags
          </h4>
          {tags.map((tag) => (
            <>
              <div
                key={tag}
                className="text-sm h-9 hover:bg-container-100 px-3 py-2 rounded-lg squircle"
              >
                {tag}
              </div>
            </>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export { ScrollAreaExample };
