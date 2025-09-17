import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.column}>
          <h4>Shopdoc</h4>
          <p>
            High quality and trusted
            <br />
            medical shop service
          </p>
        </div>

        <div className={styles.column}>
          <h4>About us</h4>
          <NavLink to="#">Who We Are</NavLink>
          <NavLink to="#">Vision &amp; Mission</NavLink>
          <NavLink to="#">Core Values</NavLink>
          <NavLink to="#">Quality Policy</NavLink>
        </div>

        <div className={styles.column}>
          <h4>FAQ</h4>
          <NavLink to="#">FAQ</NavLink>
        </div>

        <div className={styles.column}>
          <h4>Blog</h4>
          <NavLink to="#">Blog</NavLink>
        </div>

        <div className={styles.column}>
          <h4>Contact us</h4>
          <p>Get in touch is easy</p>
          <p>Follow us</p>
          <div className={styles.socials}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <svg className={styles.icon}>
                <use href="/icons/icons.svg#instagram-icon" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <svg className={styles.icon}>
                <use href="/icons/icons.svg#twitter-icon" />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
            >
              <svg className={styles.icon}>
                <use href="/icons/icons.svg#facebook-icon" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>Copyrights © 2021 Shopdoc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
