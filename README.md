# 🌞 Solar Brasil - Energia Solar Fotovoltaica

**[🚀 Live Demo: solarbrasil.vercel.app](https://solarbrasil.vercel.app)**

> Uma aplicação web moderna e interativa para demonstração de serviços de energia solar fotovoltaica, desenvolvida como projeto de portfólio para uma empresa fictícia de soluções sustentáveis.

---

## 📋 Sobre o Projeto

**Solar Brasil** é um website institucional completo desenvolvido para demonstrar habilidades avançadas na criação de sites para empresas do setor de energia solar. O projeto simula uma empresa fictícia com todas as funcionalidades essenciais que um cliente real precisaria: design profissional, interatividade impressionante, simulador de economia, e estrutura completa para conversão de visitantes em clientes.

### 🎯 Objetivo Principal

Demonstrar competência técnica e criativa no desenvolvimento de:
- **Sites institucionais modernos** para empresas de energia solar
- **Experiências interativas** que engajam e convertem visitantes
- **Design responsivo** que funciona perfeitamente em todos dispositivos
- **Performance otimizada** para melhor experiência do usuário
- **Arquitetura escalável** que pode ser adaptada para clientes reais

---

## 🚀 Tecnologias Utilizadas

### Frontend Core
- **Next.js 16.2.1** - Framework React com renderização server-side
- **React 19.2.4** - Biblioteca principal de componentes
- **TypeScript 5** - Tipagem estática para maior robustez

### Estilização & Design
- **Tailwind CSS 4** - Framework de utilitários CSS
- **PostCSS** - Processamento CSS avançado
- **CSS Custom Properties** - Sistema de design consistente

### Animações & Interações
- **Framer Motion 12.38.0** - Animações fluidas e micro-interações
- **Typed.js 3.0.0** - Efeito de digitação dinâmico
- **Canvas Confetti** - Animações de celebração

### Ícones & UI
- **Lucide React 1.7.0** - Biblioteca de ícones moderna
- **Font Awesome 7.2.0** - Ícones adicionais

### Utilitários
- **clsx 2.1.1** - Utilitário de classes CSS
- **tailwind-merge 3.5.0** - Merge de classes Tailwind

---

## 🎨 Features & Funcionalidades

### 🏠 Página Principal (Hero Section)
- **Vídeo Background** - Player otimizado com autoplay
- **Animações Parallax** - Efeitos de scroll suaves
- **Call-to-Actions Interativos** - Botões com hover effects
- **Indicadores de Scroll** - UX intuitivo de navegação

### 📊 Simulador de Economia
- **Range Sliders Dinâmicos** - Seleção intuitiva de valores
- **Dropdowns Customizados** - Seleção de estado/cidade via API IBGE
- **Cálculo em Tempo Real** - Feedback instantâneo ao usuário
- **Design Responsivo** - Funciona perfeitamente em todos dispositivos

### 💬 Seção de Benefícios
- **Cards Comparativos** - Visual clara de antes/depois
- **Animações Typed.js** - Texto que digita automaticamente
- **Interatividade Hover** - Feedback visual ao passar mouse
- **Background Dinâmico** - Cores que mudam conforme interação

### 🌟 Seção Sobre Nós
- **Carrossel de Imagens** - Galerias com navegação suave
- **Contadores Animados** - Estatísticas com animação
- **Process Step-by-Step** - Fluxo de trabalho interativo
- **Grid Pattern Background** - Design visual sofisticado

### 🎉 Depoimentos de Clientes
- **Cards Flutuantes** - Efeito 3D ao hover
- **Confetti Animation** - Celebração automática ao scroll
- **Avaliação por Estrelas** - Sistema de rating visual
- **Layout Responsivo** - Adaptação perfeita

### 📞 Contato & Formulário
- **Formulário Completo** - Campos validados e estilizados
- **Informações de Contato** - Display profissional
- **Botão WhatsApp Flutuante** - Acesso rápido ao suporte
- **Design Glassmorphism** - Efeitos modernos de vidro

### 📱 Navegação & UX
- **Navbar Fixa** - Com efeito de transparência
- **Menu Mobile** - Hamburguer menu animado
- **Scroll Suave** - Navegação interna fluida
- **Progress Bar** - Indicador de leitura da página

---

## 🏗️ Estrutura do Projeto

```
solarBrasil/
├── app/                    # App Router Next.js 13+
│   ├── globals.css        # Estilos globais e variáveis
│   ├── layout.tsx         # Layout principal da aplicação
│   ├── page.tsx           # Página home
│   └── links/             # Página de links (linktree)
│       └── page.tsx
├── components/             # Componentes React reutilizáveis
│   ├── HeroSection.tsx    # Hero com vídeo background
│   ├── Navbar.tsx         # Navegação principal
│   ├── MobileNavbar.tsx   # Menu mobile
│   ├── WhySolarSection.tsx # Seção de benefícios
│   ├── SavingsSimulatorSection.tsx # Simulador
│   ├── BenefitsSection.tsx # Cards comparativos
│   ├── AboutSection.tsx   # Sobre a empresa
│   ├── FeedbackSection.tsx # Depoimentos
│   ├── ContactSection.tsx # Formulário de contato
│   ├── Footer.tsx         # Rodapé
│   ├── WhatsAppButton.tsx # Botão flutuante
│   ├── DeveloperButton.tsx # Créditos do dev
│   ├── SectionHeading.tsx # Títulos de seções
│   ├── CustomDropdown.tsx # Dropdown customizado
│   ├── LocationDropdown.tsx # Seleção de local
│   └── LocationModal.tsx  # Modal de estados/cidades
├── lib/                   # Bibliotecas e utilitários
│   └── utils.ts          # Funções helper (cn, etc.)
├── public/                # Assets estáticos
│   ├── images/           # Imagens do projeto
│   │   ├── clouds/       # Nuvens animadas
│   │   ├── abouteus.webp
│   │   ├── aboutus-ceilein.jpeg
│   │   ├── aboutus.jpg
│   │   ├── boleto.png
│   │   ├── eduardo.png
│   │   ├── solar-panel.png
│   │   └── sun.png
│   ├── videos/           # Vídeos para background
│   │   └── solar-panel.mp4
│   └── icons/            # Ícones do framework
└── package.json          # Dependências e scripts
```

---

## 🚀 Quick Start

### Pré-requisitos

- **Node.js** 18.0.0 ou superior
- **npm** 9.0.0 ou superior (ou yarn/pnpm)
- **Git** para controle de versão

### Instalação Rápida

```bash
# 1. Clone o repositório
git clone https://github.com/EduardoMarinho237/solarBrasil.git
cd solarBrasil

# 2. Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev

# 4. Abra no navegador
# Acesse http://localhost:3000
```

---

## 🎯 Principais Conceitos Técnicos

### Performance & Otimização
- **Lazy Loading** - Componentes carregados sob demanda
- **Image Optimization** - Otimização automática de imagens
- **Code Splitting** - Divisão automática do bundle
- **Tree Shaking** - Eliminação de código não utilizado

### SEO & Acessibilidade
- **Meta Tags Dinâmicas** - SEO otimizado
- **Semantic HTML5** - Estrutura semântica correta
- **ARIA Labels** - Acessibilidade para screen readers
- **Keyboard Navigation** - Navegação por teclado

### Design System
- **Cores Customizadas** - Paleta de marca consistente
- **Tipografia Unificada** - Font Outfit como primary
- **Espaçamento Padronizado** - Sistema de spacing
- **Componentes Reutilizáveis** - Arquitetura modular

---

## 🔧 Desenvolvimento & Scripts

### Scripts Disponíveis

```json
{
  "dev": "next dev",           // Servidor de desenvolvimento
  "build": "next build",       // Build para produção
  "start": "next start",      // Servidor de produção
  "lint": "eslint"            // Verificação de código
}
```

### Comandos Úteis

```bash
# Verificar linting
npm run lint

# Build otimizado
npm run build

# Análise de bundle
npm install @next/bundle-analyzer
npx next-bundle-analyzer

# Testar performance
npx lighthouse http://localhost:3000
```

---

## 🎨 Customização & Theming

### Sistema de Cores

```css
:root {
  --color-beige: #FDFBF7;           /* Background principal */
  --color-solar-yellow: #FFD23F;   /* Destaques e CTAs */
  --color-solar-blue: #0056B3;     /* Links e elementos */
  --color-solar-dark: #0A192F;     /* Textos e overlays */
}
```

### Tipografia

- **Font Family**: Outfit (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Tamanhos adaptativos por breakpoint

### Breakpoints

```css
/* Mobile First Approach */
sm: 640px    /* Small devices */
md: 768px    /* Tablets */
lg: 1024px   /* Laptops */
xl: 1280px   /* Desktops */
2xl: 1536px  /* Large screens */
```

---

## 🚀 Deploy & Produção

### Vercel (Recomendado)

1. **Conecte seu repositório** GitHub/GitLab
2. **Configure build command**: `npm run build`
3. **Configure output directory**: `.next`
4. **Deploy automático** em cada push para main

### Docker (Alternativa)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Configure redirects** para SPA routing

---

## 📊 Performance & Métricas

### Lighthouse Scores (Target)
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Otimizações Implementadas
- **Critical CSS Inlining**
- **Image Lazy Loading**
- **Font Preloading**
- **Resource Hints** (preconnect, prefetch)
- **Service Worker** (PWA ready)

---

## 🙏 Créditos

### Desenvolvimento
- **Eduardo Marinho** - Desenvolvedor Full Stack
- **Portfolio**: [github.com/eduardomarinho237](https://github.com/EduardoMarinho237)
- **Contato**: wa.me/5581991007965

### Recursos Externos
- **Imagens**: Pixabay, google
- **Vídeos**: Pixabay
- **Ícones**: Lucide React, Font Awesome
- **API**: IBGE (para dados de cidades)

---

## 📞 Contato & Suporte

### Para este Projeto Demo
- **WhatsApp**: [55 81 99100-7965](https://wa.me/5581991007965)
- **Email**: edu.docxl@gmail.com

### Para a Empresa Fictícia (Demo)
- **Site**: solarbrasil.vercel.app
- **WhatsApp**: 0800 123 4567
- **Email**: contato@solarbrasil.com.br
- Nenhum desses contatos de fato vai te responder, eu acho, Hahaha

---


## 🔍 Insights Técnicos

### Arquitetura de Componentes
- **Atomic Design** - Componentes atômicos reutilizáveis
- **Compound Components** - Padrões flexíveis
- **Render Props** - Compartilhamento de lógica
- **Custom Hooks** - Estado e side effects

### Estado Global
- **Context API** para tema e preferências
- **Local Storage** para persistência de dados
- **URL State** para compartilhamento de simulações

### Performance Monitoring
- **Web Vitals** tracking
- **Error Boundaries** para graceful degradation
- **Analytics** integration ready
- **A/B Testing** framework ready

---

**⚡ Transformando luz do sol em oportunidades digitais! 🌞**

---

> *Este é um projeto de demonstração desenvolvido para portfólio. A empresa Solar Brasil é fictícia e os dados são apenas para fins ilustrativos.*
