import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  const handleLinkClick = (event, path) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(path);
  };

  return (
    <footer>
      <div className="footer-content">
        <h2>Foto Pandit</h2>
        <ul className="footer-links">
          <li>
            <Link to="/services" onClick={(e) => handleLinkClick(e, '/services')}>Services</Link>
          </li>
          <li>
            <Link to="/gallery" onClick={(e) => handleLinkClick(e, '/gallery')}>Gallery</Link>
          </li>
          <li>
            <Link to="/tips" onClick={(e) => handleLinkClick(e, '/tips')}>Tips & Tricks</Link>
          </li>
        </ul>
        <p>&copy; 2024 Foto Pandit. All Rights Reserved.</p>
        <p>Dilpreet Singh</p>
      </div>
    </footer>
  );
}

export default Footer;