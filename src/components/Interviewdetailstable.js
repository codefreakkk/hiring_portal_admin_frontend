import React from "react";
import {NavLink} from "react-router-dom"
function Interviewdetailstable({index, name, date}) {
  return (
    <>
      <div class="mt-4">
        <h5 class="mb-3">
          {" "}
          <span className="color_blue"> Interview Round</span> {index + 1}
        </h5>
        <div class="table-responsive">
          <table class="table mb-0 table-bordered">
            <tbody>
              <tr>
                <th scope="row">Interview Name</th>
                <td>
                  <span className="color_blue" style={{ fontWeight: "500" }}>
                    {" "}
                    {name}
                  </span>
                </td>
              </tr>
              <tr>
                <th scope="row">Interview Scheduled Date</th>
                <td>{date}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Interviewdetailstable;
