import { useState } from "react";
import { NavLink } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div>
        <div className={styles.left}>
          <NavLink to="/" className={styles.logo}>
            Shopdoc
          </NavLink>
        </div>

        <nav className={styles.center}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            About
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Reviews
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Shop
          </NavLink>
        </nav>

        <div className={styles.right}>
          <NavLink to="/search">
            <svg className={styles.icon}>
              <use href="/public/icons/icons.svg#search-icon" />
            </svg>
          </NavLink>
          <NavLink to="/cart">
            <svg className={styles.icon}>
              <use href="/public/icons/icons.svg#cart-active-icon" />
            </svg>
          </NavLink>
          <NavLink to="/profile">
            <svg className={styles.icon}>
              <use href="/public/icons/icons.svg#profile-icon" />
            </svg>
          </NavLink>

          <button className={styles.burger} onClick={() => setIsMenuOpen(true)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
