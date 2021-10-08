import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Modal1 from './Modal1';
import { Form } from 'react-bootstrap';
import { Col,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const axios = require('axios');
const qs=require('qs');


function CreateCheckupDetails() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
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

  

  return (
    <>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Add Check Up Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Check Up Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Modal1 data={data} setShow={setShow}/>
        
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default CreateCheckupDetails;