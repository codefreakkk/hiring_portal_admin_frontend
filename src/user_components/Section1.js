import React from "react";
import logo1 from "../user_assets/imgs/page/homepage1/banner1.png";
import logo2 from "../user_assets/imgs/page/homepage1/banner2.png"
import logo3 from "../user_assets/imgs/page/homepage1/icon-top-banner.png";
import logo4 from "../user_assets/imgs/page/homepage1/icon-bottom-banner.png"

function Section1() {
  return (
    <>
      <div class="bg-homepage1"></div>
      <section class="section-box">
        <div class="banner-hero hero-1">
          <div class="banner-inner">
            <div class="row">
              <div class="col-xl-8 col-lg-12">
                <div class="block-banner">
                  <h1 class="heading-banner wow animate__animated animate__fadeInUp">
                    The <span class="color-brand-2">Easiest Way</span>
                    <br class="d-none d-lg-block"></br>to Get Your New Job
                  </h1>
                  <div
                    class="banner-description mt-20 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".1s"
                  ></div>
                  <div
                    class="form-find mt-40 wow animate__animated animate__fadeIn"
                    data-wow-delay=".2s"
                  >
                    <form>
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
                  <div
                    class="list-tags-banner mt-60 wow animate__animated animate__fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <strong>Popular Searches:</strong>
                    <a href="#">Designer</a>, <a href="#">Web</a>,{" "}
                    <a href="#">IOS</a>, <a href="#">Developer</a>,{" "}
                    <a href="#">PHP</a>, <a href="#">Senior</a>,{" "}
                    <a href="#">Engineer</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-12 d-none d-xl-block col-md-6">
                <div class="banner-imgs">
                  <div class="block-1 shape-1">
                    <img
                      class="img-responsive"
                      alt="jobBox"
                      src={logo1}
                    />
                  </div>
                  <div class="block-2 shape-2">
                    <img
                      class="img-responsive"
                      alt="jobBox"
                      src={logo2}
                    />
                  </div>
                  <div class="block-3 shape-3">
                    <img
                      class="img-responsive"
                      alt="jobBox"
                      src={logo3}
                    />
                  </div>
                  <div class="block-4 shape-3">
                    <img
                      class="img-responsive"
                      alt="jobBox"
                      src={logo4}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="mt-100"></div>
    </>
  );
}

export default Section1;
