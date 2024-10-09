/**
 * @file popover.tsx
 * @overview Sandbox of components.
 */

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/popover';

/**
 * @returns {JSX.Element} Example of popover usage
 * @example
 * import {PopoverExample} from '@/examples/popover.tsx';
 *
 * <PopoverExample />
 */
function PopoverExample(): JSX.Element {
  document.title = 'Popover';
  return (
    <div className="bg-white p-4 m-24">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-1">
              <h4 className="font-medium leading-none h-6 flex items-center">
                Dimensions
              </h4>
              <p className="text-sm text-type-500">
                Set the dimensions for the layer.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="flex items-center gap-[18px]">
                <Label htmlFor="width" className="w-[76px] flex items-center">
                  Width
                </Label>
                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-9 w-[194px]"
                />
              </div>
              <div className="flex items-center gap-[18px]">
                <Label
                  htmlFor="maxWidth"
                  className="w-[76px] flex items-center"
                >
                  Max. width
                </Label>
                <Input
                  id="maxWidth"
                  defaultValue="300px"
                  className="col-span-2 h-9 w-[194px]"
                />
              </div>
              <div className="flex items-center gap-[18px]">
                <Label htmlFor="height" className="w-[76px] flex items-center">
                  Height
                </Label>
                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-9 w-[194px]"
                />
              </div>
              <div className="flex items-center gap-[18px]">
                <Label
                  htmlFor="maxHeight"
                  className="w-[76px] flex items-center"
                >
                  Max. height
                </Label>
                <Input
                  id="maxHeight"
                  defaultValue="none"
                  className="col-span-2 h-9 w-[194px]"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export { PopoverExample };
