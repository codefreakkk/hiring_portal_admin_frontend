import React from "react";
import Header from "./Header";
import Findjobslist from "./Findjobslist";
import Footer from "./Footer";

function Findjobs() {
  return (
    <>
      <Header />

      {/* section 1 */}
      <main className="main">
        <section class="section-box-2">
          <div class="container">
            <div class="banner-hero banner-single banner-single-bg">
              <div class="block-banner text-center">
                <h3 class="wow animate__animated animate__fadeInUp">
                  <span class="color-brand-2">22 Jobs</span> Available Now
                </h3>
                <div
                  class="font-sm color-text-paragraph-2 mt-10 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".1s"
                >
                  Lorem ips um dolor sit amet consectetur adipisicing elit. Vero
                  repellendus magni, <br class="d-none d-xl-block" />
                  atque delectus molestias quis?
                </div>
                <div
                  class="form-find text-start mt-40 wow animate__animated animate__fadeInUp"
                  data-wow-delay=".2s"
                >
                  <form>
                    <div class="box-industry" style={{paddingTop: '4px'}}>
                      <select class="form-input mr-10 select-active input-industry">
                        <option value="0">Industry</option>
                        <option value="1">Software</option>
                        <option value="2">Finance</option>
                        <option value="3">Recruting</option>
                        <option value="4">Management</option>
                        <option value="5">Advertising</option>
                        <option value="6">Development</option>
                      </select>
                    </div>
                    <select class="form-input mr-10 select-active">
                      <option value="YE">Yemen</option>
                      <option value="ZM">Zambia</option>
                      <option value="ZW">Zimbabwe</option>
                    </select>
                    <input
                      class="form-input input-keysearch mr-10"
                      type="text"
                      placeholder="Your keyword... "
                    />
                    <button class="btn btn-default btn-find font-sm">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* section 2 */}
        <section class="section-box mt-30">
          <div class="container">
            <div class="row flex-row-reverse">
              <div class="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                <div class="content-page">
                  <div class="box-filters-job">
                    <div class="row">
                      <div class="col-xl-6 col-lg-5">
                        <span class="text-small text-showing">
                          Showing <strong>944 </strong>
                          jobs
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="row display-list">
                        <Findjobslist/>
                        <Findjobslist/>
                        <Findjobslist/>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                <div class="sidebar-shadow none-shadow mb-30">
                  <div class="sidebar-filters">
                    <div class="filter-block head-border mb-30">
                      <h5>
                        Advance Filter{" "}
                        <a class="link-reset" href="#">
                          Reset
                        </a>
                      </h5>
                    </div>
                    <div class="filter-block mb-30">
                      <div class="form-group select-style select-style-icon">
                        <select class="form-control form-icons select-active">
                          <option>New York, US</option>
                          <option>London</option>
                          <option>Paris</option>
                          <option>Berlin</option>
                        </select>
                        {/* <i class="fi-rr-marker"></i> */}
                      </div>
                    </div>
                    <div class="filter-block mb-20">
                      <h5 class="medium-heading mb-15">Industry</h5>
                      <div class="form-group">
                        <ul class="list-checkbox">
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" checked="checked" />
                              <span class="text-small">All</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">180</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">Software</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">12</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="filter-block mb-20">
                      <h5 class="medium-heading mb-25">Salary Range</h5>
                      <div class="list-checkbox pb-20">
                        {/* salary range. */}
                      </div>
                    </div>
                    <div class="filter-block mb-30">
                      <h5 class="medium-heading mb-10">Experience Level</h5>
                      <div class="form-group">
                        <ul class="list-checkbox">
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">Internship</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">56</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">Entry Level</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">87</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" checked="checked" />
                              <span class="text-small">Associate</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">24</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">Mid Level</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">45</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">Director</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">76</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">Executive</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">89</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="filter-block mb-30">
                      <h5 class="medium-heading mb-10">Onsite/Remote</h5>
                      <div class="form-group">
                        <ul class="list-checkbox">
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">On-site</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">12</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" checked="checked" />
                              <span class="text-small">Remote</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">65</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">Hybrid</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">58</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="filter-block mb-20">
                      <h5 class="medium-heading mb-15">Job type</h5>
                      <div class="form-group">
                        <ul class="list-checkbox">
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">Full Time</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">25</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" checked="checked" />
                              <span class="text-small">Part Time</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">64</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">Remote Jobs</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">78</span>
                          </li>
                          <li>
                            <label class="cb-container">
                              <input type="checkbox" />
                              <span class="text-small">Freelancer</span>
                              <span class="checkmark"></span>
                            </label>
                            <span class="number-item">97</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </>
  );
}

export default Findjobs;
