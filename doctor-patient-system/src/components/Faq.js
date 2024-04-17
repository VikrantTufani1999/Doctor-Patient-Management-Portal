import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Faq.css"

function Faq() {

  const [activeId, setActiveId] = useState('0');

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  return (
    <div className="faq">
      <h3 class="faqhead">FAQ </h3>

      <Accordion defaultActiveKey={activeId}>

        <div className={activeId === '0' ? 'panel-wrap active-panel' : 'panel-wrap'}>
          <div className="panel-header">
            <Accordion.Toggle onClick={() => toggleActive('0')} className="panel-toggle" variant="link" eventKey="0">
              Q. How to note down details of the patient's checkup?
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="0">
            <div className="panel-body">1. Click add checkup details <br/>
            2. Select the appointment of the patient <br/>
            3. Enter in the patient details and diagnosis <br/></div>
          </Accordion.Collapse>
        </div>

        <div className={activeId === '1' ? 'panel-wrap active-panel' : 'panel-wrap'}>
          <div className="panel-header">
            <Accordion.Toggle onClick={() => toggleActive('1')} className="panel-toggle" variant="link" eventKey="1">
              Q. How to create a new appointment for a new patient ?
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="1">
            <div className="panel-body">1. Register the new patient by clicking create Patient <br/>
            2. Enter in the patient details <br/>
            3. Click add new appointment to schedule a new appointment. <br/></div>
          </Accordion.Collapse>
        </div>

        <div className={activeId === '2' ? 'panel-wrap active-panel' : 'panel-wrap'}>
          <div className="panel-header">
            <Accordion.Toggle onClick={() => toggleActive('2')} className="panel-toggle" variant="link" eventKey="2">
              Q. How to check the patients previous checkup history?
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="2">
            <div className="panel-body">1. Click check patient's details<br/>
            2. Select the patient's name<br/>
            3. The patient's previous history will be displayed in the table<br/></div>
          </Accordion.Collapse>
        </div>

      </Accordion>

    </div>
  );
}

export default Faq;