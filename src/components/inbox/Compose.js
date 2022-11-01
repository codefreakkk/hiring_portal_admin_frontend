import React from "react";
import Inboxheader from "./Inboxheader";

function compose() {
  return (
    <>
      <div class="email-rightbar mb-3">
        <div class="card">
          <h5
            style={{
              marginLeft: "15px",
              marginTop: "15px",
            }}
          >
            Compose Mail
          </h5>

          {/* body */}

          <div style={{ padding: "10px 15px" }}>
            <input type="text" placeholder="To" className="form-control" />

            <div style={{ marginTop: "10px" }}>
              <textarea
                class="form-control"
                id=""
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>

            <button className="btn btn-primary mt-3">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default compose;
