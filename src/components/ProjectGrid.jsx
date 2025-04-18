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
  margin: 2rem 0;
  padding: 0 2rem;
  
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