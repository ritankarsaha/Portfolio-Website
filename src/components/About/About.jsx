import React from "react";
import { stackList, toolist } from "../../data/ProjectData";
import {
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <React.Fragment>
      <svg
        height="20%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <ContactWrapper id="about">
        <div className="Container" data-aos="fade-up">
          <div className="SectionTitle">About Me</div>
          <div className="AboutBio">
          <p>Hello guys I'm <strong>Ritankar Saha</strong> , an aspiring <strong>Web3 and Cloud Engineer</strong>. 
          Initially, I ventured into <strong>Web and App development</strong>, particularly <strong>backend development</strong>,
           as I saw it as a forward-thinking career path driven by advancements like ChatGPT. 
           This journey sparked a <strong>deep passion for web and software engineering</strong> in me. 
           Additionally, I have a strong interest in <strong>competitive coding</strong> and enjoy solving challenges on <strong>LeetCode</strong>.
            My diverse skill set in <strong>Web and App development</strong>, combined with my enthusiasm for emerging technologies,
             drives my aspiration to excel as a<strong> Web3 developer</strong>  and <strong>Cloud engineer</strong>. 
             I am excited about the future and eager to contribute to the evolving tech landscape.</p>
            <br />
            As an active open-source contributor, I am always eager to learn and 
            grow. I was selected for the <strong>GSSoC'24 program</strong> and contributed actively on over
            <strong> 23+ repositories</strong>  solving approximately <strong>39 issues</strong>, added <strong>12,987</strong> lines of code 
            and earned myself the <strong>Explorer Badge</strong>.
            <br />
            <br />I am currently learning <strong>Go lang, </strong>
             <strong>System Design & DevOps</strong>, generating <strong>Smart Contracts </strong>
              and <strong>Cloud Architecture Solutions. </strong>
             Besides
            coding, I enjoy football, playing my guitar, learning new languages and binge-watching Netflix :)). Let's collaborate and create
            something amazing together!
          </div>
          <br />
          <br />

          <div className="AboutBio tagline2">My Technical Skills</div>
          <br />
          <Technologies data-aos="fade-up">
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
          <br />

          <div className="AboutBio tagline2">Tools That I Use</div>
          <br />
          <Technologies data-aos="fade-up">
            {toolist.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </ContactWrapper>
    </React.Fragment>
  );
}

export default About;
