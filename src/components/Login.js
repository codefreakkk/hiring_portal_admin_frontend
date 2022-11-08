import React from "react";

function Login() {
  return (
    <>
      <div class="card overflow-hidden" style={{padding : "0 30%"}}>
        <div class="card-body pt-0">
          <div class="p-2">
            <form class="form-horizontal">
              <div class="mb-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  placeholder="Enter username"
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Password</label>
                <div class="input-group auth-pass-inputgroup">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter password"
                    aria-label="Password"
                    aria-describedby="password-addon"
                  />
                  <button
                    class="btn btn-light "
                    type="button"
                    id="password-addon"
                  >
                    <i class="mdi mdi-eye-outline"></i>
                  </button>
                </div>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="remember-check"
                />
                <label class="form-check-label" for="remember-check">
                  Remember me
                </label>
              </div>

              <div class="mt-3 d-grid">
                <button
                  class="btn btn-primary waves-effect waves-light"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
