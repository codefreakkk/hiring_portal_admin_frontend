import { React, useEffect, useState } from "react";
import Loader from "./Loader";
import MainHeading from "./MainHeading";
import ViewProfileSub from "./ViewProfileSub";
import axios from "axios";
import { Oval } from "react-loader-spinner";

function ViewProfile() {
  const [orgData, setOrgdata] = useState({});
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/organization", { oid: "6392d0a6ccde616cd53df754" })
      .then((response) => {
        setOrgdata(response.data);
        setLoader(true);
        console.log(orgData)
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <Loader />
      <div className="viewprofile_main">
        <MainHeading
          heading={"View Profile"}
          path1={"Settings"}
          path2={"View Profile"}
        />
        {/* conditional rendering */}
        {loader ? (
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
                        <h5 style={{ color: "#2a3042" }}>
                          {orgData.organizationName}
                        </h5>
                        <p class="mb-1">{orgData.organizationEmail}</p>
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
                  {/* {console.log(orgData.oid)} */}
                  <ViewProfileSub
                    title={"Organization Name"}
                    heading={orgData.organizationName}
                  />
                  <ViewProfileSub
                    title={"Organization Email"}
                    heading={orgData.organizationEmail}
                  />
                  <ViewProfileSub
                    title={"Organization Contact"}
                    heading={orgData.organizationContact}
                  />
                  <ViewProfileSub
                    title={"Organization Type"}
                    heading={orgData.organizationType}
                  />
                  <ViewProfileSub
                    title={"Joined On"}
                    heading={orgData.joiningDate}
                  />
                  <ViewProfileSub title={"Employee Count"} heading={orgData.organizationCount} />
                  <ViewProfileSub
                    title={"Based In"}
                    heading={orgData.organizationLocation}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // loader here
          <div className="viewporfile_inner">
            <Oval
              height="40"
              width="40"
              color="#556de6cd"
              radius="20"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ViewProfile;
