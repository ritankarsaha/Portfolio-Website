import React from "react";
import BoilerPlateProjectCard from "./Boilerplate_Projectscard/Boilerplate_ProjectCard";
function BoilerPlateProjects() {
  return (
    <React.Fragment>
     
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Backend Projects</div>
          < BoilerPlateProjectCard/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BoilerPlateProjects;
