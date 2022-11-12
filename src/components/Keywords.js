import React, {useState} from 'react';
import "../utilities/style.css"

function Keywords({formValues, setFormValues}) {
    

    let handleChange = (i, e) => {
      let newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      setFormValues(newFormValues);
    };
  
    let addFormFields = () => {
      setFormValues([...formValues, { name: "" }]);
    };
  
    let removeFormFields = (i) => {
      let newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues);
    };

  return (
    <>
        <>
      {/* <form  onSubmit={handleSubmit}> */}
      {formValues.map((element, index) => (
        <div class="row mb-4" key={index}>
          <label for="projectname" class="col-form-label col-lg-2">
          Keywords
          </label>
          <div class="col-lg-10">
            <input
              type="text"
              id="projectbudget"
              name="name"
              className="form-control"
              placeholder={`Enter Keywords ${index + 1}`}
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
              {/* <button className="button submit" onClick={handleSubmit} type="submit">Submit</button> */}
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

export default Keywords;