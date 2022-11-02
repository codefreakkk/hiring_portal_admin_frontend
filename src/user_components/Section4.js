import React from "react";
import RecruiterCard from "./RecruiterCard";
import img from "../user_assets/imgs/brands/brand-10.png";

function Section4() {
  return (
    <>
      <section class="section-box" style={{marginTop: '90px'}}>
        <div class="container">
          <div class="text-center">
            <h2 class="section-title mb-10 wow animate__animated animate__fadeInUp">
              Top Recruiters
            </h2>
            <p class="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp">
              Discover your next career move, freelance gig, or internship
            </p>
          </div>
        </div>
        <div class="container">
          <div class="box-swiper mt-50">
            <div class="swiper-container swiper-group-1 swiper-style-2 swiper">
              <div class="swiper-wrapper pt-5">
                <div class="swiper-slide">
                  <RecruiterCard logo={img}/>
                  <RecruiterCard logo={img}/>
                  <RecruiterCard logo={img}/>
                  <RecruiterCard logo={img}/>
                  <RecruiterCard logo={img}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section4;
