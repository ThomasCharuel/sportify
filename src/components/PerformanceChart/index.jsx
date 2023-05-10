import React from 'react';
import PropTypes from 'prop-types';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';
import styles from './index.module.scss';

function PerformanceChart({ performance }) {
  const getTickLabel = (kind) => {
    if (kind === 'cardio') return 'Cardio';
    if (kind === 'energy') return 'Energie';
    if (kind === 'endurance') return 'Endurance';
    if (kind === 'strength') return 'Force';
    if (kind === 'speed') return 'Vitesse';
    if (kind === 'intensity') return 'Intensité';
    return kind;
  };
  return (
    <RadarChart
      outerRadius={90}
      width={730}
      height={250}
      data={performance}
      className={styles.chart}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="kind" tickFormatter={getTickLabel} />
      <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  );
}

PerformanceChart.propTypes = {
  performance: PropTypes.array.isRequired,
};

export default PerformanceChart;
