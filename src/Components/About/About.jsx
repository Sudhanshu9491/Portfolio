import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/meeabout.svg";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="theme Pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile Img" />
        </div>
        <div className="about-right">
          <p className="about-para">
            Hello! I'm a B.Tech (Final Year) CSE student and a web developer who enjoys
            building clean, responsive, and user-friendly websites. I work with
            technologies like JavaScript, React, Node.js, MySQL, and MongoDB,
            and I’m always excited to learn and improve my skills.
          </p>
          <p className="about-para">
            I love turning ideas into real, functional projects—whether it's
            frontend interfaces or full-stack web applications. With a strong
            foundation in DSA, OOPs, and the MERN stack, I aim to create smooth
            and meaningful user experiences. I'm currently seeking Software
            Developer or SDE Intern roles to apply my knowledge and grow
            further.
          </p>
          <div className="about-skills">
            <div className="about-skill">
              <p>Java & OOPS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Backend</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
              {/* <h1>10+</h1> */}
              {/* <p>YEARS OF EXPERIENCE</p> */}
              <h1>&nbsp;</h1>
              <p>Fresher</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>5+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
              {/* <h1>15+</h1> */}
              <h1>&nbsp;</h1>
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
