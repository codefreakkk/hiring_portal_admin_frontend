import React from "react";

function Details({title, desc}) {
  return (
    <>
      <div class="d-flex">
        <div class="flex-grow-1">
          <div>
            <h6 class="font-size-12 mb-1">{title}</h6>
            <p class="text-muted">{desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
