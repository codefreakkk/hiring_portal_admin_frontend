import React from 'react'

function ActivityChild() {
  return (
    <>
        <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle font-size-18"></i>
                </div>
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <h5 class="font-size-14">
                      22 Nov{" "}
                      <i class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"></i>
                    </h5>
                  </div>
                  <div class="flex-grow-1">
                    <div>Responded to need “Volunteer Activities</div>
                  </div>
                </div>
              </li>
    </>
  )
}

export default ActivityChild