import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

function ProfileHeader({ name }) {
  return (
    <>
      <h1 className={styles.userGreetings}>
        Bonjour <span className={styles.userName}>{name}</span>
      </h1>
      <p className={styles.paragraph}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </>
  );
}

ProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProfileHeader;
