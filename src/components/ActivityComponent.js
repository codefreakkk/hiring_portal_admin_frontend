import React from "react";
import Loader from "./Loader";
import ActivityChild from "./ActivityChild";
import MainHeading from "./MainHeading";

function ActivityComponent() {
  return (
    <>
      <Loader />
      <div className="activity_main">
      <div class="col-xl-4" style={{width: '90%'}}>
          <MainHeading heading={"Activity"} path1={"Dashboard"} path2={"Activity"}/>
        <div class="card">
          <div class="card-body">
            <ul class="verti-timeline list-unstyled">
              
              {/* activity child */}
              <ActivityChild/>
              <ActivityChild/>
              <ActivityChild/>
              <ActivityChild/>
              <ActivityChild/>
              <ActivityChild/>
              <ActivityChild/>
              <ActivityChild/>
              <ActivityChild/>
              <ActivityChild/>
              <ActivityChild/>
            </ul>
            
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default ActivityComponent;
