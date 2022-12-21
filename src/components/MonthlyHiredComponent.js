import React, { useEffect, useState } from "react";
import axios from "axios";

function MonthlyHiredComponent() {
  const [hire, setHire] = useState(0);

  useEffect(() => {
    const oid = localStorage.getItem("cid");
    axios
      .post("http://localhost:8000/api/employeehired", { oid })
      .then((res) => {
        setHire(res.data.status);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div class="card">
        <div class="card-body">
          <h4 class="card-title mb-4">Total Employee Hired</h4>
          <div class="row">
            <div class="col-sm-6">
              <p class="text-muted">For {localStorage.getItem("oname")}</p>
              <h3>{hire}</h3>
            </div>
            <div class="col-sm-6">
              <div class="mt-4 mt-sm-0">
                <div
                  id="radialBar-chart"
                  data-colors='["--bs-primary"]'
                  class="apex-charts"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MonthlyHiredComponent;
