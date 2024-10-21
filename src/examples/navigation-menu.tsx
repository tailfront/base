/**
 * @file navigation.tsx
 * @overview Sandbox of components.
 */

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/navigation-menu';
import {
  IconBellRingingFilled,
  IconChartLine,
  IconMouse,
  IconScript,
  IconTableColumn,
  IconTooltip,
} from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const components: {
  title: string | undefined;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content',
    icon: <IconBellRingingFilled />,
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
    icon: <IconMouse />,
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task',
    icon: <IconChartLine />,
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Augments native scroll functionality for custom',
    icon: <IconScript />,
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content known as tab panels',
    icon: <IconTableColumn />,
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description: 'A popup that displays information related to an element',
    icon: <IconTooltip />,
  },
];

/**
 * @returns {JSX.Element} Example of navigation usage
 * @example
	import {NavigationExample} from '@/examples/navigation.tsx';

	<NavigationExample />
 */
function NavigationMenuExample(): JSX.Element {
  document.title = 'Navigation';
  return (
    <div className="bg-white m-8 p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col p-4 w-[528px] ">
                <ListItem href="/docs" title="Introduction">
                  Beautifully designed components that you can copy and paste
                  into your apps. Accessible.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[720px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    href={component.href}
                    className="w-[336px]"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center size-10 rounded-full bg-container-100">
                        <span className="size-4 flex items-center justify-center text-type-950">
                          {component.icon}
                        </span>
                      </div>
                      <div className="w-[248px] flex flex-col">
                        <span className="text-type-950">{component.title}</span>
                        <span>{component.description}</span>{' '}
                      </div>
                    </div>
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="p-4 w-[288px]">
                <ListItem href="/instroduction">
                  <span className="text-type-950">Introduction</span>
                </ListItem>
                <ListItem href="/installition">
                  <span className="text-type-950">Installition</span>
                </ListItem>
                <ListItem href="/typography">
                  <span className="text-type-950">Typography</span>
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export { NavigationMenuExample };

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className="squircle">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={twMerge(
            clsx(
              'block select-none space-y-2 rounded-md py-3.5 px-3 leading-none no-underline outline-none transition-colors hover:bg-container-100 focus:bg-container-100',
              className,
            ),
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-type-950">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-type-500">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
