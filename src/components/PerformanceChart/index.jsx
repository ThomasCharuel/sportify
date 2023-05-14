import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis } from 'recharts';
import styles from './index.module.scss';

const LABELS_MAP = {
  cardio: 'Cardio',
  energy: 'Energie',
  endurance: 'Endurance',
  strength: 'Force',
  speed: 'Vitesse',
  intensity: 'Intensité',
};
// Display proper names for labels
const getTickLabel = (kind) => LABELS_MAP[kind] || kind;

function PerformanceChart({ performance }) {
  return (
    <div className={styles.chart}>
      <ResponsiveContainer>
        <RadarChart
          outerRadius={90}
          width={730}
          height={250}
          data={performance}
          className={styles.chart}
        >
          <PolarGrid radialLines={false} stroke="white" />
          <PolarAngleAxis
            dataKey="kind"
            tickFormatter={getTickLabel}
            tick={{ fill: 'white', fontSize: 12 }}
          />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

PerformanceChart.propTypes = {
  performance: PropTypes.array.isRequired,
};

export default PerformanceChart;
