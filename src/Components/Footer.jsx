import React from "react"
import { Link } from "react-scroll"

export default function Footer() {
    return (
        <footer className="className">
            <div className="footer-link--container">
                <div>
                    <img src="./images/name.svg" alt="Esteban" />
                </div>
                <div className="footer--items">
                    <ul>
                        <li>
                            <Link
                              activeClass="navbar--active-content"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to="heroSection"
                              className="text-md"
                              >Home</Link>
                        </li>
                        <li>
                            <Link
                              activeClass="navbar--active-content"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to="mySkills"
                              className="text-md"
                              >Skills</Link>
                        </li>
                        <li>
                            <Link
                              activeClass="navbar--active-content"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to="AboutMe"
                              className="text-md"
                              >About Me</Link>
                        </li>
                        <li>
                            <Link
                              activeClass="navbar--active-content"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                              to="MyPortfolio"
                              className="text-md"
                              >Portfolio</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}