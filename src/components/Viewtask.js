import React from "react";
import Loader from "./Loader";
import MainHeading from "./MainHeading";

function Viewtask() {
  return (
    <>
        <Loader/>
      <div className="viewtask_main">
        <MainHeading heading={"View Assigned Tasks"} path1={"Candidate"} path2={"View Tasks"}/>
        <div className="card">
          <div className="card-body">
            
            <div class="mt-4">
              <h5 class="mb-3"> Task <span className="color_blue">1</span> </h5>
              <div class="table-responsive">
                <table class="table mb-0 table-bordered">
                  <tbody>
                    <tr>
                      <th scope="row">
                        Task Name
                      </th>
                      <td>Headphone</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        Links
                      </th>
                      <td>Headphone</td>
                    </tr> 
                    <tr>
                      <th scope="row">
                        Applicant's Message
                      </th>
                      <td>This is a message</td>
                    </tr> 
                    <tr>
                      <th scope="row">
                        Date of Submission
                      </th>
                      <td>22-2-2022</td>
                    </tr>   

                  </tbody>
                </table>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewtask;
