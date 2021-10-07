import React from "react";
import "../App.css";
import NewsFeed from "./NewsFeed";
import Faq from "./Faq";
import CriticalTable from "./CriticalTable";
import DeleteApp from "./DeleteApp";
import Appointment from "./appointments/ShowAppointments.js"
import CreateAppointment from "./appointments/createAppointment.js"
import DeleteAppointment from "./appointments/deleteAppointment.js"
import CreatePatient from "./appointments/createPatient.js"
import CreateCheckupDetails from "./checkupDetails/CreateCheckupDetails.js"

import { Button, Row, Col, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import ChartsPage from "./ChartsPage";
import IllnessChart from "./IllnessChart";


function SearchPage() {
  return (
    <div>
      <div className="Navbar">
        <div className="leftSide">
          <div className="links">
            <a href="/Search">Home</a>
            
          </div>
        </div>
        <div className="rightSide">
        <a href="/">Logout</a>
          {/* <input type="text" placeholder="Search..." />
          <button>Search</button> */}
        </div>
      </div>

      <Container>
        <Row>
          <Col>
            <div class="delete">
              <CreatePatient />
            </div>
          </Col>
          <Col>
            <div class="delete">
              <Appointment />
            </div>
          </Col>
          <Col>
            <div class="delete">
              <CreateAppointment />
            </div>
          </Col>
          <Col>
            <div class="delete">
              <DeleteAppointment />
            </div>
          </Col>

          <Col>
            <div class="delete">
              <CreateCheckupDetails />
            </div>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <div className="Table">
              <CriticalTable />
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <br />

      <div>
        <IllnessChart />
      </div>

      <br/>

      <div className="News">
        <NewsFeed />
      </div>
      <div>
        <Faq />
      </div>
    </div>
  );
}

export default SearchPage;
