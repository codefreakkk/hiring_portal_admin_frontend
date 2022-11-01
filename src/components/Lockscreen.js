import React from "react";
import logo1 from "../assets/images/logo.svg";
import logo2 from "../assets/images/profile-img.png";

function Lockscreen() {
  return (
    <>
      <div class="account-pages my-5 pt-sm-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
              <div class="card overflow-hidden">
                <div class="bg-primary bg-soft">
                  <div class="row">
                    <div class="col-7">
                      <div class="text-primary p-4">
                        <h5 class="text-primary">Lock screen</h5>
                        <p>Enter your password to unlock the screen!</p>
                      </div>
                    </div>
                    <div class="col-5 align-self-end">
                      <img src={logo2} alt="" class="img-fluid"/>
                    </div>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div>
                    <a href="index.html">
                      <div class="avatar-md profile-user-wid mb-4">
                        <span class="avatar-title rounded-circle bg-light">
                          <img src={logo1} alt="" class="rounded-circle" height="34"/>
                        </span>
                      </div>
                    </a>
                  </div>
                  <div class="p-2">
                    <form>
                      <div class="user-thumb text-center mb-4">
                      </div>

                      <div class="mb-3">
                        <label for="userpassword">Password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="userpassword"
                          placeholder="Enter password"
                        />
                      </div>

                      <div class="text-end">
                        <button
                          class="btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Unlock
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-5 text-center">
                <p>
                  Not you ? return{" "}
                  <a href="auth-login.html" class="fw-medium text-primary">
                    {" "}
                    Sign In{" "}
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lockscreen;
