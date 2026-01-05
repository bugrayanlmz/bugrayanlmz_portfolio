import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Trips from "./components/Trips";
import "./App.css";

function AppContent() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSectionChange = () => {
    if (window.innerWidth <= 768) {
      setSidebarOpen(false);
    }
  };

  // Get current path to determine active section
  const getActiveSection = () => {
    const path = location.pathname.slice(1); // Remove leading /
    return path || "about";
  };

  // Check current page for different background patterns
  const isProjectsPage = location.pathname === "/projects";
  const isJourneyPage = location.pathname === "/journey";

  return (
    <div className="app">
      <div
        className={`menu-toggle ${sidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>

      <Sidebar
        activeSection={getActiveSection()}
        onSectionChange={handleSectionChange}
        isOpen={sidebarOpen}
      />

      <main
        className={`main-container ${isProjectsPage ? "bg-grid" : ""} ${
          isJourneyPage ? "bg-dots" : ""
        }`}
      >
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/trips" element={<Trips />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
