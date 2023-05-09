import React from 'react';
import PropTypes from 'prop-types';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
// import styles from './index.module.scss';

function PerformanceChart({ performance }) {
  return (
    <RadarChart outerRadius={90} width={730} height={250} data={performance}>
      <PolarGrid />
      <PolarAngleAxis dataKey="kind" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
    </RadarChart>
  );
}

PerformanceChart.propTypes = {
  performance: PropTypes.array.isRequired,
};

export default PerformanceChart;
