import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './index.module.scss';

export default function Profile() {
  const { userId } = useParams();

  console.log(userId);

  return <main className={styles.main}></main>;
}
