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

function PostjobComponent() {
  const [formValues, setFormValues] = useState([{ name: "" }]);


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

  // handle submit
  let handleSubmit = (event) => {
    event.preventDefault();
    const keywords = formValues;
    const formData = new FormData();
    formData.append("image", selectedFile)
    axios({
      method: "POST",
      url: "http://localhost:8000/api/postjob",
      headers: {"Content-Type": "multipart/form-data"},
      data: {
        keywords: keywords,
        image: selectedFile,
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
  };

  return (
    <>
      <Loader />
      <div className="postjob_main">
        <MainHeading heading={"Post Job"} path1={"Jobs"} path2={"Post Job"} />
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
                        name="projectname"
                        type="text"
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
                      <input
                        id="projectname"
                        name="projectname"
                        type="text"
                        class="form-control"
                        placeholder="Enter job type"
                      />
                    </div>
                  </div>

                  <div class="row mb-4">
                    <label for="projectname" class="col-form-label col-lg-2">
                      Job Category
                    </label>
                    <div class="col-lg-10">
                      <input
                        id="projectname"
                        name="projectname"
                        type="text"
                        class="form-control"
                        placeholder="Enter job type"
                      />
                    </div>
                  </div>

                  <div class="row mb-4">
                    <label for="projectbudget" class="col-form-label col-lg-2">
                      Vacancy
                    </label>
                    <div class="col-lg-10">
                      <input
                        id="projectbudget"
                        name="projectbudget"
                        type="text"
                        placeholder="Enter job vacancy"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-4">
                    <label for="projectbudget" class="col-form-label col-lg-2">
                      Experience
                    </label>
                    <div class="col-lg-10">
                      <input
                        id="projectbudget"
                        name="projectbudget"
                        type="text"
                        placeholder="Enter job experience"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-4">
                    <label class="col-form-label col-lg-2">Closing Date</label>
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
                          placeholder="Start Date"
                          name="start"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row mb-4">
                    <label for="projectbudget" class="col-form-label col-lg-2">
                      Location
                    </label>
                    <div class="col-lg-10">
                      <input
                        id="projectbudget"
                        name="projectbudget"
                        type="text"
                        placeholder="Enter job location"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-4">
                    <label for="projectbudget" class="col-form-label col-lg-2">
                      Email
                    </label>
                    <div class="col-lg-10">
                      <input
                        id="projectbudget"
                        name="projectbudget"
                        type="text"
                        placeholder="Enter job email"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="row mb-4">
                    <label for="projectbudget" class="col-form-label col-lg-2">
                      Website
                    </label>
                    <div class="col-lg-10">
                      <input
                        id="projectbudget"
                        name="projectbudget"
                        type="text"
                        placeholder="Enter job website"
                        class="form-control"
                      />
                    </div>
                  </div>
                </form>

                {/* Job details ends */}

                {/* Responsibilities start */}
                <SubHeading heading={"Responsibilities"} />
                <Responsibilities />
                {/* Responsibilities end */}

                {/* Requirements start */}
                <SubHeading heading={"Requirements"} />
                <Requirements />
                {/* Requirements end */}

                {/* Qualification */}
                <SubHeading heading={"Qualification"} />
                <Qualification />

                {/* Experience */}
                <SubHeading heading={"Skills & Experience"} />
                <Experience />

                {/* Keywords */}
                <SubHeading heading={"Keywords"} />
                <Keywords formValues={formValues} setFormValues={setFormValues} />

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
                    <button type="submit" onClick={handleSubmit} class="btn btn-primary">
                      Post Job
                    </button>
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

export default PostjobComponent;
