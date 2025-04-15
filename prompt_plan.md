# Noelle's React Portfolio - Development Plan & Prompts

## Project Overview
This plan outlines the step-by-step development of a React-based portfolio for Noelle Mayasich, an Associate Creative Director. The portfolio will showcase her creative work through an interactive, visually engaging interface with smooth transitions, responsive design, and optimized performance for handling videos and GIFs.

## Development Strategy
We'll build this project incrementally, focusing on establishing core functionality first, then adding features, and finally polishing the UI/UX. Each step builds directly on previous work, ensuring no orphaned code.

---

## Phase 1: Project Setup & Core Structure

### Step 1: Project Initialization
**Goal**: Create a basic React project with essential dependencies.

**Prompt for LLM**:
```
I need to create a new React portfolio application for a creative director named Noelle Mayasich. Please help me set up the initial project structure with the following requirements:

1. Use Create React App or Vite to initialize the project
2. Install essential dependencies:
   - react-router-dom for navigation
   - styled-components for styling
   - framer-motion for animations
3. Create a basic folder structure:
   - src/components/ for reusable UI components
   - src/pages/ for main page components
   - src/assets/ for static assets
   - src/data/ for JSON data
   - src/hooks/ for custom hooks
   - src/utils/ for utility functions
4. Set up a basic App.js component with React Router
5. Create a simple index.js entry point

Please provide the terminal commands to set this up and the code for the initial files. Make sure to include proper imports, basic routing structure, and implement modern React practices with functional components and hooks.
```

### Step 2: Project Data Structure
**Goal**: Set up the data structure for projects and categories.

**Prompt for LLM**:
```
Now I need to create the data structure for Noelle's portfolio projects. Based on the specification, we need to organize projects into four categories: "Live Experiences," "Film + Edit," "Social," and "Conceptual".

Please help me create:

1. A projects.js file in the src/data/ directory that exports an array of project objects with the following structure:
   - id: unique identifier (slug format)
   - title: project title
   - category: one of the four categories
   - client: client name
   - year: year completed
   - thumbnailUrl: path to thumbnail image (placeholder for now)
   - featured: boolean to indicate if it should appear on homepage
   - order: number to control display order
   - description: short description
   - content: an array of content sections that can include different types of content blocks (text, image, video, etc.)

2. Include the 10 specific projects mentioned in the spec:
   - Google x Woocommerce
   - DoorDash Neighborhood Campaign
   - Google Play Live '22
   - Google Play Live '23
   - Doordash Creator Campaign
   - Fetch Superbowl Live
   - Unreal Engine Unreal Everywhere
   - NBCU The Exorcist: Believer
   - Goodnites Youth Pants Campaign
   - HBO MAX Sex Lives of College Girls

3. A categories.js file that defines the four main categories with any relevant metadata

Use placeholder paths for images/videos for now. We'll add actual media later.
```

### Step 3: Basic Layout Components
**Goal**: Create the fundamental layout components.

**Prompt for LLM**:
```
Let's create the basic layout components for Noelle's portfolio. I need the following components:

1. A Layout.js component in src/components/ that will:
   - Act as a wrapper for all pages
   - Include the Navbar component
   - Have a main content area with appropriate styling

2. A basic Navbar.js component in src/components/ that will:
   - Have a placeholder for the logo on the far left
   - Include navigation buttons for the four categories: "Live Experiences," "Film + Edit," "Social," and "Conceptual"
   - Be responsive (desktop layout for now, we'll add mobile responsiveness later)
   - Include basic styling with styled-components

3. A simple HomePage.js in src/pages/ that will:
   - Import the Layout component
   - Have placeholder sections for:
     - Project showcase grid
     - Large text section
     - Bottom left name area with LinkedIn link

4. Set up basic routes in App.js to display the HomePage

Focus on creating a clean, minimal structure with proper component organization. Use styled-components for styling but keep the design simple for now. We'll enhance the visual design in later steps.
```

### Step 4: Project Showcase Grid
**Goal**: Implement the project showcase grid for the homepage.

