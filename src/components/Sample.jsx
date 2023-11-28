import React, { useEffect, useState } from 'react';
const tagsData = [
  { "text": "Tag 1" },
  { "text": "Tag 2" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
  { "text": "Tag 3" },
 
]


const Sample = () => {
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('falling-section');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
        setIsAnimationStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Content before the falling section */}
      <div style={{ height: '1000px' }}>Scroll down to see the falling animation</div>

      {/* Falling section */}
      <div id="falling-section">
        {isAnimationStarted && <FallingTags tags={tagsData} />}
      </div>
    </div>
  );
};

const FallingTags = ({ tags }) => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationFinished(true);
    }, 5000); // Duration of the falling animation in milliseconds (5 seconds)

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`falling-tags ${isAnimationFinished ? 'finished' : ''}`}>
      {tags.map((tag, index) => (
        <FallingTag key={index} delay={index * 100} index={index + 1} text={tag.text} />
      ))}
    </div>
  );
};

const FallingTag = ({ delay, index, text }) => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationFinished(true);
    }, 2000 + delay); // Duration of each tag's falling animation in milliseconds (2 seconds + delay)

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      className={`falling-tag ${isAnimationFinished ? 'finished' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {text}
    </div>
  );
};

export default Sample;
