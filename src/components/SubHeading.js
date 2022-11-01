import React from "react";

function SubHeading({ heading }) {
  return (
    <>
      <div class="row">
        <div class="col-12">
          <div class="page-title-box d-sm-flex align-items-center justify-content-between">
            <div
              class=""
              style={{
                fontSize: "15px",
                fontWeight: "600",
                marginTop: "10px",
                marginBottom: "20px",
                width: "100%",
                borderBottom: '.6px solid #D7D7D7',
                paddingBottom: '10px'
              }}
            >
              {heading}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubHeading;
