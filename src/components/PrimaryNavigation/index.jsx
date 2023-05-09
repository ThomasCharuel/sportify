import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import styles from './index.module.scss';
import logo from '../../assets/logo.png';

export default function PrimaryNavigation() {
  // Get logged in user ID
  const userId = useContext(UserContext);

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo Kasa" className={styles.header__logo} />
      </Link>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__listing}>
          <li>
            <NavLink to="/" className={styles.navigation__link}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={`/profile/${userId}`} className={styles.navigation__link}>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.navigation__link}>
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={styles.navigation__link}>
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
