import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './index.module.scss';
import StatisticCard from '../../components/StatisticCard';

export default function Profile() {
  const { userId } = useParams();

  console.log(userId);

  return (
    <div className={styles.profileContainer}>
      <ul className={styles.statsListing}>
        <li>
          <StatisticCard type={'calories'} value={'3'} />
        </li>
        <li>
          <StatisticCard type={'protein'} value={'3'} />
        </li>
        <li>
          <StatisticCard type={'carbs'} value={'3'} />
        </li>
        <li>
          <StatisticCard type={'fat'} value={'3'} />
        </li>
      </ul>
    </div>
  );
}
