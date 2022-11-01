import React from "react";
import office from "../images/office.png";

function Jobvacancy() {
  return (
    <>
      <div class="col-lg-2">
          <div class="card">
            <div class="card-body p-4">
              <div class="text-center mb-3">
                <img src={office} height="35" alt="" />
                <a href="job-details.html" class="text-body">
                  <h5 class="mt-4 mb-2 font-size-15">Project Manager</h5>
                </a>
                <p class="mb-0 text-muted">Themesbrand</p>
              </div>

              <div class="d-flex">
                <p class="mb-0 flex-grow-1 text-muted">
                  <i class="bx bx-map text-body"></i> California
                </p>
                <p class="mb-0 text-muted">
                  <b>8</b> Vacancy
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Jobvacancy;

