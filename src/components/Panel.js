import React from "react";
import "../utilities/style.css";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Panel() {
  return (
    <>
      <div class="topnav" style={{ position: "relative" }}>
        <div class="container-fluid">
          <nav class="navbar navbar-light navbar-expand-lg topnav-menu">
            <div
              class="collapse main_nav navbar-collapse"
              id="topnav-menu-content"
            >
              <ul class="navbar-nav">
                {/* section 1 */}
                <li class="nav-item dropdown" style={{ marginRight: "20px" }}>
                  <span
                    class="nav-link dropdown-toggle arrow-none"
                    id="topnav-dashboard"
                    role="button"
                  >
                    <i class="bx bx-home-circle me-2"></i>
                    <span key="t-dashboards">Dashboard</span>{" "}
                    <div class="arrow-down"></div>
                  </span>
                  <div class="dropdown-menu" aria-labelledby="topnav-dashboard">
                    {/* dashboard */}
                    <NavLink to="/dashboard">
                      <span class="dropdown-item" key="t-default">
                        Home
                      </span>
                    </NavLink>
                    {/* <NavLink to="/activity">
                      <span class="dropdown-item" key="t-default">
                        Activity
                      </span>
                    </NavLink> */}

                    <NavLink to="/dashboard/hiringdetails">
                      <span class="dropdown-item" key="t-default">
                        Hiring Details
                      </span>
                    </NavLink>
                  </div>
                </li>

                {/* section 2 */}
                <li class="nav-item dropdown" style={{ marginRight: "20px" }}>
                  <span
                    class="nav-link dropdown-toggle arrow-none"
                    id="topnav-uielement"
                    role="button"
                  >
                    <i class="bx bx-briefcase me-2"></i>
                    <span key="t-ui-elements">Jobs</span>
                    <div class="arrow-down"></div>
                  </span>

                  <div
                    class="dropdown-menu mega-dropdown-menu px-2"
                    style={{ cursor: "pointer" }}
                  >
                    <div class="row">
                      <div class="col-lg-4">
                        <div>
                          {/* Job */}
                          <NavLink to="/dashboard/joblists">
                            <span class="dropdown-item" key="t-default">
                              Job List
                            </span>
                          </NavLink>

                          <NavLink to="/dashboard/postjob">
                            <span class="dropdown-item" key="t-default">
                              Post Job
                            </span>
                          </NavLink>

                          {/* <NavLink to="/jobdetails">
                            <span class="dropdown-item" key="t-default">
                              Job Details
                            </span>
                          </NavLink> */}

                          <NavLink to="/dashboard/jobcategories">
                            <span class="dropdown-item" key="t-default">
                              Job Categories
                            </span>
                          </NavLink>

                          <NavLink to="/dashboard/closedjobs">
                            <span class="dropdown-item" key="t-default">
                              Closed Jobs
                            </span>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                {/* section 3 */}
                <li
                  class="nav-item dropdown"
                  style={{ marginRight: "20px" }}
                  style={{ cursor: "pointer" }}
                >
                  <a
                    class="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-dashboard"
                    role="button"
                  >
                    <i class="bx bx-user-check me-2"></i>
                    <span key="t-dashboards">Candidate</span>{" "}
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-dashboard">
                    {/* candidate */}
                    <NavLink to="/dashboard/jobapplicants">
                      <span class="dropdown-item" key="t-default">
                        Job Applicants
                      </span>
                    </NavLink>

                    <NavLink to="/dashboard/applicantstatus">
                      <span class="dropdown-item" key="t-default">
                        Applicants Status
                      </span>
                    </NavLink>

                    <NavLink to="/dashboard/interviews">
                      <span class="dropdown-item" key="t-default">
                        Interviews
                      </span>
                    </NavLink>

                    {/* <NavLink to="chats">
                      <span class="dropdown-item" key="t-default">
                        Chats
                      </span>
                    </NavLink> */}

                    <NavLink to="/dashboard/inbox">
                      <span class="dropdown-item" key="t-default">
                        Inbox
                      </span>
                    </NavLink>

                    <NavLink to="/dashboard/hiredcandidates">
                      <span class="dropdown-item" key="t-default">
                        Hired Candidates
                      </span>
                    </NavLink>
                  </div>
                </li>

                {/* section 4 */}
                <li class="nav-item dropdown" style={{ marginRight: "20px" }}>
                  <a
                    class="nav-link dropdown-toggle arrow-none"
                    href="#"
                    id="topnav-dashboard"
                    role="button"
                  >
                    <i class="bx bx-adjust me-2"></i>
                    <span key="t-dashboards">Settings</span>{" "}
                    <div class="arrow-down"></div>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="topnav-dashboard">
                    <NavLink to="/dashboard/viewprofile">

                    <span class="dropdown-item" key="t-default">
                      View Profile
                    </span>
                    </NavLink>
                    <NavLink to="/dashboard/portalsettings">
                    <span class="dropdown-item" key="t-default">
                      Portal Settings
                    </span>
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Panel;
