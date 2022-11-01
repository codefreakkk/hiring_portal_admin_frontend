import React from "react";
import Loader from "./Loader";
import Details from "./Details";
import profile from "../images/profile.png"
import MainHeading from "./MainHeading";
function View() {
  return (
    <>
      <Loader />
      <div className="view_main">
        <MainHeading heading={"Applicant Profile"} path1={"Candidate"} path2={"Applicant Profile"} />
        <div class="row">
          <div class="col-lg-3">
            <div class="card">
              <div class="card-body">
                <ul class="list-unstyled vstack gap-3 mb-0">
                  <li>
                    <div class="d-flex">
                      <i class="bx bx-calendar font-size-18 text-primary"></i>
                      <div class="ms-3">
                        <h6 class="mb-1 fw-semibold">Experience:</h6>
                        <span class="text-muted">2+ Years</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex">
                      <i class="bx bx-money font-size-18 text-primary"></i>
                      <div class="ms-3">
                        <h6 class="mb-1 fw-semibold">Expected Salary:</h6>
                        <span class="text-muted">$ 4000+</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex">
                      <i class="bx bx-user font-size-18 text-primary"></i>
                      <div class="ms-3">
                        <h6 class="mb-1 fw-semibold">Gender:</h6>
                        Male
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex">
                      <i class="mdi mdi-book-education font-size-18 text-primary"></i>
                      <div class="ms-3">
                        <h6 class="mb-1 fw-semibold">Qualification:</h6>
                        <span class="text-muted">Master Degree</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex">
                      <i class="mdi mdi-google-translate font-size-18 text-primary"></i>
                      <div class="ms-3">
                        <h6 class="mb-1 fw-semibold">Languages:</h6>
                        <span class="text-muted">English, France</span>
                      </div>
                    </div>
                  </li>

                  <li style={{cursor:"pointer", marginLeft:'2px'}}>
                    <div class="d-flex">
                      <i class="fas fa-file-archive font-size-16 text-primary"></i>
                      <div class="ms-3">
                        <h6 class="mb-1 fw-semibold">Download CV</h6>
                        <span class="text-muted">Harsh Sachin Said</span>
                      </div>
                    </div>
                  </li>

                  <li class="hstack gap-2 mt-3">
                    <span class="btn btn-soft-primary w-100">Message</span>
                    <span class="btn btn-soft-primary w-100">Send Email</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="card">
              <div class="card-body">


                <h5 class="mb-3 color_blue">Harsh Sachin Said</h5>
                <div className="user_profile">
                    <img height="100" src={profile} alt="profile"/>
                </div>


                <h5 class="mb-3">Personal Details</h5>

                <Details title={"Name"} desc={"Harsh Sachin Said"}/>
                <Details title={"Age"} desc={"20"}/>
                <Details title={"Address"} desc={"Ekta nagar behind walchand college Solapur, Maharashtra"}/>
                <Details title={"Contact"} desc={"+91 8788388573"}/>
                <Details title={"Email"} desc={"harshsaid@gmail.com"}/>


                <h5 class="mb-3 mt-4">Education</h5>
                <ul class="verti-timeline list-unstyled">
                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle"></i>
                    </div>
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <div>
                          <h6 class="font-size-14 mb-1">
                            BCA - Bachelor of Computer Applications
                          </h6>
                          <p class="text-muted">
                            International University - (2004-2010)
                          </p>

                          <p class="text-muted mb-0">
                            There are many variations of passages of available,
                            but the majority alteration in some form. As a
                            highly skilled and successfull product development
                            and design specialist with more than 4 Years of My
                            experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle"></i>
                    </div>
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <div>
                          <h6 class="font-size-14 mb-1">
                            MCA - Master of Computer Application
                          </h6>
                          <p class="text-muted">
                            International University - (2010-2012)
                          </p>

                          <p class="text-muted mb-0">
                            There are many variations of passages of available,
                            but the majority alteration in some form. As a
                            highly skilled and successfull product development
                            and design specialist with more than 4 Years of My
                            experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="event-list">
                    <div class="event-timeline-dot">
                      <i class="bx bx-right-arrow-circle"></i>
                    </div>
                    <div class="d-flex">
                      <div class="flex-grow-1">
                        <div>
                          <h6 class="font-size-14 mb-1">
                            Design Communication Visual
                          </h6>
                          <p class="text-muted">
                            International University - (2012-2015)
                          </p>

                          <p class="text-muted mb-0">
                            There are many variations of passages of available,
                            but the majority alteration in some form. As a
                            highly skilled and successfull product development
                            and design specialist with more than 4 Years of My
                            experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
