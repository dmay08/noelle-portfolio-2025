import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';

const ProfileSectionContainer = styled.section.attrs({
  className: 'profile-section'
})`
  display: flex;
  flex-direction: row;
  padding: 0 4rem;
  margin: 6rem 0;
  gap: 4rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 2rem;
    gap: 2rem;
    margin: 4rem 0;
  }
`;

const LeftColumn = styled.div.attrs({
  className: 'profile-left-column'
})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BlackBar = styled.div.attrs({
  className: 'profile-black-bar'
})`
  width: 100%;
  height: 6px;
  background-color: #000;
  margin-bottom: 0.5rem;
`;

const NameContainer = styled.h2.attrs({
  className: 'profile-name'
})`
  font-size: 2.25rem;
  font-weight: 400;
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
`;

const ItalicSpan = styled.span`
  font-style: italic;
`;

const LinkedInLink = styled.a.attrs({
  className: 'profile-linkedin',
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0077b5;
    transform: translateY(-2px);
  }
`;

const RightColumn = styled.div.attrs({
  className: 'profile-right-column'
})`
  flex: 2;
  display: flex;
  align-items: center;
`;

const BioText = styled.p.attrs({
  className: 'profile-bio'
})`
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 0;
  max-width: 90%;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    max-width: 100%;
  }
`;

const ProfileSection = () => {
  return (
    <ProfileSectionContainer>
      <LeftColumn>
        <BlackBar />
        <NameContainer>
          Noelle Maya<ItalicSpan>sich</ItalicSpan>
        </NameContainer>
        <LinkedInLink href="https://www.linkedin.com/in/noellemayasich/">
          <FaLinkedinIn />
        </LinkedInLink>
      </LeftColumn>
      <RightColumn>
        <BioText>
          Associate Creative Director crafting concept-driven campaigns for global brands across social and digital. I merge strategy, storytelling, and style to create bold, audience-first work—spanning film, live, motion, design, and AI.
        </BioText>
      </RightColumn>
    </ProfileSectionContainer>
  );
};

export default ProfileSection; 