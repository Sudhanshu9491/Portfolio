import React from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My <span>Latest</span> Work</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, idx) => {
          return (
            <>
              
              {/* <button onClick={work.link}>{work.link}</button> */}
              <a target="a" href={work.link}><img key={idx} src={work.w_img} alt="work image" /></a>
            </>
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="arrow icon" />
      </div>
    </div>
  );
};

export default MyWork;
