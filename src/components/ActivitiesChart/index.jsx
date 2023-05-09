import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
// import styles from './index.module.scss';

function ActivitiesChart({ activities }) {
  return (
    <BarChart width={730} height={250} data={activities}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="kilogram" fill="#8884d8" />
      <Bar dataKey="calories" fill="#82ca9d" />
    </BarChart>
  );
}

ActivitiesChart.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default ActivitiesChart;
