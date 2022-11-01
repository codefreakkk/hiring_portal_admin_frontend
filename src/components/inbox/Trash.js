import React from 'react'
import Inboxheader from './Inboxheader'
import Inboxmail from './Inboxmail'

function Trash() {
  return (
    <div class="email-rightbar mb-3">
        <div class="card">
          <Inboxheader name={"Trash"} />
          <ul class="message-list">
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
          </ul>
        </div>
      </div>
  )
}

export default Trash