**Prompt for LLM**:
```
Now I need to implement the project showcase grid for the homepage. According to the specification, we need a grid layout with:
- Desktop: 2 projects per row (5 rows total)
- Mobile: 1 project per row (10 rows total)

Please help me create:

1. A ProjectCard.js component in src/components/ that will:
   - Display a single project card with:
     - Project thumbnail (placeholder image for now)
     - Project title overlay
     - Client name
   - Have hover effects for desktop
   - Be styled with styled-components

2. A ProjectGrid.js component in src/components/ that will:
   - Import the ProjectCard component
   - Display the featured projects in a grid layout
   - Handle responsive layout (2 columns for desktop, 1 column for mobile)
   - Pull data from our projects.js file
   - Organize projects according to the specification order

3. Update HomePage.js to:
   - Import and use the ProjectGrid component
   - Pass necessary props

Make sure the grid is responsive using styled-components media queries. For now, use basic styling with placeholders for images. We'll enhance the visuals in later steps.
```

### Step 5: Basic Project Page
**Goal**: Create a basic project detail page component.

**Prompt for LLM**:
```
Let's create a basic project detail page that will display individual project information. According to the spec, each project should have its own vertically scrollable page.

Please help me create:

1. A ProjectPage.js component in src/pages/ that will:
   - Accept a project ID from the URL parameters
   - Fetch the corresponding project data from our data structure
   - Display basic project information:
     - Project title
     - Client
     - Year
     - Description
     - Placeholder for content sections (we'll implement these in detail later)
   - Use styled-components for basic styling

2. Update App.js to:
   - Add a route for individual project pages using a parameter (e.g., "/projects/:projectId")
   - Connect the route to the ProjectPage component

3. Update the ProjectCard.js component to:
   - Make the card clickable with a Link component from react-router-dom
   - Navigate to the corresponding project detail page when clicked

Focus on functionality first, ensuring that:
- The routing works correctly
- Project data is correctly displayed based on the URL parameter
- We handle cases where a project ID doesn't exist
- The navigation from grid to project detail and back works smoothly

Keep the styling minimal for now - we'll enhance it in later steps.
```

## Phase 2: Enhanced Components & Navigation

### Step 6: Navbar with Dropdown Menus
**Goal**: Implement dropdown functionality in the navbar.

**Prompt for LLM**:
```
Now I need to enhance the Navbar by implementing dropdown menus for each category. According to the specification, the dropdowns should:
- Slide down on hover (desktop) or tap (mobile)
- Display projects belonging to each category
- Close on click outside or project selection

Please help me create:

1. A NavDropdown.js component in src/components/ that will:
   - Accept a category and list of projects as props
   - Display projects filtered by the selected category
   - Implement smooth slide-down animation using Framer Motion
   - Close when a project is selected or when clicked outside
   - Be styled with styled-components to match the portfolio aesthetic

2. Update the Navbar.js component to:
   - Import and use the NavDropdown component
   - Handle hover state for desktop
   - Manage which dropdown is currently open (if any)
   - Implement event listeners for handling outside clicks

3. Ensure all interactions have smooth transitions

Focus on creating a clean, functional dropdown system with proper animation and good UX. Make sure the component handles edge cases like:
- Multiple dropdowns open at once (should this be allowed?)
- Touch vs. mouse interactions
- Accessibility considerations
```

### Step 7: Large Text Section & Name Area
**Goal**: Implement the large text section and name area on the homepage.

**Prompt for LLM**:
```
Let's implement the large text section and the bottom left name area for the homepage. According to the specification:

1. The large text section should feature a large image with the text overlay: "GOOD CREATIVE looks GOOD GREAT CREATIVE knows WHY"
2. The bottom left name area should display "Noelle Mayasich" and a clickable LinkedIn icon/link

Please help me create:

1. A LargeTextSection.js component in src/components/ that will:
   - Display a placeholder for the large background image
   - Overlay the specified text with appropriate styling
   - Be responsive and visually striking
   - Use styled-components for styling

2. A NameArea.js component in src/components/ that will:
   - Display "Noelle Mayasich" with appropriate styling
   - Include a LinkedIn icon (use a placeholder or a free icon library like Font Awesome)
   - Make the LinkedIn icon clickable and open in a new tab
   - Be positioned at the bottom left of the homepage
   - Use styled-components for styling

3. Update HomePage.js to:
   - Import and use these new components
   - Position them correctly on the page

Focus on creating components that are responsive and follow modern React practices. Keep in mind that we're still using placeholders for images, but structure the components so that replacing these with actual assets will be straightforward later.
```

