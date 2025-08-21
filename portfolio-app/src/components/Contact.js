import React from "react";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required /><br /><br />
        <input type="email" placeholder="Your Email" required /><br /><br />
        <textarea placeholder="Your Message" required></textarea><br /><br />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
