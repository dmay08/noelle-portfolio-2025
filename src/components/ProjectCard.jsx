import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const Card = styled(Link).attrs({
  className: 'project-card'
})`
  display: block;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  height: 0;
  padding-bottom: 75%; /* 4:3 aspect ratio */
  background-color: #f0f0f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    
    .overlay {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const Thumbnail = styled.img.attrs({
  className: 'project-thumbnail'
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div.attrs({
  className: 'project-overlay'
})`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Title = styled.h3.attrs({
  className: 'project-title'
})`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
`;

const Client = styled.p.attrs({
  className: 'project-client'
})`
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card to={`/project/${project.id}`}>
      <Thumbnail 
        src={project.thumbnailUrl || '/placeholder.jpg'} 
        alt={`${project.title} thumbnail`} 
      />
      <Overlay className="overlay">
        <Title>{project.title}</Title>
        <Client>{project.client}</Client>
      </Overlay>
    </Card>
  );
};

export default ProjectCard; 