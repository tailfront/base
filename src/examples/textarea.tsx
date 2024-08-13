/**
 * @file
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
      <Textarea placeholder="Text" />
    </div>
  );
}

export { TextareaExample };
