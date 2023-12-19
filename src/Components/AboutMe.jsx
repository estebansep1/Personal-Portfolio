export default function AboutMe() {
  return (
    <div>
      <section id="AboutMe" className="about--section">
        <div className="about--section--img">
          <img src="./images/profile.png" alt="About Me" />
        </div>
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <p className="section--title">About</p>
            <h1 className="skills--section--heading">About Me</h1>
            <p className="hero--section-description">
              Hello, I'm Esteban, and I'm currently a student at San Diego
              State's Software Development Bootcamp. I'm passionate about
              coding, dedicated to learning, and growing in the world of
              software development.
            </p>
            <p className="hero--section-description">
              During my journey, I'm acquiring skills in areas like Front-end
              and Back-End technologies. I'm excited to combine my education
              with real-world experience and build amazing projects. Feel free
              to reach out to connect, collaborate, or just chat about
              technology!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
