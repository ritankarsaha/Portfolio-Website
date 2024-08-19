import React from "react";
import {  UtlityProjectList } from "../../../data/ProjectData";
import { Card, CardLeft, CardRight, Stack, BtnGroup } from "./ProjectCardElements";

function UtilityProjectCard() {
  return (
    <React.Fragment>
      {UtlityProjectList.map((list, index) => (
        <Card key={index}>
          <CardLeft data-aos="fade-up-right">
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight data-aos="fade-up-left">
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <Stack>
              <span className="stackTitle">Tech Stack -</span>
              <span className="tags">{list.tech_stack}</span>
            </Stack>
            <BtnGroup>
              <a
                className="btn btn2 SecondarBtn"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              {list.demo_youtube && (
                <a
                  className="btn btn2 SecondarBtn"
                  href={list.demo_youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
              {list.live_url && (
                <a
                  className="btn PrimaryBtn"
                  href={list.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explanation ➜
                </a>
              )}
            </BtnGroup>
          </CardRight>
        </Card>
      ))}
    </React.Fragment>
  );
}

export default UtilityProjectCard;
