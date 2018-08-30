import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './styles.scss';

const NavBar = () => (
  <header className={`${styles.topBar} m-bottom-2`}>
    <nav className={styles.navContainer}>
      <NavLink className={styles.navButtons} to="/app" exact activeClassName={styles.active}>
        Home
      </NavLink>
      <NavLink className={styles.navButtons} to="/app/tic-tac" activeClassName={styles.active}>
        Tic Tac Game
      </NavLink>
      <NavLink className={styles.navButtons} to="/app/training-html" activeClassName={styles.active}>
        Training HTML
      </NavLink>
      <NavLink className={styles.navButtons} to="/auth">
        <FontAwesomeIcon icon="sign-out-alt" /> Salir
      </NavLink>
    </nav>
  </header>
);

export default NavBar;
