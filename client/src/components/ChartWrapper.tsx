import React from 'react';
import Chart from 'chart.js/auto';
import { BarChart } from './BarChart';

function ChartWrapper() {
  return (
    <div id='bar-chart'>
      <canvas id='categories-quantities'>
        <BarChart />
      </canvas>
    </div>
  );
}

export default ChartWrapper;
