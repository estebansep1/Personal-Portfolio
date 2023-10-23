import React from "react"
import { Link } from "react-scroll"

export default function Footer() {
    return (
        <footer className="footer--container">
  <div className="footer--link--container">
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
          >
            Home
          </Link>
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
          >
            Skills
          </Link>
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
          >
            About Me
          </Link>
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
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
    <div className="footer--social--icon">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/esteban-sepulveda-a06789161/"
            className="navbar--content"
            target="_blank"
            rel="noreferrer"
          >
            <svg
            className="footer-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.33341 4.65479H26.0001C27.4729 4.65479 28.6667 5.84869 28.6667 7.32145V25.9881C28.6667 27.4609 27.4729 28.6548 26.0001 28.6548H7.33341C5.86065 28.6548 4.66675 27.4609 4.66675 25.9881V7.32145C4.66675 5.84869 5.86065 4.65479 7.33341 4.65479ZM11.3334 24.6548C11.7016 24.6548 12.0001 24.3563 12.0001 23.9881V14.6548C12.0001 14.2867 11.7016 13.9881 11.3334 13.9881H9.33342C8.96523 13.9881 8.66675 14.2867 8.66675 14.6548V23.9881C8.66675 24.3563 8.96523 24.6548 9.33342 24.6548H11.3334ZM10.3334 12.6548C9.22884 12.6548 8.33341 11.7594 8.33341 10.6548C8.33341 9.55021 9.22884 8.65479 10.3334 8.65479C11.438 8.65479 12.3334 9.55021 12.3334 10.6548C12.3334 11.7594 11.438 12.6548 10.3334 12.6548ZM24.0001 24.6548C24.3682 24.6548 24.6667 24.3563 24.6667 23.9881V17.8548C24.7101 15.7359 23.1435 13.9275 21.0401 13.6681C19.5694 13.5338 18.1445 14.2207 17.3334 15.4548V14.6548C17.3334 14.2867 17.0349 13.9881 16.6667 13.9881H14.6667C14.2986 13.9881 14.0001 14.2867 14.0001 14.6548V23.9881C14.0001 24.3563 14.2986 24.6548 14.6667 24.6548H16.6667C17.0349 24.6548 17.3334 24.3563 17.3334 23.9881V18.9881C17.3334 17.8836 18.2289 16.9881 19.3334 16.9881C20.4379 16.9881 21.3334 17.8836 21.3334 18.9881V23.9881C21.3334 24.3563 21.6319 24.6548 22.0001 24.6548H24.0001Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/estebansep1"
            className="navbar--content"
            target="_blank"
            rel="noreferrer"
          >
            <svg
            className="footer--icon"
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="42"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.820-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.820-2.2-.820-.434 1.102-.160 1.915-.077 2.118-.512.560-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.200-.436.552-.508 1.070-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.780-.010-.055.487 0 0 .525.246.889 1.170 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.180-1.057-5.472-4.056-5.472-7.590 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.590z"
                fill="black"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <hr className="divder" />
  <div className="footer--content--container">
    <p className="footer--content">Made by Esteban 🧑🏻‍💻 Stay Tuned for More!</p>
  </div>
</footer>

    )
}