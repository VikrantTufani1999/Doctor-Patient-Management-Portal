import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
const axios = require('axios');
const qs = require('qs');



const ChangePassword = (props) => {

  
  const [values, setValues] = useState({ 
    uname: '', password: '',confirm:'' 
  });
  
  const CP = async () => {
    
   console.log(values)

   if(values.password==values.confirm){
      try {
        const resp = axios.post('/ChangePassword', qs.stringify(values));
        console.log(resp.data);
        props.setShow(false);
      } catch (err) {
          // Handle Error Here
          console.error(err);
      }
    }else{
      alert("Passwords dont match");
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
      await CP();
      
      alert('Password Changed successfully');
      setValues({
        uname: '', password: '', confirm: ''
      });
    } catch (e) {
      alert(`Failed! ${e.message}`);
    }
  }
  
 
  return (
    <form className="form-control" >
      <label for="usrname">Doctor Name</label>
      <br></br>
      <input type="text" id="usrname" name="usrname" required value={values.uname} onChange={set('uname')}></input>

      <br></br>
      <label for="psw">Old Password :</label>
      <br></br>
      <input
        type="password"
        id="password"
        name="password"
       
        //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        required ></input>

      <br></br>
      <label for="npsw">New Password :</label>
      <br></br>
      <input
        type="password"
        id="npsw"
        name="npsw"
        value={values.password} onChange={set('password')}
        //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
        value={values.confirm} onChange={set('confirm')}
        //pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        required
      ></input>

      <br/><br/>
      <button value="Submit" onClick={onSubmit}>Submit</button>
    </form>
  );
};

const Password = () => {
 
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
          <ChangePassword setShow={setShow}/>
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

export default Password;
