import React from 'react'

function RecruiterCard({logo}) {
  return (
    <>
        <div class="item-5 hover-up wow animate__animated animate__fadeIn">
                    <a href="#">
                      <div class="item-logo">
                        <div class="image-left">
                          <img
                            alt="jobBox"
                            src={logo}
                          />
                        </div>
                        <div class="text-info-right">
                          <h4>Honda</h4>
                        </div>
                        <div class="text-info-bottom mt-5">
                          <span class="font-xs color-text-mutted icon-location">
                            New York, US
                          </span>
                          <span class="font-xs color-text-mutted float-end mt-5">
                            34<span> Open Jobs</span>
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
    </>
  )
}

export default RecruiterCard