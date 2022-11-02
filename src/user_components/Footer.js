import React from "react";
function Footer() {
  return (
    <>
        <div class="container"style={{paddingTop: '100px', paddingBottom: '40px'}}>
          <div class="row">
            <div class="footer-col-1 col-md-3 col-sm-12">
              <a href="index.html">
                <h2>HireMe</h2>
              </a>
              
              <div class="footer-social mt-3">
                <a class="icon-socials icon-facebook" href="#"></a>
                <a class="icon-socials icon-twitter" href="#"></a>
                <a class="icon-socials icon-linkedin" href="#"></a>
              </div>
            </div>
            <div class="footer-col-2 col-md-2 col-xs-6">
              <h6 class="mb-20">Resources</h6>
              <ul class="menu-footer">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
              </ul>
            </div>
            <div class="footer-col-4 col-md-2 col-xs-6">
              <h6 class="mb-20">Quick links</h6>
              <ul class="menu-footer">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
            <div class="footer-col-5 col-md-2 col-xs-6">
              <h6 class="mb-20">More</h6>
              <ul class="menu-footer">
                <li>
                  <a href="#">Privacy</a>
                </li>

                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
            <div class="footer-col-6 col-md-3 col-sm-12">
              <h6 class="mb-20">Documentation</h6>
              <p class="color-text-paragraph-2 font-xs">
                View HireMe documnetation for any help applying or setting up company
              </p>
            </div>
            <div class="footer-bottom mt-50">
              <div class="row">
                <div class="col-md-6">
                  <span class="font-xs color-text-paragraph">
                    Copyright &copy; 2022. HireMe all right reserved
                  </span>
                </div>
                <div class="col-md-6 text-md-end text-start">
                  <div class="footer-social">
                    <a class="font-xs color-text-paragraph" href="#">
                      Privacy Policy
                    </a>
                    <a
                      class="font-xs color-text-paragraph mr-30 ml-30"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                    <a class="font-xs color-text-paragraph" href="#">
                      Careers
                    </a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </>
  );
}

export default Footer;
