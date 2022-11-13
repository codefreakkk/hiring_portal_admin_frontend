import React, {useState} from 'react';
import "../utilities/style.css"

function Qualification({qualification, setqualification}) {

    let handleChange = (i, e) => {
      let newqualification = [...qualification];
      newqualification[i][e.target.name] = e.target.value;
      setqualification(newqualification);
    };
  
    let addFormFields = () => {
      setqualification([...qualification, { name: "" }]);
    };
  
    let removeFormFields = (i) => {
      let newqualification = [...qualification];
      newqualification.splice(i, 1);
      setqualification(newqualification);
    };
  
    let handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(qualification));
    };

  return (
    <>
        <>
      {/* <form  onSubmit={handleSubmit}> */}
      {qualification.map((element, index) => (
        <div class="row mb-4" key={index}>
          <label for="projectname" class="col-form-label col-lg-2">
            Qualification
          </label>
          <div class="col-lg-10">
            <input
              type="text"
              id="projectbudget"
              name="name"
              className="form-control"
              placeholder={`Enter Qualification ${index + 1}`}
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

export default Qualification