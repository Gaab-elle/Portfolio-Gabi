import React from 'react';

const Stats = () => {
  const stats = [
    { number: "6+", label: "Projetos Completados" },
    { number: "3+", label: "Anos de Experiência" },
    { number: "20+", label: "Tecnologias" },
    { number: "100%", label: "Satisfação do Cliente" }
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
