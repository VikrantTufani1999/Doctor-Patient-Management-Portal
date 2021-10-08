import React from "react";
import { useRef, useEffect, useState } from "react";
import "./styles.css";
import { Bar, Pie } from "react-chartjs-2";
const axios = require('axios');


function IllnessChart() {
    const chartRef = useRef();

    const [data_info, setData] = useState(null);

    const fetchData = async () => {
        try {
          const res = await axios.get('/fetchIllnessCount');
      
          // console.log("Data fetched from emdat")
          console.log(res.data);  
          setData(res.data.data);

          // return res.data;
        }
        catch(e){
          console.log(e);
          return null;
        }
    }

    useEffect(() => {
        // You need to restrict it at some point
        // This is just dummy code and should be replaced by actual
        if (!data_info) {
          fetchData();
        }
    }, []);

    //   // console.log(data_info)
    // setTimeout(() => { 
    //   console.log(data_info.illness) 
    //   console.log(data_info.count) 
    // }, 500);

    if(!data_info)
      {
        console.log("NO_DATA_FOUND for active case distribution near Mumbai")
        return null;
    }

    setTimeout(() => { 
      console.log(data_info) 
      console.log(data_info) 
    }, 500);

    var options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            min: 0
          }    
        }]
      }
    };

    return (
      <div className="Charts2">
        <div class="midChart">
          <Bar
            ref={chartRef}
            data = {{
              labels: data_info.illness,
              datasets: [
                {
                  label: "Illness count",
                  data: data_info.count,
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
                    "rgba(200, 100, 192, 1)",
                    "rgba(100, 192, 80, 1)",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
            width={300}
            height={400}
            options={options}
          />
        </div>
        </div>
  );
}

export default IllnessChart;
