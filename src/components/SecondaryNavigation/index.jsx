import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import iconZen from '../../assets/icon-zen.svg';
import iconSwim from '../../assets/icon-swim.svg';
import iconBike from '../../assets/icon-bike.svg';
import iconWeightlifting from '../../assets/icon-weightlifting.svg';

export default function SecondaryNavigation() {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.navigation}>
        <ul className={styles.navigation__listing}>
          <li>
            <NavLink to="/">
              <img src={iconZen} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={iconSwim} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={iconBike} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <img src={iconWeightlifting} />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.copyright}>
        <p className={styles.copyright__text}>Copyright, SportSee 2020</p>
      </div>
    </div>
  );
}
