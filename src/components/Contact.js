import { useState } from "react";
// import Modal from "./Modal";
import classes from "./styles/contact.module.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // let formData = new FormData();
    // console.log(formData);
    fetch("https://formsubmit.co/ajax/valleryje@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    }).catch((error) => console.log(error));
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  const form = (
    <form onSubmit={formSubmitHandler}>
      <input className={classes.name}
        type="text"
        name="fName"
        placeholder="Name"
        onChange={nameHandler}
        value={name}
        required
      />
      <input
        type="hidden"
        name="_subject"
        value={`${name} is requesting a reply`}
        required
      />
      <input className={classes.name}
        type="email"
        name="email"
        placeholder="Email"
        onChange={emailHandler}
        value={email}
        required
      />
      <textarea
        name="body"
        cols="30"
        rows="10"
        placeholder="Message"
        onChange={messageHandler}
        value={message}
        required
      ></textarea>
      <input type="text" name="_honey" className={classes.honeypot} />
      <button type="submit">Let's work together</button>
    </form>
  );

  const thankYou = (
    <div className={classes.thankyou__container}>
      <p className={classes.thankyou__message}>
        Thank you, Brandon will reach out to you shortly.
      </p>
    </div>
  );

  return (
    <div className={classes.contact_container} id="contact">
      <h3 className={classes.contact_label}>Contact</h3>
      <div className={classes.form__container}>
        {isSubmitted ? thankYou : form}
      </div>
    </div>
  );
};

export default Contact;
