import React from "react";
import Loader from "./Loader";
import MainHeading from "./MainHeading";
import logo from "../images/profile.png";
import Jobvacancy from "./Jobvacancy";
import { NavLink } from "react-router-dom";
import CheckLoggedIn from "./CheckLoggedIn"

function HiringDetailsComponent() {
  return (
    <>
      <Loader />
      <div className="hiringdetails_main">
        <MainHeading
          heading={"Hiring Details"}
          path1={"Dashboard"}
          path2={"Hiring Details"}
        />
        <div class="container-fluid" style={{ marginTop: "10px" }}>
          {/*  */}
          <div class="row mb-4">
            <div class="col-lg-12">
              <div class="d-flex align-items-center">
                <img src={logo} alt="" class="avatar-sm rounded" />
                <div class="ms-3 flex-grow-1">
                  <h5 class="mb-2 card-title">Hello, Henry Franklin</h5>
                  <p class="text-muted mb-0">Ready to jump back in ?</p>
                </div>
                <div>
                  <NavLink to="/postjob">

                  <span class="btn btn-primary">
                    <i class="bx bx-plus align-middle"></i> Add New Jobs
                  </span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-3">
              <div class="card mini-stats-wid">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Job View</p>
                      <h4 class="mb-0">14,487</h4>
                    </div>

                    <div class="flex-shrink-0 align-self-center">
                      <div
                        data-colors='["--bs-success", "--bs-transparent"]'
                        dir="ltr"
                        id="eathereum_sparkline_charts"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="card-body border-top py-3">
                  <p class="mb-0">
                    {" "}
                    <span class="badge badge-soft-success me-1">
                      <i class="bx bx-trending-up align-bottom me-1"></i> 18.89%
                    </span>{" "}
                    Increase last month
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card mini-stats-wid">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">New Application</p>
                      <h4 class="mb-0">7,402</h4>
                    </div>

                    <div class="flex-shrink-0 align-self-center">
                      <div
                        data-colors='["--bs-success", "--bs-transparent"]'
                        dir="ltr"
                        id="new_application_charts"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="card-body border-top py-3">
                  <p class="mb-0">
                    {" "}
                    <span class="badge badge-soft-success me-1">
                      <i class="bx bx-trending-up align-bottom me-1"></i> 24.07%
                    </span>{" "}
                    Increase last month
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card mini-stats-wid">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Total Approved</p>
                      <h4 class="mb-0">12,487</h4>
                    </div>

                    <div class="flex-shrink-0 align-self-center">
                      <div
                        data-colors='["--bs-success", "--bs-transparent"]'
                        dir="ltr"
                        id="total_approved_charts"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="card-body border-top py-3">
                  <p class="mb-0">
                    {" "}
                    <span class="badge badge-soft-success me-1">
                      <i class="bx bx-trending-up align-bottom me-1"></i> 8.41%
                    </span>{" "}
                    Increase last month
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="card mini-stats-wid">
                <div class="card-body">
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">Total Rejected</p>
                      <h4 class="mb-0">12,487</h4>
                    </div>

                    <div class="flex-shrink-0 align-self-center">
                      <div
                        data-colors='["--bs-danger", "--bs-transparent"]'
                        dir="ltr"
                        id="total_rejected_charts"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="card-body border-top py-3">
                  <p class="mb-0">
                    {" "}
                    <span class="badge badge-soft-danger me-1">
                      <i class="bx bx-trending-down align-bottom me-1"></i>{" "}
                      20.63%
                    </span>{" "}
                    Decrease last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      {/* job vacancy */}

      <div class="row" style={{marginTop: "10px"}}>
        <div class="col-lg-12">
          <div class="d-flex">
            <h4 class="card-title mb-4 flex-grow-1">New Job Vacancy</h4>
          </div>
        </div>
        <Jobvacancy />
        <Jobvacancy />
        <Jobvacancy />
        <Jobvacancy />
        <Jobvacancy />
        <Jobvacancy />
        {/* <Jobvacancy /> */}
      </div>
      </div>

    </>
  );
}

export default HiringDetailsComponent;
