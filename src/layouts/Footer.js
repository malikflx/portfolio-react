import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="full-width main-footer">
        <p>&copy; Copyright {new Date().getFullYear()} <Link to="/" className="footer-link"> Malik Felix</Link> All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;