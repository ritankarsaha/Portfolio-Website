import React from "react";
import { AwardsList } from "../../../data/ProjectData";
import { BtnGroup } from "../../Projects/ProjectCard/ProjectCardElements";
import { AwardsCard, AwardsCardRight } from "./styles";

function HonoursAndAwardsCard() {
  return (
    <React.Fragment>
      {AwardsList.map((list, index) => (
        <AwardsCard key={index}>
          <AwardsCardRight data-aos="fade-up-left">
            <h4>{list.title}</h4>

            <div className="role">{list.role}</div>

            <div className="description">
              <ul>
                {list.description.length > 0 &&
                  list.description.map((desc, ind) => (
                    <li className="description-item" key={ind}>{desc}</li>
                  ))}
              </ul>
            </div>

            {list.isc && (
              <BtnGroup>
                <a
                  className="btn PrimaryBtn"
                  href={list.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate ➜
                </a>
              </BtnGroup>
            )}
          </AwardsCardRight>
        </AwardsCard>
      ))}
    </React.Fragment>
  );
}

export default HonoursAndAwardsCard;
