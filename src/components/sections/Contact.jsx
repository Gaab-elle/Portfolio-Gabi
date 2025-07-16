import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = ({ visibleSections, sectionRef }) => {
  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12"
          style={{
            background: "linear-gradient(45deg, #8b45ff, #39ff14)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Vamos Conversar?
        </h2>

        <div
          className={`glass-card p-8 md:p-12 transition-all duration-1000 ${
            visibleSections.has("contact")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl text-gray-300 mb-8">
            Estou sempre aberta a novas oportunidades e projetos interessantes.
            Entre em contato comigo!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Link de Email */}
            <a
              href="contato.gabriellerib@gmail.com"
              className="contact-link group"
            >
              <Mail
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
              <span>contato.gabriellerib@gmail.com</span>
            </a>

            {/* Link do LinkedIn */}
            <a
              href="https://linkedin.com/in/gabrielle-ribeiro10"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group"
            >
              <Linkedin
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
              <span>LinkedIn</span>
            </a>

            {/* Link do GitHub */}
            <a
              href="https://github.com/Gaab-elle"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link group"
            >
              <Github
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
