import React from "react";
import { useRef } from "react";
import "./styles.css";
import { Bar, Pie } from "react-chartjs-2";

const chartData = {
  labels: ["Covid-19", "Malaria", "Dengue", "Typhoid"],
  datasets: [
    {
      label: "Illness count",
      data: [35, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.8)",
        "rgba(54, 162, 235, 0.8)",
        "rgba(255, 206, 86, 0.8)",
        "rgba(75, 192, 192, 0.8)",
        "rgba(153, 102, 255, 0.8)",
        "rgba(255, 159, 64, 0.8)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

function IllnessChart() {
    const chartRef = useRef();
    return (
      <div className="Charts2">
        <div class="midChart">
          <Bar
            ref={chartRef}
            data={chartData}
            width={300}
            height={400}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        </div>
  );
}

export default IllnessChart;
