import React from 'react'
import './Footer.css';
import { useState } from "react";
// import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const  Footer = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  function call(){
    if(email.trim() != ""){
      setEmail("");
      alert("All form details are cleared");
    }
  }
  const onSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (email.trim() == "") {
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
        alert("I Will Contant You Soon");
        console.log("Success", data);
        // setName("");
        setEmail("");
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
    <div id='footer' className='footer'>
      <div className="footer-top">
        {/* <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo"/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae iure nostrum dignissimos neque voluptates!</p>
        </div> */}
        <h2 className='footer-h2'>Send Your Email</h2>
        {/* <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user icon" />
            <input type="email" placeholder='Enter Your Email' />
          </div>
          <div className="footer-subscribe">Send Mail</div>
        </div> */}
        <form onSubmit={onSubmit} className='footer-top-right' action="#">
           <div className='footer-email-input' >
              <img src={user_icon} alt="user icon" />
              <input value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="male"
            id="mail"
            placeholder='Enter Your Email' />
           </div>
            <button className="footer-subscribe">Send Mail</button>
        </form>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          2024 Sudhanshu Mishra . All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer