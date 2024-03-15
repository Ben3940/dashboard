import React from 'react';
import Chart from 'chart.js/auto';
import { ChartItem } from 'chart.js/auto';

export function Split_Bar_Chart() {
  const labels = ['A', 'B', 'C', 'D', 'E'];
  const values = [2.5, 1, -1, 4, -3];

  const generate_chart = async function () {
    new Chart(document.querySelector('#split-bar') as ChartItem, {
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
      options: {
        scales: {
          x: {
            position: 'center',
          },
        },
      },
    });
  };
  generate_chart();
  return <></>;
}
