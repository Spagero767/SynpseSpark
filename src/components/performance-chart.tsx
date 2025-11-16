"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { date: "Mon", score: 7800 },
  { date: "Tue", score: 8100 },
  { date: "Wed", score: 7900 },
  { date: "Thu", score: 8500 },
  { date: "Fri", score: 8300 },
  { date: "Sat", score: 8800 },
  { date: "Sun", score: 9200 },
];

const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function PerformanceChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="date"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          stroke="hsl(var(--muted-foreground))"
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          stroke="hsl(var(--muted-foreground))"
          tickFormatter={(value) =>
            typeof value === 'number' ? value.toLocaleString() : value
          }
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="dot" />}
        />
        <Bar dataKey="score" fill="var(--color-score)" radius={8} />
      </BarChart>
    </ChartContainer>
  );
}
