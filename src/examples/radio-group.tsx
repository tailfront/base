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
        <RadioGroup defaultValue="option-one space-y-4">
          <div className="flex items-center space-x-2 p-0.5">
            <RadioGroupItem value="Default" id="option-one" />
            <Label htmlFor="option-one">Default</Label>
          </div>
          <div className="flex items-center space-x-2 p-0.5">
            <RadioGroupItem value="Comfortable" id="option-two" />
            <Label htmlFor="option-two">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2 p-0.5">
            <RadioGroupItem value="Compact" id="option-two" />
            <Label htmlFor="option-two">Compact</Label>
          </div>
        </RadioGroup>
      </Card>

      <div className="w-[224px] border p-4 space-y-3 h-[188px] rounded-lg">
        <Label>Notify me about...</Label>
        <RadioGroup defaultValue="option-one space-y-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-0.5">
              <RadioGroupItem value="Default" id="option-one" />
              <Label htmlFor="option-one">Default</Label>
            </div>
            <div className="flex items-center space-x-2 p-0.5">
              <RadioGroupItem value="Comfortable" id="option-two" />
              <Label htmlFor="option-two">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2 p-0.5">
              <RadioGroupItem value="Compact" id="option-two" />
              <Label htmlFor="option-two">Compact</Label>
            </div>
          </div>
        </RadioGroup>
        <Button className="w-[72px]">Submit</Button>
      </div>
    </div>
  );
}

export { RadioGroupExample };
