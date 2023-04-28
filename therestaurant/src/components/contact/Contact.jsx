import { useState } from "react";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";

function Contact() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [spinner, setSpinner] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpinner(true);
    setTimeout(() => {
      let message =
        "Thank you " +
        senderName +
        " for contacting us! We will answer you as soon as possible at the adress " +
        senderEmail +
        ".";
      setContactMessage(message);
      setTextarea("");
      setSenderName("");
      setSenderEmail("");
      setSpinner(false);
      console.log(senderName);
      console.log(senderEmail);
    }, 1500);
  };

  return (
    <div className="contactBox">
      <h2>Contact us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          id="input-name"
          type="text"
          placeholder="Name"
          value={senderName}
          onChange={(e) => {
            setSenderName(e.target.value);
          }}
        />
        <input
          id="input-email"
          type="text"
          placeholder="Email"
          value={senderEmail}
          onChange={(e) => {
            setSenderEmail(e.target.value);
          }}
        />
        <br></br>
        <br></br>
        <textarea
          className="contactTextArea"
          cols="30"
          rows="10"
          value={textarea}
          onChange={(e) => {
            setTextarea(e.target.value);
          }}
        ></textarea>
        <br></br>
        <Link to={"/gdpr"} className="gdprFormLink">
          Learn more about how we work with GDPR
        </Link>
        <br></br>
        <button className="sendButton">Send</button>
        {spinner && <Spinner />}
      </form>
      <h3>{contactMessage}</h3>
    </div>
  );
}

export default Contact;
