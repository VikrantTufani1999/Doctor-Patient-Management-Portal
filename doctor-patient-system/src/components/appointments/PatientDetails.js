import React, { useState, useRef, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require('axios');
const qs = require('qs');


const AppointmentDetails = (props) => {
  let data=props.data;
let setData=props.setData;
let data1=props.data1;
let setPat=props.setPat;
  
  const [values, setValues] = useState({ 
    pname:'' 
  });
  
const Patient = async () => {
  
    try {
      console.log(values);
      const resp = await axios.post('/PatientDet', qs.stringify(values));
      console.log(resp.data);
      console.log(JSON.parse(resp.data.data));
       let dataObj = JSON.parse(resp.data.data);
      setData(dataObj);
      
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  
  }
  
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const showDet = async (event) => {
    
    event.preventDefault(); // Prevent default submission
    
    try {
      await Patient();

      setValues({
        pname:''  
      });
    } catch (e) {
      alert(`Failed! ${e.message}`);
    }
  }

  

  
  return (
    <form >
      <div class="form-group">
        <label for="appointment" class="col-form-label">Select Patient Name :</label><br></br>
        <select class="form-select" id="patient" aria-label="Default select example" value={values.pname} onChange={set('pname')}>
            <option value="choose" selected>Choose Patient</option>
        {
          props.data1 ?
                props.data1.map((item) => (
                <option value={item.name}>{item.name}</option>
          )):<option value="empty">empty</option>
        }
        </select>
      </div><br /><br />
<div class="form-group">
        <button class="form-control" class="btn btn-danger ms-auto-end" onClick={showDet}>Show Details</button><br></br>
      </div>
    </form>
      
    
  );
};

const PatientTab = (props) => {
let data=props.data;
let setData=props.setData;

  return (
    <div id="tab1" >
    <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              
              <th>Patient_Name</th>
              <th>Diagnosis</th>
              <th>Prescription</th>
              <th>condition</th>
            </tr>
          </thead>
          <tbody>
           {data.map((item) => (
          <tr key={item.pname}>
            
            <td>{item.pname}</td>
            
            <td>{item.diagnosis}</td>
            <td>{item.prescription}</td>
            <td>{item.condition}</td>
           
            
            
          </tr>
        ))} 
          </tbody>
        </Table>
    </div>
  );
};

const PatientDetails = () => {

const [show, setShow] = useState(false);
const [data, setData] = useState([]);
const [data1, setPat] = useState([]);

// Set Hooks
const handleClose = () => setShow(false);

const handleShow = async () => {
  setShow(true);
  try {
      const resp = await axios.get('/fetchPatients');
      
      let dataObj = JSON.parse(resp.data.data);
      console.log(dataObj);
      setPat(dataObj);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
}


  // Render
  return (
    <>
    <Button variant="primary" size="lg" onClick={handleShow}>
       Patient's Details
      </Button>

      <Modal show={show} onHide={handleClose} class="modal-dialog modal-lg">
        <Modal.Header>
          <Modal.Title>Patient Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AppointmentDetails data={data} setData={setData} data1={data1} setPat={setPat}/>
          <br/>
          <br></br>
	<PatientTab data={data} setData={setData}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PatientDetails;

// export default function PatientDetails(){
  
//   return (
//     <div className="PatientDetails">
//       <h1></h1>
//       <br />
//       <PatientMain />
      
//     </div>
//   );
// }
