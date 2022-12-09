import React from "react";
import Loader from "./Loader";
import MainHeading from "./MainHeading";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";

function Jobdetails() {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getjob/${id}`)
      .then((response) => {
        setJobData(response.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Loader />
      <div className="jobdetails_main">
        <MainHeading
          heading={"Job Details"}
          path1={"Jobs"}
          path2={"Job Details"}
        />
        {loader ? (
          <div className="viewporfile_inner">
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
        ) : (
          <div class="row">
            <div class="col-xl-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="fw-semibold">Overview</h5>

                  <div class="table-responsive">
                    <table class="table">
                      <tbody>
                        <tr>
                          <th scope="col">Job Title</th>
                          <td scope="col">{jobData.jobTitle}</td>
                        </tr>
                        <tr>
                          <th scope="row">Experience:</th>
                          <td>{jobData.jobexperience} Years</td>
                        </tr>
                        <tr>
                          <th scope="row">Vacancy</th>
                          <td>{jobData.vacancy}</td>
                        </tr>
                        <tr>
                          <th scope="row">Job Type</th>
                          <td>
                            <span class="badge badge-soft-success">
                              {jobData.jobType == "1"
                                ? "Full Time"
                                : jobData.jobType == "2"
                                ? "Part Time"
                                : "Intern Ship"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Status</th>
                          <td>
                            <span class="badge badge-soft-info">
                              {jobData.status == "true"
                                ? "Active"
                                : "Not Active"}
                            </span>
                          </td>
                        </tr>
                        {/* <tr>
                          <th scope="row">Posted Date</th>
                          <td>25 June, 2022</td>
                        </tr> */}
                        <tr>
                          <th scope="row">Job Closing Date</th>
                          <td>{jobData.closingDate}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <div class="text-center">
                    <img
                      src={jobData.imageUrl}
                      alt=""
                      height="50"
                      class="mx-auto d-block"
                    />
                    {/* <h5 class="mt-3 mb-1">{jobData.email}</h5> */}
                    {/* <p class="text-muted mb-0">Since July 2017</p> */}
                  </div>

                  <ul class="list-unstyled mt-4">
                    {/* <li>
                      <div class="d-flex">
                        <i class="bx bx-phone text-primary fs-4"></i>
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Phone</h6>
                          <p class="text-muted fs-14 mb-0">+589 560 56555</p>
                        </div>
                      </div>
                    </li> */}
                    <li class="mt-3">
                      <div class="d-flex">
                        <i class="bx bx-mail-send text-primary fs-4"></i>
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Email</h6>
                          <p class="text-muted fs-14 mb-0">{jobData.email}</p>
                        </div>
                      </div>
                    </li>
                    <li class="mt-3">
                      <div class="d-flex">
                        <i class="bx bx-globe text-primary fs-4"></i>
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Website</h6>
                          <p class="text-muted fs-14 text-break mb-0">
                            {jobData.website}
                          </p>
                        </div>
                      </div>
                    </li>
                    <li class="mt-3">
                      <div class="d-flex">
                        <i class="bx bx-map text-primary fs-4"></i>
                        <div class="ms-3">
                          <h6 class="fs-14 mb-2">Location</h6>
                          <p class="text-muted fs-14 mb-0">
                            {jobData.location}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>

                  {/* <div class="mt-4">
                <a
                  href="#!"
                  class="btn btn-soft-primary btn-hover w-100 rounded"
                >
                  <i class="mdi mdi-eye"></i> View Profile
                </a>
              </div> */}
                </div>
              </div>
            </div>
            <div class="col-xl-9">
              <div class="card">
                <div class="card-body border-bottom">
                  <div class="d-flex">
                    <img src={jobData.imageUrl} alt="" height="50" />
                    <div class="flex-grow-1 ms-3">
                      <h5 class="fw-semibold">{jobData.jobTitle}r</h5>
                      <ul class="list-unstyled hstack gap-2 mb-0">
                        {/* <li>
                          <i class="bx bx-building-house"></i>{" "}
                          <span class="text-muted">Themesbrand</span>
                        </li> */}
                        <li>
                          <i class="bx bx-map"></i>{" "}
                          <span class="text-muted">{jobData.location}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="fw-semibold mb-3">Description</h5>
                  <p class="text-muted">{jobData.jobDescription}</p>

                  {/* responsibilities */}
                  <h5 class="fw-semibold mb-3">Responsibilities:</h5>
                  <ul class="vstack gap-3">
                    {jobData.responsibilities.map((data) => {
                      return <li>{data.name}</li>;
                    })}
                  </ul>

                  <h5 class="fw-semibold mb-3">Requirements:</h5>
                  <ul class="vstack gap-3">
                    {jobData.requirements.map((data) => {
                      return <li>{data.name}</li>;
                    })}
                  </ul>

                  <h5 class="fw-semibold mb-3">Qualification:</h5>
                  <ul class="vstack gap-3">
                    {jobData.qualification.map((data) => {
                      return <li>{data.name}</li>;
                    })}
                  </ul>

                  <h5 class="fw-semibold mb-3">Skill & Experience:</h5>
                  <ul class="vstack gap-3 mb-0">
                    {jobData.skills.map((data) => {
                      return <li>{data.name}</li>;
                    })}
                  </ul>

                  <div class="mt-4">
                    {jobData.keywords.map((data) => {
                      return (
                        <span
                          class="badge badge-soft-warning"
                          style={{ marginRight: "10px" }}
                        >
                          {data.name}
                        </span>
                      );
                    })}
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

export default Jobdetails;
