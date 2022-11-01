import React from 'react'
import "../../utilities/style.css";
import PortalSettingsHeader from './PortalSettingsHeader';

function Hiring() {
  return (
    <>
      <div class="email-rightbar mb-3" style={{width: '60%'}}>
      <h5 style={{marginBottom: '16px'}}>Hiring</h5>
        
        <div class="card">
          <PortalSettingsHeader heading={"Pause Hiring"} />
          <div className="toggle_main">
            <div style={{ fontSize: "14px" }}>Pause all hiring process going on</div>
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
  )
}

export default Hiring