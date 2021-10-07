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

      <Accordion defaultActiveKey={activeId}>

        <div className={activeId === '0' ? 'panel-wrap active-panel' : 'panel-wrap'}>
          <div className="panel-header">
            <Accordion.Toggle onClick={() => toggleActive('0')} className="panel-toggle" variant="link" eventKey="0">
              Q. What is cardiology?
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="0">
            <div className="panel-body">Cardiology is study of human heart.</div>
          </Accordion.Collapse>
        </div>

        <div className={activeId === '1' ? 'panel-wrap active-panel' : 'panel-wrap'}>
          <div className="panel-header">
            <Accordion.Toggle onClick={() => toggleActive('1')} className="panel-toggle" variant="link" eventKey="1">
              Q. What are parameters in Cardiology?
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="1">
            <div className="panel-body">1. Parameter1 <br/>
            2. Parameter2 <br/>
            3. Parameter3 <br/></div>
          </Accordion.Collapse>
        </div>

        <div className={activeId === '2' ? 'panel-wrap active-panel' : 'panel-wrap'}>
          <div className="panel-header">
            <Accordion.Toggle onClick={() => toggleActive('2')} className="panel-toggle" variant="link" eventKey="2">
              Q. What causes major risk of heart attack?
            </Accordion.Toggle>
          </div>

          <Accordion.Collapse eventKey="2">
            <div className="panel-body">1. High BP<br/>
            2. High Cholestrol <br/>
            3. High Sugar <br/></div>
          </Accordion.Collapse>
        </div>

      </Accordion>

    </div>
  );
}

export default Faq;