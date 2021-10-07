import React from "react";
import "../App.css";
import Password from "./adminComponents/changePassword.js"
import Medicine from "./adminComponents/modifyMedicineDetails.js"
import "bootstrap/dist/css/bootstrap.min.css";

function AdminDashPage() {
  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashPage;
