import React from "react";
import SpinningCube from "./3DCube/SpinningCube";

export default function MySkills() {
  return (
    <section className="skills--section" id="MySkills">
      <div className="portfolio--container">
        <p className="section--title">My Skills</p>
        <h2 className="skills--section--heading">Technical Skills</h2>
        <SpinningCube />
      </div>
      <div className="skills--section--container">
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src="./images/frontend.png" alt="frontend" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Front-End</h3>
            <ul className="skills--section--description">
              <li className="with--icon">HTML</li>
              <li className="with--icon">CSS</li>
              <li className="with--icon">JavaScript</li>
              <li className="with--icon">React/Redux</li>
            </ul>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src="./images/backend.png" alt="backend" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Back-End</h3>
            <ul className="skills--section--description">
              <li className="with--icon--2">NodeJS</li>
              <li className="with--icon--2">Express</li>
              <li className="with--icon--2">MongoDB</li>
              <li className="with--icon--2">PostgreSQL</li>
            </ul>
          </div>
        </div>
        <div className="skills--section--card">
          <div className="skills--section--img">
            <img src="./images/misc.png" alt="misc" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Other Tools</h3>
            <ul className="skills--section--description">
              <li className="with--icon--3">UI/UX</li>
              <li className="with--icon--3">Git</li>
              <li className="with--icon--3">GitHub</li>
              <li className="with--icon--3">RESTful APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
