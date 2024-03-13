import React from 'react';
import { BarChart } from './Bar_Chart';

export function ChartWrapper() {
  return (
    <div id='bar-chart'>
      <canvas id='categories-quantities'></canvas>
      <BarChart />
    </div>
  );
}
