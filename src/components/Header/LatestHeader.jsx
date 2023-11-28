import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNavbar isSticky={isSticky}>
      <Container>
        <Logo>
          <img src="logo.png" alt="Logo" />
        </Logo>
        <MenuButton onClick={handleToggleMenu} isMenuOpen={isMenuOpen}>
          <div />
          <div />
          <div />
        </MenuButton>
        <Menu isMenuOpen={isMenuOpen}>
          <MenuItem>
            <a href="#">Menu Item 1</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Menu Item 2</a>
            <DropdownMenu>
              <DropdownMenuItem>
                <a href="#">Sub-Menu Item 1</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Sub-Menu Item 2</a>
                <ul>
                  <DropdownSubMenuItem>
                    <a href="#">Sub-Menu Item 1</a>
                  </DropdownSubMenuItem>
                  <DropdownSubMenuItem>
                    <a href="#">Sub-Menu Item 2</a>
                  </DropdownSubMenuItem>
                  <DropdownSubMenuItem>
                    <a href="#">Sub-Menu Item 3</a>
                  </DropdownSubMenuItem>
                  <DropdownSubMenuItem>
                    <a href="#">Sub-Menu Item 4</a>
                  </DropdownSubMenuItem>
                </ul>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Sub-Menu Item 3</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Sub-Menu Item 4</a>
              </DropdownMenuItem>
            </DropdownMenu>
          </MenuItem>
          <MenuItem>
            <a href="#">Menu Item 3</a>
            <DropdownMenu>
              <DropdownMenuItem>
                <a href="#">Sub-Menu Item 1</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Sub-Menu Item 2</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Sub-Menu Item 3</a>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <a href="#">Sub-Menu Item 4</a>
              </DropdownMenuItem>
            </DropdownMenu>
          </MenuItem>
          <MenuItem>
            <a href="#">Menu Item 4</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Menu Item 5</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Menu Item 6</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Menu Item 7</a>
          </MenuItem>
          <MenuItem>
            <a href="#">Menu Item 8</a>
          </MenuItem>
        </Menu>
      </Container>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${({ isSticky }) => (isSticky ? '#333' : 'transparent')};
  z-index: 999;
  transition: background-color 0.3s ease;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  img {
    height: 30px;
    width: auto;
  }
`;

const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    background: transparent;
    border: none;
    cursor: pointer;
    z-index: 1000;

    div {
      width: 100%;
      height: 4px;
      background-color: ${({ isMenuOpen }) => (isMenuOpen ? '#fff' : '#333')};
      margin-bottom: 5px;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    div:first-child {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(45deg) translateX(-2px)' : 'none')};
    }

    div:last-child {
      transform: ${({ isMenuOpen }) => (isMenuOpen ? 'rotate(-45deg) translateX(-2px)' : 'none')};
    }

    ${({ isMenuOpen }) =>
      isMenuOpen &&
      `
      div:nth-child(2) {
        opacity: 0;
      }
    `}
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: flex-start;
    background-color: #333;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding: 20px;
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? '1' : '0')};
    transition: opacity 0.3s ease;
  }
`;

const MenuItem = styled.li`
  position: relative;
  margin-right: 20px;

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  &:hover ul {
    display: block;
  }
`;

const DropdownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  padding: 10px;
  min-width: 200px;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  ${MenuItem}:hover & {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
`;



const DropdownMenuItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    padding: 8px;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }

  &:hover ul {
    display: block;
  }
`;

const DropdownSubMenuItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    padding: 8px;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Navbar;
