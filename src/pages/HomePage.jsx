import React from 'react';
import styled from 'styled-components';
import ProjectGrid from '../components/ProjectGrid';
import Navbar from '../components/Navbar';
import BrandTicker from '../components/BrandTicker';
import CategoriesMenu from '../components/CategoriesMenu';
import ProfileSection from '../components/ProfileSection';

const HomeContainer = styled.div.attrs({
  className: 'home-container'
})`
  width: 100%;
  box-sizing: border-box;
`;

const LargeTextSectionPlaceholder = styled.div.attrs({
  className: 'large-text-section'
})`
  padding: 0 4rem;
`;

const LargeText = styled.div.attrs({
  className: 'large-text'
})`
  font-size: 8rem;
  line-height: 1.2;
  font-weight: bold;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Navbar />
      <BrandTicker />

      <LargeTextSectionPlaceholder>
        <LargeText>
          GOOD CREATIVE looks GOOD
          GREAT CREATIVE knows WHY
        </LargeText>
      </LargeTextSectionPlaceholder>

      <CategoriesMenu />
      
      <ProfileSection />

      <ProjectGrid />
    </HomeContainer>
  );
};

export default HomePage; 
