import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAllCategories } from '../utils/projectUtils';
import NavDropdown from './NavDropdown';
import MobileMenu from './MobileMenu';

const NavContainer = styled.nav.attrs({
  className: 'nav-container'
})`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 100;
`;

const Logo = styled(Link).attrs({
  className: 'nav-logo'
})`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  padding-left: 4rem;
  
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
`;

const LogoPlaceholder = styled.div.attrs({
  className: 'logo-placeholder'
})`
  width: 50px;
  height: 50px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

const NavLinks = styled.div.attrs({
  className: 'nav-links'
})`
  display: flex;
  padding-right: 4rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinkContainer = styled.div.attrs({
  className: 'nav-link-container'
})`
  position: relative;
  margin: 0 0.5rem;
`;

const NavLink = styled.div.attrs({
  className: 'nav-link'
})`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Navbar = () => {
  const categories = getAllCategories();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const closeTimeoutRef = useRef(null);
  
  // Detect touch device
  useEffect(() => {
    const detectTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    detectTouch();
    window.addEventListener('touchstart', () => setIsTouchDevice(true), { once: true });
    
    return () => {
      window.removeEventListener('touchstart', () => setIsTouchDevice(true));
      // Clear any remaining timeouts on unmount
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);
  
  const handleMouseEnter = (categoryId) => {
    if (!isTouchDevice) {
      // Clear any pending close timeout when entering a new item
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      setOpenDropdown(categoryId);
    }
  };
  
  const handleMouseLeave = (categoryId) => {
    if (!isTouchDevice) {
      // Use setTimeout to prevent flickering when moving between items
      // Store the timeout ID so we can cancel it if necessary
      closeTimeoutRef.current = setTimeout(() => {
        // Only close if we're still showing the same dropdown
        if (openDropdown === categoryId) {
          setOpenDropdown(null);
        }
        closeTimeoutRef.current = null;
      }, 150);
    }
  };
  
  const handleContainerLeave = () => {
    if (!isTouchDevice) {
      // When leaving the entire navbar links container, set a timeout to close
      closeTimeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
        closeTimeoutRef.current = null;
      }, 150);
    }
  };
  
  const handleLinkClick = (categoryId) => {
    if (isTouchDevice) {
      if (openDropdown === categoryId) {
        setOpenDropdown(null);
      } else {
        setOpenDropdown(categoryId);
      }
    }
  };
  
  const handleDropdownClose = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  return (
    <NavContainer>
      <Logo to="/">
        <LogoPlaceholder>Logo</LogoPlaceholder>
      </Logo>
      
      {/* Desktop Navigation */}
      <NavLinks onMouseLeave={handleContainerLeave}>
        {categories.map(category => (
          <NavLinkContainer 
            key={category.id}
            onMouseEnter={() => handleMouseEnter(category.id)}
            onMouseLeave={() => handleMouseLeave(category.id)}
          >
            <NavLink onClick={() => handleLinkClick(category.id)}>
              {category.name}
            </NavLink>
            <NavDropdown
              categoryId={category.id}
              isOpen={openDropdown === category.id}
              onClose={handleDropdownClose}
            />
          </NavLinkContainer>
        ))}
      </NavLinks>
      
      {/* Mobile Navigation */}
      <MobileMenu />
    </NavContainer>
  );
};

export default Navbar; 