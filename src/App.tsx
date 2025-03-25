import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <div className="font-sans text-base leading-relaxed bg-beige">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;