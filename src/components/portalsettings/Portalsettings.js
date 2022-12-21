import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "../../utilities/style.css";
import Loader from "../Loader";
import MainHeading from "../MainHeading";
import Hiring from "./Hiring";
import EditProfile from "./EditProfile";
import Preferences from "./Preferences";
import ManageAccounts from "./ManageAccounts";

function PortalSettings() {
  return (
    <>
      <Loader />
      <div className="inbox_main">
        <MainHeading
          heading={"Portal Settings"}
          path1={"Settings"}
          path2={"Portal Settings"}
        />
        <div class="row">
          <div class="col-12">
            <div class="email-leftbar card">
              <div class="mail-list">
                <NavLink to="/portalsettings">
                  <a
                    style={{
                      marginTop: "-10px",
                      borderBottom: ".4px solid #d9d2d2",
                    }}
                    class=""
                  >
                    <i class="mdi mdi-email-outline me-2"></i> 
                    <span style={{fontSize: '14px', fontWeight: '100px'}}>Edit Profile</span>
                    
                  </a>
                </NavLink>

                {/* <NavLink to="/portalsettings/preferences">
                  <a
                    href=""
                    style={{
                      marginTop: "-10px",
                      fontWeight: '100px',
                      borderBottom: ".4px solid #d9d2d2",
                    }}
                  >
                    <i class="mdi mdi-star-outline me-2"></i>
                    <span style={{fontSize: '14px', fontWeight: '100px'}}>Preferences</span>
                  </a>
                </NavLink> */}

                <NavLink to="/portalsettings/manageaccounts">
                  <a
                    style={{
                      marginTop: "-6px",
                    }}
                    href=""
                  >
                    <i class="mdi mdi-email-check-outline me-2"></i>
                    <span style={{fontSize: '14px', fontWeight: '100px'}}>Manage Accounts</span>  
                  </a>
                </NavLink>

                {/* <NavLink to="/portalsettings/hiring">
                  <a style={{ marginTop: "-10px" }} href="">
                    <i class="mdi mdi-trash-can-outline me-2"></i>
                    <span style={{fontSize: '14px', fontWeight: '500px'}}>Hiring</span>
                  </a>
                </NavLink> */}
              </div>
            </div>

            {/* right side start */}

              <Routes>
                <Route path="/manageaccounts" element={<ManageAccounts />} />
                {/* <Route path="/preferences" element={<Preferences />} /> */}
                {/* <Route path="/hiring" element={<Hiring />} /> */}
                <Route path="/" element={<EditProfile />} />
              </Routes>

            {/* right side end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortalSettings;
