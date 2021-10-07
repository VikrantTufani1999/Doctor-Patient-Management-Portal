import React, { useState, useRef } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AppointmentDetails = () => {
  return (
    <form className="form-control">
      <label for="usrname">Doctor Name</label>
      <br></br>
      <input type="text" id="usrname" name="usrname" required></input>

      <br></br>
      <label for="psw">Old Password :</label>
      <br></br>
      <input
        type="password"
        id="psw"
        name="psw"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        required
      ></input>

      <br></br>
      <label for="npsw">New Password :</label>
      <br></br>
      <input
        type="password"
        id="npsw"
        name="npsw"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        required
      ></input>

      <br></br>
      <label for="cpsw">Confirm Password :</label>
      <br></br>
      <input
        type="password"
        id="cpsw"
        name="cpsw"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        required
      ></input>

      <br></br>
      <input type="submit" value="Submit"></input>
    </form>
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
        Change Password
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* Header */}
        <Modal.Header>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>

        {/* Body */}
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Body>
          <AppointmentDetails />
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

export default function ChangePass() {
  return (
    <div className="ChangePass">
      <h1></h1>
      <br />
      <Appointment />
    </div>
  );
}
