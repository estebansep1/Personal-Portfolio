import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function HeroSection() {
  useEffect(() => {
    const typed = new Typed('.hero--section-title', {
      strings: ['Full Stack Developer', 'Software Devloper', 'Student'],
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
            <span className="hero--section-title--color">Full Stack</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a junior developer currently enrolled in the SDSU Software Development Bootcamp, actively working to expand my skills and knowledge in Software Development
          </p>
        </div>
        <button className="btn btn-primary" onClick={() => window.location.href = "mailto:tebansd@icloud.com"}>
          Get In Touch
        </button>

      </div>
      <div className="hero--section--img">
        <img src="./logo.png" alt="Hero Section" />
      </div>
    </section>
  );
}
