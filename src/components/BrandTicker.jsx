import React from 'react';
import styled, { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const BrandTickerContainer = styled.div.attrs({
  className: 'brand-ticker-container'
}).withConfig({
  componentId: 'BrandTickerContainer'
})`
  width: 100%;
  overflow: hidden;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 1.2rem 0;
`;

const BrandTickerTrack = styled.div.attrs({
  className: 'brand-ticker-track'
}).withConfig({
  componentId: 'BrandTickerTrack'
})`
  display: flex;
  width: max-content;
  animation: ${scrollAnimation} 60s linear infinite;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const BrandItem = styled.div.attrs({
  className: 'brand-item'
}).withConfig({
  componentId: 'BrandItem'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2.5rem;
  white-space: nowrap;
  font-weight: 500;
  font-size: 1.1rem;
  color: #333;
`;

const BrandTicker = () => {
  const brands = [
    'Google', 
    'Unreal', 
    'HBO Max', 
    'NBC Universal', 
    'Fetch', 
    'Google Play', 
    'Sephora', 
    'DoorDash', 
    'Lululemon', 
    'Dove'
  ];
  
  // Create three copies to ensure smooth infinite scrolling
  const allBrands = [...brands, ...brands, ...brands];
  
  return (
    <BrandTickerContainer>
      <BrandTickerTrack>
        {allBrands.map((brand, index) => (
          <BrandItem key={index}>
            {brand}
          </BrandItem>
        ))}
      </BrandTickerTrack>
    </BrandTickerContainer>
  );
};

export default BrandTicker; 