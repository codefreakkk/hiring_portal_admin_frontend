import React from 'react'

function MonthlyHiredComponent() {
  return (
    <>
        <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Monthly Employee Hired</h4>
              <div class="row">
                <div class="col-sm-6">
                  <p class="text-muted">This month</p>
                  <h3>52</h3>
                  <p class="text-muted">
                    <span class="text-success me-2">
                      {" "}
                      12% <i class="mdi mdi-arrow-up"></i>{" "}
                    </span>{" "}
                    From previous period
                  </p>

                  <div class="mt-4">
                    <a
                      href="javascript: void(0);"
                      class="btn btn-primary waves-effect waves-light btn-sm"
                    >
                      View More <i class="mdi mdi-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="mt-4 mt-sm-0">
                    <div
                      id="radialBar-chart"
                      data-colors='["--bs-primary"]'
                      class="apex-charts"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default MonthlyHiredComponent