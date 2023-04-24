import React from "react";
import Header from "./Header";
const Contact = () => {
  return (
    <React.Fragment>
      <Header />
      <h1 className=" hero hero-heading" style={{textAlign:"center"}}>Contact us</h1>
      <div class="form-container">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
          <label htmlFor="name">Email</label> <br />
          <input type="email" id="email" required /> <br />
          <label for="subject">Message</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{ height: "200px" }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contact;
