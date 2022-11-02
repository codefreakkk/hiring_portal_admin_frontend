import React from "react";
import JobCard from "./JobCard"
import logo6 from "../user_assets/imgs/page/homepage1/marketing.svg";
import logo1 from "../user_assets/imgs/page/homepage1/management.svg";
import logo2 from "../user_assets/imgs/page/homepage1/finance.svg";
import logo3 from "../user_assets/imgs/page/homepage1/human.svg"
import logo4 from "../user_assets/imgs/page/homepage1/retail.svg"
import logo5 from "../user_assets/imgs/page/homepage1/content.svg";
import logo from "../user_assets/imgs/brands/brand-1.png";

function Section2() {
  return (
    <>
      <section class="section-box mt-50" style={{paddingTop: '50px'}}>
        <div class="container">
          <div class="text-center">
            <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp">Trending Jobs</h2>
            <p class="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">Search and connect with the right candidates faster. </p>
            <div class="list-tabs mt-40">
              <ul class="nav nav-tabs" role="tablist">
                <li><a><img src={logo1} alt="jobBox"/> Management</a></li>
                <li><a><img src={logo6} alt="jobBox"/> Marketing &amp; Sale</a></li>
                <li><a ><img src={logo2} alt="jobBox"/> Finance</a></li>
                <li><a><img src={logo3} alt="jobBox"/> Human Resource</a></li>
                <li><a><img src={logo4} alt="jobBox"/> Retail &amp; Products</a></li>
                <li><a><img src={logo5} alt="jobBox"/> Content Writer</a></li>
              </ul>
            </div>
          </div>
          
          <div class="mt-70">
            <div class="tab-content" id="myTabContent-1">
              <div class="tab-pane fade show active" id="tab-job-1" role="tabpanel" aria-labelledby="tab-job-1">
                <div class="row">
                  
                  <JobCard path={logo} />
                  <JobCard path={logo} />
                  <JobCard path={logo} />
                  <JobCard path={logo} />
                  <JobCard path={logo} />
                  <JobCard path={logo} />
                  <JobCard path={logo} />
                  <JobCard path={logo} />
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
