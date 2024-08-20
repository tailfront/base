/**
 * @file sheet.tsx
 * @overview Sandbox of components.
 */

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { Label } from '@/components/label';
import { Separator } from '@/components/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet';

/**
 * @returns {JSX.Element} Example of sheet usage
 * @example
  import {SheetExample} from '@/examples/sheet.tsx';

  <SheetExample />
 */
function SheetExample(): JSX.Element {
  document.title = 'Sheet';
  return (
    <div className="bg-white m-8 p-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Open</Button>
        </SheetTrigger>
        <SheetContent className="space-y-4" side={'right'}>
          <SheetHeader className="w-[236px]">
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <Separator />
          <div className="grid gap-4 py-4">
            <div className="items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Kamol Kuchkarov" className="col-span-3" />
            </div>
            <div className="items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@kuchkarov" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="w-[119px]">
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export { SheetExample };
