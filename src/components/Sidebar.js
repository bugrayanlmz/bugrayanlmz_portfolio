import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHome, FiMap, FiLayers, FiArrowUpRight } from "react-icons/fi";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

function Sidebar({ activeSection, onSectionChange, isOpen }) {
  const navigate = useNavigate();

  const navItems = [
    { id: "about", label: "Home", icon: FiHome, number: "1", path: "/" },
    {
      id: "projects",
      label: "Projects",
      icon: FiLayers,
      number: "2",
      path: "/projects",
    },
    {
      id: "journey",
      label: "Journey",
      icon: FiMap,
      number: "3",
      path: "/journey",
    },
    {
      id: "blog",
      label: "Youtube",
      icon: FaYoutube,
      number: "4",
      path: "/blog",
    },
  ];

  const socialLinks = [
    { name: "X (Twitter)", url: "https://x.com/bugrayanlmz", icon: FaXTwitter },
    { name: "GitHub", url: "https://github.com/bugrayanlmz", icon: FaGithub },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bugrayanlmz/",
      icon: FaLinkedin,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bugrayanlmz/",
      icon: FaInstagram,
    },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    navigate(path);
    onSectionChange();
  };

  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="profile">
        <img src="/images/profile.jpg" alt="Profile" />
        <div className="profile-text">
          <h1>Buğra Yanılmaz</h1>
          <p>AI Learner</p>
        </div>
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`nav-item ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={(e) => handleNavClick(e, item.path)}
            >
              <div className="nav-item-content">
                <Icon className="custom-icon" />
                <span>{item.label}</span>
              </div>
              <span className="nav-item-number">{item.number}</span>
            </Link>
          );
        })}
      </nav>

      <div className="social">
        <h2>Online</h2>
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <div className="social-link-content">
                <Icon className="custom-icon" />
                <span>{link.name}</span>
              </div>
              <FiArrowUpRight className="social-arrow" />
            </a>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
