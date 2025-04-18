import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage  />}>

        {/* TODO: Add routes for other pages */}
          <Route path="category/:categoryId" element={<div>Category Page</div>} />
          <Route path="project/:projectId" element={<div>Project Page</div>} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 