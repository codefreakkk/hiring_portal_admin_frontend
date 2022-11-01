import React from 'react'
import Hiredcandidatesinterviewtable from "./Hiredcandidatesinterviewtable";
import MainHeading from '../MainHeading'
import Loader from '../Loader'

function Hiredcandidatesinterview() {
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
          <div className="card-body">
            <Hiredcandidatesinterviewtable/>
            <Hiredcandidatesinterviewtable/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hiredcandidatesinterview