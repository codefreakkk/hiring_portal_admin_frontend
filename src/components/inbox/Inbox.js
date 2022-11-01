import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Loader from "../Loader";
import Inboxmain from "./Inboxmain";
import Starredmessage from "./Starredmessage";
import Sentmail from "./Sentmail";
import Trash from "./Trash";
import Compose from "./Compose";
import MainHeading from "../MainHeading";
import "../../utilities/style.css";

function Inbox() {
  return (
    <>
      <Loader />
      <div className="inbox_main">
        <MainHeading heading={"Inbox"} path1={"Candidate"} path2={"Inbox"} />
        <div class="row">
          <div class="col-12">
            <div class="email-leftbar card">
              <NavLink to="/inbox/compose">
                <span
                  style={{width: '100%'}}
                  // type="button"
                  class="btn btn-danger btn-block waves-effect waves-light"
                >
                  Compose
                </span>
              </NavLink>

              <div class="mail-list mt-4">
                <NavLink to="/inbox">
                  <a href="javascript: void(0);" class="">
                    <i class="mdi mdi-email-outline me-2"></i> Inbox{" "}
                    {/* <span class="ms-1 float-end">(18)</span> */}
                  </a>
                </NavLink>

                <NavLink to="/inbox/starred">
                  <a href="javascript: void(0);" style={{ marginTop: "-10px" }}>
                    <i class="mdi mdi-star-outline me-2"></i>Starred
                  </a>
                </NavLink>

                <NavLink to="/inbox/sentmail">
                  <a href="javascript: void(0);" style={{ marginTop: "-10px" }}>
                    <i class="mdi mdi-email-check-outline me-2"></i>Sent Mail
                  </a>
                </NavLink>

                <NavLink to="/inbox/trash">
                  <a href="javascript: void(0);" style={{ marginTop: "-10px" }}>
                    <i class="mdi mdi-trash-can-outline me-2"></i>Trash
                  </a>
                </NavLink>
              </div>
            </div>

            {/* right side start */}
            <Routes>
              <Route path="/starred" element={<Starredmessage />} />
              <Route path="/sentmail" element={<Sentmail />} />
              <Route path="/trash" element={<Trash />} />
              <Route path="/compose" element={<Compose />} />
              <Route path="/" element={<Inboxmain />} />
            </Routes>

            {/* right side end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Inbox;
