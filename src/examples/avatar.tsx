/**
 * @file avatar.tsx
 * @overview Avatar component.
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
    <div className="m-8 flex gap-4">
      <Avatar>
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@tailfront" />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
    </div>
  );
}
export { AvatarExample };
