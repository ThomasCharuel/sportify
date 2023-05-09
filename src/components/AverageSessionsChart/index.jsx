import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
// import styles from './index.module.scss';

function AverageSessionsChart({ sessions }) {
  return (
    <LineChart
      width={730}
      height={250}
      data={sessions}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" />
    </LineChart>
  );
}

AverageSessionsChart.propTypes = {
  sessions: PropTypes.array.isRequired,
};

export default AverageSessionsChart;
