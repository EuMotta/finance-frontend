'use client';

import * as React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { useIsMobile } from '@/hooks/use-mobile';
import { useGetTransactionSummary } from '@/http/generated/client/api';
import { useGetTransactionSummaryParams } from '@/http/generated/params/useGetTransactionSummaryParams';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import EmptyState from '../common/empty-state';
import BasicDateTimeRangePickerExample from '../date/date-range-picker-with-comparison';

const chartConfig = {
  visitors: { label: 'Visitors' },
  desktop: { label: 'Desktop', color: 'hsl(var(--chart-1))' },
  mobile: { label: 'Mobile', color: 'hsl(var(--chart-2))' },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const { params } = useGetTransactionSummaryParams();
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState<'90d' | '30d' | '7d'>('30d');

  React.useEffect(() => {
    if (isMobile) setTimeRange('7d');
  }, [isMobile]);

  const {
    data: summary,
    isLoading,
    isError,
    error,
  } = useGetTransactionSummary(params);

  if (isLoading) return <div>Carregando...</div>;
  if (isError || !summary)
    return (
      <EmptyState
        title="Aconteceu um problema!"
        subtitle={
          error?.message || 'Não sei ainda o que é, mas vou descobrir!.'
        }
        image="/stickers/system.png"
      />
    );

  const rangeData = summary.data.range_data;

  const filteredData = (rangeData.transactions as any[])
    .filter((tx) => {
      const d = new Date(tx.date).getTime();
      return (
        d >= new Date(rangeData.start_month).getTime() &&
        d <= new Date(rangeData.end_month).getTime()
      );
    })
    .map((tx) => ({
      date: tx.date,
      amount: Number(tx.amount),
    }));

  return (
    <Card className="@container/card">
      <CardHeader className="!flex flex-row !justify-between">
        <CardTitle>Transações no intervalo</CardTitle>
        <CardDescription>
          <BasicDateTimeRangePickerExample />
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillAmount" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={1}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={20}
              tickFormatter={(v) =>
                new Date(v).toLocaleDateString('pt-BR', {
                  month: 'short',
                  day: 'numeric',
                })
              }
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(v) =>
                    new Date(v).toLocaleDateString('pt-BR', {
                      month: 'short',
                      day: 'numeric',
                    })
                  }
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="amount"
              type="natural"
              fill="url(#fillAmount)"
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
