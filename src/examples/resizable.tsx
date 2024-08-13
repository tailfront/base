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
      <ResizablePanelGroup
        direction="horizontal"
        className="max-w-[440px] rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">One</span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Two</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[206px] items-center justify-center p-6">
            <span className="font-semibold">One</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[208px] max-w-[440px] rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Header</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>

      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[208px] max-w-[440px] rounded-lg border"
      >
        <ResizablePanel defaultSize={29}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={71}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export { ResizableExample };
