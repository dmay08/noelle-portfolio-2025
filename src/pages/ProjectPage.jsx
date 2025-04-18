import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { projects } from '../data/projects';

const ProjectContainer = styled.div`
  padding: 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  text-decoration: none;
  color: #000;
  font-weight: 500;
`;

const ProjectHeader = styled.div`
  margin-bottom: 3rem;
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const MetaItem = styled.div`
  font-size: 1rem;
`;

const MetaLabel = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  line-height: 1.6;
`;

const ContentPlaceholder = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  text-align: center;
`;

const ErrorMessage = styled.div`
  text-align: center;
  margin-top: 5rem;
  font-size: 1.5rem;
`;

const ProjectPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  // Find the project with the matching ID
  const project = projects.find(p => p.id === projectId);
  
  // If project not found, show error message
  if (!project) {
    return (
      <>
        <Navbar />
        <ProjectContainer>
          <ErrorMessage>
            <h2>Project not found</h2>
            <p>The project you're looking for doesn't exist.</p>
            <BackButton to="/">Return to homepage</BackButton>
          </ErrorMessage>
        </ProjectContainer>
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <ProjectContainer>
        <BackButton to="/">&larr; Back to projects</BackButton>
        
        <ProjectHeader>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectMeta>
            <MetaItem>
              <MetaLabel>Client:</MetaLabel>
              {project.client}
            </MetaItem>
            <MetaItem>
              <MetaLabel>Year:</MetaLabel>
              {project.year}
            </MetaItem>
            <MetaItem>
              <MetaLabel>Category:</MetaLabel>
              {project.category}
            </MetaItem>
          </ProjectMeta>
          <ProjectDescription>{project.description}</ProjectDescription>
        </ProjectHeader>
        
        <ContentPlaceholder>
          Project content sections will be implemented here in a later step.
        </ContentPlaceholder>
      </ProjectContainer>
    </>
  );
};

export default ProjectPage; 