import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import contactImage from "../../Assets/contact-image.png";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const form = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify the reCAPTCHA!");
      return;
    }
    emailjs
      .sendForm("service_kb04sez", "template_w33r55p", form.current, {
        publicKey: "YSUcVFf7ozLOvxvYf",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };
  return (
    <div id="contact">
      <div>
        <h2 className="getInTouch"> Get in Touch</h2>
        <img src={contactImage} className="contact-image" alt={contactImage} />
      </div>
      <div className="Contactform">
        <form ref={form} onSubmit={sendEmail}>
          <label>Full Name</label>
          <input type="text" name="to_name" required />
          <label>Email</label>
          <input
            type="email"
            name="from_email"
            required
            placeholder="joe@example.com"
          />
          <label>Message</label>
          <textarea name="message" required />
          <center>
            <input type="submit" value="Send" />
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_SITE_KEY}
              onChange={handleCaptchaChange}
            />{" "}
          </center>
        </form>
      </div>
    </div>
  );
}

export default Contact;
