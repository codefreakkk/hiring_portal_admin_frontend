import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

function Jobapplicantstable({
  uid,
  jid,
  jobTitle,
  userName,
  userEmail,
  applied,
  index,
}) {
  function handleAccept() {
    const cid = localStorage.getItem("cid");
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .put(
        "http://localhost:8000/api/updateinterview",
        { jid, uid, cid },
        config
      )
      .then((response) => {
        if (response.data.status == true) {
          alert("Candidate Accepted");
          window.location.reload();
        }
      })
      .catch((err) => alert("Some error occured"));
  }

  function handleDelete() {
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
        alert("Applicant rejeted")
        window.location.reload()
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
        {/* need to work */}
        <td>
          <button className="btn btn-primary" onClick={handleAccept}>
            Accept
          </button>
        </td>
        <td>
          <button className="btn btn-danger" onClick={handleDelete}>
            Reject
          </button>
        </td>
      </tr>
    </>
  );
}

export default Jobapplicantstable;
