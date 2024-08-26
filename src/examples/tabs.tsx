/**
 * @file tabs.tsx
 * @overview Sandbox of components.
 */

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';

/**
 * @returns {JSX.Element} Example of tabs usage
 * @example
	import {TabsExample} from '@/examples/tabs.tsx';

	<TabsExample />
 */
function TabsExample(): JSX.Element {
  document.title = 'Tabs';
  return (
    <div className="bg-white m-8 p-4 flex flex-col gap-4">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="tab1">Tab</TabsTrigger>
          <TabsTrigger value="tab2">Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="tab2">Change your password here.</TabsContent>
      </Tabs>

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="tab1">Tab</TabsTrigger>
          <TabsTrigger value="tab2">Tab</TabsTrigger>
          <TabsTrigger value="tab3">Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="tab2">Change your password here.</TabsContent>
        <TabsContent value="tab3">
          Make changes to your account here.
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="tab1">Tab</TabsTrigger>
          <TabsTrigger value="tab2">Tab</TabsTrigger>
          <TabsTrigger value="tab3">Tab</TabsTrigger>
          <TabsTrigger value="tab4">Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="tab2">Change your password here.</TabsContent>
        <TabsContent value="tab3">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="tab4">Change your password here.</TabsContent>
      </Tabs>

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="tab1">Tab</TabsTrigger>
          <TabsTrigger value="Tab2">Tab</TabsTrigger>
          <TabsTrigger value="tab3">Tab</TabsTrigger>
          <TabsTrigger value="tab4">Tab</TabsTrigger>
          <TabsTrigger value="tab5">Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="tab2">Change your password here.</TabsContent>
        <TabsContent value="tab3">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="tab4">Change your password here.</TabsContent>
        <TabsContent value="tab5">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export { TabsExample };
