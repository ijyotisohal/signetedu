import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 48%;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s;
  background-color: #d9aa54;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  ${({ visible }) =>
    visible &&
    `
    opacity: 1;
  `}
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 2000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <ScrollToTopButton visible={isVisible} onClick={scrollToTop}>
      Scroll to Top
    </ScrollToTopButton>
  );
};

export default ScrollToTop;
