import Chart from 'chart.js/auto';
import { ChartItem } from 'chart.js/auto';

(async function load_charts() {
  const labels = ['a', 'b', 'c', 'd'];
  const values = [2, 4, 1, 6];
  console.log('Create Chart');
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
