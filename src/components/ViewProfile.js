import React from "react";
import Loader from "./Loader";
import MainHeading from "./MainHeading";
import ViewProfileSub from "./ViewProfileSub";

function ViewProfile() {
  return (
    <>
      <Loader />
      <div className="viewprofile_main">
        <MainHeading
          heading={"View Profile"}
          path1={"Settings"}
          path2={"View Profile"}
        />
        <div class="row">
          <div class="col-xl-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex">
                  <div class="flex-shrink-0 me-4">
                    <i class="mdi mdi-account-circle text-primary h1"></i>
                  </div>

                  <div class="flex-grow-1">
                    <div class="text-muted">
                      <h5 style={{color: '#2a3042'}}>Infosys</h5>
                      <p class="mb-1">infosys@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-9">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title mb-4">Organization Profile</h4>
                <ViewProfileSub title={"Organization Name"} heading={"Infosys"} />
                <ViewProfileSub title={"Organization Email"} heading={"infosys@gmail.com"} />
                <ViewProfileSub title={"Organization Contact"} heading={"+91 9826756481"} />
                <ViewProfileSub title={"Organization Type"} heading={"Startup"} />
                <ViewProfileSub title={"Joined On"} heading={"22-08-2022"} />
                <ViewProfileSub title={"Employee Count"} heading={"22"} />
                <ViewProfileSub title={"Based In"} heading={"Solapur"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewProfile;
