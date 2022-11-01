import React from "react";
import { NavLink } from "react-router-dom";
import Inboxheader from "./Inboxheader";
import Inboxmail from "./Inboxmail";

function Inboxmain() {
  return (
    <>
      <div class="email-rightbar mb-3">
        <div class="card">
          <Inboxheader name={"Inbox"} />

          <ul class="message-list">
            <NavLink to="../readmail">
              <Inboxmail />
            </NavLink>
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
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

export default Inboxmain;
