import React from "react";
import Loader from "./Loader";
import MainHeading from "./MainHeading";
import Requirements from "./Requirements";
import Responsibilities from "./Responsibilities";
import SubHeading from "./SubHeading";
import { useState } from "react";
import uploadimg from "../images/upload.png";
import Qualification from "./Qualification";
import Experience from "./Experience";
import Keywords from "./Keywords";
import axios from "axios";
import "../utilities/style.css";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

function PostjobComponent() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState([{ name: "" }]);
  const [resp, setresp] = useState([{ name: "" }]);
  const [requirements, setrequirements] = useState([{ name: "" }]);
  const [qualification, setqualification] = useState([{ name: "" }]);
  const [experience, setexperience] = useState([{ name: "" }]);
  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState();
  const [jobType, setJobType] = useState("1");
  const [jobCat, setJobCat] = useState("value1");
  const [vacancy, setVacancy] = useState();
  const [jobexperience, setJobExperience] = useState();
  const [closingDate, setClosingDate] = useState();
  const [location, setLocation] = useState();
  const [email, setEmail] = useState();
  const [website, setWesite] = useState();
  const [loader, setLoader] = useState(false);
  const [alertMsg, setAlertMsg] = useState();
  const [showAlert, setShowAlert] = useState(false);

  // file uploading
  const [file, setFile] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  function toggleChange(event) {
    event.preventDefault();
    setSelectedFile(event.target.files[0]);
    setFile(true);
  }

  function close() {
    setSelectedFile(null);
    setFile(false);
  }

  function redirect() {
    navigate("/joblists");
  }

  // handle submit
  let handleSubmit = (event) => {
    event.preventDefault();
    if (closingDate == undefined) {
      setShowAlert(true);
      setAlertMsg("Please choose closing date");
      return;
    }
    setLoader(true);
    const keywords = formValues;
    const formData = new FormData();
    formData.append("image", selectedFile);
    axios({
      method: "POST",
      url: "http://localhost:8000/api/postjob",
      headers: { "Content-Type": "multipart/form-data" },
      data: {
        // organization id
        oid: "6392d0a6ccde616cd53df754",
        // organization name
        oname: "Infosys",
        jobTitle,
        jobDesc,
        jobType,
        jobCat,
        vacancy,
        jobexperience,
        closingDate,
        location,
        email,
        website,
        resp: JSON.stringify(resp),
        requirements: JSON.stringify(requirements),
        qualification: JSON.stringify(qualification),
        experience: JSON.stringify(experience),
        keywords: JSON.stringify(keywords),
        image: selectedFile,
      },
    })
      .then((response) => {
        console.log(response);
        setLoader(false);
        redirect();
      })
      .catch((err) => {
        setShowAlert(true);
        setLoader(false);
        const errorCode = err.response.data.status;
        if (errorCode == 404)
          setAlertMsg("File not selected. Please select file");
        else if (errorCode == 500)
          setAlertMsg("Job not posted. Some error occured");
        else if (errorCode == -1)
          setAlertMsg("Job not posted. Some error occured");
        else if (errorCode == -2)
          setAlertMsg("Job not posted. Only Images are allowed");
      });
  };

  return (
    <>
      <Loader />
      {loader ? (
        <div className="viewporfile_inner">
          <div>
            <Oval
              height="40"
              width="40"
              color="#556de6cd"
              radius="20"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="rings-loading"
            />
          </div>
          <div className="mt-2">Posting Job</div>
        </div>
      ) : (
        <div className="postjob_main">
          <MainHeading heading={"Post Job"} path1={"Jobs"} path2={"Post Job"} />
          {/* alert start */}
          <div
            class="alert alert-danger alert-dismissible fade show"
            style={showAlert ? { display: "block" } : { display: "none" }}
          >
            {alertMsg}
          </div>
          {/* alert end */}
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <form>
                    {/* Job details */}
                    <SubHeading heading={"Job Details"} />
                    <div class="row mb-4">
                      <label for="projectname" class="col-form-label col-lg-2">
                        Job Title
                      </label>
                      <div class="col-lg-10">
                        <input
                          id="projectname"
                          type="text"
                          value={jobTitle}
                          onChange={(e) => {
                            setJobTitle(e.target.value);
                          }}
                          class="form-control"
                          placeholder="Enter job title"
                        />
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label for="projectdesc" class="col-form-label col-lg-2">
                        Job Description
                      </label>
                      <div class="col-lg-10">
                        <textarea
                          class="form-control"
                          id="projectdesc"
                          rows="10"
                          value={jobDesc}
                          onChange={(e) => setJobDesc(e.target.value)}
                          placeholder="Enter job Description"
                        ></textarea>
                      </div>
                    </div>

                    {/*  make job type as select while doing backend*/}
                    <div class="row mb-4">
                      <label for="projectname" class="col-form-label col-lg-2">
                        Job Type
                      </label>
                      <div class="col-lg-10">
                        <select
                          className="form-control"
                          value={jobType}
                          onChange={(e) => setJobType(e.target.value)}
                        >
                          <option value="1">Full Time</option>
                          <option value="2">Part Time</option>
                          <option value="3">Internship</option>
                        </select>
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label for="projectname" class="col-form-label col-lg-2">
                        Job Category
                      </label>
                      <div class="col-lg-10">
                        <select
                          className="form-control"
                          value={jobCat}
                          onChange={(e) => setJobCat(e.target.value)}
                        >
                          <option value="value1">value1</option>
                          <option value="value2">value2</option>
                          <option value="value3">value3</option>
                        </select>
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label
                        for="projectbudget"
                        class="col-form-label col-lg-2"
                      >
                        Vacancy
                      </label>
                      <div class="col-lg-10">
                        <input
                          id="projectbudget"
                          name="projectbudget"
                          type="text"
                          value={vacancy}
                          onChange={(e) => setVacancy(e.target.value)}
                          placeholder="Enter job vacancy"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label
                        for="projectbudget"
                        class="col-form-label col-lg-2"
                      >
                        Experience
                      </label>
                      <div class="col-lg-10">
                        <input
                          id="projectbudget"
                          name="projectbudget"
                          type="text"
                          value={jobexperience}
                          onChange={(e) => setJobExperience(e.target.value)}
                          placeholder="Enter job experience"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label class="col-form-label col-lg-2">
                        Closing Date
                      </label>
                      <div class="col-lg-10">
                        <div
                          class="input-daterange input-group"
                          id="project-date-inputgroup"
                          data-provide="datepicker"
                          data-date-format="dd M, yyyy"
                          data-date-container="#project-date-inputgroup"
                          data-date-autoclose="true"
                        >
                          <input
                            type="date"
                            class="form-control"
                            value={closingDate}
                            onChange={(e) => setClosingDate(e.target.value)}
                            placeholder="Start Date"
                            name="start"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label
                        for="projectbudget"
                        class="col-form-label col-lg-2"
                      >
                        Location
                      </label>
                      <div class="col-lg-10">
                        <input
                          id="projectbudget"
                          name="projectbudget"
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="Enter job location"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label
                        for="projectbudget"
                        class="col-form-label col-lg-2"
                      >
                        Email
                      </label>
                      <div class="col-lg-10">
                        <input
                          id="projectbudget"
                          name="projectbudget"
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter job email"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="row mb-4">
                      <label
                        for="projectbudget"
                        class="col-form-label col-lg-2"
                      >
                        Website
                      </label>
                      <div class="col-lg-10">
                        <input
                          id="projectbudget"
                          name="projectbudget"
                          type="text"
                          value={website}
                          onChange={(e) => setWesite(e.target.value)}
                          placeholder="Enter job website"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </form>

                  {/* Job details ends */}

                  {/* Responsibilities start */}
                  <SubHeading heading={"Responsibilities"} />
                  <Responsibilities resp={resp} setresp={setresp} />
                  {/* Responsibilities end */}

                  {/* Requirements start */}
                  <SubHeading heading={"Requirements"} />
                  <Requirements
                    requirements={requirements}
                    setrequirements={setrequirements}
                  />
                  {/* Requirements end */}

                  {/* Qualification */}
                  <SubHeading heading={"Qualification"} />
                  <Qualification
                    qualification={qualification}
                    setqualification={setqualification}
                  />

                  {/* Experience */}
                  <SubHeading heading={"Skills & Experience"} />
                  <Experience
                    experience={experience}
                    setexperience={setexperience}
                  />

                  {/* Keywords */}
                  <SubHeading heading={"Keywords"} />
                  <Keywords
                    formValues={formValues}
                    setFormValues={setFormValues}
                  />

                  {/* file upload */}
                  <SubHeading heading={"Images"} />
                  <div class="row mb-4 ">
                    <label class="col-form-label col-lg-2">Upload Image</label>
                    <div class="col-lg-10">
                      <div className="upload_cont_inner">
                        <label htmlFor="inputTag" style={{ cursor: "pointer" }}>
                          <img
                            src={uploadimg}
                            height="70"
                            alt="upload file here"
                          />
                          <span style={{ color: "#2f3030", marginLeft: "7px" }}>
                            Select File
                          </span>{" "}
                          <br />
                          <input
                            id="inputTag"
                            onChange={toggleChange}
                            style={{ display: "none" }}
                            type="file"
                          />
                          <br />
                        </label>
                        {file && selectedFile != null ? (
                          <div className="file_container">
                            ${selectedFile.name}
                            <div className="close" onClick={close}>
                              x
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>

                  <div class="row justify-content-end">
                    <div class="col-lg-10">
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        class="btn btn-primary"
                      >
                        Post Job
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PostjobComponent;
