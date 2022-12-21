import React, { useEffect, useState } from "react";
import Interviewstable from "./Interviewstable";
import Loader from "./Loader";
import MainHeading from "./MainHeading";
import axios from "axios";

function Interviews() {
  const [applicants, setApplicants] = useState([]);
  const [loader, setLoader] = useState(true);
  const [filter, setFilter] = useState("");
  const [date, setDate] = useState("");

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
        "http://localhost:8000/api/interview",
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

  function handleFilter() {
    const oid = localStorage.getItem("cid");
    axios
      .post("http://localhost:8000/api/filterjobcandidate", {
        oid,
        filter,
        date,
      })
      .then((res) => {
        setApplicants(res.data);
        console.log(res.data);
      })
      .catch((err) => alert("Some error occured"));
  }

  return (
    <>
      <Loader />
      <div className="interviews_main">
        <MainHeading
          heading={"Interviews"}
          path1={"Candidate"}
          path2={"Interviews"}
        />

        {loader == true ? (
          <></>
        ) : (
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body border-bottom">
                  <div class="d-flex align-items-center">
                    <h5 class="mb-0 card-title flex-grow-1">
                      <span style={{ color: "#556ee6" }}>
                        {applicants.length}
                      </span>{" "}
                      Applications
                    </h5>
                    <div class="flex-shrink-0">
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
                        onChange={(e) => setFilter(e.target.value)}
                        placeholder="Search for ..."
                      />
                    </div>
                    <div class="col-xxl-2 col-lg-6">
                      <div id="datepicker1">
                        <input
                          type="date"
                          class="form-control"
                          placeholder="Select date"
                          onChange={(e) => setDate(e.target.value)}
                          data-date-format="dd M, yyyy"
                          data-date-autoclose="true"
                          data-date-container="#datepicker1"
                          data-provide="datepicker"
                        />
                      </div>
                    </div>
                    <div class="col-xxl-2 col-lg-4">
                      {/* <select class="form-control select2">
                      <option>Select Type</option>
                      <option value="1">Full Time</option>
                      <option value="2">Part Time</option>
                    </select> */}
                    </div>
                    <div class="col-xxl-2 col-lg-4"></div>
                    <div class="col-xxl-2 col-lg-4">
                      <button
                        type="button"
                        class="btn btn-soft-secondary w-100"
                        onClick={handleFilter}
                      >
                        <i class="mdi mdi-filter-outline align-middle"></i>{" "}
                        Filter
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
                          <th scope="col">Interview details</th>
                          <th scope="col">Interview</th>
                          <th scope="col">Hire</th>
                          <th scope="col">Reject</th>
                        </tr>
                      </thead>
                      <tbody>
                        {loader == true ? (
                          <></>
                        ) : (
                          applicants.map((data, index) => {
                            return (
                              <Interviewstable
                                key={index}
                                index={index}
                                userName={data.userName}
                                jobTitle={data.jobTitle}
                                userEmail={data.userEmail}
                                uid={data.uid}
                                applied={data.appliedOn}
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
        )}
      </div>
    </>
  );
}

export default Interviews;
