# 🪟 Portfolio Windows 7 - Gabi Ribeiro

Um portfolio interativo com tema Windows 7, criado com React e Vite. Uma experiência nostálgica que simula perfeitamente a interface clássica do Windows 7!

## ✨ Funcionalidades

### 🖥️ Interface Windows 7
- **Desktop com wallpaper gradiente** estilo Windows 7
- **Ícones do desktop** clicáveis para abrir seções
- **Barra de tarefas** com botão iniciar e relógio em tempo real
- **Menu iniciar** funcional com lista de programas
- **Janelas redimensionáveis** com barras de título autênticas
- **Botões de janela** (minimizar, maximizar, fechar)

### 🎮 Interatividade
- **Arrastar janelas** pela barra de título
- **Redimensionar janelas** pelo canto inferior direito
- **Minimizar/maximizar** janelas
- **Duplo clique** nos ícones do desktop para abrir seções
- **Menu iniciar** com navegação por seções
- **Ícones caindo** como efeito visual de fundo

### 📱 Seções do Portfolio
- **Sobre Mim** - Apresentação pessoal
- **Habilidades** - Competências técnicas
- **Projetos** - Trabalhos e projetos desenvolvidos
- **Blog** - Artigos e pensamentos
- **Contato** - Informações de contato

## 🚀 Como usar

### Instalação
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

### Navegação
1. **Duplo clique** nos ícones do desktop para abrir seções
2. **Clique** no botão "Iniciar" para abrir o menu
3. **Arraste** as janelas pela barra azul de título
4. **Redimensione** as janelas pelo canto inferior direito
5. **Use** os botões de janela (minimizar, maximizar, fechar)
6. **Clique** nos itens da barra de tarefas para alternar entre janelas

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **Lucide React** - Ícones
- **CSS3** - Animações e efeitos visuais

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/
│   │   ├── WindowFrame.jsx      # Componente de janela
│   │   ├── WindowManager.jsx    # Gerenciador de janelas
│   │   ├── Taskbar.jsx          # Barra de tarefas
│   │   ├── StartMenu.jsx        # Menu iniciar
│   │   └── DesktopIcons.jsx     # Ícones do desktop
│   ├── sections/                # Seções do portfolio
│   └── modals/                  # Modais para projetos e blog
├── styles/
│   ├── globals.css              # Estilos globais
│   └── windows7.css             # Tema Windows 7
└── data/                        # Dados do portfolio
```

## 🎨 Características Visuais

- **Gradientes** autênticos do Windows 7
- **Sombras** e **bordas** realistas
- **Animações** suaves de abertura/fechamento
- **Efeitos hover** nos botões e ícones
- **Scrollbars** customizadas
- **Ícones caindo** como efeito de fundo

## 🔧 Personalização

### Adicionar novas seções
1. Crie um novo componente em `src/components/sections/`
2. Adicione o item no array `desktopItems` em `DesktopIcons.jsx`
3. Adicione o item no array `menuItems` em `StartMenu.jsx`
4. Configure o conteúdo em `getContentForItem()`

### Modificar cores e estilos
- Edite `src/styles/windows7.css` para cores e layout
- Edite `src/styles/globals.css` para estilos globais

## 🌟 Destaques

- **100% responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Suporte completo para touch** - Otimizado para Android e iOS
- **Performance otimizada** - Carregamento rápido em todos os dispositivos
- **Acessibilidade** - Suporte a navegação por teclado e touch
- **Cross-browser** - Compatível com todos os navegadores modernos
- **Mobile-first** - Interface adaptada para dispositivos móveis

## 📱 Recursos Mobile

### 🎯 **Otimizações para Mobile:**
- **Layout adaptativo** - Ícones reorganizados em coluna no mobile
- **Touch-friendly** - Botões e elementos otimizados para toque
- **Janelas em tela cheia** - Ocupam toda a tela em dispositivos móveis
- **Menu iniciar mobile** - Aparece como modal na parte inferior
- **Drag and drop touch** - Suporte completo para arrastar com dedos
- **Helper mobile** - Tutorial inicial para usuários mobile

### 📐 **Breakpoints:**
- **Desktop:** > 768px - Layout completo Windows 7
- **Tablet:** 768px - Layout híbrido
- **Mobile:** < 768px - Layout otimizado para touch
- **Small Mobile:** < 480px - Layout compacto

### 🎮 **Interações Mobile:**
- **Toque simples** - Abre seções
- **Arrastar** - Move ícones e janelas
- **Pinch/zoom** - Suporte nativo do navegador
- **Orientação** - Adapta-se a portrait e landscape

## 📄 Licença

Este projeto é open source e está disponível sob a licença MIT.

---

**Developed by Gabrielle Ribeiro**

*Uma homenagem nostálgica ao Windows 7, o sistema operacional que marcou uma geração!*
