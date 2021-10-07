import React from "react";
import { Col, Container } from "react-bootstrap";
import "../App.css";
import ChartsPage from "./ChartsPage";

function AdminDashPage() {
  return (
    <div>
      <div className="Navbar">
        <div className="leftSide">
          <div className="links">
            <a href="/AdminDash">Admin Dashboard</a>
            <a href="/">Logout</a>
          </div>
        </div>
        <div className="rightSide">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
      <div>
        <div class="container p-3 my-3 border">
          <div class="col-md-12 text-center">
            <button type="button" class="btn btn-success btn-lg">
              <a id="med" class="text-white" href="/UpdateMed">
                Update Medicines
              </a>
            </button>
            <br />
            <br />
            <button type="button" class="btn btn-success btn-lg">
              <a id="pass" class="text-white" href="/ChangePass">
                Change Password
              </a>
            </button>
            <br />
            <br />
            <button type="button" class="btn btn-success btn-lg">
              <a id="pass" class="text-white" href="/RemPatient">
                Remove Patient
              </a>
            </button>
            <br />
            <br />
            {/* <button type="button" class="btn btn-success btn-lg">
              <a id="pass" class="text-white" href="/ShowChart">
                Show Charts
              </a>
            </button> */}
          </div>
        </div>
      </div>

      <div>
        <ChartsPage />
      </div>
    </div>
  );
}

export default AdminDashPage;
