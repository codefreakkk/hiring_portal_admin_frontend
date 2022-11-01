import React from "react";

function MainHeading({heading, path1, path2}) {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 class="mb-sm-0 font-size-18">{heading}</h4>

            <div class="page-title-right">
              <ol class="breadcrumb m-0">
                
                <li class="breadcrumb-item">{path1} <span  style={{marginLeft: '6px'}}>/</span>  </li> 
                <li class="" style={{marginLeft: '10px'}}>{path2}</li> 
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeading;
