import React from "react";

const About = ({ visibleSections, sectionRef }) => {
  return (
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{
            background: "linear-gradient(45deg, #8b45ff, #39ff14)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Sobre Mim
        </h2>

        <div
          className={`glass-card p-8 md:p-12 transition-all duration-1000 ${
            visibleSections.has("about")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Sou Desenvolvedora Full Stack e adoro transformar ideias em
                soluções práticas e funcionais. Tenho um interesse especial em
                automações, porque acredito que a tecnologia deve simplificar a
                vida das pessoas e tornar processos mais leves. Estou sempre
                explorando novas ferramentas e aprendendo coisas diferentes para
                evoluir nos meus projetos e entregar resultados cada vez
                melhores.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Combino criatividade com código limpo para desenvolver
                aplicações web modernas. Meu objetivo é criar soluções que
                automatizem processos, tragam praticidade e contribuam para um
                ecossistema digital mais eficiente e inovador.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span>Desenvolvimento Full Stack</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                <span>Especialista em Automação | Low/No Code</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <div className="w-3 h-3 bg-pink-500 rounded-full" />
                <span>Aprendizado contínuo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
