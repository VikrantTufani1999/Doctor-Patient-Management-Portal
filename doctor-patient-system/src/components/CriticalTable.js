import React from "react";
import Table from "react-bootstrap/Table";
import "./styles.css";

export default function CriticalTable() {
  return (
    <>
      <br />
      <h3 class="head1">CRITICAL PATIENTS RECORD</h3>
      <div class="table1">
        <Table striped bordered hover variant="dark">
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
            <tr>
              <td>1</td>
              <td>Rakesh</td>
              <td>19:30</td>
              <td>Multiple Trauma</td>
              <td>Medicine</td>
              <td>Critical</td>
              <td>1700</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Rakesh</td>
              <td>19:30</td>
              <td>Multiple Trauma</td>
              <td>Medicine</td>
              <td>Critical</td>
              <td>1700</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Rakesh</td>
              <td>19:30</td>
              <td>Multiple Trauma</td>
              <td>Medicine</td>
              <td>Critical</td>
              <td>1700</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}
