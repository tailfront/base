/* eslint-disable jsdoc/check-param-names */
/* eslint-disable jsdoc/require-param-type */
/* eslint-disable jsdoc/require-param-description */
/**
 * @file slider.tsx
 * @overview Sandbox of components.
 */

import { Slider } from '@/components/slider';

/**
 // eslint-disable-next-line jsdoc/require-param-description
 * @param root0
 * @param root0.className
 * @param root0
 * @param root0.className
 * @returns {JSX.Element} Example of slider usage
 * @example
  import {SliderExample} from '@/examples/slider.tsx';

  <SliderExample />
 */
function SliderExample(): JSX.Element {
  document.title = 'Slider';
  return (
    <div className="bg-white m-8 p-4 w-[340px]">
      <Slider defaultValue={[20]} />
    </div>
  );
}

export { SliderExample };
