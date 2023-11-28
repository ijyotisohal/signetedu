import React, { useEffect, useState } from 'react';
import { useTrail, animated } from 'react-spring';

const FallingCards = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const cardCount = 3; // Number of cards
  const initialDelay = 500; // Delay for the first card (in milliseconds)
  const cardDelay = 200; // Delay between each subsequent card (in milliseconds)

  const trailSpring = useTrail(cardCount, {
    opacity: scrollY >= 3000 ? 1 : 0,
    transform: `translate3d(0, ${scrollY >= 3000 ? 0 : -50}px, 0)`,
    config: { tension: 400, friction: 30 },
    delay: scrollY >= 3000 ? initialDelay : 0,
    from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
  });

  return (
    <div className="falling-cards-container">
      {trailSpring.map((props, index) => (
        <animated.div
          key={index}
          className="falling-card"
          style={{ ...props, transitionDelay: `${initialDelay + index * cardDelay}ms` }}
        />
      ))}
    </div>
  );
};

export default FallingCards;
