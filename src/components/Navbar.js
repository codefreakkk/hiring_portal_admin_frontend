import React from "react";
import "../assets/css/app.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/icons.min.css";
import "../utilities/style.css";
import logo from "../images/app.png";
import { useState } from "react";
import Panel from "./Panel";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(false);
  function toggleUser() {
    setUser(!user);
  }

  return (
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
            <div class="">
              <button
                type="button"
                class="header-item noti-icon dark_bg"
                style={{ marginRight: "7px", paddingTop: "6px" }}
              >
                <i class="bx bx-customize" style={{ color: "white" }}></i>
              </button>
              <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                <div class="px-lg-2">
                  <div class="row g-0">
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        {/* <img src="assets/images/brands/github.png" alt="Github"> */}
                        <span>GitHub</span>
                      </a>
                    </div>
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        {/* <img src="assets/images/brands/bitbucket.png" alt="bitbucket"> */}
                        <span>Bitbucket</span>
                      </a>
                    </div>
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        {/* <img src="assets/images/brands/dribbble.png" alt="dribbble"> */}
                        <span>Dribbble</span>
                      </a>
                    </div>
                  </div>

                  <div class="row no-gutters">
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        {/* <img src="assets/images/brands/dropbox.png" alt="dropbox"> */}
                        <span>Dropbox</span>
                      </a>
                    </div>
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        {/* <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"> */}
                        <span>Mail Chimp</span>
                      </a>
                    </div>
                    <div class="col">
                      <a class="dropdown-icon-item" href="#">
                        {/* <img src="assets/images/brands/slack.png" alt="slack"> */}
                        <span>Slack</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                  Henry
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
                <a class="dropdown-item" href="#">
                  <i class="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-lock-screen">Lock screen</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-danger" href="#">
                  <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  <span key="t-logout">Logout</span>
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
  );
}

export default Navbar;
