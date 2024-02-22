import { useState } from "react";
import "./contact.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessge] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleName = (e) => {
    // console.log(e.target.value)
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMobile = (e) => {
    setMobile(e.target.value);
  };

  const handleMessage = (e) => {
    setMessge(e.target.value);
  };

  console.log("details", name, email, mobile, message);

  const formHandler = (e) => {
    e.preventDefault();
    console.log("submit form details", name, email, mobile, message);
    // setName('')
    // setEmail('')
    // setMobile('')
    // setMessge('')
    setIsSubmit(true);
  };
  return (
    <div className="contact-form">
      {isSubmit ? (
        <div>
          <h1>User Submit Details</h1>
          <p>
            {name} --- {email} ---- {mobile} --- {message}
          </p>
        </div>
      ) : (
        <form onSubmit={formHandler}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="enter your name"
              value={name}
              onChange={handleName}
            />
          </div>{" "}
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div>
            <label>Mobile</label>
            <input
              type="tel"
              name="mobile"
              required
              value={mobile}
              onChange={handleMobile}
            />
          </div>
          <div>
            <label>Message</label>
            <textarea name="message" value={message} onChange={handleMessage} />
          </div>
          <button role="button" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
