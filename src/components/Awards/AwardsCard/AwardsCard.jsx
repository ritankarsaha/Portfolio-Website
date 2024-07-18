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

            
              <BtnGroup>
                {list.award_certificate1 && (
                  <a
                  className="btn PrimaryBtn"
                  href={list.award_certificate1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate 1 ➜
                </a>
                )}
                {list.award_certificate2 && (
                  <a
                  className="btn PrimaryBtn"
                  href={list.award_certificate2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate 2 ➜
                </a>
                )}
                {list.award_certificate3 && (
                  <a
                  className="btn PrimaryBtn"
                  href={list.award_certificate3}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate 3 ➜
                </a>
                )}
                
              </BtnGroup>
            
          </AwardsCardRight>
        </AwardsCard>
      ))}
    </React.Fragment>
  );
}

export default HonoursAndAwardsCard;
