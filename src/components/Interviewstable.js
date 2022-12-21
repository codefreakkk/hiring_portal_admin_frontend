import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function Interviewstable({
  index,
  uid,
  jid,
  jobTitle,
  userName,
  userEmail,
  applied,
}) {
  // handle hire
  function handleHire() {
    const cid = localStorage.getItem("cid");
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .put("http://localhost:8000/api/hireapplicant", { jid, uid, cid }, config)
      .then((response) => {
        if (response.data.status == true) {
          alert("Candidate Hired");
          window.location.reload();
        }
      })
      .catch((err) => alert("Some error occured"));
  }

  // handle reject
  function handleReject() {
    // need to work on this after finishing dinner
    const cid = localStorage.getItem("cid");
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .post(
        "http://localhost:8000/api/rejectapplicant",
        { jid, uid, cid },
        config
      )
      .then((response) => {
        alert("Applicant rejeted");
        window.location.reload();
      })
      .catch((err) => alert("Some error occured"));
  }

  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{userName}</td>
        <td>{jobTitle}</td>
        <td>{applied}</td>
        <td>{userEmail}</td>
        <td>
          <NavLink to={`view/${uid}`}>
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
        <td
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "24px",
            cursor: "pointer",
          }}
        >
          <NavLink to={`interviewdetails/${uid}/job/${jid}`}>
            <span class="badge bg-success font-size-10">View Details</span>
          </NavLink>
        </td>
        <td>
          <NavLink to={`scheduleinterview/${uid}/job/${jid}`}>
            <span class="badge bg-warning font-size-10">Schedule</span>
          </NavLink>
        </td>
        <td>
          <button className="btn btn-primary" onClick={handleHire}>
            Hire
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={handleReject}>
            Reject
          </button>
        </td>
      </tr>
    </>
  );
}

export default Interviewstable;
