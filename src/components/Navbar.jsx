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
  const navLinksRef = useRef(null);
  const hoverIntentTimeoutRef = useRef(null);
  const [isNavHovered, setIsNavHovered] = useState(false);
  
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
      if (hoverIntentTimeoutRef.current) {
        clearTimeout(hoverIntentTimeoutRef.current);
      }
    };
  }, []);
  
  const handleNavLinksEnter = () => {
    setIsNavHovered(true);
    // Clear any pending close timeouts when entering navbar area
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };
  
  const handleNavLinksLeave = () => {
    setIsNavHovered(false);
    // Set timeout to close dropdown when leaving navbar area
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      closeTimeoutRef.current = null;
    }, 200);
  };
  
  const handleMouseEnter = (categoryId) => {
    if (!isTouchDevice) {
      // Clear any pending timeouts
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      
      if (hoverIntentTimeoutRef.current) {
        clearTimeout(hoverIntentTimeoutRef.current);
      }
      
      // Use a small delay to prevent accidental triggering when quickly moving across items
      hoverIntentTimeoutRef.current = setTimeout(() => {
        setOpenDropdown(categoryId);
        hoverIntentTimeoutRef.current = null;
      }, 50);
    }
  };
  
  const handleMouseLeave = (categoryId) => {
    if (!isTouchDevice) {
      // Clear any hover intent timeout
      if (hoverIntentTimeoutRef.current) {
        clearTimeout(hoverIntentTimeoutRef.current);
        hoverIntentTimeoutRef.current = null;
      }
      
      // Don't close immediately since the user might be moving to another item
      // We'll rely on the nav container's mouseleave to handle closing
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
      <NavLinks
        ref={navLinksRef}
        onMouseEnter={handleNavLinksEnter}
        onMouseLeave={handleNavLinksLeave}
      >
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