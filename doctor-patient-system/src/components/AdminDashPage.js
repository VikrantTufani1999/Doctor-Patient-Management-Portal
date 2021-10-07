import React from "react";
import "../App.css";

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
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDashPage;
