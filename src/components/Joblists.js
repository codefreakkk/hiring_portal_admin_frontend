import { React, useEffect, useState } from "react";
import MainHeading from "./MainHeading";
import Jobtable from "./Jobtable";
import Loader from "./Loader";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { socket } from "socket.io-client";
import "../utilities/style.css";

function Joblists() {
  const [jobData, setJobData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState();
  const [active, setActive] = useState("true");
  const [jtype, setJType] = useState("1");
  const [date, setDate] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/getalljobs")
      .then((response) => {
        setJobData(response.data);
        setLoader(true);
      })
      .catch((err) => console.log(err));
  }, []);

  // make get request for handling filter
  function handleFilterSubmit() {
    axios.post("http://localhost:8000/api/filterjobs", {
      active,
      jtype,
      date,
      search
    })
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
  }

  return (
    <>
      <Loader />
      <div className="joblists_main">
        <MainHeading heading={"Job List"} path1={"Jobs"} path2={"Job list"} />
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body border-bottom">
                <div class="d-flex align-items-center">
                  <h5 class="mb-0 card-title flex-grow-1">Jobs Lists</h5>
                  <div class="flex-shrink-0">
                    <NavLink to="/postjob">
                      <span class="btn btn-primary mr-6">Add New Job</span>
                    </NavLink>
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
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search for ..."
                    />
                  </div>
                  <div class="col-xxl-2 col-lg-6">
                    <select class="form-control select2" value={active} onChange={(e) => setActive(e.target.value)}>
                      <option value="true">Active</option>
                      <option value="false">Not Active</option>
                    </select>
                  </div>
                  <div class="col-xxl-2 col-lg-4">
                    <select class="form-control select2" value={jtype} onChange={(e) => setJType(e.target.value)} >
                      <option value="1">Full Time</option>
                      <option value="2">Part Time</option>
                      <option value="3">Internship</option>
                    </select>
                  </div>
                  <div class="col-xxl-2 col-lg-4">
                    <div id="datepicker1">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Select date"
                        data-date-format="dd M, yyyy"
                        data-date-autoclose="true"
                        data-date-container="#datepicker1"
                        data-provide="datepicker"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-xxl-2 col-lg-4">
                    <button type="button" class="btn btn-soft-secondary w-100" onClick={handleFilterSubmit}>
                      <i class="mdi mdi-filter-outline align-middle"></i> Filter
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="card-body"
                style={
                  loader
                    ? {}
                    : {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }
                }
              >
                {loader ? (
                  <div class="table-responsive">
                    <table class="table table-bordered align-middle nowrap">
                      <thead>
                        <tr>
                          {/* <th scope="col">No</th> */}
                          <th scope="col">Job Title</th>
                          <th scope="col">Location</th>
                          <th scope="col">Experience</th>
                          <th scope="col">Type</th>
                          <th scope="col">Last Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobData.map((data) => {
                          return (
                            <Jobtable
                              key={data._id}
                              id={data._id}
                              jobTitle={data.jobTitle}
                              jobDescription={data.jobDescription}
                              jobType={data.jobType}
                              jobCategory={data.jobCategory}
                              jobexperience={data.jobexperience}
                              closingDate={data.closingDate}
                              location={data.location}
                              status={data.status}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="joblist_loader">
                    <Oval
                      height="40"
                      width="40"
                      color="#556de6cd"
                      radius="20"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="rings-loading"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Joblists;
