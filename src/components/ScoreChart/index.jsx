import React from 'react';
import PropTypes from 'prop-types';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styles from './index.module.scss';

function ScoreChart({ score = 0 }) {
  const data = [{ score }];
  return (
    <div className={styles.chart}>
      <h2 className={styles.chart__title}>Score</h2>
      <ResponsiveContainer>
        <RadialBarChart
          width={730}
          height={250}
          innerRadius="90%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            axisLineType="circle"
            type="number"
            domain={[0, 1]}
            tick={false}
            style={{ fill: 'white' }}
          />
          <RadialBar dataKey="score" cornerRadius={50} fill="#FF0101" />
          <text
            x="50%"
            y="50%"
            style={{ fontSize: 26, fontWeight: 'bold', fill: '#282D30' }}
            width={200}
            textAnchor="middle"
          >
            {score * 100}%
          </text>
          <text
            x="50%"
            y="50%"
            dy={30}
            className={styles.greyText}
            style={{ fontSize: 16, fontWeight: 500, fill: '#74798C' }}
            width={200}
            textAnchor="middle"
          >
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

ScoreChart.propTypes = {
  score: PropTypes.number,
};

export default ScoreChart;
