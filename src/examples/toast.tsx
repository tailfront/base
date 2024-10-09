/**
 * @file toast.tsx
 * @overview Sandbox of components.
 */
import { Button } from '@/components/button';
import { useToast } from '@/components/use-toast';

/**
 * @returns {JSX.Element} Example of toast usage
 * @example
  import {ToastExample} from '@/examples/toast.tsx';

  <ToastExample />
 */
function ToastExample(): JSX.Element {
  const { toast } = useToast();

  return (
    <div className="m-8 bg-white p-4 space-x-4">
      <Button
        onClick={() => {
          toast({
            title: 'Title',
            description: 'Subtitle',
            action: (
              <Button variant="outline" className="w-[55px] h-8 text-xs ">
                Button
              </Button>
            ),
          });
        }}
      >
        default
      </Button>

      <Button
        variant={'destructive'}
        onClick={() => {
          toast({
            title: 'Title',
            description: 'Subtitle',
            variant: 'destructive',
            action: (
              <Button variant="destructive" className="w-[55px] h-8 text-xs ">
                Button
              </Button>
            ),
          });
        }}
      >
        destructive
      </Button>
    </div>
  );
}

export { ToastExample };
