import React from "react";
import { NavLink } from "react-router-dom";

function Hiredcandidatestable({ userName, userEmail, index, applied, jobTitle, uid }) {
  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{userName}</td>
        <td>{jobTitle}</td>
        <td>{applied}</td>
        <td>{userEmail}</td>
        <td
          style={{
            cursor: "pointer",
          }}
        >
          <NavLink to={`view/${uid}`}>
            <span class="badge bg-success font-size-10">View Details</span>
          </NavLink>
        </td>
      </tr>
    </>
  );
}

export default Hiredcandidatestable;
