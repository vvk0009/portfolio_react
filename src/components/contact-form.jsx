import React, { useEffect, useState } from 'react';
import '../App.css';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const iframe = document.getElementById("hiddenConfirm");
    const form = document.querySelector(".form");

    const handleIframeLoad = () => {
      if (submitted) {
        form.reset();
        alert("Thank you for your message! We will get back to you soon!");
        setSubmitted(false);
      }
    };

    iframe.addEventListener("load", handleIframeLoad);

    return () => {
      iframe.removeEventListener("load", handleIframeLoad);
    };
  }, [submitted]);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const style_theme = {
    display: 'none',
  };

  return (
    <>
      <div className="heading" id="contact">
        <h1>Contact</h1>
        <div></div>
      </div>
      <iframe name="hiddenConfirm" id="hiddenConfirm" style={style_theme}></iframe>

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSe32M3MRgzNagP0qaoOfjI7wN_tBXCmgBTLTHH04luB-Pbp_A/formResponse"
        className="form"
        method="post"
        target="hiddenConfirm"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="entry.795231737"
          placeholder="Name"
          className="name"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          required
        />
        <input
          type="email"
          name="entry.1461826463"
          placeholder="Email"
          className="email"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          required
        />
        <input
          type="text"
          name="entry.2102402515"
          placeholder="Subject"
          className="subject"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          required
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default ContactForm;
