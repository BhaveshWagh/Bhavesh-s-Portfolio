import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "./Header";
import Footer from "./Footer";
const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); //other wise it will refresh the page

    emailjs
      .sendForm(
        "service_je8ilin",
        "template_hmnwshc",
        ref.current,
        "bddeoac5yFgn8YDcg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <React.Fragment>
      <Header />
      <h1
        className=" hero hero-hea
      ding"
        style={{ textAlign: "center" }}
      >
        Contact us
      </h1>
      <div class="form-container">
        <form ref={ref} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            required
          />
          <label htmlFor="name">Email</label> <br />
          <input
            type="email"
            id="email"
            placeholder="email123@gmail.com"
            name="email"
            required
          />{" "}
          <br />
          <label for="subject">Message</label>
          <textarea
            id="subject"
            // name="subject"
            placeholder="Write your message. . ."
            // style={{ height: "100px" }}
            name="message"
            rows={10}
          />
          <button type="submit">Send</button>
          {/* <input type="submit" value="Send" />*/}
          {success &&
            "Your message has been sent. We'll get back to you soon :)"}
        </form>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
