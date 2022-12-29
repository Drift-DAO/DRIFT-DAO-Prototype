import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = [
  "Proposal 1",
  "Proposal 2",
  "Proposal 3",
  "Proposal 4",
  "Proposal 5",
  "Proposal 6",
];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Total participation in proposals',
      data:[200,250, 350, 400, 540, 600],
      // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function App() {
  return (
    <div style={{ heigh: 400, width: 600 }} className="container mx-auto my-32">
      <h1 style={{ textAlign: "center" }}>Area Chart</h1>
      <Line options={options} data={data} />
    </div>
  );
}
