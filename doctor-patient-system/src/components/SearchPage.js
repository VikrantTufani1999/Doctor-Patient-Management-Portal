import React from "react";
import "../App.css";
import NewsFeed from "./NewsFeed";
import Faq from "./Faq";
import CriticalTable from "./CriticalTable";
import { Button, Row, Col, Container } from "react-bootstrap";

function SearchPage() {
  return (
    <div>
      <div className="Navbar">
        <div className="leftSide">
          <div className="links">
            <a href="/Search">Home</a>
            {/* <a href="/AdminLogin">Admin Login</a> */}
            <a href="/">Logout</a>
          </div>
        </div>
        <div className="rightSide">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>

      <Container>
        <Row>
          <Col>
            <div class="register">
              <Button variant="success">
                <a id="but3" class="text-white" href="/RegPatient">
                  Register Patient
                </a>
              </Button>
            </div>
          </Col>
          <Col>
            <div class="delete">
              <Button variant="success">
                <a id="but3" class="text-white" href="/DelApp">
                  Delete Appointment
                </a>
              </Button>
            </div>
          </Col>
          <Col>
            <div class="delete">
              <Button variant="success">Add Appointment</Button>
            </div>
          </Col>
          <Col>
            <div class="delete">
              <Button variant="success">Dummy Button </Button>
            </div>
          </Col>

          <Col>
            <div class="delete">
              <Button variant="success">Dummy Button2 </Button>
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