import React from 'react';

export default function MySkills() {
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h2 className="skills--section--heading">Technical Skills</h2>
            </div>
            <div className="skills--section--container">
                <div className="skills--section--card">
                    <div className="skills--section--img">
                        <img src="./images/frontend.png" alt="frontend" />
                    </div>
                    <div className="skills--section--card--content">
                        <h3 className="skills--section--title">Front-End</h3>
                        <ul className="skills--section--description">
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>React/Redux</li>
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
                            <li>NodeJS</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
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
                            <li>UI/UX</li>
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>RESTful APIs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
