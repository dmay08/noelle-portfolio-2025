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
  overflow-x: hidden;
`;

const LargeTextSectionPlaceholder = styled.div.attrs({
  className: 'large-text-section'
})`
  padding: 0 4rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const LargeText = styled.div.attrs({
  className: 'large-text'
})`
  font-size: 8rem;
  line-height: 1.2;
  font-weight: bold;
  
  @media (max-width: 1200px) {
    font-size: 6rem;
  }
  
  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.5rem;
  }
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
