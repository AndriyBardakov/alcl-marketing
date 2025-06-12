import React, { useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";
import config from "../../configs/config.json";

const ContactForm = () => {
  const formRef = useRef();

  const sendEmail = useCallback((e) => {
    e.preventDefault();

    emailjs
      .sendForm(config.EMAIL_SERVICE_ID, config.EMAIL_TEMPLATE_ID, formRef.current, {
        publicKey: config.EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }, []);

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <div className="row">
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="response"></div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            className="username"
            placeholder="Your Name*"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Your Email</label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Your Email*"
            required
          />
        </div>
        {/* End .col */}

        {/* <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            className="subject"
            placeholder="Subject *"
            required
          />
        </div> */}
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Your Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            required=""
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            id="submit"
            name="submit-form"
          >
            Send Massage
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default ContactForm;
