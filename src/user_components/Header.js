import React from "react";
import "../user_assets/css/stylef5b6.css";
import "../utilities/style.css";
import {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

function Header() {
  // animate navbar on scroll
  const [state, setState] = useState(false);
  window.addEventListener("scroll", handleScroll);
  function handleScroll() {
    if(window.pageYOffset > 200) setState(true);
    else setState(false);
  }

  return (
    <>
      <header class={state ? "header userheader" : "header"}>
        <div class="container">
          <div class="main-header">
            <div class="header-left">
              <div class="header-logo">
                <a class="d-flex" href="index.html">
                  {/* <img alt="jobBox" src="assets/imgs/template/jobhub-logo.svg">  */}
                  <h3>HireMe</h3>
                </a>
              </div>
            </div>
            <div class="header-nav">
              <nav class="nav-main-menu">
                <ul class="main-menu">
                <NavLink to="/">
                  <li class="">
                      Home
                  </li>
                </NavLink>
                  <NavLink to="/findjobs">
                  <li class="">
                      Find Jobs
                  </li>
                  </NavLink>
                  <li class="">
                   
                      Contact
                   </li>
                  <li class="">
                      jobs
                  </li>
                </ul>
              </nav>
              <div class="burger-icon burger-icon-white">
                <span class="burger-icon-top"></span>
                <span class="burger-icon-mid"></span>
                <span class="burger-icon-bottom"></span>
              </div>
            </div>

            <div class="header-right">
              <div class="block-signin">
                <a class="text-link-bd-btom hover-up" href="page-register.html">
                  Register
                </a>
                <a
                  class="btn btn-default btn-shadow ml-40 hover-up"
                  href="page-signin.html"
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

