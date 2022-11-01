import React from 'react'
import Inboxheader from './Inboxheader'
import Inboxmail from './Inboxmail'

function Sentmail() {
  return (
    <>
        <div class="email-rightbar mb-3">
        <div class="card">
          <Inboxheader name={"Sent Mail"}/>

          <ul class="message-list">
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
            <Inboxmail />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sentmail