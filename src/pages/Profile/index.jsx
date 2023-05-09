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
        </>
      )}
    </div>
  );
}
