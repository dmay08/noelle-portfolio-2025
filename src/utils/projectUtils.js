import { projects } from '../data/projects';
import { categories } from '../data/categories';

/**
 * Get all projects
 * @returns {Array} Array of all projects
 */
export const getAllProjects = () => {
  return projects;
};

/**
 * Get featured projects sorted by order
 * @returns {Array} Array of featured projects
 */
export const getFeaturedProjects = () => {
  return projects
    .filter(project => project.featured)
    .sort((a, b) => a.order - b.order);
};

/**
 * Get a project by its ID
 * @param {string} id - Project ID
 * @returns {Object|null} Project object or null if not found
 */
export const getProjectById = (id) => {
  return projects.find(project => project.id === id) || null;
};

/**
 * Get projects by category
 * @param {string} categoryId - Category ID
 * @returns {Array} Array of projects in the category
 */
export const getProjectsByCategory = (categoryId) => {
  return projects
    .filter(project => {
      const category = categories.find(cat => cat.name === project.category);
      return category && category.id === categoryId;
    })
    .sort((a, b) => a.order - b.order);
};

/**
 * Get all categories
 * @returns {Array} Array of all categories
 */
export const getAllCategories = () => {
  return categories.sort((a, b) => a.order - b.order);
};

/**
 * Get a category by its ID
 * @param {string} id - Category ID
 * @returns {Object|null} Category object or null if not found
 */
export const getCategoryById = (id) => {
  return categories.find(category => category.id === id) || null;
};

/**
 * Get related projects (same category, excluding current project)
 * @param {string} projectId - Current project ID
 * @param {number} limit - Maximum number of related projects to return
 * @returns {Array} Array of related projects
 */
export const getRelatedProjects = (projectId, limit = 3) => {
  const currentProject = getProjectById(projectId);
  
  if (!currentProject) return [];
  
  return projects
    .filter(project => 
      project.id !== projectId && 
      project.category === currentProject.category
    )
    .sort((a, b) => a.order - b.order)
    .slice(0, limit);
}; 