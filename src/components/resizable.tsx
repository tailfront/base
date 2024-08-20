/**
 * @file resizable.tsx
 * @overview Accessible resizable panel groups and layouts with keyboard support.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example
 * @npm i react
 * @npm i --save-dev @types/react
 * @npm i clsx
 * @npm i tailwind-merge
 * @npm i react-resizable-panels
 */

import { IconGripVertical } from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';
import { twMerge } from 'tailwind-merge';

const ResizablePanelGroup: React.FC<
  React.ComponentProps<typeof ResizablePrimitive.PanelGroup>
> = ({ className, ...props }) => (
  <ResizablePrimitive.PanelGroup
    className={twMerge(
      clsx(
        'flex h-full w-full text-type-950 data-[panel-group-direction=vertical]:flex-col',
        className,
      ),
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;
export interface ResizableHandleProps
  extends React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> {
  withHandle?: boolean;
}
const ResizableHandle: React.FC<ResizableHandleProps> = ({
  withHandle,
  className,
  ...props
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={twMerge(
      clsx(
        'relative flex w-px items-center justify-center bg-stroke-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
        className,
      ),
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <IconGripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
