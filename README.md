## Running React on Replit

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)
# Landing Page Banco Jota - Consórcio Imobiliário

## Descrição do Projeto

Landing page one page desenvolvida para captação e qualificação de leads de consórcio consultivo do Banco Jota. O projeto conta com design responsivo, integração com WhatsApp e foco em conversão.

## Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utility-first
- **JavaScript** - Linguagem de programação

## Paleta de Cores

```css
colors: {
  'bj-blue-dark': '#21253D',
  'bj-blue': '#364AA5', 
  'bj-blue-light': '#6C74DB',
  'bj-black': '#19191B',
  'white': '#FFFFFF',
}
```

## Estrutura da Página

### Seções Principais:
1. **Header/Navegação** - Menu fixo com links âncora
2. **Hero Section** - Título impactante e CTAs principais
3. **Sobre** - Apresentação do Banco Jota e diferenciais
4. **Benefícios** - Vantagens do consórcio (8 cards)
5. **Como Funciona** - Processo em 5 etapas
6. **Depoimentos** - Prova social com avaliações
7. **Formulário de Contato** - Integração com WhatsApp
8. **FAQ** - Perguntas frequentes
9. **Footer** - Links legais e informações de contato

## Funcionalidades

- ✅ Layout 100% responsivo (mobile-first)
- ✅ Navegação suave por âncoras
- ✅ Formulário integrado ao WhatsApp
- ✅ Validação LGPD obrigatória
- ✅ Design moderno e profissional
- ✅ SEO otimizado
- ✅ Animações CSS suaves

## Como Executar

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Personalização

### Alterando Cores
Edite o arquivo `tailwind.config.js` para modificar a paleta de cores.

### Conteúdo
- Textos e copywriting estão no componente `App.jsx`
- Imagens devem ser colocadas na pasta `public/`
- Logo do Banco Jota está em `attached_assets/`

### WhatsApp
Para alterar o número do WhatsApp, modifique a linha no `App.jsx`:
```javascript
const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
```

## Deploy

O projeto está configurado para deploy automático no Replit. Para outras plataformas:

```bash
npm run build
```

Os arquivos de produção ficam na pasta `dist/`.

## Estrutura de Arquivos

```
├── src/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos globais e Tailwind
│   └── index.jsx        # Entry point
├── public/              # Arquivos estáticos
├── attached_assets/     # Logo e recursos do projeto
└── README.md           # Documentação
```

## Páginas Legais (Pendentes)

As seguintes páginas legais devem ser criadas:
- Política de Privacidade
- Termos de Uso  
- LGPD

## Suporte

Para dúvidas ou modificações, consulte a documentação do React e Tailwind CSS.
