import React, {useState} from 'react';
import "../utilities/style.css"

function Experience({experience, setexperience}) {

    let handleChange = (i, e) => {
      let newexperience = [...experience];
      newexperience[i][e.target.name] = e.target.value;
      setexperience(newexperience);
    };
  
    let addFormFields = () => {
      setexperience([...experience, { name: "" }]);
    };
  
    let removeFormFields = (i) => {
      let newexperience = [...experience];
      newexperience.splice(i, 1);
      setexperience(newexperience);
    };
  
    let handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(experience));
    };

  return (
    <>
        <>
      {/* <form  onSubmit={handleSubmit}> */}
      {experience.map((element, index) => (
        <div class="row mb-4" key={index}>
          <label for="projectname" class="col-form-label col-lg-2">
          Skills & Experience
          </label>
          <div class="col-lg-10">
            <input
              type="text"
              id="projectbudget"
              name="name"
              className="form-control"
              placeholder={`Enter Experience ${index + 1}`}
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
    </>    </>
  )
}

export default Experience;