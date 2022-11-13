import React, { useState } from "react";
import "../utilities/style.css";

const Responsibilities = ({resp, setresp}) => {

  let handleChange = (i, e) => {
    let newresp = [...resp];
    newresp[i][e.target.name] = e.target.value;
    setresp(newresp);
  };

  let addFormFields = () => {
    setresp([...resp, { name: "" }]);
  };

  let removeFormFields = (i) => {
    let newresp = [...resp];
    newresp.splice(i, 1);
    setresp(newresp);
  };


  return (
    <>
      {/* <form  onSubmit={handleSubmit}> */}
      {resp.map((element, index) => (
        <div class="row mb-4" key={index}>
          <label for="projectname" class="col-form-label col-lg-2">
            Responsibilities
          </label>
          <div class="col-lg-10">
            <input
              type="text"
              id="projectbudget"
              name="name"
              className="form-control"
              placeholder={`Enter Responsibilities ${index + 1}`}
              value={element.name || ""}
              onChange={(e) => handleChange(index, e)}
            />

            <div className="del_cont">
            <div className="button-section">
              <button
                className="btn btn-primary respBtn"
                type="button"
                onClick={() => addFormFields()}
              >
                Add
              </button>
              {/* <button className="button submit" type="submit">Submit</button> */}
            </div>

            {index ? (
              <button
                type="button"
                className="btn btn-danger respBtn"
                onClick={() => removeFormFields(index)}
              >
                Remove
              </button>
            ) : null}
          </div>
          </div>
        </div>
      ))}

      {/* </form> */}
    </>
  );
};

export default Responsibilities;
