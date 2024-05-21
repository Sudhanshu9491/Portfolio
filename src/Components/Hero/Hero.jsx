import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="profile image" />
      {/* <h1><span>I'm Sudhanshu Mishra</span> Frontend Developer.</h1>
      <p>Hi there! I'm a frontend developer, and I build cool stuff on the web. I love making websites that look great and are easy to use. Check out my portfolio to see some of the awesome projects I've worked on!</p> */}
      <h1 className="myName">
      Hi &nbsp;, I'm Sudhanshu Mishra  {" "}
        <span>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Web Developer", "Frontend Developer"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p>Hi there! I'm a frontend developer, and I build cool stuff on the web. I love making websites that look great and are easy to use. Check out my portfolio to see some of the awesome projects I've worked on!</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
