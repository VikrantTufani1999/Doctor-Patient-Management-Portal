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
    console.log(event.target.patientSelection.value);

    const params = {
        "patient_id": event.target.patientSelection.value
    };

    try {
        const resp = await axios.post('/deletePatient', qs.stringify(params));
        
        // let dataObj = JSON.parse(resp.data);
        console.log(resp.data);
 
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="patientSelection" class="col-form-label">Select Patient :</label><br></br>
        <select class="form-select" id="patientSelection" aria-label="Default select example">
        {
          props.data ?
                props.data.map((item) => (
                <option value={item.patient_id}>{item.name}</option>
          )):<option value="empty">empty</option>
        }
        </select>
      </div><br /><br />
      <div class="form-group">
        <button type="submit" class="form-control" class="btn btn-danger ms-auto-end">Delete Patient</button>
      </div>
    </form>
    );
};

const DeletePatient = () => {
    // Hooks
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);

  // Set Hooks
  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);
    try {
        const resp = await axios.get('/fetchPatients');
        
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
      <Button variant="danger" size="lg"  onClick={handleShow}>
        Delete Patient Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Delete Patient Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <PatientDetails data={data} setShow={setShow}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeletePatient;