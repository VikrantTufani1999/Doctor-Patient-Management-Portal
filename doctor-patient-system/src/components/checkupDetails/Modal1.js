
import React,{useState} from 'react';
import { Form, NavItem } from 'react-bootstrap';
import { Col,Row} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
const axios = require('axios');
const qs=require('qs');

class Modal1 extends React.Component{
  

  handleSubmit = (event) => {

    this.props.setShow(false)


    event.preventDefault()
    console.log(this.props.data)
    console.log(this.inputName.value)
    console.log(this.inputDiag.value)
    console.log(this.inputPres.value)
    console.log(this.inputCond.value)
    console.log(this.inputAmount.value)
    const a=this.inputName.value.split(",")
    console.log(a[0])
    const param={
      patient_id: a[0],//these value
      pname:a[1],
      time: a[2],
      apt_id: a[3],
      diagnosis:this.inputDiag.value,
    prescription:this.inputPres.value,
    condition:this.inputCond.value,
    amount:this.inputAmount.value,
    };
    try{
      const resp = axios.post('/createCheckupDetails', qs.stringify(param));
      console.log(resp.data);
  } catch (err) {
      // Handle Error Here
      console.error(err);
  }
};
  
   
render(){
return(
<Form onSubmit={(e) => this.handleSubmit(e)}>
  <Form.Group as={Row} className="mb-3" controlId="pname">
    <Form.Label column sm="3">
      Patient Name and Time
    </Form.Label>
    <Col sm="9">
    <Form.Control as="select" ref={node => (this.inputName = node)} >
    {this.props.data?
    this.props.data.map((item) => (
          
            <option value={item.patient_id +","+item.name +","+ item.time + ","+ item.apt_id}>{item.name} {item.time}</option>
            
        ))
      :<option value="empty">empty</option>}
          
        </Form.Control>
    </Col>
  </Form.Group>
  
       


  <Form.Group as={Row} className="mb-3" controlId="diagnosis">
    <Form.Label column sm="3">
      Diagnosis
    </Form.Label>
    <Col sm="9">
    <Form.Control as='select' ref={node => (this.inputDiag = node)}>
    <option selected>Choose your option</option>
          <option value="Pneumonia">Pneumonia</option>
          <option value="Hypertension">Hypertension</option>
          <option value="Stroke">Stroke</option>
          <option value="Thyroid">Thyroid</option>
          <option value="CommonCold">Common Cold</option>
          <option value="Anemia">Anemia</option>
          
          
        </Form.Control>
    
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="pres">
    <Form.Label column sm="3">
      Prescription
    </Form.Label>
    <Col sm="9">
    <Form.Control as='select' multiple ref={node => (this.inputPres = node)}>
    <option selected>Choose your options</option>
          <option value="Cipro">Cipro (ciprofloxacin)</option>
          <option value="Levaquin">Levaquin</option>
          <option value="Felodipine">Felodipine</option>
          <option value="Nimodipine">Nimodipine</option>
          <option value="aspirin">aspirin</option>
          <option value="Feosol">Feosol</option>
          <option value="Dcold">D Cold</option>
          <option value="SlowFe">Slow Fe</option>
          
        </Form.Control>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="cond">
    <Form.Label column sm="3">
      Condition
    </Form.Label>
    <Col sm="9">
    <Form.Control as='select' ref={node => (this.inputCond = node)}>
    <option selected>Choose your option</option>
          <option value="critical">critical</option>
          <option value="mild">mild</option>
          <option value="recovering">recovering</option>
          <option value="Recovered">recovered</option>
          <option value="Normal">Normal</option>
          
          
        </Form.Control>
    </Col>
  </Form.Group>
  <Form.Group as={Row} className="mb-3" controlId="amount">
    <Form.Label column sm="3">
      Amount
    </Form.Label>
    <Col sm="9">
      <Form.Control type="number" ref={node => (this.inputAmount = node)}/>
    </Col>
  </Form.Group>
  <Button type="submit" variant="primary" onClick={this.handleSubmit}>
            Save Changes
          </Button>
</Form>
);
}
}
export default Modal1;