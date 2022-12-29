import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Passed", "Failed", "Pending"],
  datasets: [
    {
      label: "proposal status",
      data: [12, 19, 3],
      backgroundColor: [
        "rgba(60, 179, 113, 0.2)",
        "rgba(255, 0, 0, 0.2)",
        "rgba(108, 122, 137, 0.2)",
      ],
      borderColor: [
        "rgba(60, 179, 113, 1)",
        "rgba(255, 0, 0, 1)",
        "rgba(108, 122, 137, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return (
    <div style={{ heigh: 400, width: 600 }} className="container mx-auto my-32">
      <h1 style={{ textAlign: "center" }}>Doughnut Chart</h1>
      <Doughnut data={data} />
    </div>
  );
}

