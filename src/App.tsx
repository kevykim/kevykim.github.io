// Main HomePage

import React from "react";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

import WelcomeSign from "./components/WelcomeSign";
import background from './assets/images/bg.jpg'
import profileimg from './assets/images/pic01.jpg'
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projectsx"

import project1 from './assets/images/wintertrails.png';
import project2 from './assets/images/artsy.png';
import project3 from './assets/images/airbb.png';
import Skills from "./components/Skills";
import Socials from "./components/Socials"
import Footer from "./components/Footer";

// For Loading Screen
import './index.css'


const App : React.FC = () => {

const [loadingScreen, setLoadingScreen] = useState(false)

  useEffect(() => {
    setLoadingScreen(true)
    setTimeout(() => {
      setLoadingScreen(false)
    }, 750)
  }, []);


  return (
    <div id="app">
      {loadingScreen ? 
      <ClipLoader
        color={"#000000"}
        loading={loadingScreen}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      : 
      <div>
      <WelcomeSign src={background} profileimg={profileimg} alt="background" />
      <AboutMe profileimg={profileimg} alt="profile"/>
      <Projects project1={project1} project2={project2} project3={project3} target="_blank"/>
      <Skills />
      <Socials target="_blank"/>
      <Footer />
      </div>
      }
    </div>
  );
}

export default App;
