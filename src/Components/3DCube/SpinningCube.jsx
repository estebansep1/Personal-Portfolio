import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../Scss/SpinningCube.scss'
import {
  faHtml5,
  faCss3,
  faGitAlt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function SpinningCube() {
  return (
    <div className="cube--container">
      <div className="cube--spinner">
        <div className="face1">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
        <div className="face6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            zoomAndPan="magnify"
            viewBox="0 0 33.75 33.749999"
            height="100"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <clipPath id="95e83b3e3d">
                <path
                  d="M 9 9 L 32.570312 9 L 32.570312 32.570312 L 9 32.570312 Z M 9 9 "
                  clipRule="nonzero"
                />
              </clipPath>
              <clipPath id="c4f3c756d4">
                <path
                  d="M 1.304688 1.304688 L 25 1.304688 L 25 25 L 1.304688 25 Z M 1.304688 1.304688 "
                  clipRule="nonzero"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#95e83b3e3d)">
              <path
                fill="#f2bb30"
                d="M 28.066406 24.269531 C 30.210938 24.269531 31.003906 22.773438 31.746094 20.53125 C 32.519531 18.222656 32.484375 16.003906 31.746094 13.046875 C 31.214844 10.917969 30.210938 9.308594 28.066406 9.308594 L 25.304688 9.308594 L 25.304688 12.578125 C 25.304688 15.113281 23.152344 17.253906 20.699219 17.253906 L 13.335938 17.253906 C 11.324219 17.253906 9.65625 18.976562 9.65625 20.996094 L 9.65625 28.011719 C 9.65625 30.011719 11.390625 31.183594 13.335938 31.757812 C 15.664062 32.4375 17.90625 32.5625 20.699219 31.757812 C 22.550781 31.21875 24.378906 30.136719 24.378906 28.011719 L 24.378906 25.207031 L 17.023438 25.207031 L 17.023438 24.269531 Z M 21.160156 27.074219 C 21.925781 27.074219 22.546875 27.703125 22.546875 28.476562 C 22.546875 29.253906 21.925781 29.882812 21.160156 29.882812 C 20.402344 29.882812 19.773438 29.246094 19.773438 28.476562 C 19.78125 27.695312 20.402344 27.074219 21.160156 27.074219 Z M 21.160156 27.074219 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>
            <g clipPath="url(#c4f3c756d4)">
              <path
                fill="#35668f"
                d="M 5.863281 24.269531 L 8.394531 24.269531 L 8.394531 20.90625 C 8.394531 18.472656 10.496094 16.328125 12.996094 16.328125 L 20.359375 16.328125 C 22.40625 16.328125 24.039062 14.640625 24.039062 12.582031 L 24.039062 5.5625 C 24.039062 3.5625 22.359375 2.066406 20.359375 1.730469 C 17.890625 1.320312 15.207031 1.34375 12.996094 1.738281 L 13 1.734375 C 9.882812 2.285156 9.316406 3.4375 9.316406 5.566406 L 9.316406 8.371094 L 16.6875 8.371094 L 16.6875 9.308594 L 6.554688 9.308594 C 4.410156 9.308594 2.53125 10.601562 1.949219 13.046875 C 1.273438 15.855469 1.246094 17.605469 1.949219 20.535156 C 2.472656 22.710938 3.71875 24.269531 5.863281 24.269531 Z M 12.535156 6.496094 C 11.773438 6.496094 11.152344 5.871094 11.152344 5.097656 C 11.160156 4.316406 11.773438 3.691406 12.535156 3.691406 C 13.296875 3.691406 13.921875 4.324219 13.921875 5.097656 C 13.921875 5.871094 13.300781 6.496094 12.535156 6.496094 Z M 12.535156 6.496094 "
                fillOpacity="1"
                fillRule="nonzero"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
