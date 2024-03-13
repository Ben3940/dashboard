import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { ChartItem } from 'chart.js/auto';
import { generic_fetch } from '../utils/Generic_Fetch';

interface CategoryQuantities {
  Category: string;
  Quantity: number;
}

export function BarChart() {
  const [labels, setLabels] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);

  // Load data from GraphQL API.  Data is used by chart
  const load_data = async () => {
    const data = await generic_fetch(
      `query Data {
        category_quantities {
          Category,
          Quantity
        }
      }
      `,
      'category_quantities'
    );
    let label_arr: string[] = [];
    let value_arr: number[] = [];

    // Load data into respective state array
    data.forEach((item: CategoryQuantities) => {
      label_arr.push(item.Category);
      value_arr.push(item.Quantity);
    });
    setLabels(label_arr);
    setValues(value_arr);
  };

  useEffect(() => {
    load_data();
  }, []);

  // Slightly more readible than suggested generic call in docs:
  //   https://www.chartjs.org/docs/latest/getting-started/usage.html
  const generate_chart = async function () {
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
  };

  generate_chart();

  return <></>;
}
