import React from "react";
import Loader from "./Loader";
import Interviewdetailstable from "./Interviewdetailstable";
import MainHeading from "./MainHeading";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

function Interviewdetails() {
  const [interview, setInterview] = useState([]);
  const [loader, setLoader] = useState(true);
  const { id, jid } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getinterview/${id}/job/${jid}`)
      .then((response) => {
        setInterview(response.data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Loader />
      <div className="viewtask_main">
        <MainHeading
          heading={"Interview Details"}
          path1={"Candidate"}
          path2={"Interview Details"}
        />
        <div className="card">
          {loader == true ? <></> : interview.length == 0 ? <div style={{margin: "15px 0 0 20px", fontSize: "16px"}}>Interview not Scheduled</div> : <></>}
          <div className="card-body">
            {loader == true ? <></> : 
            interview.length == 0 ? <></> :
              interview.map((data, index) => {
                return (
                  <Interviewdetailstable 
                    key={index}
                    index={index}
                    name={data.interviewDetails}
                    date={data.sheduleDate}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default Interviewdetails;
