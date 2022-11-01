import React from "react";
import Loader from "./Loader";
import Interviewdetailstable from "./Interviewdetailstable";
import MainHeading from "./MainHeading";

function Interviewdetails() {
  return (
    <>
      <Loader />
      <div className="viewtask_main">
        <MainHeading
          heading={"Interview Details"}
          path1={"Candidate"}
          path2={"Interview Details"}
        />
        <div className="card">
          <div className="card-body">
            <Interviewdetailstable/>
            <Interviewdetailstable/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interviewdetails;
