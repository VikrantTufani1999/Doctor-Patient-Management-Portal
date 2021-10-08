import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require('axios');
const qs = require('qs');

const AppointmentDetails = (props) => {


  const handleSubmit= async (event) => {

    event.preventDefault();
    props.setShow(false);
    console.log(event.target.appointment.value);

    const params = {
        "apt_id": event.target.appointment.value
    };

    try {
        const resp = await axios.post('/deleteAppointment', qs.stringify(params));
        
        let dataObj = JSON.parse(resp.data);
        console.log(resp.data.status);
 
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="appointment" class="col-form-label">Select Appointment :</label><br></br>
        <select class="form-select" id="appointment" aria-label="Default select example">
        {
          props.data ?
                props.data.map((item) => (
                <option value={item.apt_id}>{item.name} {item.time}</option>
          )):<option value="empty">empty</option>
        }
        </select>
      </div><br /><br />
      <div class="form-group">
        <button type="submit" class="form-control" class="btn btn-danger ms-auto-end">Delete Appointment</button>
      </div>
    </form>
    );
};

const DeleteAppointment = () => {
    // Hooks
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  // Set Hooks
  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    try {
        const resp = await axios.post('/fetchPatientAppointments');
        
        let dataObj = JSON.parse(resp.data.data);
        console.log(dataObj);
        setData(dataObj);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  }


  // Render
  return (
    <>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Delete Appointment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Delete Appointment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AppointmentDetails data={data} setShow={setShow}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeleteAppointment;