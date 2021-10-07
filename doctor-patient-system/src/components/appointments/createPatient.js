import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require('axios');
const qs = require('qs');

const PatientDetails = (props) => {


  const handleSubmit= async (event) => {

    event.preventDefault();
    props.setShow(false);
    console.log(event.target.name.value);
    console.log(event.target.phone.value);

    const params = {
        "name": event.target.name.value,
        "number": event.target.phone.value
    };

    try {
        const resp = await axios.post('/createPatient', qs.stringify(params));
        
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
        <label for="name" class="col-form-label">Patient name:</label><br></br>
        <input type="text" id="name" name="name" class="form-control"></input>
      </div>
      <div class="form-group">
        <label for="phone" class="col-form-label" >Phone Number:</label>
        <input type="text" id="phone" name="phone" class="form-control"></input><br /><br />
      </div>
      <div class="form-group">
        <button type="submit" class="form-control" class="btn btn-success ms-auto-end">Create Patient</button>
      </div>
    </form>
    );
};

const CreatePatient = () => {
    // Hooks
  const [show, setShow] = useState(false);

  // Set Hooks
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Render
  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Create New Patient
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Patient Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PatientDetails setShow={setShow}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreatePatient;