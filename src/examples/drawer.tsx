/**
 * @file drawer.tsx
 * @overview Sandbox of components.
 */
import { Button } from '@/components/button';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/drawer';

/**
 * @returns {JSX.Element} Example of drawer usage
 * @example
  import {DrawerExample} from '@/examples/drawer.tsx';

  <DrawerExample />
 */
function DrawerExample(): JSX.Element {
  return (
    <div className="bg-white m-4 p-4">
      <Drawer>
        <DrawerTrigger>
          <Button>Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription>Subtitle</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button className="float-right w-[60px]">Done</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export { DrawerExample };
