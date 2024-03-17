import React from 'react';
import { BarChart } from './Bar_Chart';
import { Split_Bar_Chart } from './Split_Bar_Chart';

export function ChartWrapper(props) {
  if (props.chart_type === 'bar') {
    return (
      <div className='chart' id='bar-chart-container'>
        <canvas id='categories-quantities'></canvas>
        <BarChart />
      </div>
    );
  } else if (props.chart_type === 'split-bar') {
    return (
      <div className='chart' id='split-bar-container'>
        <canvas id='split-bar'></canvas>
        <Split_Bar_Chart n={10} />
      </div>
    );
  }
}
