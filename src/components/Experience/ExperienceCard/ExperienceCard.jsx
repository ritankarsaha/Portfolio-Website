import React from "react";
import { ExperienceList } from "../../../data/ProjectData";
import { BtnGroup } from "../../Projects/ProjectCard/ProjectCardElements";
import { ExpCard, ExperienceCardRight } from "./styles";

function ExperienceCard() {
  return (
    <React.Fragment>
      {ExperienceList.map((list, index) => (
        <ExpCard key={index}>
          <ExperienceCardRight data-aos="fade-up-left">
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
              {list.experience_certificate1 && (
                <a
                  className="btn PrimaryBtn"
                  href={list.experience_certificate1}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate 1 ➜
                </a>
              )}
              {list.experience_certificate2 && (
                <a
                  className="btn PrimaryBtn"
                  href={list.experience_certificate2}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate 2 ➜
                </a>
              )}
              {list.experience_certificate3 && (
                <a
                  className="btn PrimaryBtn"
                  href={list.experience_certificate3}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certificate 3 ➜
                </a>
              )}
            </BtnGroup>
          </ExperienceCardRight>
        </ExpCard>
      ))}
    </React.Fragment>
  );
}

export default ExperienceCard;