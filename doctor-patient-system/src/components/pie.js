import { useRef } from "react";
import "./styles.css";
import { Pie } from "react-chartjs-2";

const PiechartData = {
  labels: ["Dr.Pramod", "Dr.Shivaram", "Dr.Joshua", "Dr.Divyani", "Dr.Vikrant"],
  datasets: [
    {
      label: "Patients Treated",
      data: [200, 190, 220, 250, 230],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
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

export default PiechartData;
