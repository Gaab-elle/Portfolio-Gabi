import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useI18n } from "../../i18n/i18n.jsx";

const FAQ = ({ visibleSections, sectionRef }) => {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5')
    },
    {
      question: t('faq.q7'),
      answer: t('faq.a7')
    },
    {
      question: t('faq.q8'),
      answer: t('faq.a8')
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={sectionRef} className="modern-faq">
      <div className="faq-container">
        <h2 className="faq-subtitle">{t('faq.title')}</h2>
        <h3 className="faq-title-large">{t('faq.subtitle')}</h3>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`faq-icon ${openIndex === index ? 'open' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

