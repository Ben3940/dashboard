import React from 'react';
import Chart from 'chart.js/auto';
import { ChartItem } from 'chart.js/auto';

export function BarChart() {
  const labels = ['a', 'b', 'c', 'd'];
  const values = [2, 4, 1, 6];
  (async function () {
    new Chart(document.querySelector('#categories-quantities') as ChartItem, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Products',
            data: values,
          },
        ],
      },
    });
  })();

  return <></>;
}
