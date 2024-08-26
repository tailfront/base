/**
 * @file resizable.tsx
 * @overview Sandbox of components.
 */

import { ToggleGroup, ToggleGroupItem } from '@/components/toggle-group';
import { IconBold, IconItalic, IconUnderline } from '@tabler/icons-react';

/**
 * @returns {JSX.Element} Example of toggle group usage
 * @example
  import {ToggleGroupExample} from '@/examples/toggle-group.tsx';

	<ToggleGroupExample />
 */
function ToggleGroupExample(): JSX.Element {
  document.title = 'Toggle Group';
  return (
    <div className="bg-white p-4 m-4 flex flex-col gap-2">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <IconItalic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <IconBold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <IconUnderline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      <ToggleGroup type="multiple">
        <ToggleGroupItem
          value="bold"
          aria-label="Toggle bold"
          variant={'outline'}
        >
          <IconItalic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="italic"
          aria-label="Toggle italic"
          variant={'outline'}
        >
          <IconBold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="underline"
          aria-label="Toggle underline"
          variant={'outline'}
        >
          <IconUnderline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export { ToggleGroupExample };
