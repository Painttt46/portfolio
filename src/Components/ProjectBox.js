import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    KmunityDesc:
      "Developed a library service application for user with an admin backend system for managing services.",
    KmunityGithub: "https://github.com/Painttt46/LibaryApp_Flutter_Firebase",

    RiceGuardDesc:
      "Developed a mobile application for detecting rice leaf diseases with google map for share diseases location and forum for experience about rice ",
    RiceGuardGithub: "https://github.com/Slippy03/Project_2024",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
