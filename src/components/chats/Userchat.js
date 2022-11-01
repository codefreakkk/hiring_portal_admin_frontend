import React from "react";
import "../../utilities/style.css";
import profile from "../../images/profile.png"

function Userchat() {
  return (
    <>
      <li class="mb-3 chat_left_section">
        {/* <a href="javascript: void(0);"> */}
          <div class="d-flex">
            <div class="flex-shrink-0 align-self-center me-3">
              <img src={profile} class="rounded-circle avatar-xs" alt=""/>
            </div>

            <div class="flex-grow-1 overflow-hidden">
              <h5 class="text-truncate font-size-14 mb-1">Steven Franklin</h5>
              <p class="text-truncate mb-0">Hey! there I'm available</p>
            </div>
            <div class="font-size-11">05 min</div>
          </div>
        {/* </a> */}
      </li>
    </>
  );
}

export default Userchat;
