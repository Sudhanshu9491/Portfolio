import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";
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
            Hello! I'm a frontend developer who is passionate about crafting
            visually appealing and user-friendly websites. Though I'm still
            honing my skills, I approach every project with enthusiasm and a
            commitment to continuous learning. Let's collaborate and create
            something remarkable!
          </p>
          <p className="about-para">
            As a frontend developer, I enjoy turning ideas into reality using
            code. I specialize in creating the parts of websites that people see
            and interact with. From buttons to forms to entire pages, I work to
            make sure everything looks great and works smoothly. With each
            project, I'm excited to improve my skills and create better
            experiences for users.
          </p>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML && CSS</p>
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
              <p>Java</p>
              <hr style={{ width: "70%" }} />
            </div>
          </div>
          <div className="about-achievements">
            {/* <div className="about-achievement"> */}
              {/* <h1>10+</h1> */}
              {/* <p>YEARS OF EXPERIENCE</p> */}
              {/* <h1>&nbsp;</h1> */}
              {/* <p>Fresher</p> */}
            {/* </div> */}
            {/* <hr /> */}
            <div className="about-achievement">
              <h1>5+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            {/* <hr /> */}
            {/* <div className="about-achievement"> */}
              {/* <h1>15+</h1> */}
              {/* <h1>&nbsp;</h1> */}
              {/* <p>HAPPY CLIENTS</p> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
