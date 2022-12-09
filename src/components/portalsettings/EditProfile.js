import { React, useState, useEffect } from "react";
import PortalSettingsHeader from "./PortalSettingsHeader";
import axios from "axios";
function EditProfile() {
  const [oname, setOname] = useState();
  const [oemail, setOeamil] = useState();
  const [ocontact, setOcontact] = useState();
  const [otype, setOtype] = useState();
  const [empCount, setEmpCount] = useState();
  const [olocation, setOlocation] = useState();

  useEffect(() => {
    axios
      .post("http://localhost:8000/api/organization", {
        oid: "6392d0a6ccde616cd53df754",
      })
      .then((response) => {
        const data = response.data;
        setOname(data.organizationName);
        setOeamil(data.organizationEmail);
        setOcontact(data.organizationContact);
        setOtype(data.organizationType);
        setEmpCount(data.organizationCount);
        setOlocation(data.organizationLocation);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSubmit() {
    axios
      .put("http://localhost:8000/api/updateorganization", {
        oid: "6392d0a6ccde616cd53df754",
        oname,
        oemail,
        ocontact,
        otype,
        empCount,
        olocation,
      })
      .then((response) => {
        if (response.data.status == true) {
          alert("Profile Updated");
        } else {
          alert("Profile Not updated !");
          window.location.reload();
        }
      })
      .catch((err) => {
        alert("Some error occured !");
        window.location.reload();
      });
  }

  return (
    <>
      <div class="email-rightbar mb-3">
        <div class="card">
          <PortalSettingsHeader heading={"Edit Profile"} />

          <div style={{ padding: "20px 20px" }}>
            <form>
              <div class="mb-3">
                <label for="formrow-firstname-input" class="form-label">
                  Organization Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formrow-firstname-input"
                  placeholder=""
                  onChange={(e) => setOname(e.target.value)}
                  value={oname}
                />
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="formrow-email-input" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      onChange={(e) => setOeamil(e.target.value)}
                      id="formrow-email-input"
                      value={oemail}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="formrow-password-input" class="form-label">
                      Organization Contact
                    </label>
                    <input
                      onChange={(e) => setOcontact(e.target.value)}
                      value={ocontact}
                      type="text"
                      class="form-control"
                      id="formrow-email-input"
                    />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label for="formrow-inputCity" class="form-label">
                      Organization Type
                    </label>
                    <input
                      onChange={(e) => setOtype(e.target.value)}
                      type="text"
                      class="form-control"
                      id="formrow-inputCity"
                      value={otype}
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label for="formrow-inputState" class="form-label">
                      Employee Count
                    </label>
                    <input
                      onChange={(e) => setEmpCount(e.target.value)}
                      type="text"
                      class="form-control"
                      id="formrow-inputCity"
                      value={empCount}
                    />
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="mb-3">
                    <label for="formrow-inputZip" class="form-label">
                      Organization Location
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setOlocation(e.target.value)}
                      class="form-control"
                      id="formrow-inputZip"
                      value={olocation}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div style={{ position: "absolute", right: "12px" }}>
          <button
            type="button"
            onClick={handleSubmit}
            class="btn btn-primary w-md"
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
