import React, { useState } from "react";
import "../utilities/style.css"

function Requirements({requirements, setrequirements}) {

    let handleChange = (i, e) => {
      let newrequirements = [...requirements];
      newrequirements[i][e.target.name] = e.target.value;
      setrequirements(newrequirements);
    };
  
    let addFormFields = () => {
      setrequirements([...requirements, { name: "" }]);
    };
  
    let removeFormFields = (i) => {
      let newrequirements = [...requirements];
      newrequirements.splice(i, 1);
      setrequirements(newrequirements);
    };
  
    let handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(requirements));
    };

  return (
    <>
        <>
      {/* <form  onSubmit={handleSubmit}> */}
      {requirements.map((element, index) => (
        <div class="row mb-4" key={index}>
          <label for="projectname" class="col-form-label col-lg-2">
            Requirements
          </label>
          <div class="col-lg-10">
            <input
              type="text"
              id="projectbudget"
              name="name"
              className="form-control"
              placeholder={`Enter Requirements ${index + 1}`}
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
    </>
  )
}

export default Requirements