import React from "react";

function ViewProfileSub({ title, heading }) {
  return (
    <>
      <div className="mb-4">
        <div class="flex-grow-1">
          <p class="text-muted mb-1" style={{ fontSize: "11px" }}>
            {title}
          </p>
          <h5 class="mb-0" style={{fontSize: '14px'}}>{heading}</h5>
        </div>
      </div>
    </>
  );
}

export default ViewProfileSub;
