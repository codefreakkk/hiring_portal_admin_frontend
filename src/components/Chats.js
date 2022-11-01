import React from "react";
import Adminchat from "./chats/Adminchat";
import Candidatechat from "./chats/Candidatechat";
import Userchat from "./chats/Userchat";
import Loader from "../components/Loader";

function Chats() {
  return (
    <>
      <Loader />
      <div className="chats_main">
        <div class="d-lg-flex">
          <div class="chat-leftsidebar chat_sidebar me-lg-4">
            <div class="">
              <div class="py-4 border-bottom">
                <div class="d-flex">
                  <div class="flex-shrink-0 align-self-center me-3">
                    {/* <img src="assets/images/users/avatar-1.jpg" class="avatar-xs rounded-circle" alt=""> */}
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="font-size-15 mb-1">Chats</h5>
                  </div>
                </div>
              </div>

              <div class="search-box mt-3">
                <div class="position-relative">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search..."
                  />
                  <i class="bx bx-search-alt search-icon"></i>
                </div>
              </div>

              <div class="chat-leftsidebar-nav">
                <div class="tab-content py-4">
                  <div class="tab-pane show active" id="chat">
                    <div>
                      <h5 class="font-size-14 mb-3">Recent</h5>

                      <ul class="list-unstyled chat-list">
                        <Userchat />
                        <Userchat />
                        <Userchat />
                        <Userchat />
                        <Userchat />
                        <Userchat />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-100 user-chat">
            <div class="card">
              <div class="p-4 border-bottom ">
                <div class="row">
                  <div class="col-md-4 col-9">
                    <h5 class="font-size-15 mb-1">Steven Franklin</h5>
                    {/* <p class="text-muted mb-0"><i class="mdi mdi-circle text-success align-middle me-1"></i> Active now</p> */}
                  </div>
                </div>
              </div>

              <div>
                <div class="chat-conversation p-3 chat_panel">
                  <ul class="list-unstyled mb-0">
                    <Candidatechat />
                    <Adminchat />
                    <Candidatechat />
                    <Candidatechat />
                    <Adminchat />
                  </ul>
                </div>

                {/* chat input */}
                <div class="p-3 mt-3 chat-input-section">
                  <div class="row">
                    <div class="col">
                      <div class="position-relative">
                        <input
                          type="text"
                          class="form-control chat-input"
                          placeholder="Enter Message..."
                        />
                      </div>
                    </div>
                    <div class="col-auto">
                      <button
                        type="submit"
                        class="btn btn-primary btn-rounded chat-send w-md waves-effect waves-light"
                      >
                        <span class="d-none d-sm-inline-block me-2">Send</span>{" "}
                        <i class="mdi mdi-send"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chats;
