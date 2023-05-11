import React from 'react';
import { useLoaderData } from 'react-router-dom';
import styles from './index.module.scss';
import ProfileHeader from '../../components/ProfileHeader';
import ActivitiesChart from '../../components/ActivitiesChart';
import AverageSessionsChart from '../../components/AverageSessionsChart';
import PerformanceChart from '../../components/PerformanceChart';
import ScoreChart from '../../components/ScoreChart';
import StatisticCard from '../../components/StatisticCard';

export default function Profile() {
  const { profile } = useLoaderData();

  return (
    <div className={styles.profileContainer}>
      {profile && (
        <>
          <ProfileHeader name={profile.firstName} />

          <div className={styles.chartsWrapper}>
            <div className={styles.activitiesChart}>
              <ActivitiesChart activities={profile.activities} className={styles.activitiesChart} />
            </div>
            <div className={styles.averageSessionsChart}>
              <AverageSessionsChart sessions={profile.sessions} />
            </div>
            <div className={styles.performanceChart}>
              <PerformanceChart performance={profile.performance} />
            </div>
            <div className={styles.scoreChart}>
              <ScoreChart score={profile.todayScore} />
            </div>

            <ul className={styles.statsListing}>
              <li>
                <StatisticCard type={'calories'} value={profile.keyData.calorieCount} />
              </li>
              <li>
                <StatisticCard type={'protein'} value={profile.keyData.proteinCount} />
              </li>
              <li>
                <StatisticCard type={'carbs'} value={profile.keyData.carbohydrateCount} />
              </li>
              <li>
                <StatisticCard type={'fat'} value={profile.keyData.lipidCount} />
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
