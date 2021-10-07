import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Form } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require('axios');
const qs = require('qs');

const AppointmentDetails = (props) => {

  const [data, setData] = useState(null);

  const fetchPatients = async () => {

      try {
          const resp = await axios.get('/fetchPatients');
          
          let dataObj = JSON.parse(resp.data.data);
          console.log(dataObj);
          setData(dataObj);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
  };

  useEffect(()=>{
      fetchPatients();
  }, [])


  const handleSubmit= async (event) => {

    event.preventDefault();
    props.setShow(false);
    console.log(event.target.name.value);
    console.log(event.target.reason.value);
    console.log(event.target.date.value + " " + event.target.time.value + ":00");
    console.log(event.target.time.value);

    const params = {
        "doctor_id": "2",   // HardCoded
        "patient_id": event.target.name.value,
        "time": event.target.date.value + " " + event.target.time.value + ":00",
        "reason": event.target.reason.value
    };

    try {
        const resp = await axios.post('/createAppointment', qs.stringify(params));
        
        let dataObj = JSON.parse(resp.data.data);
        console.log(dataObj);
 
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }

  }

  if(!data) {
    return (
      <h1>NO DATA FOUND</h1>
      )
  }



  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="name" class="col-form-label">Patient name:</label><br></br>
        <select class="form-select" id="name" aria-label="Default select example">
        {
          data?
                data.map((item) => (
                <option value={item.patient_id}>{item.name}</option>
          )):<option value="empty">empty</option>
        }
        </select>
      </div>
      <div class="form-group">
        <label for="reason" class="col-form-label" >Reason For the Appointment:</label>
        <input type="text" id="reason" name="reason" class="form-control"></input>
      </div>
      <div class="form-group">
        <label for="date" class="col-form-label" >Date :</label>
        <input type = "date" id="date" class="form-control"></input>
      </div>
      <div class="form-group">
        <label for="time" class="col-form-label">Time :</label>
        <input type ="time" id="time" class="form-control"></input><br /><br /><br />
      </div>
      <div class="form-group">
        <button type="submit" class="form-control" class="btn btn-success ms-auto-end">Book Appointment</button>
      </div>
    </form> 
    );
};

const CreateAppointment = () => {
    // Hooks
  const [show, setShow] = useState(false);

  // Set Hooks
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Render
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Appointments
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Appointment Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AppointmentDetails setShow={setShow}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateAppointment;