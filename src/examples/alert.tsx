/**
 * @file sheet.tsx
 * @overview Sandbox of components.
 */

import { Alert, AlertDescription, AlertTitle } from '@/components/alert';
import { IconCircle } from '@tabler/icons-react';

/**
 * @returns {JSX.Element} Example of sheet usage
 * @example
  import {SheetExample} from '@/examples/sheet.tsx';

  <SheetExample />
 */
function AlertExample(): JSX.Element {
  document.title = 'Alert';
  return (
    <div className="bg-white m-8 p-4 w-[564px] space-y-4">
      <Alert>
        <IconCircle className="size-5 text-type-950" />
        <div className="space-y-1">
          <AlertTitle>Title</AlertTitle>
          <AlertDescription className="text-neutral-500">
            The leaves danced gently in the breeze, their rustling a symphony of
            nature’s.
          </AlertDescription>
        </div>
      </Alert>

      <Alert variant={'destructive'}>
        <IconCircle className="size-5 text-type-950" />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription className="text-red-800">
          The leaves danced gently in the breeze, their rustling a symphony of
          nature’s.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export { AlertExample };
