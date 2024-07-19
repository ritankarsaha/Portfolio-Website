
import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';


const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;


const StyledSpan = styled.span`
  ${({ typing }) =>
    typing &&
    css`
      &::after {
        content: '|';
        animation: ${blink} 1s step-end infinite;
        margin-left: 2px;
      }
    `}
`;

const TypewriterEffect = ({ text, speed = 150 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  const parseText = (text) => {
    const result = [];
    let tag = false;
    let currentTag = '';

    for (let char of text) {
      if (char === '<') {
        tag = true;
        currentTag += char;
      } else if (char === '>') {
        tag = false;
        currentTag += char;
        result.push(currentTag);
        currentTag = '';
      } else if (tag) {
        currentTag += char;
      } else {
        result.push(char);
      }
    }

    return result;
  };

  const parsedText = parseText(text);

  useEffect(() => {
    if (index < parsedText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + parsedText[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, parsedText, speed, displayedText]);

  return (
    <StyledSpan
      typing={index < parsedText.length}
      dangerouslySetInnerHTML={{ __html: displayedText }}
    />
  );
};

export default TypewriterEffect;