import React from 'react';
import { useI18n } from '../../i18n/i18n.jsx';

const Stats = () => {
  const { t } = useI18n();
  const stats = [
    { number: "6+", label: t('stats.completed') },
    { number: "3+", label: t('stats.years') },
    { number: "20+", label: t('stats.techs') },
    { number: "100%", label: t('stats.satisfaction') }
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
