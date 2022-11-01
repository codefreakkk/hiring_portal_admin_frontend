import React from 'react'

function Inboxheader({name}) {
  return (
    <>
        <h5
            style={{
              marginLeft: "15px",
              marginTop: "15px",
            }}
          >
            {name}
          </h5>

          <div
            className="inbox_search"
          >
           <input type="text" placeholder="Search in emails" className="form-control inbox_input_search"/> 
            <button
              type="button"
              class="btn btn-primary waves-light waves-effect"
            >
              <i class="far fa-trash-alt"></i>
            </button>
          </div>
    </>
  )
}

export default Inboxheader