### Step 8: Project Content Blocks
**Goal**: Create dynamic content block components for project pages.

**Prompt for LLM**:
```
Now I need to create components for displaying different types of content blocks on project detail pages. According to the specification, project pages should have dynamic sections like quadrants of 4 gifs/images, large single media, and text blocks.

Please help me create a system of content block components:

1. Create a folder structure at src/components/content-blocks/ to house the various content block types

2. Implement the following content block components:
   - TextBlock.js: For displaying paragraphs of text
   - ImageBlock.js: For displaying a single large image
   - VideoBlock.js: For displaying a single video
   - QuadrantBlock.js: For displaying 4 images/gifs in a grid
   - MediaTextBlock.js: For displaying media alongside text

3. Create a ContentBlock.js component that:
   - Acts as a factory component
   - Accepts a content block object with a "type" property
   - Renders the appropriate component based on the type
   - Passes the relevant props to the child component

4. Update the ProjectPage.js component to:
   - Map through the project's content array
   - Use the ContentBlock component to render each block
   - Add appropriate spacing between blocks

Each content block component should:
- Be responsive
- Handle loading states for media
- Include appropriate styling with styled-components
- Use placeholders for actual media content for now

Focus on creating a flexible, maintainable system that can easily handle different types of content blocks. Structure the data model for each block type clearly.
```

### Step 9: Mobile Responsiveness
**Goal**: Enhance mobile responsiveness across the application.

**Prompt for LLM**:
```
Let's enhance the mobile responsiveness of the portfolio application. According to the specification, we need to:
- Make the navbar collapse into a mobile menu (hamburger icon)
- Adjust the project showcase to a single-column layout
- Handle breakpoints: Desktop (>1200px), Tablet (768px–1200px), Mobile (<768px)

Please help me implement mobile responsiveness by:

1. Creating a MobileMenu.js component in src/components/ that will:
   - Include a hamburger icon
   - Display a mobile-friendly dropdown menu when clicked
   - Show the four categories with sub-menus for projects
   - Be styled with styled-components and animations

2. Updating the Navbar.js component to:
   - Hide the desktop navigation on mobile
   - Show the MobileMenu component on mobile
   - Use media queries to handle the transition between desktop/mobile views

3. Enhancing the ProjectGrid.js component to:
   - Ensure projects display in a single column on mobile
   - Adjust spacing and sizing for different screen sizes

4. Creating a responsive.js file in src/utils/ with:
   - Breakpoint definitions
   - Helper functions or styled-components utilities for consistent responsive behavior

5. Reviewing and updating all existing components to ensure they're responsive according to our breakpoints

Make sure to test the responsive behavior across different viewport sizes and ensure smooth transitions between breakpoints. Focus on creating a good mobile user experience while maintaining the portfolio's aesthetic.
```

## Phase 3: Performance & Polish

### Step 10: Media Handling & Optimization
**Goal**: Implement lazy loading and optimize media handling.

**Prompt for LLM**:
```
Now I need to implement proper media handling and optimization for the portfolio. According to the specification, we need:
- Lazy loading for all media assets
- Optimized image/video formats (e.g., WebP, MP4)

Please help me create:

1. A LazyImage.js component in src/components/ that:
   - Implements lazy loading for images
   - Shows a placeholder while loading
   - Handles loading errors gracefully
   - Supports WebP with fallbacks for older browsers
   - Includes proper sizing and aspect ratio maintenance

2. A LazyVideo.js component in src/components/ that:
   - Implements lazy loading for videos
   - Shows a placeholder while loading
   - Handles autoplay, loop, and mute options appropriately
   - Supports optimized video formats
   - Implements proper loading strategies (e.g., preload="metadata")

3. Update the existing image and video related components to:
   - Use these new lazy loading components
   - Implement proper media queries for serving different sizes based on viewport

4. Create a mediaUtils.js file in src/utils/ with:
   - Helper functions for handling media assets
   - Functions for constructing responsive image URLs (for when we have actual assets)
   - Utility functions for determining optimal media format based on browser support

Focus on creating components that optimize performance while maintaining high visual quality. Structure the code so that it's easy to replace placeholders with actual media assets later.
```

