import React from 'react';

export default function MySkills() {
    return (
     <section className="skills--section"
     id="mySkills">
        <div className="portfolio--container">
            <p className="section--title">My Skills</p>
            <h2 className="skills--section--heading">Technical Skills</h2>
        </div>
        <div className="skills--section--container">
            <div className="skills--section--card">
                <div className="skills--section--img">
                    <img src="./images/frontend.png" alt="frontend" />
                    <img src="./images/backend.png" alt="backend" />
                    <img src="./images/misc.png" alt="misc" />
                </div>
            </div>
        </div>
     </section>
    )
}
