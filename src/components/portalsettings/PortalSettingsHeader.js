import React from "react";

function PortalSettingsHeader({heading}) {
  return (
    <>
      <h5
        style={{
          marginLeft: "15px",
          marginTop: "15px",
        }}
      >
        {heading}
      </h5>
    </>
  );
}

export default PortalSettingsHeader;
