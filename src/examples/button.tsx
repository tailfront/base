/**
 * @file button.tsx
 * @overview Sandbox of components.
 */

import { Button } from '@/components/button';
import { IconCircle } from '@tabler/icons-react';

/**
 * @returns {JSX.Element} Example of button usage
 * @example
  import {ButtonExample} from '@/examples/button.tsx';

  <ButtonExample />
 */
function ButtonExample(): JSX.Element {
  document.title = 'Button';
  return (
    <div className="bg-white p-4 m-2">
      <div className="flex">
        <div className="flex flex-col gap-4 m-4">
          <div className="flex flex-col gap-2">
            <Button size="lg" variant={'primary'}>
              <IconCircle className="size-5" />
              Button
              <IconCircle className="size-5" />
            </Button>
            <Button variant={'primary'}>
              <IconCircle className="size-4" />
              Button
              <IconCircle className="size-4" />
            </Button>
            <Button size={'sm'} variant={'primary'}>
              <IconCircle className="size-4" />
              Button
              <IconCircle className="size-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <Button size="lg" variant={'secondary'}>
              <IconCircle className="size-5" />
              Button
              <IconCircle className="size-5" />
            </Button>
            <Button variant={'secondary'}>
              <IconCircle className="size-4" />
              Button
              <IconCircle className="size-4" />
            </Button>
            <Button size={'sm'} variant={'secondary'}>
              <IconCircle className="size-4" />
              Button
              <IconCircle className="size-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <Button size="lg" variant={'destructive'}>
              <IconCircle className="size-5" />
              Button
              <IconCircle className="size-5" />
            </Button>
            <Button variant={'destructive'}>
              <IconCircle className="size-4" />
              Button
              <IconCircle className="size-4" />
            </Button>
            <Button size={'sm'} variant={'destructive'}>
              <IconCircle className="size-4" />
              Button
              <IconCircle className="size-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <Button size="lg" variant={'outline'}>
              <IconCircle className="size-5" />
              Button
              <IconCircle className="size-5" />
            </Button>
            <Button variant={'outline'}>
              <IconCircle className="size-4" />
              Button
              <IconCircle className="size-4" />
            </Button>
            <Button size={'sm'} variant={'outline'}>
              <IconCircle className="size-4" />
              Button
              <IconCircle className="size-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            <Button size="lg" variant={'ghost'}>
              <IconCircle className="size-5" />
              Button
              <IconCircle className="size-5" />
            </Button>
            <Button variant={'ghost'}>
              <IconCircle className="size-4" />
              Button
              <IconCircle className="size-4" />
            </Button>
            <Button size={'sm'} variant={'ghost'}>
              <IconCircle className="size-4" />
              Button
              <IconCircle className="size-4" />
            </Button>
          </div>
        </div>
        {/* disabled button */}
        <div>
          <div className="flex flex-col gap-4 m-4">
            <div className="flex flex-col gap-2">
              <Button size="lg" variant={'primary'} disabled>
                <IconCircle className="size-5" />
                Button
                <IconCircle className="size-5" />
              </Button>
              <Button variant={'primary'} disabled>
                <IconCircle className="size-4" />
                Button
                <IconCircle className="size-4" />
              </Button>
              <Button size={'sm'} variant={'primary'} disabled>
                <IconCircle className="size-4" />
                Button
                <IconCircle className="size-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <Button size="lg" variant={'secondary'} disabled>
                <IconCircle className="size-5" />
                Button
                <IconCircle className="size-5" />
              </Button>
              <Button variant={'secondary'} disabled>
                <IconCircle className="size-4" />
                Button
                <IconCircle className="size-4" />
              </Button>
              <Button size={'sm'} variant={'secondary'} disabled>
                <IconCircle className="size-4" />
                Button
                <IconCircle className="size-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <Button size="lg" variant={'destructive'} disabled>
                <IconCircle className="size-5" />
                Button
                <IconCircle className="size-5" />
              </Button>
              <Button variant={'destructive'} disabled>
                <IconCircle className="size-4" />
                Button
                <IconCircle className="size-4" />
              </Button>
              <Button size={'sm'} variant={'destructive'} disabled>
                <IconCircle className="size-4" />
                Button
                <IconCircle className="size-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <Button size="lg" variant={'outline'} disabled>
                <IconCircle className="size-5" />
                Button
                <IconCircle className="size-5" />
              </Button>
              <Button variant={'outline'} disabled>
                <IconCircle className="size-4" />
                Button
                <IconCircle className="size-4" />
              </Button>
              <Button size={'sm'} variant={'outline'} disabled>
                <IconCircle className="size-4" />
                Button
                <IconCircle className="size-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <Button size="lg" variant={'ghost'} disabled>
                <IconCircle className="size-5" />
                Button
                <IconCircle className="size-5" />
              </Button>
              <Button variant={'ghost'} disabled>
                <IconCircle className="size-4" />
                Button
                <IconCircle className="size-4" />
              </Button>
              <Button size={'sm'} variant={'ghost'} disabled>
                <IconCircle className="size-4" />
                Button
                <IconCircle className="size-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 m-4">
          <div className="flex flex-col gap-2">
            <Button size={'icon'} variant={'primary'}>
              <IconCircle className="size-4" />
            </Button>
            <Button size={'icon'} variant={'secondary'}>
              <IconCircle className="size-4" />
            </Button>
            <Button size={'icon'} variant={'destructive'}>
              <IconCircle className="size-4" />
            </Button>
            <Button size={'icon'} variant={'outline'}>
              <IconCircle className="size-4" />
            </Button>
            <Button size={'icon'} variant={'ghost'}>
              <IconCircle className="size-4" />
            </Button>
          </div>
          {/* disabled button */}
          <div className="flex flex-col gap-2">
            <Button size={'icon'} variant={'primary'} disabled>
              <IconCircle className="size-4" />
            </Button>
            <Button size={'icon'} variant={'secondary'} disabled>
              <IconCircle className="size-4" />
            </Button>
            <Button size={'icon'} variant={'destructive'} disabled>
              <IconCircle className="size-4" />
            </Button>
            <Button size={'icon'} variant={'outline'} disabled>
              <IconCircle className="size-4" />
            </Button>
            <Button size={'icon'} variant={'ghost'} disabled>
              <IconCircle className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { ButtonExample };
