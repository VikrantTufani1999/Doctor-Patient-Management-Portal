import { useRef } from "react";
import "./styles.css";
import { Bar, Pie } from "react-chartjs-2";
import dailychartData from "./daily";
import monthlychartData from "./Monthly";
import yearlychartData from "./Yearly";
import PiechartData from "./pie";

export default function ChartsPage() {
  const chartRef = useRef();
  return (
    <div className="Charts">
      <div class="midChart">
        <Bar
          ref={chartRef}
          data={dailychartData}
          width={300}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <br />
      <div class="midChart">
        <Bar
          ref={chartRef}
          data={monthlychartData}
          width={300}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
      <br />
      <div class="midChart">
        <Bar
          ref={chartRef}
          data={yearlychartData}
          width={300}
          height={400}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    </div>
  );
}
