import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from 'recharts';
import styles from './index.module.scss';

const customToolTip = ({ active, payload }) => {
  return (
    active &&
    payload &&
    payload.length && (
      <div className={styles.tooltip}>
        <p className={styles.tooltip__content}>{payload[0].value} min</p>
      </div>
    )
  );
};

function AverageSessionsChart({ sessions }) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const data = sessions.map(({ sessionLength, day }) => {
    return { sessionLength, day: days[day - 1] };
  });
  return (
    <div className={styles.chart}>
      <h2 className={styles.chart__title}>Durée moyenne des sessions</h2>
      <ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          {/* Handle chart line linear gradient */}
          <defs>
            <linearGradient id="lineLinearGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="white" stopOpacity={0.4} />
              <stop offset="100%" stopColor="white" stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#FFFFFF', opacity: '0.5' }}
          />
          <Tooltip content={customToolTip} cursor={false} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineLinearGradient)"
            strokeWidth={3}
            dot={false}
            activeDot={{ stroke: 'white', strokeOpacity: 0.2, strokeWidth: 10, r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

AverageSessionsChart.propTypes = {
  sessions: PropTypes.array.isRequired,
};

export default AverageSessionsChart;
