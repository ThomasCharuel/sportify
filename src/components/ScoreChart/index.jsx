import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';
// import styles from './index.module.scss';

function ScoreChart({ score }) {
  const data = [{ score }];
  return (
    <RadialBarChart
      width={730}
      height={250}
      innerRadius="10%"
      outerRadius="80%"
      data={data}
      startAngle={180}
      endAngle={0}
    >
      <RadialBar
        minAngle={15}
        label={{ fill: '#666', position: 'insideStart' }}
        background
        clockWise={true}
        dataKey="score"
      />
      <Legend
        iconSize={10}
        width={120}
        height={140}
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
      <Tooltip />
    </RadialBarChart>
  );
}

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreChart;