### Step 11: Transitions & Animations
**Goal**: Implement smooth transitions and animations throughout the application.

**Prompt for LLM**:
```
Let's enhance the user experience by implementing smooth transitions and animations throughout the portfolio application. According to the specification, we need smooth transitions for all interactions.

Please help me implement:

1. Page transitions using Framer Motion:
   - Create an AnimatedPage.js wrapper component in src/components/ that:
     - Wraps each page component
     - Implements enter/exit animations
     - Handles scroll position on navigation

2. Component animations for:
   - Project cards on hover/focus
   - Content blocks as they come into view (subtle fade-in)
   - Navbar interactions

3. Scroll animations:
   - Create a useScrollAnimation.js hook in src/hooks/ for detecting when elements enter the viewport
   - Apply subtle animations to elements as they scroll into view

4. Update existing components to:
   - Implement the new animation components/hooks
   - Ensure animations are consistent with the portfolio's aesthetic
   - Make sure animations are not overwhelming or distracting

5. Create an animations.js file in src/utils/ with:
   - Reusable animation variants for Framer Motion
   - Consistent timing and easing functions
   - Animation utility functions

Make sure all animations:
- Are subtle and enhance rather than distract from the content
- Work well on both desktop and mobile devices
- Don't cause performance issues
- Can be disabled for users who prefer reduced motion (respect prefers-reduced-motion)

Focus on creating a polished, professional feel through thoughtful animation.
```

### Step 12: SEO & Analytics Setup
**Goal**: Implement SEO optimization and optional analytics.

**Prompt for LLM**:
```
Let's implement SEO optimization and prepare for analytics integration for the portfolio. According to the specification, we need:
- Meta tags for each page
- Optional Google Analytics integration

Please help me implement:

1. SEO components:
   - Create a Helmet.js or SEO.js component in src/components/ that:
     - Uses React Helmet or a similar library
     - Sets appropriate meta tags, title, description for each page
     - Handles Open Graph and Twitter card metadata

2. Analytics setup:
   - Create an analytics.js file in src/utils/ that:
     - Sets up Google Analytics (GA4) with a placeholder tracking ID
     - Includes functions for tracking page views and events
     - Can be easily enabled/disabled

3. Update the page components to:
   - Import and use the SEO component
   - Pass appropriate metadata for each page
   - Implement analytics tracking for page views

4. Create a constants.js file in src/utils/ with:
   - Default SEO values
   - Site metadata
   - Configuration options

Make sure the implementation:
- Is flexible and can be easily updated with actual content
- Follows best practices for SEO
- Is privacy-compliant (e.g., respects Do Not Track, implements cookie consent if needed)
- Has analytics that are properly scoped to track meaningful interactions without being intrusive

Focus on creating a solid foundation for SEO and analytics that can be easily customized as the portfolio evolves.
```

### Step 13: Error Handling
**Goal**: Implement comprehensive error handling throughout the application.

**Prompt for LLM**:
```
Let's implement comprehensive error handling throughout the portfolio application. According to the specification, we need to handle:
- Data fetching errors
- 404 errors
- General errors

Please help me implement:

1. Error boundary components:
   - Create an ErrorBoundary.js component in src/components/ that:
     - Catches errors in the component tree
     - Displays a user-friendly error message
     - Logs errors to the console

2. Error pages:
   - Create a NotFound.js page in src/pages/ for 404 errors
   - Create a ErrorPage.js in src/pages/ for general errors

3. Data handling utilities:
   - Create a useFetch.js hook in src/hooks/ that:
     - Handles data fetching with proper error states
     - Includes loading states
     - Provides clear error messages

4. Update the routing in App.js to:
   - Include a catch-all route for 404 errors
   - Wrap routes in error boundaries

5. Implement error handling in existing components:
   - Add try-catch blocks where appropriate
   - Handle edge cases (e.g., missing data, malformed data)
   - Provide fallback UI for error states

Focus on creating a robust error handling system that:
- Provides clear, user-friendly messages
- Maintains the portfolio's aesthetic even in error states
- Logs useful information for debugging
- Recovers gracefully when possible
```

