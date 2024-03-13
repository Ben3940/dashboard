import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { ChartItem } from 'chart.js/auto';
import { generic_fetch } from '../utils/Generic_Fetch';

export function BarChart() {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

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
    let label_arr: String[] = [];
    let value_arr: String[] = [];
    console.log(data);
    data.forEach((item) => {
      label_arr.push(item.Category);
      value_arr.push(item.Quantity);
    });
    setLabels(label_arr);
    setValues(value_arr);
  };
  useEffect(() => {
    load_data();
  }, []);
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
