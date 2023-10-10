export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Esteban</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            I am a junior developer currently enrolled in the SDSU Software Development Bootcamp, actively working to expand my skills and knowledge in Sofware Development
            </p>
          </div>
          <button className="btn btn-primary">
            <a href="mailto:tebansd@icloud.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                Get In Touch
            </a>
          </button>
        </div>
        <div className="hero--section--img">
          <img src="./logo.png" alt="Hero Section" />
        </div>
      </section>
    );
  }