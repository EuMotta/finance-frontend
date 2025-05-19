'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

import {
  DateTimeRangePicker,
  type DateTimeRange,
} from './date-time-range-picker/date-time-range-picker';

export default function BasicDateTimeRangePickerExample() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [dateTimeRange, setDateTimeRange] = useState<{
    range: DateTimeRange;
  }>({
    range: {
      from: new Date(),
      to: new Date(new Date().setDate(new Date().getDate() + 7)),
    },
  });
  const handleChangeRange = (range: DateTimeRange) => {
    const from =
      typeof range.from === 'string' ? new Date(range.from) : range.from;
    const to = typeof range.to === 'string' ? new Date(range.to) : range.to;

    const params = new URLSearchParams(searchParams.toString());
    params.set('start_month', from.toISOString());
    params.set('end_month', to.toISOString());

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <DateTimeRangePicker
        initialDateFrom={dateTimeRange.range.from}
        initialDateTo={dateTimeRange.range.to}
        onUpdate={({ range }) => {
          setDateTimeRange({ range });
          handleChangeRange(range);
        }}
      />
    </div>
  );
}
