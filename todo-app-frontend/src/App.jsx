import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Completed from './components/Completed';
import './App.css'; // Thêm dòng này để import CSS

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* Sidebar bên trái */}
        <Sidebar />

        {/* Nội dung chính bên phải */}
        <div className="main-wrapper">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/completed" element={<Completed />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;