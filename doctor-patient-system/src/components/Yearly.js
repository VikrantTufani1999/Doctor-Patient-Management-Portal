import { useRef } from "react";
import "./styles.css";
import { Bar } from "react-chartjs-2";

const yearlychartData = {
  labels: ["Dr.Pramod", "Dr.Shivaram", "Dr.Joshua", "Dr.Divyani", "Dr.Vikrant"],
  datasets: [
    {
      label: "Yearly Income of Doctors",
      data: [2000000, 1900000, 2200000, 2500000, 2300000],
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

export default yearlychartData;
