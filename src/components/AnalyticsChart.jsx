import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './AnalyticsChart.css';

// Register all necessary components
Chart.register(...registerables);

const AnalyticsChart = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Project Completion Over Time',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: '#00796b',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          }
        }
      }
    }
  };

  return (
    <div className="analytics-chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default AnalyticsChart;
