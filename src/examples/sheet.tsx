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
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <Separator />
          <div className="grid gap-3">
            <div className="items-center">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Komol Kuchkarov" />
            </div>
            <div className="items-center ">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@kuchkarov" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="w-[119px]">
                Save shanges
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export { SheetExample };
