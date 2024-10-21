/**
 * @file alert-dialog.tsx
 * @overview Sandbox of components.
 */

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/alert-dialog';
import { Button } from '@/components/button';

/**
 * @returns {JSX.Element} Example of alert dialog usage
 * @example
	import {AlertDialogExample} from '@/examples/alert-dialog.tsx';

	<AlertDialogExample />
 */
function AlertDialogExample(): JSX.Element {
  document.title = 'AlertDialog';
  return (
    <div className="m-8">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Alert Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>
              The leaves danced gently in the breeze, their rustling a symphony
              of nature’s.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="w-[70px]">Button</AlertDialogCancel>
            <AlertDialogAction className="w-[69px]">Button</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
export { AlertDialogExample };
