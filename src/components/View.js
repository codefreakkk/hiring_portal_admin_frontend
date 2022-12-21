import React from "react";
import Loader from "./Loader";
import Details from "./Details";
import profile from "../images/profile.png";
import MainHeading from "./MainHeading";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
function View() {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getuserbyid/${id}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Loader />
      <div className="view_main">
        <MainHeading
          heading={"Applicant Profile"}
          path1={"Candidate"}
          path2={"Applicant Profile"}
        />
        {loader == true ? (
          <></>
        ) : (
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
                          <span class="text-muted">{user.address} Years</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <i class="bx bx-user font-size-18 text-primary"></i>
                        <div class="ms-3">
                          <h6 class="mb-1 fw-semibold">Gender:</h6>
                          {user.gender}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <i class="mdi mdi-book-education font-size-18 text-primary"></i>
                        <div class="ms-3">
                          <h6 class="mb-1 fw-semibold">Highest Qualification:</h6>
                          <span class="text-muted">{user.qual}</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex">
                        <i class="mdi mdi-google-translate font-size-18 text-primary"></i>
                        <div class="ms-3">
                          <h6 class="mb-1 fw-semibold">From:</h6>
                          <span class="text-muted">{user.state}</span>
                        </div>
                      </div>
                    </li>

                    <li style={{ cursor: "pointer", marginLeft: "2px" }}>
                      <div class="d-flex">
                        <i class="fas fa-file-archive font-size-16 text-primary"></i>
                        <div class="ms-3">
                          <h6 class="mb-1 fw-semibold">Download CV</h6>
                          <a href={user.cvUrl}>{user.userName}</a>
                        </div>
                      </div>
                    </li>

                    <li class="hstack gap-2 mt-3">
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="card">
                <div class="card-body">
                  <h5 class="mb-3 color_blue">{user.userName}</h5>
                  <div className="user_profile">
                    <img height="100" src={profile} alt="profile" />
                  </div>

                  <h5 class="mb-3">Personal Details</h5>

                  <Details title={"Name"} desc={user.userName} />
                  <Details title={"Email"} desc={user.userEmail} />
                  <Details
                    title={"Address"}
                    desc={
                      user.state
                    }
                  />
                  <Details title={"City"} desc={user.city} />
                  <Details title={"Contact"} desc={user.contact} />

                  <h5 class="mb-3 mt-4">Highest Qualification</h5>
                  <ul class="verti-timeline list-unstyled">
                    <li class="event-list">
                      <div class="event-timeline-dot">
                        <i class="bx bx-right-arrow-circle"></i>
                      </div>
                      <div class="d-flex">
                        <div class="flex-grow-1">
                          <div>
                            <h6 class="font-size-14 mb-1">
                              {user.qual}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default View;
