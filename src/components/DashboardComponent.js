import React from "react";
import Footer from "./Footer";
import MainHeading from "./MainHeading";
import HomeComponent1 from "./HomeComponent1";
import MonthlyHiredComponent from "./MonthlyHiredComponent";
import Activity from "./Activity";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loader from "./Loader";

function DashboardComponent() {
  return (
    <div>
      <Loader/>
      <div className="home_cont">
        {/* heading */}

        <MainHeading heading={"Home"} path1={"Dashboard"} path2={"Home"}/>

        {/* heading ends */}

        <div class="row">
          <div class="col-xl-4">
            {/* Home Component 1 */}
            <HomeComponent1 />
            {/* Home Component 1 end */}

            {/* monthly employee hired */}
            <MonthlyHiredComponent />
            {/* monthly employee hired end */}
          </div>
          <div class="col-xl-8">
            <div class="row">
              <div class="col-md-4">
                <div class="card mini-stats-wid">
                  <div class="card-body">
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <p class="text-muted fw-medium">
                          Total Employee Recruited
                        </p>
                        <h4 class="mb-0">1,235</h4>
                      </div>

                      <div class="flex-shrink-0 align-self-center">
                        <div class="mini-stat-icon avatar-sm rounded-circle bg-primary">
                          <span class="avatar-title">
                            <i class="bx bx-copy-alt font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mini-stats-wid">
                  <div class="card-body">
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <p class="text-muted fw-medium">Job Openings</p>
                        <h4 class="mb-0">22</h4>
                      </div>

                      <div class="flex-shrink-0 align-self-center">
                        <div class="avatar-sm rounded-circle bg-primary mini-stat-icon">
                          <span class="avatar-title rounded-circle bg-primary">
                            <i class="bx bx-archive-in font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mini-stats-wid">
                  <div class="card-body">
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <p class="text-muted fw-medium">Total Registration</p>
                        <h4 class="mb-0">$16.2</h4>
                      </div>

                      <div class="flex-shrink-0 align-self-center">
                        <div class="avatar-sm rounded-circle bg-primary mini-stat-icon">
                          <span class="avatar-title rounded-circle bg-primary">
                            <i class="bx bx-purchase-tag-alt font-size-24"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* activity starts */}

            <Activity />

            {/* activity ends */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
