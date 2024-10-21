/**
 * @file resizable.tsx
 * @overview Sandbox of components.
 */

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/resizable';

/**
 * @returns {JSX.Element} Example of resizable usage
 * @example
  import {ResizableExample} from '@/examples/resizable.tsx';

	<ResizableExample />
 */
function ResizableExample(): JSX.Element {
  document.title = 'Resizable';
  return (
    <div className="bg-white p-4 flex gap-4">
      <div className="w-[440px]">
        <ResizablePanelGroup
          direction="horizontal"
          className="rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center">
                  <span className="font-medium tracking-normal text-sm">
                    One
                  </span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center">
                  <span className="font-medium tracking-normal text-sm">
                    Two
                  </span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[206px] items-center justify-center">
              <span className="font-medium tracking-normal text-sm">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="w-[440px]">
        <ResizablePanelGroup direction="vertical" className="rounded-lg border">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center">
              <span className="font-medium text-sm">Header</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center">
              <span className="font-medium text-sm">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <div className="w-[440px]">
        <ResizablePanelGroup
          direction="horizontal"
          className="rounded-lg border"
        >
          <ResizablePanel defaultSize={29}>
            <div className="flex h-full items-center justify-center">
              <span className="font-medium text-sm tracking-normal">
                Sidebar
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={71}>
            <div className="flex h-full items-center justify-center">
              <span className="font-medium text-sm">Content</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

export { ResizableExample };
