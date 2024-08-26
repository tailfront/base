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
    <ul className="flex flex-col gap-2 m-4 text-type-950 list-decimal list-inside">
      <li>
        <Link to={'/accordion'}>Accordion</Link>
      </li>
      <Separator />
      <li>
        <Link to={'/avatar'}>Avatar</Link>
      </li>
      <li>
        <Link to={'/progress'}>Progress</Link>
      </li>
      <li>
        <Link to={'/badge'}>Badge</Link>
      </li>
      <li>
        <Link to={'/toogle'}>Toggle</Link>
      </li>
      <Separator />
      <li>
        <Link to={'/breadcrumb'}>Breadcrumb</Link>
      </li>
      <li>
        <Link to={'/dropdown-menu'}>Dropdown menu</Link>
      </li>
      <li>
        <Link to={'/button'}>Button</Link>
      </li>
      <li>
        <Link to={'/card'}>Card</Link>
      </li>
      <li>
        <Link to={'/input'}>Input</Link>
      </li>
      <li>
        <Link to={'/separator'}>Separator</Link>
      </li>
      <li>
        <Link to={'/dialog'}>Dialog</Link>
      </li>
      <li>
        <Link to={'/alert-dialog'}>Alert dialog</Link>
      </li>
      <Separator />
      <li>
        <Link to={'/skeleton'}>Skeleton</Link>
      </li>
      <li>
        <Link to={'/textarea'}>Textarea</Link>
      </li>
      <li>
        <Link to={'/switch'}>Switch</Link>
      </li>
      <li>
        <Link to={'/resizable'}>Resizable</Link>
      </li>
      <li>
        <Link to={'/toggle-group'}>Toggle group</Link>
      </li>
      <li>
        <Link to={'label'}>Label</Link>
      </li>
      <li>
        <Link to={'/form'}>Form</Link>
      </li>
      <li>
        <Link to={'/select'}>Select</Link>
      </li>
      <li>
        <Link to={'/toast'}>Toast</Link>
      </li>
      <li>
        <Link to={'/popover'}>Popover</Link>
      </li>
      <li>
        <Link to={'/tooltip'}>Tooltip</Link>
      </li>
      <li>
        <Link to={'/input-otp'}>Input OTP</Link>
      </li>
      <li>
        <Link to={'/scroll-area'}>Scroll Area</Link>
      </li>
      <li>
        <Link to={'/tabs'}>Tabs</Link>
      </li>
      <li>
        <Link to={'/radio-group'}>Radio Group</Link>
      </li>
      <li>
        <Link to={'hover-card'}>Hover Card</Link>
      </li>
      <li>
        <Link to={'/drawer'}>Drawer</Link>
      </li>
      <li className="text-red-400">
        <Link to={'/table'}>Table</Link>
      </li>
      <li>
        <Link to={'/sheet'}>Sheet</Link>
      </li>
      <li className="text-red-400">
        <Link to={'/carousel'}>Carousel</Link>
      </li>
      <li className="text-red-400">
        <Link to={'/slider'}>Slider</Link>
      </li>
      <li>
        <Link to={'/alert'}>Alert</Link>
      </li>
      <li>
        <Link to={'/calendar'}>Calendar</Link>
      </li>
    </ul>
  );
}
export { Navigation };
