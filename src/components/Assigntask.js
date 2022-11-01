import React from "react";
import Loader from "./Loader";
import MainHeading from "./MainHeading";

function Assigntask() {
  return (
    <>
      <Loader />
      <div className="assigntask_main">
        <MainHeading heading={"Assign Task"} path1={"Candidate"} path2={"Assign Task"}/>
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">Create new task for <span className="color_blue">Harsh</span></h4>
              <form class="outer-repeater" method="post">
                <div data-repeater-list="outer-group" class="outer">
                  <div data-repeater-item class="outer">
                    <div class="form-group row mb-4">
                      <label for="taskname" class="col-form-label col-lg-2">
                        Task Name
                      </label>
                      <div class="col-lg-10">
                        <input
                          id="taskname"
                          name="taskname"
                          type="text"
                          class="form-control"
                          placeholder="Enter Task Name..."
                        />
                      </div>
                    </div>
                    <div class="form-group row mb-4">
                      <label class="col-form-label col-lg-2">
                        Task Description
                      </label>
                      <div class="col-lg-10">
                        <textarea
                          class="form-control"
                          id="projectdesc"
                          rows="7"
                          placeholder="Enter Task Description"
                        ></textarea>
                      </div>
                    </div>

                    <div class="form-group row mb-4">
                      <label class="col-form-label col-lg-2">Task Date</label>
                      <div class="col-lg-10">
                        <div
                          class="input-daterange input-group"
                          data-provide="datepicker"
                        >
                          <input
                            type="date"
                            class="form-control"
                            placeholder="Start Date"
                            name="start"
                          />
                          <input
                            type="date"
                            class="form-control"
                            placeholder="End Date"
                            name="end"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div class="row justify-content-end">
                <div class="col-lg-10">
                  <button type="submit" class="btn btn-primary">
                    Create Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Assigntask;
