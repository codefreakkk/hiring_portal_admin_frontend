import { Routes, BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./assets/css/app.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/icons.min.css";
import "./utilities/style.css";
import DashboardComponent from "./components/DashboardComponent";
import ActivityComponent from "./components/ActivityComponent";
import HiringDetailsComponent from "./components/HiringDetailsComponent";
import Joblists from "./components/Joblists";
import PostjobComponent from "./components/PostjobComponent";
import Jobdetails from "./components/Jobdetails";
import Jobcategories from "./components/Jobcategories";
import Closedjobs from "./components/Closedjobs";
import Jobapplicants from "./components/Jobapplicants";
import Applicantstatus from "./components/Applicantstatus";
import Assigntask from "./components/Assigntask";
import View from "./components/View";
import Viewtask from "./components/Viewtask";
import Interviews from "./components/Interviews";
import Interviewdetails from "./components/Interviewdetails";
import Scheduleinterview from "./components/Scheduleinterview";
import Chats from "./components/Chats";
import Inbox from "./components/inbox/Inbox";
import Readmail from "./components/inbox/Readmail";
import Hiredcandidates from "./components/inbox/Hiredcandidates";
import Hiredcandidatesinterview from "./components/inbox/Hiredcandidatesinterview";
import ViewProfile from "./components/ViewProfile";
import Portalsettings from "./components/portalsettings/Portalsettings";
import Login from "./components/Login";

function App() {
  const [loggedin, setLoggedIn] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem("companytoken");
    const cid = localStorage.getItem("cid");
    const oname = localStorage.getItem("oname");
    if (token != null && cid != null && oname != null) {
      setLoggedIn(true);
      console.log("loggedinin");
    } else {
      setLoggedIn(false);
      console.log("not logged in");
    }
  }, []);

  return loggedin == true ? (
    <>
      {/* router */}
      <BrowserRouter>
        {/* <Login/> */}
        <Navbar />
        <Routes>
          <Route path="/hiredcandidates" element={<Hiredcandidates />} />
          <Route path="/activity" element={<ActivityComponent />} />
          <Route path="/hiringdetails" element={<HiringDetailsComponent />} />
          <Route path="/joblists" element={<Joblists />} />
          <Route path="/postjob" element={<PostjobComponent />} />
          <Route path="/jobcategories" element={<Jobcategories />} />
          <Route exact path="/jobdetails/:id" element={<Jobdetails />} />
          <Route path="/closedjobs" element={<Closedjobs />} />
          <Route path="/jobapplicants" element={<Jobapplicants />} />
          <Route path="/applicantstatus" element={<Applicantstatus />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/applicantstatus/assigntask" element={<Assigntask />} />
          <Route path="/applicantstatus/view" element={<View />} />
          <Route path="/jobapplicants/view/:id" element={<View />} />
          <Route path="/hiredcandidates/view/:id" element={<View />} />
          <Route path="/interviews/view/:id" element={<View />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/portalsettings" element={<Portalsettings />} />
          <Route
            path="/interviews/interviewdetails/:id/job/:jid"
            element={<Interviewdetails />}
          />
          <Route
            path="hiredcandidates/hiredcandidatesinterview"
            element={<Hiredcandidatesinterview />}
          />
          <Route
            path="/interviews/scheduleinterview/:id/job/:jid"
            element={<Scheduleinterview />}
          />
          <Route
            path="/interviews/interviewdetails/scheduleinterview"
            element={<Scheduleinterview />}
          />

          <Route path="/chats" element={<Chats />} />
          <Route path="/applicantstatus/viewtask" element={<Viewtask />} />
          <Route path="/readmail" element={<Readmail />} />
          <Route path="/inbox/*" element={<Inbox />} />
          <Route path="/portalsettings/*" element={<Portalsettings />} />
          <Route path="/" element={<DashboardComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Login />
    </div>
  );
}

export default App;
