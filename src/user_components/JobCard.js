import React from "react";

function JobCard({path}) {
  return (
    <>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
        <div class="card-grid-2 hover-up">
          <div class="card-grid-2-image-left">
            <span class="flash"></span>
            <div class="image-box">
              <img src={path} alt="jobBox" />
            </div>
            <div class="right-info">
              <a class="name-job" href="company-details.html">
                Periscope
              </a>
              <span class="location-small">New York, US</span>
            </div>
          </div>
          <div class="card-block-info">
            <h6>
              <a href="job-details.html">Lead Quality Control QA</a>
            </h6>
            <div class="mt-5">
              <span class="card-briefcase">Full time</span>
              <span class="card-time">
                6<span> minutes ago</span>
              </span>
            </div>
            <p class="font-sm color-text-paragraph mt-15">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur.
            </p>
            <div class="mt-30">
              <a class="btn btn-grey-small mr-5" href="job-details.html">
                iOS
              </a>
              <a class="btn btn-grey-small mr-5" href="job-details.html">
                Laravel
              </a>
              <a class="btn btn-grey-small mr-5" href="job-details.html">
                Golang
              </a>
            </div>
            <div class="card-2-bottom mt-30">
              <div class="row">
                <div class="col-lg-7 col-7">
                  <span class="card-text-price">$250</span>
                  <span class="text-muted">/Hour</span>
                </div>
                <div class="col-lg-5 col-5 text-end">
                  <div
                    class="btn btn-apply-now"
                    data-bs-toggle="modal"
                    data-bs-target="#ModalApplyJobForm"
                  >
                    Apply now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobCard;
