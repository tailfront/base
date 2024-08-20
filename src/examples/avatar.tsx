/**
 * @file avatar.tsx
 * @overview Sandbox of components.
 */

import { Avatar, AvatarFallback, AvatarImage } from '@/components/avatar';

/**
 * @returns {JSX.Element} Example of avatar usage
 * @example
 * import {AvatarExample} from '@/examples/avatar.tsx';

   <AvatarExample />
 */
function AvatarExample(): JSX.Element {
  document.title = 'Avatar';
  return (
    <div className="m-8 flex gap-4 bg-white p-4">
      <Avatar>
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/173272923?s=200&v=4"
          alt="@tailfront"
          className="size-10"
        />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
    </div>
  );
}

export { AvatarExample };
