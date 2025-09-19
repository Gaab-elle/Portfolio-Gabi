import React from "react";
import { Mail, Github, Linkedin, ChevronDown, Dot } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="text-center z-10 px-4">
        <div className="w-40 h-40 mx-auto mb-8 relative">
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-green-500 p-1 animate-pulse">
            <img
              src="/Img/foto.png"
              alt="Gabi Ribeiro"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 animate-bounce flex items-center justify-center">
            <Dot size={20} className="text-white" />
          </div>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-4"
          style={{
            background: "linear-gradient(45deg, #8b45ff, #ae81ff, #39ff14)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Gabi Ribeiro
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Dev Full Stack • Especialista em Automações • Cientista de Dados
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:contato.gabriellerib@gmail.com"
            className="btn-primary group"
          >
            <Mail
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span>Contact Me</span>
          </a>
          <a
            href="https://github.com/Gaab-elle"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <Github
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/gabz-ribeiro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <Linkedin
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            <span>LinkedIn</span>
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
          aria-label="Rolar para a seção Sobre Mim"
        >
          <ChevronDown size={32} style={{ color: "#8b45ff" }} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
