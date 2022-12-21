import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

function Jobtable(data) {
  function handleDelete() {
    if(window.confirm("Do you want to delete this job ?")) {
      const jobId = data.id;
      axios.delete(`http://localhost:8000/api/deletejob/${jobId}`)
      .then((response) => {
        alert("Job deleted")
        data.setDeleteToggle(!data.deleteToggle)
      })
      .catch("Some error occured")
    }
  }
  return (
    <>
      <tr>
        {/* <th scope="row">{data.id}</th> */}
        <td>{data.jobTitle}</td>
        <td>{data.location}</td>
        <td>{data.jobexperience} Years</td>
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
              <div data-bs-toggle="modal" class="btn btn-sm btn-soft-danger">
                <div onClick={handleDelete}>
                  <i class="mdi mdi-delete-outline"></i>
                </div>
              </div>
            </li>
          </ul>
        </td>
      </tr>
    </>
  );
}

export default Jobtable;
