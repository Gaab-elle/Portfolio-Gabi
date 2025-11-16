import React from "react";
import { useI18n } from "../../i18n/i18n.jsx";
import { Palette, Code, Zap } from "lucide-react";

const Services = ({ visibleSections, sectionRef }) => {
  const { t } = useI18n();

  const card2Items = t('services.card2Items');
  
  const services = [
    {
      icon: <Palette size={48} />,
      title: t('services.card1Title'),
      description: t('services.card1Description'),
      items: [
        t('services.card1Item1'),
        t('services.card1Item2'),
        t('services.card1Item3')
      ]
    },
    {
      icon: <Code size={48} />,
      title: t('services.card2Title'),
      description: t('services.card2Description'),
      items: Array.isArray(card2Items) ? card2Items : [
        "JavaScript / TypeScript",
        "PHP / Laravel",
        "Node.js / Express / APIs REST",
        "React / Next.js",
        "Automação com Python (bots, RPA, IA)",
        "Automação com N8N"
      ]
    },
    {
      icon: <Zap size={48} />,
      title: t('services.card3Title'),
      description: t('services.card3Description'),
      items: [
        t('services.card3Item1'),
        t('services.card3Item2'),
        t('services.card3Item3'),
        t('services.card3Item4'),
        t('services.card3Item5')
      ]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="modern-services">
      <div className="services-container">
        <h2 className="section-subtitle">{t('services.title')}</h2>
        <h3 className="section-title-large">{t('services.subtitle')}</h3>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${
                visibleSections.has("services")
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
              <ul className="service-list">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="service-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

