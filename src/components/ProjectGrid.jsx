import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { getFeaturedProjects } from '../utils/projectUtils';

const Grid = styled.div.attrs({
  className: 'project-grid'
})`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;
  background-color: black;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ProjectGrid = () => {
  const featuredProjects = getFeaturedProjects();
  
  return (
    <Grid>
      {featuredProjects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Grid>
  );
};

export default ProjectGrid; 