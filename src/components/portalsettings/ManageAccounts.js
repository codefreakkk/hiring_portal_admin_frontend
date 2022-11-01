import React from "react";
import PortalSettingsHeader from "./PortalSettingsHeader";
import logo from "../../images/staff.png";
import "../../utilities/style.css";

function ManageAccounts() {
  return (
    <>
      <div class="email-rightbar mb-3">
        <h5 style={{ marginBottom: "16px" }}>Staff Accounts</h5>
        <div class="card staff_main" style={{ height: "50vh", width: "68%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={logo} className="staff_logo" />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h5 className="staff_title">Add your staff members</h5>
              <span style={{ fontSize: "16px" }}>
                Add your staff members and let them access & manage your hiring process.
              </span>
              <button className="btn btn-primary mt-4">Add Staff</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageAccounts;
