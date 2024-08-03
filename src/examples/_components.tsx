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
    <>
      <Link to="/accordion">Accordion</Link>
    </>
  );
}

export { Navigation };
