import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './index.module.scss';
import StatisticCard from '../../components/StatisticCard';

export default function Profile() {
  const { userProfile } = useLoaderData();

  return (
    <div className={styles.profileContainer}>
      {userProfile && (
        <>
          <p>Hello, {userProfile.userInfos.firstName}</p>
          <ul className={styles.statsListing}>
            <li>
              <StatisticCard type={'calories'} value={userProfile.keyData.calorieCount} />
            </li>
            <li>
              <StatisticCard type={'protein'} value={userProfile.keyData.proteinCount} />
            </li>
            <li>
              <StatisticCard type={'carbs'} value={userProfile.keyData.carbohydrateCount} />
            </li>
            <li>
              <StatisticCard type={'fat'} value={userProfile.keyData.lipidCount} />
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
