import React from "react";

function Inboxmail() {
  return (
    <>
      <li>
        <div class="col-mail col-mail-1">
          <div class="checkbox-wrapper-mail">
            {/* <input type="checkbox" id="chk19"> */}
            <label for="chk19" class="toggle"></label>
          </div>
          <a href="javascript: void(0);" class="title">
            Peter, me (3)
          </a>
          <span class="star-toggle far fa-star"></span>
        </div>
        <div class="col-mail col-mail-2">
          <a href="javascript: void(0);" class="subject">
            Hello –{" "}
            <span class="teaser">
              Trip home from Colombo has been arranged, then Jenna will come get
              me from Stockholm. :)
            </span>
          </a>
          <div class="date">Mar 6</div>
        </div>
      </li>
    </>
  );
}

export default Inboxmail;
