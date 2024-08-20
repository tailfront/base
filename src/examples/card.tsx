/**
 * @file accordion.tsx
 * @overview Sandbox of components.
 */

import { Button } from '@/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/card';
import { Input } from '@/components/input';

/**
 * @returns	{JSX.Element} Example of card usage
 * @example
  import {CardExample} from '@/examples/card.tsx';

  <CardExample />
 */
function CardExample(): JSX.Element {
  document.title = 'Card';
  return (
    <div className="m-8 ">
      <Card className="w-[320px] h-[184px]">
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Subtitle</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Text" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant={'outline'} className="w-[71px]">
            Cancel
          </Button>
          <Button className="w-[60px] tracking-normal">Done</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export { CardExample };
