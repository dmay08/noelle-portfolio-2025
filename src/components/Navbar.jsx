import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAllCategories } from '../utils/projectUtils';

const NavContainer = styled.nav.attrs({
  className: 'nav-container'
})`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link).attrs({
  className: 'nav-logo'
})`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #000;
  padding-left: 4rem;
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
`;

const NavLink = styled(Link).attrs({
  className: 'nav-link'
})`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  margin: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Navbar = () => {
  const categories = getAllCategories();

  return (
    <NavContainer>
      <Logo to="/">
        <LogoPlaceholder>Logo</LogoPlaceholder>
      </Logo>
      <NavLinks>
        {categories.map(category => (
          <NavLink key={category.id} to={`/category/${category.id}`}>
            {category.name}
          </NavLink>
        ))}
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar; 