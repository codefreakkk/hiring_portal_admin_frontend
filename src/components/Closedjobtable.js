import React from "react";
import { NavLink } from "react-router-dom";
import Closedjobs from "./Closedjobs";

function Closedjobtable() {
  return (
    <>
      <tr>
        <th scope="row">10</th>
        <td>Marketing Director</td>
        <td>Web Technology pvt.ltd</td>
        <td>California</td>
        <td>0-2 Years</td>
        <td>2</td>
        <td>
          <span class="badge badge-soft-warning">Internship</span>
        </td>
        <td>02 June 2021</td>
        <td>25 June 2021</td>
        <td>
          <span class="badge text-bg-success">Active</span>
        </td>
        <td>
          <ul class="list-unstyled hstack gap-1 mb-0">
            <NavLink to="../jobdetails">
              <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                <a href="job-details.html" class="btn btn-sm btn-soft-primary">
                  <i class="mdi mdi-eye-outline"></i>
                </a>
              </li>
            </NavLink>
          </ul>
        </td>
      </tr> 
    </>
  );
}

export default Closedjobtable;
