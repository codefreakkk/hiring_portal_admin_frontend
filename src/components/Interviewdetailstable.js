import React from "react";
import {NavLink} from "react-router-dom"
function Interviewdetailstable() {
  return (
    <>
      <div class="mt-4">
        <h5 class="mb-3">
          {" "}
          <span className="color_blue"> Interview Round</span> 1
        </h5>
        <div class="table-responsive">
          <table class="table mb-0 table-bordered">
            <tbody>
              <tr>
                <th scope="row">Interview Name</th>
                <td>
                  <span className="color_blue" style={{ fontWeight: "500" }}>
                    {" "}
                    Googleness Round
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">Applicant Name</th>
                <td>Harsh Sachin Said</td>
              </tr>
              <tr>
                <th scope="row">Applicant Email</th>
                <td>harshsaid@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">Job Name</th>
                <td>Full Stack Developer</td>
              </tr>
              <tr>
                <th scope="row">Interview Scheduled Date</th>
                <td>20-2-2022</td>
              </tr>
              <tr>
                <th scope="row">Re-Scheduled Interview</th>
                <td>
                  <NavLink to="scheduleinterview">

                  <span href="#" class="btn btn-sm btn-soft-info">
                    <i class="mdi mdi-pencil-outline"></i>
                  </span>
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Interviewdetailstable;
