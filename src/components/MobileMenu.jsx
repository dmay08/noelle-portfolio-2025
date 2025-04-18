import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllCategories, getProjectsByCategory } from '../utils/projectUtils';

const MenuIconContainer = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  
  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #000;
    border-radius: 3px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
    
    &:nth-child(1) {
      top: ${props => props.$isOpen ? '9px' : '0px'};
      transform: ${props => props.$isOpen ? 'rotate(135deg)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      top: 9px;
      opacity: ${props => props.$isOpen ? '0' : '1'};
      left: ${props => props.$isOpen ? '-60px' : '0px'};
    }
    
    &:nth-child(3) {
      top: ${props => props.$isOpen ? '9px' : '18px'};
      transform: ${props => props.$isOpen ? 'rotate(-135deg)' : 'rotate(0)'};
    }
  }
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
  visibility: ${props => props.$isVisible ? 'visible' : 'hidden'};
`;

const MenuPanel = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 280px;
  max-width: 80vw;
  height: 100vh;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 300;
  overflow-y: auto;
  padding: 2rem 0;
`;

const CategorySection = styled.div`
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
`;

const CategoryHeader = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  margin-bottom: 0.5rem;
`;

const ProjectList = styled.ul`
  list-style: none;
  margin: 0.5rem 0 0 0;
  padding: 0;
`;

const ProjectItem = styled.li`
  margin-bottom: 0.3rem;
`;

const ProjectLink = styled(Link)`
  display: block;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
  font-size: 0.95rem;
  
  &:hover {
    background-color: #f8f8f8;
  }
`;

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const panelVariants = {
  hidden: { x: '100%' },
  visible: { 
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  }
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const categories = getAllCategories();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent body scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : '';
  };
  
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };
  
  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
        closeMenu();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      // Reset body overflow on unmount
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  // Close menu on escape key
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <>
      <MenuIconContainer onClick={toggleMenu}>
        <HamburgerIcon $isOpen={isOpen}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerIcon>
      </MenuIconContainer>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <MenuOverlay 
              $isVisible={isOpen}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              onClick={closeMenu}
            />
            <MenuPanel
              ref={menuRef}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={panelVariants}
            >
              {categories.map(category => {
                const projects = getProjectsByCategory(category.id);
                return (
                  <CategorySection key={category.id}>
                    <CategoryHeader>{category.name}</CategoryHeader>
                    <ProjectList>
                      {projects.length > 0 ? (
                        projects.map(project => (
                          <ProjectItem key={project.id}>
                            <ProjectLink to={`/project/${project.id}`} onClick={closeMenu}>
                              {project.title}
                            </ProjectLink>
                          </ProjectItem>
                        ))
                      ) : (
                        <ProjectItem>No projects found</ProjectItem>
                      )}
                    </ProjectList>
                  </CategorySection>
                );
              })}
            </MenuPanel>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu; 