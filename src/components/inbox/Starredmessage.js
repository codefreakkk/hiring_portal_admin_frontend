import React from "react";
import Inboxmail from "./Inboxmail";
import Inboxheader from "./Inboxheader";

function Starredmessage() {
  return (
    <>
      <div class="email-rightbar mb-3">
        <div class="card">
          
          <Inboxheader name={"Starred Message"} />

          <ul class="message-list">
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Starredmessage;
