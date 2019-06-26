import React from 'react';
import navbarStyle from './Navbar.module.css';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const nightModeIcon = darkMode ? (
    <FontAwesomeIcon icon={faSun} />
  ) : (
    <FontAwesomeIcon icon={faMoon} />
  );
  const nightModeIconStyle = darkMode ? navbarStyle.day : navbarStyle.night;

  return (
    <div className={navbarStyle.navsection}>
      <header className={navbarStyle.logo}>
        <Link to="/">GK</Link>
      </header>
      <nav>
        <ul className={navbarStyle.navbar}>
          <li className={navbarStyle.navitem}>
            <Link
              className={navbarStyle.navlink}
              to="/about"
              activeClassName={navbarStyle.linkActive}
            >
              About
            </Link>
          </li>
          <li className={navbarStyle.navitem}>
            <Link
              className={navbarStyle.navlink}
              to="/projects"
              activeClassName={navbarStyle.linkActive}
            >
              Projects
            </Link>
          </li>
          <li className={navbarStyle.navitem}>
            <Link
              className={navbarStyle.navlink}
              to="/contact"
              activeClassName={navbarStyle.linkActive}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className={`${navbarStyle.nightModeBtn} ${nightModeIconStyle}`}
        to="/contact"
        onClick={toggleDarkMode}
      >
        {nightModeIcon}
      </button>
    </div>
  );
};

export default Navbar;
