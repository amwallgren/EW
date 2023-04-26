import { useState } from "react";
import Spinner from "../Spinner";

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
        let message = "Thank you " + senderName + " for contacting us! We will answer you as soon as possible at the adress " + senderEmail + ".";
        setContactMessage(message);
        setTextarea("");
        setSenderName("");
        setSenderEmail("");
        setSpinner(false);
        console.log(senderName);
        console.log(senderEmail);
    }, 1500);
 }

    return (
        <div className="contact-box">
            <h2>Contact us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                id="input-name"
                type="text"
                placeholder="Name"
                value={senderName}
                onChange={(e) => {setSenderName(e.target.value)}}
                />
                <input
                id="input-email"
                type="text"
                placeholder="Email"
                value={senderEmail}
                onChange={(e) => {setSenderEmail(e.target.value)}}
                />
                <br></br><br></br>
                <textarea 
                id="contact-textarea" 
                cols="30" 
                rows="10"
                value={textarea}
                onChange={(e) => {setTextarea(e.target.value)}}
                ></textarea>
                <br></br>
                <button>Send</button>
                {spinner && <Spinner />}
            </form>
            <h3>{contactMessage}</h3>
        </div>
    );
};

export default Contact;