import React, { useEffect, useState } from "react";
import user from "../images/profile.png";
import logo1 from "../assets/images/profile-img.png";
import axios from "axios";

function HomeComponent1() {

  const [jobopenings, setJobOpenings] = useState(0);
  const [totalReg, setTotalReg] = useState(0);

  useEffect(() => {
    const oid = localStorage.getItem("cid");
    axios.post("http://localhost:8000/api/jobopenings", {oid})
    .then((res) => {
      setJobOpenings(res.data.status);
    })
    .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    const oid = localStorage.getItem("cid");
    axios.post("http://localhost:8000/api/totalreg", {oid})
    .then((res) => {
      setTotalReg(res.data.status);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <>
      <div class="card overflow-hidden">
        <div class="bg-primary bg-soft">
          <div class="row">
            <div class="col-7">
              <div class="text-primary p-3">
                <h5 class="text-primary">Welcome Back !</h5>
                <p>HireME Dashboard</p>
              </div>
            </div>
            <div class="col-5 align-self-end">
              <img src={logo1} alt="" class="img-fluid" />
            </div>
          </div>
        </div>

        <div class="card-body pt-0">
          <div class="row">
            <div class="col-sm-4">
              <div class="avatar-md profile-user-wid mb-4">
                <img src={user} alt="" class="img-thumbnail rounded-circle" />
              </div>
              <h5 class="font-size-15 text-truncate">{localStorage.getItem("oname")}</h5>
            </div>

            <div class="col-sm-8">
              <div class="pt-4">
                <div class="row">
                  <div class="col-6">
                    <h5 class="font-size-15">{jobopenings}</h5>
                    <p class="text-muted mb-0">Job Openings</p>
                  </div>
                  <div class="col-6">
                    <h5 class="font-size-15">{totalReg}</h5>
                    <p class="text-muted mb-0">Total Registration</p>
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

export default HomeComponent1;
