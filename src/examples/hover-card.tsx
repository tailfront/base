/**
 * @file hover-card.tsx
 * @overview Sandbox of components.
 */

import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';
import { Button } from '@/components/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/hover-card';
import { IconCalendarWeek } from '@tabler/icons-react';

/**
 * @returns {JSX.Element} Example of hover card usage
 * @example
  import {HoverCardExample} from '@/examples/hover-card.tsx';

  <HoverCardExample />
 */
function HoverCardExample(): JSX.Element {
  document.title = 'HoverCard';
  return (
    <div className="bg-white m-12 pl-20 p-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="ghost" className="w-[73px]">
            NextJS
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-[332px] h-[124px]">
          <div className="flex justify-between space-x-3">
            <Avatar className="size-12">
              <AvatarImage src="https://avatars.githubusercontent.com/u/173272923?s=200&v=4" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-2 w-60">
              <div className="space-y-1">
                <h4 className="text-base h-6 flex items-center font-medium text-type-950">
                  @NextJS
                </h4>
                <p className="text-sm text-type-500">
                  The React Framework – created and maintained by @vercel.
                </p>
              </div>
              <div className="flex items-center text-type-400">
                <IconCalendarWeek className="mr-1 size-4 opacity-70" />{' '}
                <span className="text-xs text-muted-foreground">
                  Joined Dec 2021
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export { HoverCardExample };
