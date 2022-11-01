import React from "react";
import { NavLink } from "react-router-dom";

function Interviewstable() {
  return (
    <>
      <tr>
        <th scope="row">10</th>
        <td>Marketing Director</td>
        <td>Web Technology pvt.ltd</td>
        <td>02-12-2022</td>
        <td>h@gmail.com</td>
        <td>7447457454</td>
        <td>
          <NavLink to="view">
            <ul class="list-unstyled hstack gap-1 mb-0">
              <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                <span
                  href="job-details.html"
                  class="btn btn-sm btn-soft-primary"
                >
                  <i class="mdi mdi-eye-outline"></i>
                </span>
              </li>
            </ul>
          </NavLink>
        </td>
        <td>Message</td>
        <td
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "24px",
            cursor: "pointer",
          }}
        >
          <NavLink to="interviewdetails">
            <span class="badge bg-success font-size-10">View Details</span>
          </NavLink>
        </td>
        <td>
          <NavLink to="scheduleinterview">
          <span class="badge bg-warning font-size-10">Schedule</span>
          </NavLink>
        </td>
        <td>
          <button className="btn btn-primary">Hire</button>
        </td>
        <td>
          <button className="btn btn-danger">Reject</button>
        </td>
      </tr>
    </>
  );
}

export default Interviewstable;
