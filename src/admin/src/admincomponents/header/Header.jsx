import React from 'react';
import './header.css'; // Özel CSS dosyasını burada dahil edin

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <nav className="header__nav">
            <ul>
            <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/skills">SKILLS</a></li>
          <li><a href="/services">SERVICES</a></li>
          <li><a href="/portfolio">PORTFOLIO</a></li>
          <li><a href="/contact">CONTACT</a></li>
          <li><a href="/qualification">QUALIFICATION</a></li>
          <li><a href="/testimonials">TESTIMONIALS</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
