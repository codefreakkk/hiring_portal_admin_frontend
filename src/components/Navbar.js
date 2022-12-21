import React, { useState, useEffect } from "react";
import "../assets/css/app.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/icons.min.css";
import "../utilities/style.css";
import logo from "../images/app.png";
import Panel from "./Panel";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("companytoken");
    const cid = localStorage.getItem("cid");
    const oname = localStorage.getItem("oname");
    if (token != null && cid != null && oname != null) {
      setLoggedIn(true);
    } else{
      setLoggedIn(false);
    } 
  }, []);

  function toggleUser() {
    setUser(!user);
  }

  return loggedIn == true ? (
    <div>
      <header id="page-topbar">
        <div class="navbar-header">
          <div class="d-flex">
            {/* <!-- LOGO --> */}
            <div class="navbar-brand-box main_logo">
              <span class="logo-lg">
                <h3>
                  <img src={logo} alt="" height="26" />
                  <span style={{ marginLeft: "10px" }}>HireME</span>
                </h3>
              </span>
            </div>

            <button
              type="button"
              class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <i class="fa fa-fw fa-bars"></i>
            </button>

            {/* <!-- App Search--> */}
            <form class="app-search d-none d-lg-block">
              <div class="position-relative">
                <input
                  type="text"
                  autoComplete="off"
                  style={{ color: "white" }}
                  class="form-control"
                  id="search"
                  placeholder="Search"
                />
                <span class="bx bx-search-alt"></span>
              </div>
            </form>
          </div>

          <div class="d-flex" style={{ paddingRight: "60px" }}>
            {/* <!-- user starts henry --> */}
            <div class="dropdown d-inline-block">
              <button
                type="button"
                class="dark_bg header-item waves-effect"
                onClick={toggleUser}
              >
                {/* <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" */}
                {/* alt="Header Avatar"> */}
                <span
                  class="d-none d-xl-inline-block ms-1"
                  style={{ fontSize: "14px", color: "white" }}
                >
                  {localStorage.getItem("oname")}
                </span>
                <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>

              <div
                class="dropdown-menu dropdown-menu-end"
                style={user ? { display: "block" } : { display: "none" }}
              >
                {/* <!-- item--> */}
                <NavLink to="viewprofile">
                  <a class="dropdown-item" href="#">
                    <i class="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                    <span key="t-profile">Profile</span>
                  </a>
                </NavLink>
                <NavLink to="portalsettings">
                  <a class="dropdown-item d-block">
                    <i class="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                    <span key="t-settings">Settings</span>
                  </a>
                </NavLink>
                {/* <a class="dropdown-item" href="#">
                  <i class="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-lock-screen">Lock screen</span>
                </a> */}
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-danger">
                  <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  <span key="t-logout" style={{cursor: "pointer"}} onClick={() => {
                    localStorage.removeItem("companytoken")
                    localStorage.removeItem("oname")
                    localStorage.removeItem("cid")
                    window.location.reload()
                  }}>Logout</span>
                </a>
              </div>
            </div>

            {/* <!-- user ends --> */}
          </div>
        </div>
      </header>

      {/* panel */}
      <Panel />
    </div>
  ) : (
    <></>
  );
}

export default Navbar;
