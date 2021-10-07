import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const axios = require('axios');
const qs = require('qs');

export default function CriticalTable() {
  

    const [data, setData] = useState([]);
  
    const fetchAppointments = async () => {
       
  
        try {
            const resp = await axios.post('/fetchCritical');
            
            let dataObj = JSON.parse(resp.data.data);
            console.log(dataObj);
            setData(dataObj);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    
    useEffect(()=>{
        fetchAppointments();
    }, [])
  

  
  return (
    <>
      <br />
      <h3 class="head1">CRITICAL PATIENTS RECORD</h3>
      <div class="table1">
        <Table striped bordered hover variant="primary">
          <thead>
            <tr>
              <th>Patient_id</th>
              <th>Patient_Name</th>
              <th>Time</th>
              <th>Diagnosis</th>
              <th>Prescription</th>
              <th>condition</th>
              <th>amount</th>
            </tr>
          </thead>
          <tbody>
          {data.map((item) => (
          <tr key={item.id}>
            <td>{item.patient_id}</td>
            <td>{item.pname}</td>
            <td>{item.time}</td>
            <td>{item.diagnosis}</td>
            <td>{item.prescription}</td>
            <td>{item.condition}</td>
            <td>{item.amount}</td>
            
            
          </tr>
        ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
