import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function NavBar() {
   const [navActive, setNavActive] = useState(false);

   const toggleNav = () => {
      setNavActive(!navActive);
   };

   const closeMenu = () => {
      setNavActive(false);
   };

   useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth <= 500) {
            closeMenu();
        }
    }

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    }
   }, []);

   useEffect(() => {
    if (window.innerWidth <= 1200) {
        closeMenu();
    }
   }, []);

   return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
        <div>
            <img className="name-logo" src="./images/name.svg" alt="Name logo" />
        </div>
        <a
            href="#Navbar"
            className={`nav__hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}
        >
            <span className='nav__hamburger__line'></span>
            <span className='nav__hamburger__line'></span>
            <span className='nav__hamburger__line'></span>
        </a>
        <div className={`navbar--items ${navActive ? "active" : ""}`}>
            <ul>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        to="heroSection"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar--content"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        to="MySkills"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar--content"
                    >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        to="AboutMe"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar--content"
                    >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link
                        onClick={closeMenu}
                        activeClass="navbar--active-content"
                        to="MyPortfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="navbar--content"
                    >
                        Portfolio
                    </Link>
                </li>
            </ul>
        </div>
        <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="btn btn-outline-primary"
        >
            Contact Me
        </Link>
    </nav>
  );
}