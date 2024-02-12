import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const formatPhoneNumber = (value) => {
    const dashedDigits = value.replace(/\D/g, "");

    const formattedPhoneNumber = dashedDigits.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "$1-$2-$3"
    );
    return formattedPhoneNumber;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    form.current.number.value = formatPhoneNumber(form.current.number.value);

    emailjs
      .sendForm(
        "service_ct6kpcm",
        "template_4rvt531",
        form.current,
        "-D6F2RlW-r0lJ_2S0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(
      "Thanks for reaching out! I will get back to you as soon as possible."
    );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">Want to connect? Feel free to reach out!</p>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact--form--container"
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first_name"
              id="first-name"
              placeholder="John"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last_name"
              id="last-name"
              placeholder="Doe"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              placeholder="123Email@example.com"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="number"
              id="phone-number"
              placeholder="123-456-7890"
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Leave your message here..."
            required
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--button">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
