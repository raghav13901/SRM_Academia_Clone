import React from "react";
import styles from "./navbar.module.css";
function Navbar(props) {
  return (
    <nav className={styles.nav}>
      <div>
        <button className="me-auto"> Academia - Academic Web Services </button>
      </div>
      <div>
        <button className="me-auto">User</button>
      </div>
    </nav>
  );
}

export default Navbar;
