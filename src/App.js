import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PortfolioApp from './portfolio/src/PortfoiloApp';
import AdminApp from './admin/src/AdminApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Portfolio Site */}
        <Route path="/" element={<PortfolioApp />} />
        
        {/* Route for Admin Panel */}
        <Route path="/admin/*" element={<AdminApp />} />
      </Routes>
    </Router>
  );
}

export default App;
