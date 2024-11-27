import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ActivityChart = () => {
  const data = {
    labels: ['Active', 'Inactive'],
    datasets: [
      {
        data: [95, 5],
        backgroundColor: ['#4CAF50', '#F44336'],
        hoverBackgroundColor: ['#66BB6A', '#E57373'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw}%`,
        },
      },
    },
  };

  return (
    <div style={{ width: '100px', height: '100px', margin: 'auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
