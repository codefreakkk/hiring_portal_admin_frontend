import React from "react";
import { NavLink } from "react-router-dom";

function Jobtable(data) {
  return (
    <>
      <tr>
        {/* <th scope="row">{data.id}</th> */}
        <td>{data.jobTitle}</td>
        <td>{data.location}</td>
        <td>{data.jobexperience}</td>
        <td>
          <span class="badge badge-soft-warning">
            {data.jobType == "1"
              ? "Full Time"
              : data.jobType == "2"
              ? "Part Time"
              : "Intern Ship"}
          </span>
        </td>
        <td>{data.closingDate}</td>
        <td>
          {data.status == "true" ? (
            <span class="badge text-bg-success">Active</span>
          ) : ( 
            <span class="badge text-bg-danger">Not Active</span>
          )}
        </td>
        <td>
          <ul class="list-unstyled hstack gap-1 mb-0">
            <NavLink to={`../jobdetails/${data.id}`}>
              <li data-bs-toggle="tooltip" data-bs-placement="top" title="View">
                <a href="job-details.html" class="btn btn-sm btn-soft-primary">
                  <i class="mdi mdi-eye-outline"></i>
                </a>
              </li>
            </NavLink>

            {/* Update job */}
            {/* <li data-bs-toggle="tooltip" data-bs-placement="top" title="Edit">
              <a href="#" class="btn btn-sm btn-soft-info">
                <i class="mdi mdi-pencil-outline"></i>
              </a>
            </li> */}

            <li data-bs-toggle="tooltip" data-bs-placement="top" title="Delete">
              <a
                href=""
                data-bs-toggle="modal"
                class="btn btn-sm btn-soft-danger"
              >
                <i class="mdi mdi-delete-outline"></i>
              </a>
            </li>
          </ul>
        </td>
      </tr>
    </>
  );
}

export default Jobtable;
