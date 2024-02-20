import React, { useRef } from "react";
import "./Contact.css";
// import img from "../../Assets/Project1.png";
// import email from "../../Assets/email-icon.ping.png";
// import github from "../../Assets/github-icon.png";
// import linkedin from "../../Assets/linkedin-icon.png";
// import behance from "../../Assets/behance-icon.png";
import logo from "../../Assets/logo.png";
import emailjs from "@emailjs/browser";
import linkedinIcon from "../../Assets/linkedin-icon.png";
import behanceIcon from "../../Assets/behance-icon.png";
import githubIcon from "../../Assets/github-icon.png";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_kb04sez", "template_w33r55p", form.current, {
        publicKey: "YSUcVFf7ozLOvxvYf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <div id="contact">
      <div className="Contactform">
        <form ref={form} onSubmit={sendEmail}>
          <label>Full Name</label>
          <input type="text" name="to_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <center>
            <input type="submit" value="Send" />
          </center>
        </form>
      </div>
      <center>
        <img src={logo} className="logo" alt={logo} />
      </center>
      <p className="slogan">
        Living, learning, & leveling up one day at a time.
      </p>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/mookgo-lebaka-5377a0199/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedinIcon}
            alt="LinkedIn"
            width="40"
            className="linkedin-icon"
          />
        </a>
        <a
          href="https://www.behance.net/mookgolebaka"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={behanceIcon}
            alt="BehanceIcon"
            width="40"
            className="behance-icon"
          />
        </a>
        <a href="https://github.com/Mookgol" target="_blank" rel="noreferrer">
          <img
            src={githubIcon}
            alt="githubIcon"
            width="40"
            className="github-icon"
          />
        </a>
      </div>
      <p className="Copyright">
        Copyright @ 2024 Mookgo Lebaka. All Rights Reserved.
      </p>
      <div className="footercolour"></div>
    </div>
  );
}

export default Contact;
