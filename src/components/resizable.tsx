/**
 * @file resizable.tsx
 * @overview Accessible resizable panel groups and layouts with keyboard support.
 * @license https://github.com/tailfront/elements/blob/main/LICENSE
 * @example

  import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  } from "@/components/resizable"

  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel>One</ResizablePanel>
    <ResizableHandle />
    <ResizablePanel>Two</ResizablePanel>
  </ResizablePanelGroup>

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

interface ResizableHandleProps
  extends React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> {
  withHandle?: boolean;
}

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle: React.FC<ResizableHandleProps> = ({
  withHandle,
  className,
  ...props
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={twMerge(
      clsx(
        'flex w-px items-center justify-center bg-stroke-200 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full',
        className,
      ),
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3.5 squircle items-center justify-center rounded border bg-border">
        <IconGripVertical />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

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

export {
  type ResizableHandleProps,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
};
