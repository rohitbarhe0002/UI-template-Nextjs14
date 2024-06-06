import React from 'react';
import BarChart from './page';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Sales Data',
    },
  },
  scales: {
    x: {
      grid: {
        display: false 
      }
    },
    y: {
      grid: {
        display: false 
      }
    }
  }
};

const chart = () => {
  return (
    <div>
      <BarChart data={data} options={options} />
    </div>
  );
};

export default chart;
