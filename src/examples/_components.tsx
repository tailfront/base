/**
 * @file _components.tsx
 * @overview Sandbox navigation.
 */

import { Separator } from '@/components/separator';
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
      <Link to={'/accordion'}>Accordion</Link>
      <Separator />
      <Link to={'/avatar'}>Avatar</Link>
      <Link to={'/progress'}>Progress</Link>
      <Link to={'/badge'}>Badge</Link>
      <Link to={'/toogle'}>Toogle</Link>
      <Separator />
      <Link to={'/breadcrumb'}>Breadcrumb</Link>
      <Link to={'/dropdown-menu'}>Dropdown menu</Link>
      <Link to={'/button'}>Button</Link>
      <Link to={'/card'}>Card</Link>
      <Link to={'/input'}>Input</Link>
      <Link to={'/separator'}>Separator</Link>
      <Link to={'/dialog'}>Dialog</Link>
      <Link to={'/alert-dialog'}>Alert dialog</Link>
    </div>
  );
}
export { Navigation };