### Step 14: Final Integration & Testing
**Goal**: Integrate all components and ensure they work together seamlessly.

**Prompt for LLM**:
```
Now we need to finalize the integration of all components and ensure they work together seamlessly. Let's also implement some basic tests to verify functionality.

Please help me with:

1. Final integration:
   - Review App.js to ensure all routes are properly set up
   - Check that all components are correctly imported and used
   - Verify that data flows correctly between components
   - Ensure all features required in the specification are implemented

2. Basic testing:
   - Create test files for key components (e.g., Navbar.test.js, ProjectCard.test.js)
   - Implement basic rendering tests using Jest and React Testing Library
   - Add tests for key interactions (e.g., navigation, dropdown functionality)
   - Create a simple mock for project data

3. Browser compatibility:
   - Add any necessary polyfills or fallbacks for older browsers
   - Include appropriate vendor prefixes for CSS

4. Performance review:
   - Check for and fix any performance bottlenecks
   - Ensure lazy loading works correctly
   - Verify that animations run smoothly

5. Create a README.md file that:
   - Explains the project structure
   - Provides setup and running instructions
   - Lists key features
   - Includes information on how to add/update projects

Focus on ensuring that all parts of the application work together as a cohesive whole. Make sure there are no "orphaned" components or functionality that isn't properly integrated.
```

## Phase 4: Polish & Refinement

### Step 15: Final UI Polish & Styling
**Goal**: Apply final styling and polish to all components.

**Prompt for LLM**:
```
Let's apply final styling and polish to all components to ensure a cohesive, professional look for the portfolio. At this stage, we would normally incorporate actual design assets from Noelle, but we'll focus on creating a flexible system that can be easily updated with actual assets later.

Please help me with:

1. Global styling:
   - Create or update a globalStyles.js file using styled-components
   - Define a consistent color palette, typography, and spacing system
   - Implement CSS reset/normalize

2. Component styling review:
   - Review and refine styling for all components
   - Ensure consistent spacing, typography, and colors
   - Enhance hover/focus states for interactive elements
   - Refine animations and transitions

3. Dark/light mode toggle:
   - Implement a simple theme system using styled-components' ThemeProvider
   - Create a toggle component for switching between modes
   - Ensure all components respect the selected theme

4. Accessibility improvements:
   - Ensure sufficient color contrast
   - Add proper ARIA attributes where needed
   - Enhance keyboard navigation
   - Test focus management

5. Visual polish:
   - Add subtle texture or background elements
   - Refine spacing and alignment
   - Enhance typography (e.g., line height, letter spacing)
   - Optimize the visual hierarchy

Focus on creating a polished, professional appearance that showcases Noelle's work effectively while being easy to update with actual assets and styling preferences later.
```

---

## LLM Guidance Notes

When implementing each step using these prompts, keep the following in mind:

1. **Build Incrementally**: Each prompt builds directly on the code from previous steps.

2. **Code Organization**: 
   - Maintain a clean folder structure
   - Use descriptive file and component names
   - Follow consistent coding patterns

3. **Modern React Practices**:
   - Use functional components with hooks
   - Implement proper state management
   - Apply good performance practices (memoization, etc.)

4. **Responsive Design**:
   - Test across different viewport sizes
   - Implement mobile-first approach where appropriate
   - Handle edge cases in responsive layouts

5. **Performance**:
   - Prioritize lazy loading for media
   - Implement code splitting where appropriate
   - Watch for unnecessary re-renders

6. **Accessibility**:
   - Ensure keyboard navigation works
   - Use appropriate ARIA attributes
   - Maintain sufficient color contrast

7. **Error Handling**:
   - Implement graceful degradation
   - Provide clear error messages
   - Log errors appropriately

8. **Testing**:
   - Write tests for key functionality
   - Test edge cases and error states
   - Verify responsive behavior

By following these prompts in sequence, you'll build a fully-functional, professional portfolio application for Noelle that showcases her work effectively while following React best practices.