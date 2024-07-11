import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Ritankar Saha</h1>
            <p className="description">
              I'm a software developer skilled at Full-Stack Development specialising in <strong>Back-End Development</strong> and
              <strong> Software Architecture</strong>. I enjoy discussing topics relating to <strong>System Design</strong>, <strong>DevOps</strong> and <strong>Cloud Architechture</strong> . Hit me up 
              at <a href="https://x.com/ritankarxx"><strong>X</strong></a> if you want to chat about <strong>System Architecture</strong>, <strong>Bitcoin</strong>, <strong>Cloud</strong>, <strong>Go-Lang</strong> or <strong>anything</strong> you have in mind. 
              Let's create something great together!!
            </p>
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
