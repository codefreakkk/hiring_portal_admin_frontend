import React from 'react'
import Loader from '../Loader'
import MainHeading from '../MainHeading';
import {NavLink} from "react-router-dom";
import logo from "../../images/profile.png";
import Interviewstable from "../Interviewstable";
import Hiredcandidatestable from './Hiredcandidatestable';

function Hiredcandidates() {
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
                    <span style={{ color: "#556ee6" }}>109</span> Candidates Hired
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
                      placeholder="Search for ..."
                    />
                  </div>
                  <div class="col-xxl-2 col-lg-6">
                    <select class="form-control select2">
                      <option>Status</option>
                      <option value="Active">Active</option>
                      <option value="New">New</option>
                      <option value="Close">Close</option>
                    </select>
                  </div>
                  <div class="col-xxl-2 col-lg-4">
                    <select class="form-control select2">
                      <option>Select Type</option>
                      <option value="1">Full Time</option>
                      <option value="2">Part Time</option>
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
                      />
                    </div>
                  </div>
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
                        <th scope="col">Company Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">View Resume</th>
                        <th scope="col">View</th>
                        <th scope="col">Message</th>
                        <th scope="col">Interview details</th>
                      </tr>
                    </thead>
                    <tbody>
                        <Hiredcandidatestable/>
                        <Hiredcandidatestable/>
                      
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