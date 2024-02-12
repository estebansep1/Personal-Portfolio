import React, { useEffect } from "react";
import Typed from "typed.js";

export default function HeroSection() {
  useEffect(() => {
    const typed = new Typed(".hero--section-title", {
      strings: ["Software Devloper", "Student"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Esteban</p>
          <h1 className="hero--section-title">
            <span className="hero--section-title--color">Software</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            With a strong foundation in web development, I recently graduated
            from a software development bootcamp. While software is my
            expertise, I'm also passionate about exploring hardware aspects,
            particularly Arduino projects, to deepen my understanding of AI and
            robotics.
          </p>
        </div>
        <a href="mailto:tebansd@icloud.com" className="btn btn-primary">
          Get In Touch
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./images/logo.png" alt="Hero Section" />
      </div>
    </section>
  );
}
