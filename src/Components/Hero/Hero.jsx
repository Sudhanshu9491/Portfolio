import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Hero.css";
import profile_img from "../../assets/mee.svg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const openResume = () => {
    window.open("/resume1.pdf", "_blank"); // Ensure resume.pdf is in the public folder
  };
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
            words={["Software Developer ", "Frontend Developer","Backend Developer","Full Stack Developer","Eager To Do Any Thing"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p>Hi there! I'm skilled in Java, JavaScript, Python, React.js, Node.js, MySQL, and MongoDB. I enjoy solving problems and building web applications with the MERN stack. I'm a quick learner, good team player, and always ready to adapt.I'm currently looking for Software Developer or SDE Intern roles to grow my skills and gain real-world experience</p>
      <p>I'm currently looking for Software Developer or SDE Intern roles to grow my skills and gain real-world experience !</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={openResume}>My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
