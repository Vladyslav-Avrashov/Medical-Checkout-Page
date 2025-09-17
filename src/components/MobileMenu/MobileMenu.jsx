import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import styles from "./MobileMenu.module.css";

Modal.setAppElement("#root");

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.menu}
      overlayClassName={styles.overlay}
      closeTimeoutMS={300}
    >
      <button className={styles.closeBtn} onClick={onClose}>
        ✕
      </button>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          onClick={onClose}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={onClose}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          About
        </NavLink>
        <NavLink
          to="/reviews"
          onClick={onClose}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to="/contact"
          onClick={onClose}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/shop"
          onClick={onClose}
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Shop
        </NavLink>
      </nav>
    </Modal>
  );
};

export default MobileMenu;
