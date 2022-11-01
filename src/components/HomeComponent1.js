import React from 'react'
import user from '../images/profile.png';
import logo1 from "../assets/images/profile-img.png";

function HomeComponent1() {
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
                    <img src={user} alt="" class="img-thumbnail rounded-circle"/>
                  </div>
                  <h5 class="font-size-15 text-truncate">Company name</h5>
                  <p class="text-muted mb-0 text-truncate">Compnay desc</p>
                </div>

                <div class="col-sm-8">
                  <div class="pt-4">
                    <div class="row">
                      <div class="col-6">
                        <h5 class="font-size-15">125</h5>
                        <p class="text-muted mb-0">Job Openings</p>
                      </div>
                      <div class="col-6">
                        <h5 class="font-size-15">15</h5>
                        <p class="text-muted mb-0">Total Registration</p>
                      </div>
                    </div>
                    <div class="mt-4">
                      <a
                        href="javascript: void(0);"
                        class="btn btn-primary waves-effect waves-light btn-sm"
                      >
                        View Profile <i class="mdi mdi-arrow-right ms-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
    </>
  )
}

export default HomeComponent1