# Specification for Noelle's React Portfolio App

## Overview
This React-based portfolio app showcases Noelle Mayasich’s creative work as an Associate Creative Director. The app is designed to highlight her projects through an interactive, visually engaging interface optimized for an exceptional user experience. It emphasizes smooth transitions, responsive design, and performance enhancements to handle a significant number of videos and gifs effectively. The primary goal is to showcase Noelle’s portfolio to support her pursuit of new job opportunities.

---

## Requirements

### Homepage
- **Project Showcase**:
  - Displays projects in a grid layout:
    - **Row 1**: Google x Woocommerce, DoorDash Neighborhood Campaign
    - **Row 2**: Google Play Live '22, Google Play Live '23
    - **Row 3**: Doordash Creator Campaign, Fetch Superbowl Live
    - **Row 4**: Unreal Engine Unreal Everywhere, NBCU The Exorcist: Believer
    - **Row 5**: Goodnites Youth Pants Campaign, HBO MAX Sex Lives of College Girls
  - **Desktop**: 2 projects per row (5 rows total).
  - **Mobile**: 1 project per row (10 rows total).
  - Each rectangle contains gifs, images, and text overlays (media to be provided).
- **Large Text Section**:
  - Features a large image (to be provided) with the text overlay:  
    **"GOOD CREATIVE looks GOOD GREAT CREATIVE knows WHY"**
  - Text styled to match the portfolio’s aesthetic (font, color, etc., as per provided files).
- **Bottom Left Name Area**:
  - Displays "Noelle Mayasich" and a clickable LinkedIn icon/link (URL to be provided) that opens in a new tab.
- **Navbar**:
  - **Logo**: Far left, clickable to return to homepage (SVG/PNG to be provided).
  - **Navigation Buttons**: Four buttons ("Live Experiences," "Film + Edit," "Social," "Conceptual") with dropdowns.
  - **Dropdown Behavior**:
    - Slides down on hover (desktop) or tap (mobile) with a smooth animation.
    - Closes on click outside or project selection.
    - Matches the portfolio’s aesthetic.

### Project Pages
- Each project has a unique, vertically scrollable page.
- **Content**: Dynamic sections (e.g., quadrants of 4 gifs/images, large single media, text blocks).
- **Media**: Gifs, images, and videos (to be provided).
- **Navbar**: Consistent with homepage.

### Additional Features
- **Smooth Transitions**: Applied to all interactions (navigation, dropdowns, scrolling).
- **Mobile Responsiveness**:
  - Navbar collapses into a mobile menu (e.g., hamburger icon).
  - Project showcase adjusts to a single-column layout.
  - Breakpoints: Desktop (>1200px), Tablet (768px–1200px), Mobile (<768px).
- **Performance Optimizations**:
  - Lazy loading for all media assets.
  - Optimized image/video formats (e.g., WebP, MP4).
- **SEO**:
  - Meta tags for each page (e.g., "Noelle Mayasich - Google Play Live '22 Portfolio").
- **Analytics**:
  - Optional Google Analytics integration.

### Notes
- **Styling**: Backgrounds, images, and text styling provided via files.
- **No Footer**: Excluded per requirements.

---

## Architecture Choices
- **Tech Stack**:
  - **React**: Core framework for UI.
  - **React Router**: For navigation between pages.
  - **CSS Modules** or **Styled-Components**: For styling (developer’s choice).
- **Optional Libraries**:
  - **React-Dropdown** or custom solution for dropdowns.
  - **React-Slick** or **Swiper** for optional rotating lists (if implemented).
  - **Framer Motion**: For smooth transitions.
- **Component Structure**:
  - `Navbar`: Reusable navigation component.
  - `Homepage`: Contains project showcase, text section, and name area.
  - `ProjectPage`: Dynamic page for each project.
  - `Dropdown`: For category navigation.
- **State Management**:
  - **React’s built-in state**: Sufficient for static data.
  - **Context API**: Optional for global state (e.g., project data).

---

## Data Handling
- **Data Source**:
  - Project data (titles, descriptions, media) stored in **JSON files** or a **CMS** (e.g., Contentful, Strapi).
  - Media assets stored in the public folder or a cloud service (e.g., AWS S3).
- **Fetching Data**:
  - Use **Fetch API** or **Axios** to load data on app initialization.
  - Store in component state or Context API.
- **Project Pages**:
  - Dynamic routes via React Router (e.g., `/projects/google-play-live-22`) based on project IDs or slugs.

---

## Error Handling Strategies
- **Data Fetching Errors**:
  - Display: "Failed to load projects. Please try again later."
- **404 Errors**:
  - Show a 404 page with: "Project not found."
- **General Errors**:
  - Log to console.
  - Display: "An error occurred. Please try again."
- **Implementation**:
  - Use try-catch blocks for API calls and React Router’s error boundaries.

---

## Testing Plan
- **Unit Tests**:
  - Tools: **Jest** and **React Testing Library**.
  - Test components (e.g., Navbar renders, Dropdown toggles, Project Showcase displays projects).
- **Integration Tests**:
  - Verify navigation between homepage and project pages.
- **End-to-End Tests**:
  - Tool: **Cypress**.
  - Simulate user flows (e.g., clicking a project to view its page).
- **Accessibility Tests**:
  - Use **axe** or **Lighthouse** to ensure compliance.

---

## Developer Summary
- **Tech Stack**: React, React Router, CSS Modules/Styled-Components.
- **Data**: JSON or CMS, fetched via Fetch API/Axios.
- **Error Handling**: User-friendly messages and logging.
- **Performance**: Lazy loading and media optimization.
- **Testing**: Unit, integration, end-to-end, and accessibility tests.
- **SEO/Analytics**: Meta tags and optional analytics.

This specification provides a clear, actionable roadmap for building Noelle’s portfolio app. With all requirements, architecture, data handling, error strategies, and testing outlined, a developer can start implementation immediately, creating a polished, professional showcase tailored to Noelle’s career goals.