import React from "react";
import logo from "../../images/profile.png";

function Readmail() {
  return (
    <>
    <div className="readmail_main">
      <div className="card">
        <div class="card-body">
          <div class="d-flex mb-4">
            <div class="flex-shrink-0 me-3">
              <img class="rounded-circle avatar-sm" src={logo} alt="Generic placeholder image"/>
            </div>
            <div class="flex-grow-1">
              <h5 class="font-size-14 mt-1">Humberto D. Champion</h5>
              <small class="text-muted">support@domain.com</small>
            </div>
          </div>

          <h4 class="font-size-16">This Week's Top Stories</h4>

          <p>Dear Lorem Ipsum,</p>
          <p>
            Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim.
            Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc
            vestibulum est quis orci varius viverra. Curabitur dictum volutpat
            massa vulputate molestie. In at felis ac velit maximus convallis.
          </p>
          <p>
            Sed elementum turpis eu lorem interdum, sed porttitor eros commodo.
            Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et
            porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla,
            mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel
            tincidunt mi nibh sit amet lorem.
          </p>
          <p>Sincerly,</p>
          <hr />

          <a
            href="javascript: void(0);"
            class="btn btn-secondary waves-effect mt-4"
          >
            <i class="mdi mdi-reply"></i> Reply
          </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default Readmail;
