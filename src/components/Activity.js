import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Activity() {
  const [org, setOrg] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const oid = localStorage.getItem("cid");
    axios
      .post("http://localhost:8000/api/organization", { oid })
      .then((response) => {
        setOrg(response.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div class="card">
        <div class="card-body">
          <div class="d-sm-flex flex-wrap">
            <div style={{ marginBottom: "35px" }}>
              {/* <h4 class="card-title mb-4">Activity</h4> */}
              {loader == true ? (
                <></>
              ) : (
                <ul class="verti-timeline list-unstyled">
                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <h5 class="font-size-14">
                          Organization Name
                          <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div class="flex-grow-1">
                        <div>{org.organizationName}</div>
                      </div>
                    </div>
                  </li>
                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <h5 class="font-size-14">
                          Orgnization Email{" "}
                          <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div class="flex-grow-1">
                        <div>
                          {org.organizationEmail}
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li class="event-list active">
                      <div class="event-timeline-dot">
                        <i class="bx bxs-right-arrow-circle font-size-18 bx-fade-right"></i>
                      </div>
                      <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                          <h5 class="font-size-14">
                            15 Nov{" "}
                            <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                          </h5>
                        </div>
                        <div class="flex-grow-1">
                          <div>Joined the group “Boardsmanship Forum”</div>
                        </div>
                      </div>
                    </li> */}
                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <h5 class="font-size-14">
                          Organization Location{" "}
                          <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div class="flex-grow-1">
                        <div>{org.organizationLocation}</div>
                      </div>
                    </div>
                  </li>

                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle font-size-18"></i>
                    </div>
                    <div class="d-flex">
                      <div class="flex-shrink-0 me-3">
                        <h5 class="font-size-14">
                          Organization Type{" "}
                          <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                        </h5>
                      </div>
                      <div class="flex-grow-1">
                        <div>{org.organizationType}</div>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>

            {/* <div class="text-center mt-4" style={{position: 'absolute', bottom: '10px'}}>
                    <a
                      
                      class="btn btn-primary waves-effect waves-light btn-sm"
                    >
                      View More <i class="mdi mdi-arrow-right ms-1"></i>
                    </a>
                  </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Activity;
