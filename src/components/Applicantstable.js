import React from "react";
import { NavLink } from "react-router-dom";

function Applicantstable() {
  return (
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
              <span href="job-details.html" class="btn btn-sm btn-soft-primary">
                <i class="mdi mdi-eye-outline"></i>
              </span>
            </li>
          </ul>
        </NavLink>
      </td>
      <td style={{ cursor: "pointer" }}>
        {/* feature to be added => if task not scheduled then display a button to schedule task */}

        <NavLink to="assigntask">
          <span class="badge bg-danger font-size-10">Assign Task</span>
        </NavLink>
        {/* <span class="badge bg-warning font-size-10">Task Scheduled</span> */}
      </td>
        <td>
      <NavLink to="viewtask">
          <span>View Task</span>
      </NavLink>
        </td>
      <td>Message</td>
      <td style={{cursor: "pointer"}}> <span class="badge bg-warning font-size-10">Take Interview</span></td>
      <td><button className="btn btn-primary">Hire</button></td>
      <td><button className="btn btn-danger">Reject</button></td>
    </tr>
  );
}

export default Applicantstable;
