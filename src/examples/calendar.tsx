/**
 * @file calendar.tsx
 * @overview Sandbox of components.
 */

import { Calendar } from '@/components/calendar';
import React from 'react';

/**
 * @returns {JSX.Element} Example of calendar usage
 * @example
  import {CalendarExample} from '@/examples/calendar.tsx';

  <CalendarExample />
 */
function CalendarExample(): JSX.Element {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  document.title = 'Calendar';
  return (
    <div className="bg-white m-8 p-4 w-[256px]">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </div>
  );
}

export { CalendarExample };
