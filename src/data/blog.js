export const blogPosts = [
    {
        id: 1,
        title: "Como implementei autenticação JWT em React",
        excerpt: "Aprenda a implementar autenticação segura em aplicações React usando JWT tokens.",
        content: `
# Como implementei autenticação JWT em React

A autenticação é uma das partes mais importantes de qualquer aplicação web. Neste artigo, vou compartilhar como implementei um sistema de autenticação completo usando JWT (JSON Web Tokens) em React.

## O que é JWT?

JWT é um padrão aberto (RFC 7519) que define uma forma compacta e segura de transmitir informações entre as partes como um objeto JSON. Essas informações podem ser verificadas e confiáveis porque são assinadas digitalmente.

## Estrutura do JWT

Um JWT é composto por três partes separadas por pontos:
- **Header**: Contém o tipo de token e o algoritmo de assinatura
- **Payload**: Contém as claims (informações sobre o usuário)
- **Signature**: Usada para verificar se o token não foi alterado

## Implementação no Frontend

Primeiro, criei um contexto para gerenciar o estado de autenticação:

\`\`\`javascript
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  
  const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    const { token, user } = response.data;
    
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
  };
  
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };
  
  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
\`\`\`

## Interceptador de Requisições

Para automatizar o envio do token em todas as requisições, configurei um interceptador no Axios:

\`\`\`javascript
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
\`\`\`

## Proteção de Rotas

Criei um componente para proteger rotas que requerem autenticação:

\`\`\`javascript
const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};
\`\`\`

## Considerações de Segurança

1. **Armazenamento**: Evite armazenar tokens em localStorage em produção
2. **Expiração**: Sempre defina um tempo de expiração adequado
3. **Refresh Tokens**: Implemente refresh tokens para sessões longas
4. **HTTPS**: Sempre use HTTPS em produção

## Conclusão

A implementação de JWT em React oferece uma forma elegante e segura de gerenciar autenticação. O importante é sempre pensar na segurança e nas melhores práticas.

Espero que este artigo tenha sido útil! Se tiver dúvidas, deixe um comentário.
        `,
        date: "2025-01-08",
        category: "React",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop&crop=center",
        tags: ["React", "JWT", "Authentication", "Security"],
        author: "Gabi Ribeiro"
    },
    {
        id: 2,
        title: "OWASP Top 10: Vulnerabilidades que todo dev deve conhecer",
        excerpt: "Guia prático sobre as 10 principais vulnerabilidades de segurança em aplicações web.",
        content: `
# OWASP Top 10: Vulnerabilidades que todo dev deve conhecer

A OWASP (Open Web Application Security Project) mantém uma lista das principais vulnerabilidades de segurança em aplicações web. Vou explicar cada uma e como se proteger.

## 1. Injection

**O que é**: Falhas de injeção ocorrem quando dados não confiáveis são enviados para um interpretador como parte de um comando ou consulta.

**Como se proteger**:
- Use prepared statements
- Validação de entrada
- Princípio do menor privilégio

\`\`\`sql
-- ❌ Vulnerável
SELECT * FROM users WHERE id = $id;

-- ✅ Seguro
SELECT * FROM users WHERE id = ?;
\`\`\`

## 2. Broken Authentication

**O que é**: Falhas na implementação de autenticação que permitem que atacantes comprometam senhas, chaves ou tokens.

**Como se proteger**:
- Multi-factor authentication
- Políticas de senha forte
- Limitação de tentativas de login

## 3. Sensitive Data Exposure

**O que é**: Exposição de dados sensíveis devido à falta de proteção adequada.

**Como se proteger**:
- Criptografia de dados sensíveis
- HTTPS em todas as comunicações
- Não armazenar dados desnecessários

## 4. XML External Entities (XXE)

**O que é**: Vulnerabilidade que permite ataques contra aplicações que processam XML.

**Como se proteger**:
- Desabilitar entidades externas
- Usar formatos mais seguros como JSON
- Validação de entrada

## 5. Broken Access Control

**O que é**: Falhas na implementação de controle de acesso.

**Como se proteger**:
- Implementar verificação de autorização
- Princípio do menor privilégio
- Logs de acesso

## 6. Security Misconfiguration

**O que é**: Configurações inadequadas de segurança.

**Como se proteger**:
- Remover funcionalidades desnecessárias
- Configurar headers de segurança
- Manter sistemas atualizados

## 7. Cross-Site Scripting (XSS)

**O que é**: Permite que atacantes executem scripts maliciosos no navegador das vítimas.

**Como se proteger**:
- Escape de saída
- Content Security Policy
- Validação de entrada

## 8. Insecure Deserialization

**O que é**: Falhas na deserialização que podem levar à execução remota de código.

**Como se proteger**:
- Validação de integridade
- Isolamento de código
- Monitoramento de deserialização

## 9. Using Components with Known Vulnerabilities

**O que é**: Uso de componentes com vulnerabilidades conhecidas.

**Como se proteger**:
- Manter dependências atualizadas
- Monitorar vulnerabilidades
- Usar ferramentas de análise

## 10. Insufficient Logging & Monitoring

**O que é**: Falta de logs e monitoramento adequados.

**Como se proteger**:
- Implementar logs detalhados
- Monitoramento em tempo real
- Alertas de segurança

## Conclusão

A segurança é um processo contínuo. Mantenha-se atualizado com as últimas ameaças e melhores práticas!
        `,
        date: "2025-01-05",
        category: "Security",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop&crop=center",
        tags: ["OWASP", "Security", "Vulnerabilities", "WebSec"],
        author: "Gabi Ribeiro"
    },
    {
    id: 3,
    title: "Digispark: O 'Pendrive da Força' que Pode te Transformar num Jedi da Cibersegurança",
    excerpt: "Como uma 'gambiarra' de R$ 15 pode ensinar mais sobre segurança que cursos caros. Descubra o poder do Digispark no hacking ético!",
    content: `
# Digispark: O "Pendrive da Força" que Pode te Transformar num Jedi da Cibersegurança

## Ou: Como uma Gambiarra de R$ 15 Pode Ensinar Mais sobre Segurança que Cursos de R$ 1500

Em uma galáxia muito, muito distante... Na verdade, não! Bem aqui em Belém mesmo, onde a criatividade paraense encontra a tecnologia mundial, existe uma pequena ferramenta que parece um pendrive qualquer mas tem o poder de um sabre de luz nas mãos certas. Estamos falando do Digispark - o Baby Yoda do mundo hacking!

## 🔧 O Que é o Digispark?

Imagine um pendrive que, ao invés de só guardar fotos da sua Ex e seus bregas marcantes, pode literalmente "conversar" com qualquer computador, se passando por teclado, mouse ou qualquer dispositivo USB. É como se fosse um R2-D2 disfarçado de pen drive comum!

### A "Gambiarra" Genial
O Digispark é menor que seu polegar - você pode esconder um debaixo de uma moeda! Mas não se deixe enganar pelo tamanho. Este microcontrolador é como aquelas gambiarras geniais que só o brasileiro sabe fazer: parece simples, mas resolve problemas complexos.

**Características:**
- Tamanho minúsculo (menor que uma moeda)
- Programável via Arduino IDE
- Simula qualquer dispositivo USB
- Custo baixíssimo (R$ 15-30)

## ⚡ O Poder do Digispark: Jedi ou Sith?

### 🌑 O Lado Sombrio (Que Você Precisa Conhecer)
O Digispark pode ser programado como um BadUSB - imagine um pendrive possuído que começa a digitar comandos sozinho no computador!

**Exemplos do que um Sith faria** (mas que você NUNCA deve fazer sem autorização):
- **Invasor Silencioso**: Abrir cmd, baixar malware e executar tudo em segundos
- **Destruidor de Antivírus**: Desabilitar proteções mais rápido que você diz "armadilha!"
- **Espião Digital**: Capturar senhas e enviar para servidor remoto
- **Palhaço Maldoso**: Abrir notepad e escrever "VOCÊ FOI HACKEADO!"

### 🌟 O Lado da Força (Hacking Ético)
Nas mãos de um Jedi da cibersegurança, ele se torna uma arma poderosa de **proteção**!

**O que um Jedi faz:**
- **Testa Vulnerabilidades**: Simula ataques para identificar falhas
- **Educa Funcionários**: Demonstra ataques reais criando consciência
- **Melhora Defesas**: Identifica pontos fracos para fortalecer segurança
- **Automatiza Tarefas**: Login automático, backups, demos educativas

## 🧘‍♂️ O Código Jedi da Cibersegurança

### Princípios Éticos Fundamentais:

**🤝 Consentimento é Sagrado**
NUNCA use o Digispark em computador que não seja seu ou sem autorização explícita. Isso é crime!

**📜 Transparência Total**
Se é pentester, sempre documente tudo, tenha contratos assinados e deixe claro o que está testando.

**🎯 Objetivo Nobre**
Use conhecimentos para proteger, não atacar. Seja o Obi-Wan da sua empresa!

## 🚀 Seus Primeiros Passos no Treinamento Jedi

### Onde Encontrar Seu Digispark
- **Online**: AliExpress, MercadoLivre, Amazon (R$ 15-30)
- **Presencial**: Casas especializadas em Arduino

### Arsenal do Jedi Iniciante
- Arduino IDE (software gratuito)
- Drivers USB
- Ambiente de teste próprio
- Tutoriais básicos

### Seu Primeiro "Hello, World!" Jedi

\`\`\`arduino
#include "DigiKeyboard.h"

void setup() {
  DigiKeyboard.delay(3000);
  DigiKeyboard.sendKeyStroke(KEY_R, MOD_GUI_LEFT); // Win+R
  DigiKeyboard.delay(500);
  DigiKeyboard.println("notepad");
  DigiKeyboard.delay(1000);
  DigiKeyboard.println("A Força está com você, Padawan!");
  DigiKeyboard.println("Bem-vindo à cibersegurança ética!");
}

void loop() {
  // Executa só uma vez
}
\`\`\`

## 🛡️ Projetos para Evoluir

### 🥋 Nível Padawan
- Automatizador de login (só seus PCs!)
- Backup express
- Demo anti-phishing
- Alertas de segurança

### ⚔️ Nível Cavaleiro Jedi
- Simulador de ataques controlados
- Teste de políticas USB
- Auditoria automatizada
- Workshops interativos

### 🌟 Nível Mestre Jedi
- Framework completo de testes
- Plataforma educacional
- Consultoria automatizada
- Pesquisa de vulnerabilidades

## ⚠️ Defendendo-se do Lado Sombrio

### Como se Proteger:
- **Nunca conecte pendrives desconhecidos**
- **Desabilite autorun** no Windows
- **Use antivírus atualizado**
- **Política de USB** em empresas
- **Educação constante** é a melhor defesa

## 💼 Carreiras no Lado da Luz

### Oportunidades Jedi:
- **Pentester**: R$ 8.000-15.000+
- **Analista de Segurança**: R$ 5.000-12.000
- **Consultor**: R$ 100-300/hora
- **Security Researcher**: R$ 10.000-20.000+
- **CISO**: R$ 15.000-40.000+

### Como se Qualificar:
- Certificações: CEH, CISSP, Security+
- Plataformas práticas: TryHackMe, HackTheBox
- Projetos no GitHub
- Participação em comunidades

## 🌟 Conclusão: Que a Força Esteja com Você

O Digispark é pequeno como um grão de açaí, mas poderoso como a correnteza do Rio Amazonas. Nas mãos certas, pode ser a chave para um futuro mais seguro e uma carreira próspera na cibersegurança.

**Lembre-se sempre:**
- 🤝 Consentimento é sagrado
- 📚 Conhecimento é poder - use para proteger
- 🌟 A Força é forte, mas a responsabilidade é mais forte
- 🇧🇷 Somos brasileiros - criatividade para o bem!

De Belém para a galáxia, de gambiarras brasileiras para soluções globais de segurança, o caminho está aberto. A escolha é sua, jovem Padawan!

**Que a Força (e a ética) estejam sempre com você!** ⚔️✨

---

*Se você chegou até aqui sem correr para comprar um Digispark, é porque realmente entendeu o poder da responsabilidade! E lembra: se usar essas informações para o mal, Yoda vai aparecer nos seus sonhos! 👻⚔️*
    `,
    date: "2025-07-08",
    category: "Security",
    readTime: "10 min",
    image: '/Img/Digispark (1).jpeg',
    tags: ["Digispark", "Hacking Ético", "Cibersegurança", "BadUSB", "Pentesting"],
    author: "Gabi Ribeiro"
},
 {
    id: 4,
    title: "Java vs Python: Por que Java é Melhor para Iniciantes",
    excerpt: "Uma análise divertida de por que Java, exemplificado pelo sucesso do Minecraft, oferece uma base mais sólida para iniciantes em programação do que Python.",
    content: `
# Java vs Python: Por que Java é Melhor para Iniciantes

## Ou: Como o Minecraft Provou que Java é Mais Legal que Cobras

Em Belém, onde o sol se põe deslumbrante e a inovação tecnológica floresce (e onde o calor faz você questionar suas escolhas de vida), a pergunta sobre qual linguagem de programação é a melhor para iniciantes ressoa entre entusiastas e aspirantes a desenvolvedores. Dentre as gigantes Python e Java, a discussão sobre qual delas oferece o melhor ponto de partida é mais acalorada que um debate sobre açaí com granola e ninho.

## 🧱 Por que Java Constrói Bases Mais Sólidas

Java pode parecer mais "assustador" com sua sintaxe rigorosa, mas é exatamente essa exigência que constrói uma base de conhecimento mais sólida - como construir uma casa de bedrock em vez de areia.

### Tipagem Estática: O GPS do Seu Código

Diferentemente de Python, Java exige declarações explícitas de tipos:

**Python (Problemático):**
\`\`\`python
def dividir(a, b):
    return a / b

resultado = dividir(10, "dois")  # Erro só na execução!
\`\`\`

**Java (Seguro):**
\`\`\`java
public static double dividir(double a, double b) {
    if (b == 0) {
        throw new ArithmeticException("Divisão por zero!");
    }
    return a / b;
}
\`\`\`

Java te obriga a pensar nos erros **antes** que eles aconteçam!

## 🎮 Minecraft: O Exemplo Definitivo do Poder Java

O Minecraft não é apenas um jogo - é um universo de possibilidades! Desenvolvido inteiramente em Java por Markus "Notch" Persson, o jogo prova que Java permite criar aplicações complexas e escaláveis.

**Fatos impressionantes:**
- Mais de 300 milhões de cópias vendidas
- Criado por um programador "normal" que se tornou bilionário
- Demonstra o potencial extraordinário do Java

### Aprendizado Através da Prática

Desenvolver mods para Minecraft oferece:
- **Resultados tangíveis**: Cada linha de código vira ação no jogo
- **OOP na prática**: Interação com Player, Block, World
- **Motivação constante**: Gratificação instantânea mantém o engajamento

## ⚔️ Java vs Python: Comparação Honesta

### Sintaxe
**Python:**
\`\`\`python
print("Hello World!")
\`\`\`

**Java:**
\`\`\`java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
\`\`\`

Python é tipo mandar um "oi" no WhatsApp, Java é uma carta formal - mais trabalhoso, mas ensina disciplina!

### Performance
- **Java**: Como uma Ferrari - compilado, otimizado pela JVM
- **Python**: Como um fusca - interpretado, mais lento

### Mercado de Trabalho
**Java oferece:**
- Maior número de oportunidades
- Salários médios superiores
- Projetos de maior escala
- Comunidade empresarial estabelecida

## 🚀 Vantagens do Java para Iniciantes

### 1. Base Sólida
Java prepara para o rigor encontrado em projetos reais - como aprender os alicerces antes de construir o prédio.

### 2. Ponte para o Mundo Corporativo
- Linguagem do Android
- Usada por Google, Netflix, Amazon
- Gateway para Spring Framework, microservices

### 3. Ferramentas Superiores
IDEs como IntelliJ IDEA e Eclipse oferecem recursos avançados de debugging e análise.

## 🐍 Desvantagens do Python para Iniciantes

### Flexibilidade Excessiva
A filosofia "só existe uma maneira" do Python é violada mais que limite de velocidade. Múltiplas abordagens confundem iniciantes.

### Limitações de Performance
Para jogos, gráficos ou processamento intensivo, Python é frustrante - como correr maratona de chinelos.

### Transição Difícil
Iniciantes que começam com Python lutam ao migrar para linguagens compiladas.

## 🏆 Conclusão: Escolha Sua Aventura

Para quem busca não apenas escrever código, mas **entender** como software é construído, Java oferece base inigualável. É como escolher entre aprender a dirigir num Uno ou numa Ferrari - a Ferrari é mais complicada no início, mas quando você domina, pode dirigir qualquer coisa!

### O Caminho Java
1. **Comece com Minecraft**: Crie mods divertidos
2. **Domine os fundamentos**: OOP, tipagem, exceções
3. **Expanda horizontes**: Android, web, enterprise

### A Pergunta Final
Qual será a primeira modificação que você fará no Minecraft com Java? Um mod de pizzas voadoras? Creepers amigáveis? Ou talvez você sonhe maior: o próximo jogo viral?

**Java te dará as ferramentas para construir não apenas mundos virtuais, mas o futuro digital. O céu não é o limite - é apenas o ponto de partida!** 🚀☕

---

*Gostou do artigo? Java é tipo o açaí de Belém - pode até existir imitação por aí, mas o original sempre vai ser superior!* 🥣☕
--Leia o artigo completo no meu blog:
    `,
    date: "2025-07-07",
    category: "Programming",
    readTime: "12 min",
    image: '/Img/javaxpython.png',
    tags: ["Java", "Python", "Programming", "Minecraft", "Iniciantes"],
    author: "Gabi Ribeiro"
}]