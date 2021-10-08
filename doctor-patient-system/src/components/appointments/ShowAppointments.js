import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import data from "./data.json";

// console.log(data);
const axios = require('axios');
const qs = require('qs');


const AppointmentDetails = () => {

  const [data, setData] = useState(null);

  const fetchAppointments = async () => {
      const params = {
        "doctor_id": "2"
       };

      try {
          const resp = await axios.post('/fetchAppointments', qs.stringify(params));
          
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

  if(!data) {
    return (
      <h1>NO DATA FOUND</h1>
      )
  }


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Patient Name</th>
          <th>Date</th>
          <th>time</th>
          <th>reason</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.patient}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.reason}</td>
            <td />
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

const Appointment = () => {
  // Hooks
  const [show, setShow] = useState(false);

  // Set Hooks
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // Render
  return (
    <>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Show Appointments
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header>
          <Modal.Title>Appointment Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AppointmentDetails />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Appointment;