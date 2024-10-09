/**
 * @file textarea.tsx
 * @overview Sandbox of <components className=""></components>
 */

import { Textarea } from '@/components/textarea';

/**
 * @returns {JSX.Element} Example of textarea usage
 * @example
  import {TextareaExample} from '@/examples/textarea.tsx';

  <TextareaExample />
 */
function TextareaExample(): JSX.Element {
  document.title = 'Textarea';
  return (
    <div className="m-8 p-4 bg-white w-[312px]">
      <Textarea rows={2} placeholder="Text" className="w-[282px]" />
    </div>
  );
}

export { TextareaExample };
