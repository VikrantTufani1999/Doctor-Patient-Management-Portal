import React, { useState, useRef, useEffect } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require('axios');
const qs = require('qs');


const UpdateMedicine = (props) => {
  let data=props.data;
  let setMed=props.setMed;
  const [values, setValues] = useState({ 
    medname:'' , dosage:'' 
  });
  
  const AddM = async () => {

    try {
      console.log(values);
      const resp = axios.post('/AddMed', qs.stringify(values));
      props.setUpdateCount(props.updateCount+1);
        
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  
  }
  const RemM = async () => {

    try {
      console.log(values);
      const resp = axios.post('/RemMed', qs.stringify(values));
      props.setUpdateCount(props.updateCount+1);
        
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
  const onSubmit = async (event) => {
   
    event.preventDefault(); // Prevent default submission
    
    try {
      await AddM();
      
      
      setValues({
        medname:'' , dosage:'' 
      });
    } catch (e) {
      alert(`Failed! ${e.message}`);
    }
  }

  const onSubmit1 = async (event) => {
   
    event.preventDefault(); // Prevent default submission
    
    try {
      await RemM();
      
      
      setValues({
        medname:'' , dosage:'' 
      });
    } catch (e) {
      alert(`Failed! ${e.message}`);
    }
  }
  
  return (
    <form className="form-control">
      <div>
      <input type="radio" id="add" name="operation" value="ADD" onClick= {()=>{document.getElementById("add1").hidden=false;
    document.getElementById("rem1").hidden=true}} />
<label for="add">ADD</label><br/>
<input type="radio" id="rem" name="operation" value="REMOVE" onClick= {()=>{document.getElementById("add1").hidden=true;
    document.getElementById("rem1").hidden=false}}/>
<label for="rem">REMOVE</label>
<br/>
        </div>
      <div id="add1" hidden="true">
      <label for="MedicineName" className="mb-3">Medicine Name</label>
      <br></br>
      <input type="text" id="MedicineName" name="MedicineName" required value={values.medname} onChange={set('medname')}></input>

      <br></br>
      
      <label for="dosage">Dosage :</label>
      <br></br>
      <input type="text" id="dosage" name="dosage" value={values.dosage} onChange={set('dosage')}></input><br/><br/>
      <Button value="ADD" onClick={onSubmit}>ADD</Button>
      </div>
      <br/>
      <div id='rem1' hidden="true">
      <label for="Medicine" >Medicine Name</label><br/>
      <select id="sel1" name="medrem" value={values.medname} onChange={set('medname')}>
    <option selected>choose medicine</option>
          
      {data?
    data.map((item) => (
          
            <option value={item.medname}>{item.medname}</option>
            
        ))
      :<option value="empty">empty</option>}
      </select><br/><br/>
        <Button value="Remove" onClick={onSubmit1}>REMOVE</Button>
        </div>
      
    </form>
  );
};

const UpMed = (props) => {
let data=props.data;
let setMed=props.setMed;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Medicine</th>
          <th>Dosage</th>
        </tr>
      </thead>
      <tbody>
        { data.map((item) => (
          <tr key={item.id}>
            <td>{item.med_id}</td>
            <td>{item.medname}</td>
            <td>{item.dosage}</td>
            
            
          </tr>
        ))} 
      </tbody>
    </Table>
  );
};

const Medicine = () => {

  // Hooks
  const [show, setShow] = useState(false);

  // Set Hooks
  const handleClose = () => setShow(false);
  const [data, setMed] = useState([]);
  const [updateCount, setUpdateCount] = useState(0);
  const showModal = () =>setShow(true);
  const handleShow = async () =>{
    
  try {
    const resp = await axios.post('/fetchMed');
     let dataObj = JSON.parse(resp.data.data);
      
      setMed(dataObj);
      // setUpdateCount(updateCount+1)
      
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
  }

  useEffect(()=>{

    setTimeout(() => { handleShow(); }, 500);
    
  }, [updateCount])

  // Render
  return (
    <>
      <Button variant="primary" onClick={showModal}>
        Update or Remove Medicine
      </Button>

      <Modal show={show} onHide={handleClose} >
        {/* Header */}
        <Modal.Header>
          <Modal.Title>Update or Remove Medicine</Modal.Title>
        </Modal.Header>

        {/* Body */}
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Modal.Body>
          <UpdateMedicine data={data} setMed={setMed} setUpdateCount={setUpdateCount} updateCount={updateCount}/>
          <UpMed data={data} setMed={setMed} />
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

export default Medicine;
