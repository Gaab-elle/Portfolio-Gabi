import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "../../i18n/i18n.jsx";

const Testimonials = ({ visibleSections, sectionRef }) => {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: t('testimonials.testimonial1Name'),
      role: t('testimonials.testimonial1Role'),
      company: t('testimonials.testimonial1Company'),
      text: t('testimonials.testimonial1Text'),
      image: "/Img/Perfil.jpg"
    },
    {
      name: t('testimonials.testimonial2Name'),
      role: t('testimonials.testimonial2Role'),
      company: t('testimonials.testimonial2Company'),
      text: t('testimonials.testimonial2Text'),
      image: "/Img/Perfil.jpg"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" ref={sectionRef} className="modern-testimonials">
      <div className="testimonials-container">
        <h2 className="section-subtitle">{t('testimonials.title')}</h2>
        <h3 className="section-title-large">{t('testimonials.subtitle')}</h3>
        <div className="testimonials-content">
          <div className="testimonial-image-wrapper">
            <img src={current.image} alt={current.name} className="testimonial-image" />
          </div>
          <div className="testimonial-text-wrapper">
            <div className="testimonial-quotes">
              <span className="quote-mark" style={{ fontSize: '4rem', background: 'linear-gradient(135deg, #8b5cf6, #ec4899, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>"</span>
            </div>
            <p className="testimonial-text">{current.text}</p>
            <div className="testimonial-author">
              <h4 className="author-name">{current.name}</h4>
              <p className="author-role">{current.role}</p>
              <p className="author-company">{current.company}</p>
            </div>
            <div className="testimonial-nav">
              <button className="nav-btn" onClick={prevTestimonial} aria-label={t('testimonials.prev')}>
                <ChevronLeft size={20} />
              </button>
              <button className="nav-btn" onClick={nextTestimonial} aria-label={t('testimonials.next')}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

