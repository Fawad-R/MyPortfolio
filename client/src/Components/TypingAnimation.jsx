import React, { useState, useEffect } from 'react';
import './TypingAnimation.css';
const TypingAnimation = ({ text, speed }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      let interval = null;
  
      if (displayText.length === text.length) {
        clearInterval(interval);
        interval = null;
        setIndex((index + 1) % text.length);
        setDisplayText('');
      } else {
        interval = setInterval(() => {
          setDisplayText(text.slice(0, displayText.length + 1));
        }, speed);
      }
  
      return () => clearInterval(interval);
    }, [displayText, text, speed, index]);
  
    return <span className="TypingAnimation">{displayText}</span>;
  };
  
  
  export default TypingAnimation;
