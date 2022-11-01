import React from "react";
import "../utilities/style.css";
import MainHeading from "./MainHeading";
import CategoryComponent from "./CategoryComponent";
import Loader from "./Loader";

function Jobcategories() {
  return (
    <>
      <Loader />
      <div className="jobcat_main">
        <MainHeading
          heading={"Categories"}
          path1={"Jobs"}
          path2={"Categories"}
        />
        <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body border-bottom">
                    <div class="d-flex align-items-center">
                      <h5 class="mb-0 card-title flex-grow-1">Manage Job Categories</h5>
                      <div class="flex-shrink-0">
                        {/* <span class="btn btn-primary mr-6">
                          Add New Job
                        </span> */}
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
                          type="text"
                          class="form-control"
                          id="searchInput"
                          placeholder="Add Job Category"
                        />
                      </div>
                      <div class="col-xxl-6 col-lg-6">
                      <input
                          type="text"
                          class="form-control"
                          id="searchInput"
                          placeholder="Search Category"
                        />
                      </div>

                      <div class="col-xxl-2 col-lg-4">
                        <button
                          type="button"
                          class="btn btn-primary w-100"
                        >
                          {/* <i class="mdi mdi-filter-outline align-middle"></i> */}
                          Add Category
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-bordered align-middle nowrap">
                        <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Creation Date</th>
                            <th scope="col">Jobs Allocated</th>
                            <th scope="col">Action</th>                            
                          </tr>
                        </thead>
                        <tbody>
                          <CategoryComponent/>
                          <CategoryComponent/>
                          <CategoryComponent/>
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

export default Jobcategories;
