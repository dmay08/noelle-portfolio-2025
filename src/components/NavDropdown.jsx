import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { getProjectsByCategory } from '../utils/projectUtils';

const DropdownContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 100;
  
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const ProjectList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ProjectItem = styled.li`
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ProjectLink = styled(Link)`
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: #333;
  transition: background-color 0.2s ease;
  
  &:hover, &:focus {
    background-color: #f8f8f8;
    outline: none;
  }
`;

const EmptyMessage = styled.div`
  padding: 12px 16px;
  color: #666;
  font-style: italic;
`;

const dropdownVariants = {
  hidden: { 
    opacity: 0,
    y: -10,
    height: 0
  },
  visible: { 
    opacity: 1,
    y: 0,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    height: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
};

const NavDropdown = ({ 
  categoryId, 
  isOpen, 
  onClose 
}) => {
  const dropdownRef = useRef(null);
  const projects = getProjectsByCategory(categoryId);
  
  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isOpen) {
        onClose();
      }
    };
    
    // Handle escape key
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  // Handle arrow key navigation
  const handleKeyDown = (event, index) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const nextItem = event.currentTarget.parentNode.nextSibling?.querySelector('a');
      nextItem?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      const prevItem = event.currentTarget.parentNode.previousSibling?.querySelector('a');
      prevItem?.focus();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <DropdownContainer
          ref={dropdownRef}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={dropdownVariants}
          aria-hidden={!isOpen}
          role="menu"
        >
          <ProjectList>
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <ProjectItem key={project.id}>
                  <ProjectLink 
                    to={`/project/${project.id}`}
                    onClick={onClose}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    role="menuitem"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {project.title}
                  </ProjectLink>
                </ProjectItem>
              ))
            ) : (
              <ProjectItem>
                <EmptyMessage>No projects found</EmptyMessage>
              </ProjectItem>
            )}
          </ProjectList>
        </DropdownContainer>
      )}
    </AnimatePresence>
  );
};

export default NavDropdown; 