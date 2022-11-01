import React from "react";
import PortalSettingsHeader from "./PortalSettingsHeader";
import "../../utilities/style.css";

function Preferences() {
  return (
    <>
      <div class="email-rightbar mb-3" style={{ width: "60%" }}>
      <h5 style={{marginBottom: '16px'}}>Preferences</h5>
        <div class="card">
          <PortalSettingsHeader heading={"Tasks"} />
          <div className="toggle_main">
            <div style={{ fontSize: "14px" }}>Send email after assigning task</div>
            <div>
              <input type="checkbox" id="switch6" switch="primary" />
              <label
                for="switch6"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
        </div>
        {/*  */}
        <div class="card">
          <PortalSettingsHeader heading={"Message"} />
          <div className="toggle_main">
            <div style={{ fontSize: "14px" }}>Send email after sending Message</div>
            <div>
              <input type="checkbox" id="switch6" switch="primary" />
              <label
                for="switch6"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
        </div>
        {/*  */}
        <div class="card">
          <PortalSettingsHeader heading={"Hiring"} />
          <div className="toggle_main">
            <div style={{ fontSize: "14px" }}>Send email after Hiring Candidate</div>
            <div>
              <input type="checkbox" id="switch6" switch="primary" />
              <label
                for="switch6"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
        </div>
        {/*  */}
        <div class="card">
          <PortalSettingsHeader heading={"Rejected"} />
          <div className="toggle_main">
            <div style={{ fontSize: "14px" }}>Send email after Rejecting Candidate</div>
            <div>
              <input type="checkbox" id="switch6" switch="primary" />
              <label
                for="switch6"
                data-on-label="Yes"
                data-off-label="No"
              ></label>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Preferences;
