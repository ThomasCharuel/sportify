import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './index.module.scss';
import ProfileHeader from '../../components/ProfileHeader';
import StatisticCard from '../../components/StatisticCard';

export default function Profile() {
  const { userProfile } = useLoaderData();

  return (
    <div className={styles.profileContainer}>
      {userProfile && (
        <>
          <ProfileHeader name={userProfile.userInfos.firstName} />
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
