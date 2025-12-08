import React from "react";
import "./Contact.css";
import { useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  function call(){
    if(name.trim() != "" || email.trim() != "" || message.trim() != ""){
      setName("");
      setEmail("");
      setMessage("");
      alert("All form details are cleared");
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill out all fields");
      return;
    }

    // API request
    const formData = new FormData(event.target);
    formData.append("access_key", "051b1ca5-47fc-491c-9e43-b8e4c574f918");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Thank's For Email Me");
        console.log("Success", data);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Submission failed. Please try again later.");
        console.error("Error", data);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Error", error);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="theme_pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel to contact
            me
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e3e3e3"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
              <a href="https://github.com/sudhanshu9491"   style={{ color: "white" }}>Github/Sudhanshu9491</a>
            </div>
            <div className="contact-detail">
              <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e3e3e3"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
              <a href="https://www.linkedin.com/in/Sudhanshu9491"   style={{ color: "white" }}>Linkedin/Sudhanshu9491</a>
            </div>
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <a href="mailto:sudhanshumishra9491@gmail.com" style={{ color: "white" }}>
  sudhanshumishra9491@gmail.com
</a>  
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <a href="tel:+917905907817" style={{ color: "white" }}>
  +91 7905907817
</a>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />
          <label htmlFor="mail">Your Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="male"
            id="mail"
            placeholder="Enter Your Email"
          />
          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            rows="8"
            id="message"
            placeholder="Enter Your Message"
          ></textarea>
          <div className="contact-button">
            <button type="submit" className="contact-submit">Submit Now</button>
            <button onClick={call} type="button" className="contact-clear">Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
