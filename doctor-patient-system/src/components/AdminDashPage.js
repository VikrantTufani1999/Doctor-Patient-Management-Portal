import React from "react";
import { Col, Container } from "react-bootstrap";
import "../App.css";

import Password from "./adminComponents/changePassword.js"
import Medicine from "./adminComponents/modifyMedicineDetails.js"
import DeletePatient from "./adminComponents/deletePatient.js"
import "bootstrap/dist/css/bootstrap.min.css";

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
            <Medicine />
            <br />
            <br />
            <Password />
            <br />
            <br />
            <DeletePatient />
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
