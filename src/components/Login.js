import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("");

  function handleSubmit() {
    if (name.length == 0 || password.length == 0) {
      alert("Username or password cannot be empty");
    } else {
      axios.post("http://localhost:8000/api/companylogin", {
        name: name, 
        password: password
      })
      .then((response) => {
        if(response.data.status === true) {
          const token = response.data.token
          const cid = response.data.cid;
          const oname = response.data.oname;
          localStorage.setItem("companytoken", token);
          localStorage.setItem("cid", cid)
          localStorage.setItem("oname", oname);
          window.location.href = "/"
        }
      })
      .catch((err) => alert("Invalid Username or password"))
    }
  }

  return (
    <>
      <div>
        <div class="p-2">
          <div class="form-horizontal">
            <div class="mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
                type="button"
                onClick={handleSubmit}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
