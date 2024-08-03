/**
 * @file accordion.tsx
 * @overview Sandbox of components.
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/accordion';

/**
 * @returns {JSX.Element} Example of accordion usage
 * @example
  import {AccordionExample} from '@/examples/accordion.tsx';

  <AccordionExample />
 */
function AccordionExample(): JSX.Element {
  document.title = 'Accordion';
  return (
    <div className="m-8 w-[324px]">
      <Accordion type="single" collapsible defaultValue="1">
        <AccordionItem value="1">
          <AccordionTrigger>Title</AccordionTrigger>
          <AccordionContent>
            The leaves danced gently in the breeze, their rustling a symphony of
            nature’s.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>Title</AccordionTrigger>
          <AccordionContent>
            The leaves danced gently in the breeze, their rustling a symphony of
            nature’s.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="3">
          <AccordionTrigger>Title</AccordionTrigger>
          <AccordionContent>
            The leaves danced gently in the breeze, their rustling a symphony of
            nature’s.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export { AccordionExample };
