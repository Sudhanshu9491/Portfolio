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
              <img src={mail_icon} alt="" />
              <p>sudhanshumishra9491@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>91+ 7905907817</p>
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
