import React from "react";
import { useEffect } from "react";

function CheckLoggedIn() {
  useEffect(() => {
    const token = localStorage.getItem("companytoken");
    if (token == null) {
      window.location.href = "/";
    }
  }, []);
  return <></>;
}

export default CheckLoggedIn;
