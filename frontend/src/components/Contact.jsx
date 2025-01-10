import React from "react";
import img1 from "../images/IMG_0869.PNG";

const Contact = () => {
  return (
    <section id="contact" className="c_head">
    <h2>My Contact Information</h2>
    <div className="contact-info">
      <p><strong>Email: olliterava@hotmail.com</strong></p>
      <p>
        <img src={img1} alt="link" className="contact-image"/>
        <strong>Linkedin: <a href="https://www.linkedin.com/in/olliterava/">Olli Terävä</a></strong>
      </p>
    </div>
  </section>
  )
}

export default Contact;
