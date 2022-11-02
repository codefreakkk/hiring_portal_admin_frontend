import React from "react";
import logo from "../user_assets/imgs/brands/brand-1.png";

function Findjobslist() {
  return (
    <>
      <div class="col-xl-12 col-12">
        <div class="card-grid-2 hover-up">
          <span class="flash"></span>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <div class="card-grid-2-image-left">
                <div class="image-box">
                  <img src={logo} alt="jobBox" />
                </div>
                <div class="right-info">
                  <a class="name-job" href="#">
                    LinkedIn
                  </a>
                  <span class="location-small">New York, US</span>
                </div>
              </div>
            </div>
            <div class="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
              <div class="pl-15 mb-15 mt-30">
                <a class="btn btn-grey-small mr-5" href="#">
                  Adobe XD
                </a>
                <a class="btn btn-grey-small mr-5" href="#">
                  Figma
                </a>
              </div>
            </div>
          </div>
          <div class="card-block-info">
            <h4>
              <a href="job-details.html">UI / UX Designer fulltime</a>
            </h4>
            <div class="mt-5">
              <span class="card-briefcase">Fulltime</span>
              <span class="card-time">
                <span>4</span>
                <span> mins ago</span>
              </span>
            </div>
            <p class="font-sm color-text-paragraph mt-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
            <div class="card-2-bottom mt-20">
              <div class="row">
                <div class="col-lg-7 col-7">
                  <span class="card-text-price">$500</span>
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

export default Findjobslist;
