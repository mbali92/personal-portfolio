import { useState } from 'react'
import "./components/style/stylesheet.css"
import Home from './components/Home';
import Coffeeshop from './components/Coffeeshop';
import ProjectManagement from './components/ProjectManagement';
import SchoolWebsite from './components/SchoolWebsite';
import PortfolioSite from './components/PortfolioSite';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
  
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee" element={<Coffeeshop />} />
          <Route path="/pms" element={<ProjectManagement />} />
          <Route path="/school" element={<SchoolWebsite />} />
          <Route path="/portfolio" element={<PortfolioSite />} />
        </Routes>
     </Router>
    
  )
}

export default App
