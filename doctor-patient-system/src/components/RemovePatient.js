import React, { useState, useRef } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";

const AppointmentDetails = () => {

  // const ShowData = (e) => {
  //   var colValue= this.dataItem($(e.currentTarget).closest("tr"));
  //   console.log(colValue);
  // };

  return (
    <div class="table2">
      <Table id="users" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Doctor Name</th>
            <th>Time</th>
            <th>Diagnosis</th>
            <th>Prescription</th>
            <th>Condition</th>
            <th>Amount</th>
            <th>Other</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>Dr Vikrant</td>
            <td>1730</td>
            <td>Malaria</td>
            <td>Paracetamol</td>
            <td>Mild</td>
            <td>150</td>
            <td>
              <button type="button" class="btn btn-primary" onClick={ShowData}>
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const Appointmentup = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Illness</th>
          <th>Date</th>
          <th>Medicine</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Covid-19</td>
          <td>23-2-19</td>
          <td>Dolo</td>
          <td>
            <button type="button" class="btn btn-primary">
              Remove
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>

          <td>Dengue</td>
          <td>3-3-19</td>
          <td>crocin</td>
          <td>
            <button type="button" class="btn btn-primary">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

const Appointment = () => {
  return (
    <>
      <AppointmentDetails />
    </>
    // Hooks
    //   const [show, setShow] = useState(false);

    //   // Set Hooks
    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);

    //   // Render
    //   return (
    //     <>
    //       <div class="med2">
    //         <Button variant="primary" onClick={handleShow}>
    //           Remove Patient or it's records
    //         </Button>
    //         <br />
    //         <br />
    //         <Button variant="success">
    //           <a id="goToDash" href="/AdminDash">
    //             Go Back to Admin Dashboard
    //           </a>
    //         </Button>
    //       </div>

    //       <Modal show={show} onHide={handleClose}>
    //         {/* Header */}
    //         <Modal.Header>
    //           <Modal.Title>Remove Patient or it's records</Modal.Title>
    //         </Modal.Header>

    //         {/* Body */}
    //         {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
    //         <Modal.Body>
    //           <AppointmentDetails />
    //           <Appointmentup />
    //         </Modal.Body>

    //         {/* Footer */}
    //         <Modal.Footer>
    //           <Button variant="secondary" onClick={handleClose}>
    //             Close
    //           </Button>
    //           {/*<Button variant="primary" onClick={handleClose}>
    //             Submit
    //   </Button>*/}
    //         </Modal.Footer>
    //       </Modal>
    // </>
  );
};

export default function RemovePatient() {
  return (
    <div className="RemovePatient">
      <h1></h1>
      <br />
      <Appointment />
    </div>
  );
}
