import React, { useState } from "react";
import "./ContactUs.css";
import gmailImage from "../../assets/images/gmail/images-removebg-preview.png";
function ContactUs() {
  const formInitialState = {
    name: "",
    email: "",
    message: "",
  };
  const [formControl, setFormControl] = useState(formInitialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Will contact you soon");
    setFormControl(formInitialState);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormControl((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="Form">
      <div className="container">
        <div className="imageCss">
          <img src={gmailImage} alt="Gmail Icon" />
        </div>
      </div>
      <div className="container">
        <form className="FormCss" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={formControl.name}
            name="name"
            onChange={handleOnChange}
          />

          <label>Email</label>
          <input
            type="email"
            value={formControl.email}
            name="email"
            onChange={handleOnChange}
          />

          <label>Message</label>
          <input
            className="Message"
            type="text"
            value={formControl.message}
            name="message"
            onChange={handleOnChange}
          />

          <button type="submit">Done</button>
        </form>
      </div>
    </div>
  );
}
export default ContactUs;
