import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const handleLinkClick = (event, path) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };
  return (
    <nav>
      <h1 className="logo">Foto Pandit</h1>
      <ul>
        <li>
          <Link to="/" onClick={(e) => handleLinkClick(e, '/')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={(e) => handleLinkClick(e, '/services')}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={(e) => handleLinkClick(e, '/gallery')}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/tips" onClick={(e) => handleLinkClick(e, '/tips')}>
            Tips & Tricks
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;