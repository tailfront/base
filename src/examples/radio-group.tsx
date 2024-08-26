/**
 * @file radio-group.tsx
 * @overview Sandbox of components.
 */

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Label } from '@/components/label';
import { RadioGroup, RadioGroupItem } from '@/components/radio-group';

/**
 * @returns {JSX.Element} Example of radio-group usage
 * @example
  import {RadioGroupExample} from '@/examples/radio-group.tsx';

  <RadioGroupExample />
 */
function RadioGroupExample(): JSX.Element {
  document.title = 'Radio Group';
  return (
    <div className="bg-white m-8 p-4 flex gap-10">
      <Card className="w-[224px] h-[108px] p-4 border rounded-lg">
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Default" id="option-one" />
            <Label htmlFor="option-one" className="font-normal">
              Default
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Comfortable" id="option-two" />
            <Label htmlFor="option-two" className="font-normal">
              Comfortable
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Compact" id="option-two" />
            <Label htmlFor="option-two" className="font-normal">
              Compact
            </Label>
          </div>
        </RadioGroup>
      </Card>

      <div className="w-[224px] p-4 border rounded-lg space-y-2.5">
        <Label>Notify me about...</Label>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Default" id="option-one" />
            <Label htmlFor="option-one" className="font-normal">
              Default
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Comfortable" id="option-two" />
            <Label htmlFor="option-two" className="font-normal">
              Comfortable
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Compact" id="option-two" />
            <Label htmlFor="option-two" className="font-normal">
              Compact
            </Label>
          </div>
        </RadioGroup>
        <Button className="w-[72px]">Submit</Button>
      </div>
    </div>
  );
}

export { RadioGroupExample };
