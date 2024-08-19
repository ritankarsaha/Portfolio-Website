import React from "react";
import UtilityProjectCard from "./Utility_Projectscard/Utility_ProjectCard";
function UtilityProjects() {
  return (
    <React.Fragment>
     
      <div className="ProjectWrapper" id="projects">
        <div className="Container">
          <div className="SectionTitle">Utlity Projects</div>
          < UtilityProjectCard/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UtilityProjects;
