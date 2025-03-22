
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function SensorChart({ label, data, color }) {
  const chartData = {
    labels: data.map((_, index) => index), // X-axis = time steps
    datasets: [
      {
        label: label,
        data: data,
        borderColor: color,
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const options = {
    animation: false,
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
