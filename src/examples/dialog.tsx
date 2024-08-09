/**
 * @file accordion.tsx
 * @overview Sandbox of components.
 */

import { Button } from '@/components/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog';
import { Input } from '@/components/input';

/**
 * @returns {JSX.Element} Example of accordion usage
 * @example
  import {DialogExample} from '@/examples/dialog.tsx';

  <DialogExample />
 */
function DialogExample(): JSX.Element {
  document.title = 'Dialog';
  return (
    <div className="m-4">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Dialog</Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Subtitle</DialogDescription>
          </DialogHeader>
          <Input id="name" className="w-[288px]" placeholder="Text" />
          <DialogFooter className="flex float-right">
            <Button type="submit" className="w-[60px]">
              Done
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export { DialogExample };
