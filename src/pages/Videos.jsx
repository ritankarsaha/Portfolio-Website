import React from "react";
import styled from "styled-components";
import { GolangVideosList, ProjectVideosList } from "../data/ProjectData";

const VideosContainer = styled.div`
  padding: 10px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  color: #6495ed; /* Updated color */
  font-size: 2.5rem; /* Updated font size */
  font-weight: bold; /* Added font weight */
`;

const VideoList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const VideoItem = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const VideoTitle = styled.h2`
  font-size: 1.5em;
  color: #007bff;
`;

const VideoDescription = styled.p`
  color: #555;
`;

const VideoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const WatchButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Videos() {
  return (
    <React.Fragment>
      <VideosContainer>
        <Title>Golang Tutorials:- </Title>
        <VideoList>
          {GolangVideosList.map((video, index) => (
            <VideoItem key={index}>
              <VideoImage src={video.img} alt={video.title} />
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
              <WatchButton href={video.link} target="_blank" rel="noopener noreferrer">
                Watch Video
              </WatchButton>
            </VideoItem>
          ))}
        </VideoList>
      </VideosContainer>

      <VideosContainer>
        <Title> Projects Demo </Title>
        <VideoList>
          {ProjectVideosList.map((video, index) => (
            <VideoItem key={index}>
              <VideoImage src={video.img} alt={video.title} />
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
              <WatchButton href={video.link} target="_blank" rel="noopener noreferrer">
                Watch Video
              </WatchButton>
            </VideoItem>
          ))}
        </VideoList>
      </VideosContainer>
    </React.Fragment>
  );
}

export default Videos;