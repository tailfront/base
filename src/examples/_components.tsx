/**
 * @file _components.tsx
 * @overview Sandbox navigation.
 */

import { Link } from 'react-router-dom';

/**
 * @returns {JSX.Element} Navigational links
 * @example
  import {Navigation} from '@/examples/_components.tsx';

  <Navigation />
  */
function Navigation(): JSX.Element {
  return (
    <div className="flex flex-col gap-2 m-4">
      <Link to="/accordion">Accordion</Link>
      <Link to="/avatar">Avatar</Link>
      <Link to={'/progress'}>Progress</Link>
      <Link to={'/badge'}>Badge</Link>
    </div>
  );
}
export { Navigation };
