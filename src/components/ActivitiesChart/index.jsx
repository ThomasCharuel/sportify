/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Label, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import styles from './index.module.scss';

const customToolTip = ({ active, payload }) => {
  return (
    active &&
    payload &&
    payload.length && (
      <div className={styles.tooltip}>
        <p className={styles.tooltip__content}>{payload[0].value}kg</p>
        <p className={styles.tooltip__content}>{payload[1].value}Kcal</p>
      </div>
    )
  );
};

const renderLegendText = (value) => {
  return <span className={styles.legend__text}>{value}</span>;
};

function ActivitiesChart({ activities }) {
  const data = activities.map((activity, index) => {
    return { ...activity, name: index + 1 };
  });

  return (
    <div className={styles.chart}>
      <h2 className={styles.chart__title}>Activité quotidienne</h2>
      <BarChart width={730} height={250} data={data} barSize={7} barGap={8}>
        <CartesianGrid vertical={false} strokeDasharray="2 2" />
        <XAxis tickMargin={16} dataKey="name" tickLine={false} />
        <YAxis yAxisId="calories" hide={true} />
        <YAxis
          orientation="right"
          yAxisId="kilogram"
          type="number"
          domain={['dataMin - 1', 'dataMax']}
          tickMargin={16}
          axisLine={false}
          scale={'linear'}
          tickLine={false}
        />
        <Tooltip content={customToolTip} />
        <Legend
          iconSize={8}
          align="right"
          verticalAlign="top"
          iconType="circle"
          formatter={renderLegendText}
          wrapperStyle={{
            paddingBottom: 40,
          }}
        />
        <Bar
          name="Poids (kg)"
          yAxisId="kilogram"
          dataKey="kilogram"
          fill="#282D30"
          radius={[3, 3, 0, 0]}
        />
        <Bar
          name="Calories brûlées (kCal)"
          yAxisId="calories"
          dataKey="calories"
          fill="#E60000"
          radius={[3, 3, 0, 0]}
        />
      </BarChart>
    </div>
  );
}

ActivitiesChart.propTypes = {
  activities: PropTypes.array.isRequired,
};

export default ActivitiesChart;
