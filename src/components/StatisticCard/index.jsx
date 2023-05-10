import React from 'react';
import PropTypes from 'prop-types';
import iconCalories from '../../assets/icon-calories.svg';
import iconProtein from '../../assets/icon-protein.svg';
import iconCarbs from '../../assets/icon-carbs.svg';
import iconFat from '../../assets/icon-fat.svg';
import styles from './index.module.scss';

const getCardInfosBasedOnType = (type) => {
  let iconSource,
    statName,
    statUnit = '';

  switch (type) {
    case 'calories':
      iconSource = iconCalories;
      statName = 'Calories';
      statUnit = 'kCal';
      break;
    case 'protein':
      iconSource = iconProtein;
      statName = 'Proteines';
      statUnit = 'g';
      break;
    case 'carbs':
      iconSource = iconCarbs;
      statName = 'Glucides';
      statUnit = 'g';
      break;
    case 'fat':
      iconSource = iconFat;
      statName = 'Lipides';
      statUnit = 'g';
      break;
  }
  return { iconSource, statName, statUnit };
};

function StatisticCard({ type, value }) {
  const { iconSource, statName, statUnit } = getCardInfosBasedOnType(type);

  return (
    <article className={styles.card}>
      <img src={iconSource} />
      <div className={styles.statistic}>
        <p className={styles.statistic__value}>
          {value.toLocaleString('en-US')}
          {statUnit}
        </p>
        <h2 className={styles.statistic__name}>{statName}</h2>
      </div>
    </article>
  );
}

StatisticCard.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default StatisticCard;
