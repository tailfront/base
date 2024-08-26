/**
 * @file slider.tsx
 * @overview Sandbox of components.
 */

import { Slider } from '@/components/slider';

/**
 * @returns {JSX.Element} Example of slider usage
 * @example
  import {SliderExample} from '@/examples/slider.tsx';

  <SliderExample />
 */
function SliderExample(): JSX.Element {
  document.title = 'Slider';
  return (
    <div className="bg-white m-8 p-4 w-[412px]">
      <Slider defaultValue={[20]} />
    </div>
  );
}

export { SliderExample };
