import React from "react";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import Experience from "../components/Experience/Experience";
import Awards from "../components/Awards/Awards";
import BoilerPlateProjects from "../components/Boilerplate_Projects/Boilerplate_Projects";
import UtilityProjects from "../components/Utility_Projects/Utility_Projects"


const Home = () =>
 (
    <React.Fragment>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <BoilerPlateProjects/>
      <UtilityProjects/>
      <Awards/>
      <Contact />
      <FixSocialIcon />
    </React.Fragment>
  );


export default Home;
