import React from "react";
import "./RegisterPatient.css";
import { Button } from "react-bootstrap";

function RegisterPatient() {
  return (
    <div>
      <div class="button2">
        <Button variant="success">
            <a id="but2" class="text-white" href="/Search">Go Back to Dashboard</a></Button>
      </div>
      <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6">
              <div class="form-container">
                <h3 class="title">Register</h3>
                <form class="form-horizontal">
                  <div class="form-group">
                    <label>Patient ID</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Patient ID"
                    />
                  </div>
                  <div class="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="form-group">
                    <label>Phone No.</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <button class="btn signup">Create Account</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPatient;
