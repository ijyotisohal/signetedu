import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import menuItemsData from './menuItems.json';
import NavbarComp from '../components/Header/Navbar';



const MenuList = () => {
    const [expandedMenu, setExpandedMenu] = useState(false);
    const [menuItems, setMenuItems] = useState([]);
  
    useEffect(() => {
      // Simulating fetching menu items from the JSON file
      // Replace this with your actual data fetching logic
      setMenuItems(menuItemsData);
    }, []);
  
    const handleMenuToggle = () => {
      setExpandedMenu((prevExpandedMenu) => !prevExpandedMenu);
    };
  
    const handleItemClick = (index) => {
      setExpandedMenu(index);
    };
    const handleCloseMenu = () => {
        setExpandedMenu(false);
      };
    const renderMenuItems = () => {
      return menuItems.map((item) => (
        <MenuItem
          key={item.id}
          onMouseEnter={() => handleItemClick(item.id)}
          onClick={() => handleItemClick(item.id)}
        >
          {item.title}
        </MenuItem>
      ));
    };
  
    const renderExpandedMenuItems = (items) => {
      return items.map((item, index) => (
        <ExpandedMenuItem key={index}>
          {item}
        </ExpandedMenuItem>
      ));
    };
  
    return (
      <>
          <NavbarComp/>
      {/* <AppContainer>
        <HeaderContainer>
          <Navbar>
            <MenuToggle onClick={handleMenuToggle}>
              Menu
            </MenuToggle>
            {expandedMenu && (
            <CloseButton onClick={handleCloseMenu}>
              Close
            </CloseButton>
          )}
          </Navbar>
        </HeaderContainer>
        <MenuContainer style={{ width: expandedMenu ? '200px' : '0' }}>
          <Menu>{renderMenuItems()}</Menu>
        </MenuContainer>
        {expandedMenu && (
          <ExpandedMenu>
            {renderExpandedMenuItems(menuItems[expandedMenu - 1].items)}
          </ExpandedMenu>
        )}
        <div className="content">
          {/* Your content goes here *
        </div>
      </AppContainer> */}
      </>
    );
  };
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const HeaderContainer = styled.header`
  height: 60px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
`;

const MenuToggle = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px;
  background-color: #f0f0f0;
  z-index: 1;
  transition: width 0.3s ease-in-out;
  overflow-y: auto;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

  const CloseButton = styled.button`
border: none;
background: none;
cursor: pointer;
font-size: 16px;
`;
const ExpandedMenu = styled.div`
  position: fixed;
  top: 0;
  left: 200px;
  width: calc(100% - 200px);
  height: 100vh;
  background-color: #ffffff;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`;

const ExpandedMenuItem = styled.div`
  width: 25%;
  height: 100px;
  margin: 10px;
  background-color: #f0f0f0;
`;

export default MenuList;
