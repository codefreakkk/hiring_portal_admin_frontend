import axios from "axios";
import React, { useEffect, useState } from "react";
import Jobapplicantstable from "./Jobapplicantstable";
import Loader from "./Loader";
import MainHeading from "./MainHeading";

function Jobapplicants() {
  const [applicants, setApplicants] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const cid = localStorage.getItem("cid");
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .post(
        "http://localhost:8000/api/getjoballapplicants",
        {
          cid: cid,
        },
        config
      )
      .then((response) => {
        setApplicants(response.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Loader />
      <div className="joblists_main">
        <MainHeading
          heading={"Job Applicants"}
          path1={"Candidate"}
          path2={"Job Applicants"}
        />

        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body border-bottom">
                <div class="d-flex align-items-center">
                  <h5 class="mb-0 card-title flex-grow-1">
                    <span style={{ color: "#556ee6" }}>{applicants.length}</span> Applications
                  </h5>
                  <div class="flex-shrink-0" onClick={() => window.location.reload()}>
                    <span class="btn btn-light">
                      <i class="mdi mdi-refresh"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="card-body border-bottom">
                <div class="row g-3">
                  <div class="col-xxl-4 col-lg-6">
                    <input
                      type="search"
                      class="form-control"
                      id="searchInput"
                      placeholder="Search for ..."
                    />
                  </div>
                  <div class="col-xxl-2 col-lg-6">
                    <div id="datepicker1">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Select date"
                        data-date-format="dd M, yyyy"
                        data-date-autoclose="true"
                        data-date-container="#datepicker1"
                        data-provide="datepicker"
                      />
                    </div>
                  </div>
                  <div class="col-xxl-2 col-lg-4"></div>
                  <div class="col-xxl-2 col-lg-4"></div>
                  <div class="col-xxl-2 col-lg-4">
                    <button type="button" class="btn btn-soft-secondary w-100">
                      <i class="mdi mdi-filter-outline align-middle"></i> Filter
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered align-middle nowrap">
                    <thead>
                      <tr>
                        <th scope="col">Sr. No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Job Name</th>
                        <th scope="col">Applied Date</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Full Profile</th>
                        <th scope="col">Accept</th>
                        <th scope="col">Reject</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loader == true ? (
                        <></>
                      ) : (
                        applicants.map((data, index) => {
                          return (
                            <Jobapplicantstable
                              index={index}
                              key={index}
                              jobTitle={data.jobTitle}
                              userName={data.userName}
                              userEmail={data.userEmail}
                              applied={data.appliedOn}
                              uid={data.uid}
                              jid={data.jid}
                            />
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobapplicants;
