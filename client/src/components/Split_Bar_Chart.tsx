import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { ChartItem } from 'chart.js/auto';
import { generic_fetch } from '../utils/Generic_Fetch';

interface City_Profit {
  City: string;
  Profit: number;
}

export function Split_Bar_Chart(props) {
  const [cities, setCities] = useState<string[]>([]);
  const [profits, setProfits] = useState<number[]>([]);

  const load_data = async () => {
    const data = await generic_fetch(
      `query City_Profits {
        get_n_best_worst_profits(n: ${props.n}) {
          City,
          Profit
        }
      }`,
      'get_n_best_worst_profits'
    );
    let city_arr: string[] = [];
    let profit_arr: number[] = [];

    data.forEach((item: City_Profit) => {
      city_arr.push(item.City);
      profit_arr.push(item.Profit);
    });

    setCities(city_arr);
    setProfits(profit_arr);
  };

  useEffect(() => {
    load_data();
  }, []);
  const generate_chart = async function () {
    const chart = new Chart(document.querySelector('#split-bar') as ChartItem, {
      type: 'bar',
      data: {
        labels: cities,
        datasets: [
          {
            label: 'Profits',
            data: profits,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            position: 'bottom',
          },
        },
      },
    });
    let colors: string[] = [];

    // Assign bar colors based on profit value
    chart.data.datasets[0].data.forEach((sample) => {
      const color: string = sample > 0 ? 'green' : 'red';
      colors.push(color);
    });
    chart.data.datasets[0].backgroundColor = colors;
    chart.update();
  };

  generate_chart();
  return <></>;
}
