import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

export default function SecondaryNavigation() {
  return (
    <div>
      <nav className={styles.header__navigation}>
        <ul>
          <li>
            <NavLink to="/">Img 1</NavLink>
          </li>
          <li>
            <NavLink to="/">Img 2</NavLink>
          </li>
          <li>
            <NavLink to="/">Img 3</NavLink>
          </li>
          <li>
            <NavLink to="/">Img 4</NavLink>
          </li>
        </ul>
      </nav>
      <p>Copyright, SportSee 2020</p>
    </div>
  );
}
