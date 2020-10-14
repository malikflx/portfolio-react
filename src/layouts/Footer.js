import React from 'react';
import { Link } from 'react-router-dom';
import Github from '../img/github.png';
import LinkedIn from '../img/linkedin.png';
import Twitter from '../img/twitter.png';

const Footer = () => {
  return (
    <div className="full-width main-footer">
      <div className="copyright">
        <p>&copy; Copyright {new Date().getFullYear()} <Link to="/" className="footer-link"> Malik Felix</Link> All Rights Reserved</p>
      </div>
      <div className="social">
        <a href="https://github.com/malikflx/" target="_blank" rel="noopener noreferrer"><img className="social-link" src={Github} alt="github" /></a>
        <a href="https://www.linkedin.com/in/malikfelix/" target="_blank" rel="noopener noreferrer"><img className="social-link" src={LinkedIn} alt="linkedin" /></a>
        <a href="https://twitter.com/ambitiousmack" target="_blank" rel="noopener noreferrer"><img className="social-link" src={Twitter} alt="twitter" /></a>
      </div>
    </div>
  );
}

export default Footer;