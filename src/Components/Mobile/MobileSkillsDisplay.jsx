import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import '../../Css/MobileSkillsDisplay.css';

const skills = ['JavaScript', 'React', 'MongoDB' , 'CSS', 'Node', 'Express', 'Git', 'Netlify', 'Render', 'AWS'];

const SkillDisplay = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const element = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(element.current, { autoAlpha: 1, duration: 0.8 })
      .to(element.current, { autoAlpha: 1, duration: 1.2 })
      .to(element.current, { autoAlpha: 0, duration: 0.8, onComplete: () => {
          setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
      } });

    return () => {
      tl.kill();
    };
  }, [skillIndex]);

  return (
    <div className="skill-display">
      <div ref={element}>
        {skills[skillIndex]}
      </div>
    </div>
  );
};

export default SkillDisplay;
