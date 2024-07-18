import React from "react";
import HonoursAndAwardsCard from "./AwardsCard/AwardsCard";
function Awards() {
  return (
    <React.Fragment>
      <div className="ProjectWrapper" id="awards">
        <div className="Container">
          <div className="SectionTitle awards">Achievements</div>
         <HonoursAndAwardsCard/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Awards;
