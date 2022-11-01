import React from "react";
import PortalSettingsHeader from "./PortalSettingsHeader";

function EditProfile() {
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
                  value={"Infosys"}
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
                      id="formrow-email-input"
                      value={"infosys@gmail.com"}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="formrow-password-input" class="form-label">
                      Organization Contact
                    </label>
                    <input
                      value={"+91 8789384829"}
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
                      type="text"
                      class="form-control"
                      id="formrow-inputCity"
                      value={"Start Up"}
                    />
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mb-3">
                    <label for="formrow-inputState" class="form-label">
                      Employee Count
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="formrow-inputCity"
                      value={"2100+"}
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
                      class="form-control"
                      id="formrow-inputZip"
                      value={"India"}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div style={{ position: "absolute", right: "12px" }}>
          <button type="submit" class="btn btn-primary w-md">
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
