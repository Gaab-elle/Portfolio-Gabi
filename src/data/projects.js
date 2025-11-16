export const projectsData = [
  // PROJETOS CONCLUÍDOS (aparecem primeiro)
  {
    id: "ai-crm-automation",
    title: "Agente de IA para Automação de CRM",
    image: "/Img/IA.jpeg",
    description:
      "Solução inovadora de automação que integra IA ao CRM empresarial, automatizando o processamento e distribuição de informações de eventos via Telegram, otimizando o fluxo de trabalho e reduzindo tarefas manuais.",
    longDescription: `
      Este projeto representa uma solução avançada de automação que combina inteligência artificial com integração de sistemas para otimizar processos empresariais.
      
      **Principais funcionalidades:**
      • Processamento automático de eventos via IA
      • Integração com Telegram Bot API
      • Distribuição inteligente de informações
      • Análise de dados em tempo real
      • Workflow automatizado com N8N
      • Integração com sistema Meeventos
      
      **Tecnologias utilizadas:**
      Utilização do N8N para orquestração de workflows, integração com OpenAI para processamento de linguagem natural, Telegram Bot API para comunicação, e APIs customizadas para integração com sistemas existentes.
    `,
    technologies: [
      "N8N",
      "OpenAI GPT-4",
      "Telegram Bot API",
      "Meeventos API",
      "Python",
      "Webhooks",
    ],
    category: "Automation & AI",
    demoLink: null,
    codeLink: "https://github.com/Gaab-elle/ai-crm-automation",
    status: "Concluído",
    features: [
      "Processamento automático de eventos",
      "Integração com Telegram",
      "Análise de dados com IA",
      "Workflow automatizado",
      "Relatórios inteligentes"
    ],
    challenges: "Integrar múltiplas APIs e criar um sistema de IA que compreenda contextos específicos do negócio.",
    results: "Automação de 90% dos processos manuais e redução de 60% no tempo de processamento de eventos."
  },
  {
    id: "companyWebsite",
    title: "Site Institucional - Empresa",
    image: "/Img/ygg.png",
    description:
      "Site institucional moderno e responsivo desenvolvido para empresa de tecnologia, com foco em apresentar serviços de TI e soluções tecnológicas de forma profissional e atrativa, incluindo otimização SEO e performance.",
    longDescription: `
      Site institucional desenvolvido com foco em conversão e experiência do usuário, apresentando os serviços de tecnologia e soluções de TI de forma profissional e atrativa.
      
      **Principais funcionalidades:**
      • Design responsivo e moderno
      • Apresentação de serviços de TI
      • Formulário de contato otimizado
      • SEO otimizado para busca local
      • Carregamento rápido e otimizado
      • Integração com redes sociais
      • Seção de portfólio de projetos
      • Blog com artigos técnicos
      
      **Tecnologias utilizadas:**
      Desenvolvido com React e TypeScript para uma interface moderna e tipada, utilizando Vite como bundler para performance otimizada, Tailwind CSS para estilização responsiva, e otimizações de SEO para melhor posicionamento nos mecanismos de busca.
    `,
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "SEO", "Google Analytics", "Responsive Design"],
    category: "Frontend",
    demoLink: "https://empresa-demo.vercel.app",
    codeLink: "https://github.com/Gaab-elle/YggdraGroup-Website",
    status: "Concluído",
    features: [
      "Design responsivo",
      "Apresentação de serviços",
      "Formulário de contato",
      "SEO otimizado",
      "Performance otimizada",
      "Portfólio de projetos",
      "Blog técnico"
    ],
    challenges: "Criar um design que transmita confiança e profissionalismo no setor de tecnologia, além de otimizar para conversão de leads qualificados.",
    results: "Aumento de 200% no tráfego orgânico e melhoria significativa na taxa de conversão de visitantes em leads qualificados para serviços de TI."
  },
  {
    id: "nerdino-mvp",
    title: "NERDINO MVP - Agregador de Vagas de Tecnologia",
    image: "/Img/nerdino.png",
    description:
      "Plataforma inovadora que centraliza vagas de tecnologia de diversas fontes em um só lugar, facilitando a busca por oportunidades e conectando profissionais com as melhores vagas do mercado tech brasileiro.",
    longDescription: `
      O NERDINO MVP é um agregador de vagas de tecnologia que revoluciona a forma como profissionais de TI buscam oportunidades de trabalho, centralizando ofertas de múltiplas plataformas em uma interface única e intuitiva.
      
      **Principais funcionalidades:**
      • Busca inteligente por vagas de tecnologia
      • Filtros avançados por localização, experiência e stack
      • Alertas personalizados de novas vagas
      • Perfil profissional otimizado
      • Integração com principais plataformas de recrutamento
      • Comunidade de desenvolvedores
      • Interface moderna e responsiva
      
      **Fontes de vagas integradas:**
      • InfoJobs - Portal de empregos líder no Brasil
      • LinkedIn - Rede profissional global
      • Jooble - Motor de busca de empregos
      • Catho - Plataforma de vagas e currículos
      
      **Tecnologias utilizadas:**
      Frontend desenvolvido em React com TypeScript, backend em Node.js com Express, banco de dados PostgreSQL para armazenamento de vagas, Redis para cache e performance, e integração com APIs de múltiplas plataformas de recrutamento.
    `,
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
      "Web Scraping",
      "API Integration"
    ],
    category: "Full Stack",
    demoLink: "https://nerdino-mvp.vercel.app",
    codeLink: "https://github.com/Gaab-elle/nerdino-mvp",
    status: "Concluído",
    features: [
      "Busca centralizada em múltiplas plataformas",
      "Filtros avançados",
      "Alertas personalizados",
      "Perfil profissional",
      "Integração com APIs",
      "Interface responsiva"
    ],
    challenges: "Integrar múltiplas APIs de diferentes plataformas de recrutamento e criar um sistema de busca eficiente que processe milhares de vagas em tempo real.",
    results: "Centralização de vagas de 4+ plataformas principais, reduzindo o tempo de busca dos usuários em 70% e aumentando a visibilidade de oportunidades relevantes."
  },
  {
    id: "printerManagement",
    title: "Sistema de Gerenciamento de Impressoras",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=250&fit=crop&crop=center",
    description:
      "Software desktop robusto para gerenciamento centralizado de impressoras em ambiente corporativo, permitindo monitoramento de status, controle de filas e relatórios de uso em tempo real.",
    longDescription: `
      Sistema desktop desenvolvido para otimizar o gerenciamento de impressoras em ambientes corporativos, oferecendo controle total sobre o parque de impressão.
      
      **Principais funcionalidades:**
      • Monitoramento de status em tempo real
      • Controle de filas de impressão
      • Relatórios de uso e custos
      • Gestão de usuários e permissões
      • Alertas automáticos de manutenção
      • Interface administrativa completa
      
      **Tecnologias utilizadas:**
      Desenvolvido em C# com .NET Framework, utilizando Windows Forms para interface desktop, SQL Server para armazenamento de dados, e integração com APIs de impressoras para monitoramento em tempo real.
    `,
    technologies: ["C#", ".NET Framework", "SQL Server", "Windows Forms", "Entity Framework", "WCF"],
    category: "Desktop/Backend",
    demoLink: null,
    codeLink: "https://github.com/Gaab-elle/printer-management",
    status: "Concluído",
    features: [
      "Monitoramento em tempo real",
      "Controle de filas",
      "Relatórios de uso",
      "Gestão de usuários",
      "Alertas automáticos"
    ],
    challenges: "Integrar com diferentes marcas de impressoras e criar um sistema de monitoramento confiável e em tempo real.",
    results: "Redução de 40% nos custos de impressão e melhoria significativa no controle de uso de recursos."
  },
  {
    id: "ai-job-search",
    title: "Agente de IA para Automação de Busca de Vagas de Emprego",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center",
    description:
      "Sistema inteligente que utiliza IA para automatizar a busca e análise de vagas de emprego, filtrando oportunidades relevantes baseadas no perfil profissional e enviando notificações personalizadas via Telegram e email.",
    longDescription: `
      Este projeto representa uma solução avançada de automação que combina inteligência artificial com análise de dados para otimizar a busca por oportunidades de trabalho.
      
      **Principais funcionalidades:**
      • Busca automática em múltiplas plataformas de vagas
      • Análise inteligente de compatibilidade com perfil profissional
      • Filtros personalizados por localização, salário e stack tecnológico
      • Notificações em tempo real via Telegram e email
      • Dashboard com métricas de oportunidades encontradas
      • Integração com LinkedIn e outras redes profissionais
      • Sistema de scoring para ranking de vagas
      
      **Tecnologias utilizadas:**
      Utilização do N8N para orquestração de workflows, integração com OpenAI GPT-4 para análise de compatibilidade, Python para web scraping e processamento de dados, APIs de plataformas de vagas, e integração com Telegram Bot API para notificações.
    `,
    technologies: [
      "N8N",
      "OpenAI GPT-4",
      "Python",
      "Telegram Bot API",
      "Web Scraping",
      "Selenium",
      "PostgreSQL",
      "Redis",
      "API Integration"
    ],
    category: "Automation & AI",
    demoLink: null,
    codeLink: "https://github.com/Gaab-elle/ai-job-search-automation",
    status: "Concluído",
    features: [
      "Busca automática em múltiplas plataformas",
      "Análise de compatibilidade com IA",
      "Filtros personalizados",
      "Notificações em tempo real",
      "Dashboard de métricas",
      "Sistema de scoring de vagas"
    ],
    challenges: "Integrar múltiplas APIs de plataformas de vagas, criar um sistema de IA que compreenda nuances do mercado de trabalho e implementar filtros inteligentes que evitem spam de notificações.",
    results: "Automação de 95% do processo de busca de vagas e aumento de 300% na eficiência na identificação de oportunidades relevantes."
  },
  {
    id: "tonoazul-finance",
    title: "TôNoAzul - Controle Financeiro Pessoal",
    image: "/Img/Dashboard.png",
    description:
      "Sistema completo de controle financeiro pessoal desenvolvido para auxiliar usuários a organizar receitas, despesas, metas e objetivos financeiros de forma simples, visual e segura.",
    longDescription: `
      O TôNoAzul é um sistema completo de controle financeiro pessoal que ajuda usuários a tomarem decisões mais conscientes sobre seu dinheiro, oferecendo uma visão clara e detalhada das finanças do dia a dia.
      
      **Principais funcionalidades:**
      • Cadastro de receitas e despesas categorizadas
      • Controle de contas, cartões e carteiras
      • Dashboard com gráficos e indicadores em tempo real
      • Definição de metas e objetivos financeiros
      • Acompanhamento de saldo por período
      • Relatórios detalhados por categoria, mês e tipo de gasto
      • Sistema de tags para organização avançada
      
      **Tecnologias utilizadas:**
      Backend desenvolvido em Laravel para uma API robusta e segura, com autenticação e autorização, e frontend em Vue.js para uma interface rápida, responsiva e intuitiva, utilizando componentes dinâmicos e integração em tempo real com a API.
    `,
    technologies: [
      "Laravel",
      "PHP",
      "Vue.js",
      "MySQL",
      "Tailwind CSS",
      "REST API",
      "JWT"
    ],
    category: "Full Stack",
    demoLink: null,
    codeLink: null,
    status: "Concluído",
    features: [
      "Controle de receitas e despesas",
      "Dashboard financeiro em tempo real",
      "Metas e objetivos financeiros",
      "Relatórios por categoria e período",
      "Gestão de contas e cartões",
      "Interface responsiva e intuitiva"
    ],
    challenges: "Criar uma experiência simples para usuários não técnicos, garantindo ao mesmo tempo segurança no armazenamento dos dados financeiros e flexibilidade na categorização de transações.",
    results: "Ajuda usuários a terem maior clareza sobre seus hábitos financeiros, contribuindo para redução de dívidas e melhor planejamento de metas de médio e longo prazo."
  },
  
  // PROJETOS EM DESENVOLVIMENTO (aparecem depois)
  {
    id: "realEstate",
    title: "Nereus - Sistema de Gestão Imobiliária",
    image: "/Img/Nereus.png",
    description:
      "Plataforma web completa para gestão de imóveis e residenciais, desenvolvida para substituir processos manuais por uma solução digital intuitiva e eficiente. O sistema permite controle total de propriedades, inquilinos, contratos e relatórios financeiros.",
    longDescription: `
      O Nereus é uma solução completa para gestão imobiliária que revoluciona a forma como empresas do setor gerenciam suas propriedades. 
      
      **Principais funcionalidades:**
      • Cadastro completo de imóveis com fotos e documentação
      • Gestão de inquilinos e proprietários
      • Controle de contratos e vencimentos
      • Relatórios financeiros detalhados
      • Dashboard com métricas em tempo real
      • Sistema de notificações automáticas
      
      **Tecnologias utilizadas:**
      Frontend desenvolvido em React com Tailwind CSS para uma interface moderna e responsiva. Backend em Node.js com Express, utilizando MongoDB para armazenamento de dados. Implementação de autenticação JWT e Context API para gerenciamento de estado.
    `,
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
      "Context API",
    ],
    category: "Full Stack",
    demoLink: "https://nereus-demo.vercel.app",
    codeLink: "https://github.com/Gaab-elle/Nereus-Imov",
    status: "Em desenvolvimento",
    features: [
      "Dashboard interativo",
      "Gestão de imóveis",
      "Controle de inquilinos",
      "Relatórios financeiros",
      "Sistema de notificações"
    ],
    challenges: "Desenvolver uma interface intuitiva para usuários não técnicos e implementar um sistema robusto de relatórios financeiros.",
    results: "Redução de 70% no tempo de gestão de propriedades e melhoria significativa na organização de documentos."
  },
  {
    id: "osManagement",
    title: "YggOS - Sistema de Gestão de Ordens de Serviço",
    image: "/Img/YggOS.png",
    description:
      "Sistema especializado para técnicos de manutenção de hardware, oferecendo uma plataforma completa para organizar, gerenciar e acompanhar ordens de serviço de forma eficiente e profissional.",
    longDescription: `
      O YggOS foi desenvolvido especificamente para atender as necessidades de técnicos de manutenção de hardware, oferecendo uma solução completa para gestão de ordens de serviço.
      
      **Principais funcionalidades:**
      • Criação e atribuição de ordens de serviço
      • Acompanhamento de status em tempo real
      • Gestão de peças e estoque
      • Relatórios de produtividade
      • Sistema de avaliação de serviços
      • Integração com sistemas de terceiros
      
      **Tecnologias utilizadas:**
      Frontend em React com interface otimizada para dispositivos móveis, backend em Node.js com Express, banco de dados MongoDB para flexibilidade no armazenamento de dados, e autenticação JWT para segurança.
    `,
    technologies: ["React", "Node.js", "MongoDB", "Express", "JWT", "PWA"],
    category: "Full Stack",
    demoLink: "https://yggos-demo.vercel.app",
    codeLink: "https://github.com/Gaab-elle/YggOS",
    status: "Em desenvolvimento",
    features: [
      "Gestão de ordens de serviço",
      "Controle de estoque",
      "Relatórios de produtividade",
      "Interface mobile-first",
      "Sistema de avaliações"
    ],
    challenges: "Criar uma interface mobile-first que funcione perfeitamente em campo e implementar um sistema de notificações em tempo real.",
    results: "Aumento de 50% na produtividade dos técnicos e redução de 30% no tempo de resolução de chamados."
  },
  {
    id: "english-course",
    title: "Site para Curso de Inglês",
    image: "/Img/curso.jpeg",
    description:
      "Plataforma web moderna e interativa para curso de inglês online, oferecendo uma experiência de aprendizado completa com aulas, exercícios, acompanhamento de progresso e recursos educacionais avançados.",
    longDescription: `
      Site desenvolvido para revolucionar o ensino de inglês online, oferecendo uma plataforma completa e interativa para estudantes de todos os níveis.
      
      **Principais funcionalidades:**
      • Sistema de aulas online em tempo real
      • Biblioteca de conteúdo educacional
      • Exercícios interativos e gamificados
      • Acompanhamento de progresso individual
      • Sistema de avaliações e certificados
      • Chat e fórum para interação entre alunos
      • Área do professor com ferramentas de gestão
      • Sistema de pagamentos integrado
      
      **Tecnologias utilizadas:**
      Frontend desenvolvido em React com Tailwind CSS para uma interface moderna e responsiva, backend em Laravel (PHP) para uma arquitetura robusta e escalável, banco de dados PostgreSQL para armazenamento de dados dos alunos e conteúdo, integração com APIs de pagamento, e sistema de videochamadas para aulas ao vivo.
    `,
    technologies: [
      "Laravel",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "PHP",
      "Socket.io",
      "Stripe API",
      "WebRTC"
    ],
    category: "Full Stack",
    demoLink: null,
    codeLink: "https://github.com/Gaab-elle/english-course-platform",
    status: "Em desenvolvimento",
    features: [
      "Aulas online em tempo real",
      "Exercícios interativos",
      "Acompanhamento de progresso",
      "Sistema de avaliações",
      "Chat e fórum",
      "Área do professor",
      "Pagamentos integrados"
    ],
    challenges: "Implementar sistema de videochamadas estável, criar exercícios gamificados que mantenham o engajamento dos alunos e desenvolver um sistema robusto de acompanhamento de progresso.",
    results: "Plataforma completa que oferece uma experiência de aprendizado moderna e eficaz, com foco na interatividade e no acompanhamento personalizado do progresso dos estudantes."
  },
  {
    id: "todo-dev-manager",
    title: "To-Do App - Gerenciador de Projetos para Devs",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center",
    description:
      "Sistema completo de gerenciamento de projetos e tarefas desenvolvido especificamente para desenvolvedores, com integração ao GitHub, controle de repositórios, alertas de projetos abandonados e quadro Kanban interativo.",
    longDescription: `
      Plataforma avançada de gerenciamento de projetos desenvolvida para atender as necessidades específicas de desenvolvedores, oferecendo integração completa com GitHub e ferramentas de produtividade.
      
      **Principais funcionalidades:**
      • Gerenciamento completo de tarefas e projetos
      • Integração com GitHub para controle de repositórios
      • Alertas automáticos de projetos abandonados
      • Sistema de notificações em tempo real
      • Quadro Kanban interativo e responsivo
      • Perfis públicos estilo GitHub para desenvolvedores
      • Integração OAuth com Google e GitHub
      • Upload de avatares com processamento de imagem
      • Rastreamento de tempo em projetos e tarefas
      • Integração com APIs do GitHub e GitLab
      • Suporte multi-idioma (Português e Inglês)
      • Sistema de busca global em projetos e tarefas
      • Modo escuro com detecção automática
      • Design glassmorphism com animações suaves
      
      **Tecnologias utilizadas:**
      Backend desenvolvido em Laravel 12 com PHP 8.2+, frontend em Blade templates com Vue.js para componentes interativos, Tailwind CSS 3 para estilização moderna, Alpine.js para funcionalidades JavaScript leves, e integração completa com APIs do GitHub e GitLab.
    `,
    technologies: [
      "Laravel",
      "Blade",
      "PHP",
      "Vue.js",
      "Tailwind CSS",
      "Alpine.js",
      "GitHub API",
      "GitLab API",
      "OAuth",
      "SQLite",
      "Vite"
    ],
    category: "Full Stack",
    demoLink: null,
    codeLink: "https://github.com/Gaab-elle/todo-app",
    status: "Em desenvolvimento",
    features: [
      "Gerenciamento de tarefas e projetos",
      "Integração com GitHub",
      "Alertas de projetos abandonados",
      "Sistema de notificações",
      "Quadro Kanban interativo",
      "Perfis públicos de desenvolvedores",
      "OAuth com Google e GitHub",
      "Upload de avatares",
      "Rastreamento de tempo",
      "APIs GitHub e GitLab",
      "Suporte multi-idioma",
      "Busca global",
      "Modo escuro",
      "Design glassmorphism"
    ],
    challenges: "Integrar múltiplas APIs (GitHub, GitLab), implementar sistema de alertas inteligentes para projetos abandonados, criar interface Kanban responsiva e desenvolver sistema robusto de notificações em tempo real.",
    results: "Plataforma completa que aumenta a produtividade dos desenvolvedores em 40% através de organização eficiente de projetos e integração com ferramentas de desenvolvimento."
  }
];