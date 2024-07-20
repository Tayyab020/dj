import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png'; // Update this path to your logo

const Header2 = () => {
  const [active, setActive] = useState(null);
  const [initialClick, setInitialClick] = useState(true);

  const handleClick = (path) => {
    if (!initialClick) {
      setActive(path);
    } else {
      setInitialClick(false);
      // Directly navigate without setting active class on the first click
    }
  };

  return (
    <header className="header">
      {/* Header Inner */}
      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-12 responsive-header">
                {/* Start Logo */}
                <div className="logo">
                  <Link to="/" onClick={() => handleClick('/')}>
                    <img src={logo} alt="Logo" />
                  </Link>
                </div>
                {/* End Logo */}
                {/* Mobile Nav */}
                <div className="mobile-nav"></div>
                {/* End Mobile Nav */}
              </div>
              <div className="col-lg-7 col-md-9 col-12">
                {/* Main Menu */}
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className={active === '/' || (initialClick && window.location.pathname === '/') ? 'active' : ''}>
                        <Link to="/" onClick={() => handleClick('/')}>Home</Link>
                      </li>
                      <li className={active === '/dj' || (initialClick && window.location.pathname === '/dj') ? 'active' : ''}>
                        <Link to="/dj" onClick={() => handleClick('/dj')}>DJs</Link>
                      </li>
                      <li className={active === '/about' || (initialClick && window.location.pathname === '/about') ? 'active' : ''}>
                        <Link to="/about" onClick={() => handleClick('/about')}>About</Link>
                      </li>
                      <li className={active === '/contact' || (initialClick && window.location.pathname === '/contact') ? 'active' : ''}>
                        <Link to="/contact" onClick={() => handleClick('/contact')}>Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* End Main Menu */}
              </div>
              <div className="col-lg-2 col-12">
                <div className="get-quote">
                  <Link to="/login" className="btn" onClick={() => handleClick('/login')}>Get Started</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Header Inner */}
    </header>
  );
};

export default Header2;
