import React from "react";
import Loader from "./Loader";
import MainHeading from "./MainHeading";

function Scheduleinterview() {
  return (
    <>
      <Loader />
      <div className="viewtask_main">
        <MainHeading
          heading={"Schedule Interview"}
          path1={"Candidate"}
          path2={"Schedule Interview"}
        />
        <div className="scheduleinterview_main">
          <div className="card">
            <div className="card-body">
              <h5 class="mb-3 card-title flex-grow-1">
                <span style={{ color: "#556ee6" }}>Interview </span> Information
              </h5>
              <div class="mb-4">
                <div class="mb-3">
                  <label for="productname">Interview Name</label>
                  <input
                    id="productname"
                    name="productname"
                    type="text"
                    class="form-control"
                    placeholder="Enter Interview Name"
                  />
                </div>

                <div class="mb-3">
                  <label for="productname">Interview Date</label>
                  <input
                    id="productname"
                    name="productname"
                    type="date"
                    class="form-control"
                    placeholder="Enter Interview Date"
                  />
                </div>
              </div>

              {/* applicant details */}
              <h5 class="mb-3 card-title flex-grow-1">
                <span style={{ color: "#556ee6" }}>Applicant </span> Details
              </h5>
              <div class="table-responsive">
                <table class="table mb-0 table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row">Job Name</th>
                      <td>
                        <span
                          className="color_blue"
                          style={{ fontWeight: "600" }}
                        >
                          {" "}
                          Full Stack Developer
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Applicant Name</th>
                      <td>Harsh Said</td>
                    </tr>
                    <tr>
                      <th scope="row">Applicant Email</th>
                      <td>harsh@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="btn btn-primary mt-3">Schedule</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scheduleinterview;
