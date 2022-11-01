import React from "react";
import { useEffect, useState } from "react";



function Loader() {
  const [state, setState] = new useState(false);
  useEffect(() => {
    setState(true);
    const time = setTimeout(() => {
      setState(false);
    }, 1000);
  }, []);
  
  return (
    <>
    <div className={state === true ? "openloader" : "loader"}></div>
    </>
  );
}

export default Loader;
