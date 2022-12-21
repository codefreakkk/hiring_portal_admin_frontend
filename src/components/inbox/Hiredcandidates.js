import React, { useEffect, useState } from 'react'
import Loader from '../Loader'
import MainHeading from '../MainHeading';
import Hiredcandidatestable from './Hiredcandidatestable';
import axios from 'axios';

function Hiredcandidates() {
  const [job, setJob] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/api/hiredapplicants")
    .then((response) => {
      console.log(response);
      setJob(response.data);
      setLoader(false);
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <>
    <Loader/>
    <div className="hiringdetails_main">
        <MainHeading
          heading={"Hired Candidates"}
          path1={"Candidate"}
          path2={"Hired Candidates"}
        />
        
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body border-bottom">
                <div class="d-flex align-items-center">
                  <h5 class="mb-0 card-title flex-grow-1">
                    <span style={{ color: "#556ee6" }}>{loader == true? 0 : job.length}</span> Candidates Hired
                  </h5>
                  <div class="flex-shrink-0">
                    <span class="btn btn-light">
                      <i class="mdi mdi-refresh"></i>
                    </span>
                  </div>
                </div>
              </div>
              {/* <div class="card-body border-bottom">
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
                  <div class="col-xxl-2 col-lg-4">
                  </div>
                  <div class="col-xxl-2 col-lg-4">
                    <div id="datepicker1">
                    </div>
                  </div>
                  <div class="col-xxl-2 col-lg-4">
                    <button type="button" class="btn btn-soft-secondary w-100">
                      <i class="mdi mdi-filter-outline align-middle"></i> Filter
                    </button>
                  </div>
                </div>
              </div> */}
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
                        <th scope="col">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {loader == true ? <></>:
                        job.map((data, index) => {
                          return (
                            <Hiredcandidatestable
                              key={index}
                              userName={data.userName}
                              userEmail={data.userEmail}
                              applied={data.appliedOn}
                              uid={data.uid}
                              index={index}
                              jobTitle={data.jobTitle}
                            />
                          )
                        })
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Hiredcandidates