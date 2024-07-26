import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import TypewriterEffect from "../TypeWriter/TypewriterEffect";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  ScrollDown,
  ScrollLink,
  HeroButton,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory(); // Initialize useHistory

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const navigateToVideos = () => {
    history.push("/videos");
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>
              <TypewriterEffect text="Hi, I'm Ritankar Saha" speed={250} />
            </h1>
            <p className="description">
              <TypewriterEffect
                text={`I'm a software developer skilled at Full-Stack Development specialising in <strong>Back-End Development</strong> and <strong>Software Architecture</strong>. I enjoy discussing topics relating to <strong>System Design</strong>, <strong>DevOps</strong>, and <strong>Cloud Architecture</strong>. Hit me up at <a href="https://x.com/ritankarxx"><strong>X</strong></a> if you want to chat about <strong>System Architecture</strong>, <strong>Bitcoin</strong>, <strong>Cloud</strong>, <strong>Go-Lang</strong> or <strong>anything</strong> you have in mind. Let's create something great together!!`}
                speed={40}
              />
            </p>
            <HeroButton onClick={navigateToVideos}>Content I Created </HeroButton>
          </HeroLeft>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img src="./scroll-down.svg" alt="scroll-down" />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;