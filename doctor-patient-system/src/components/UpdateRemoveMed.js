import React, { useState, useRef } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AppointmentDetails = () => {
  return (
    <form className="form-control">
      <label for="MedicineName">Medicine Name</label>
      <br></br>
      <input type="text" id="MedicineName" name="MedicineName" required></input>

      <br></br>
      <label for="dosage">Dosage :</label>
      <br></br>
      <input type="text" id="dosage" name="dosage"></input>

      <br></br>
      <br></br>
      <input type="submit" value="Update"></input>
    </form>
  );
};

const Appointmentup = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th></th>
          <th>Medicine</th>
          <th>Dosage</th>
          <th>cost</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>crocin</td>
          <td>200mg</td>
          <td>20</td>
          <td>
            <button type="button" class="btn btn-primary">
              Remove
            </button>
          </td>
        </tr>
        <tr>
          <td>2</td>

          <td>saradon</td>
          <td>100mg</td>
          <td>30</td>
          <td>
            <button type="button" class="btn btn-primary">
              Remove
            </button>
          </td>
        </tr>
        <tr>
          <td>3</td>

          <td>kepler</td>
          <td>600mg</td>
          <td>100</td>
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
  // Hooks
  const [show, setShow] = useState(false);

  // Set Hooks
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Render
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update or Remove Medicine
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* Header */}
        <Modal.Header>
          <Modal.Title>Update or Remove Medicine</Modal.Title>
        </Modal.Header>

        {/* Body */}
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Body>
          <AppointmentDetails />
          <Appointmentup />
        </Modal.Body>

        {/* Footer */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/*<Button variant="primary" onClick={handleClose}>
            Submit 
  </Button>*/}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default function UpdateRemoveMed() {
  return (
    <div className="UpdateMed">
      <h1></h1>
      <br />
      <Appointment />
    </div>
  );
}
