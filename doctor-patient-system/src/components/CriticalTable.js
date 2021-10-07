import React from "react";
import Table from "react-bootstrap/Table";

export default function CriticalTable() {
  return (
    <>
      <h3>Critical Patients Record</h3>

      <Table stripped bordered hover size="sm">
        <thead>
          <tr>
            <th width="170">Patient_id</th>
            <th width="170">Patient_Name</th>
            <th width="170">Time</th>
            <th width="870">Diagnosis</th>
            <th width="950">Prescription</th>
            <th width="170">condition</th>
            <th width="170">amount</th>
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
        </tbody>
      </Table>
    </>
  );
}
