import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img
            src="/images/about/Azukios-Signature.PNG"
            alt="Azukios"
            className="nav-logo"
          />
        </Link>
      </div>

      <button
        className={`hamburger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link
            to="/"
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/art"
            className={`nav-link ${isActive('/art') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Art
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
