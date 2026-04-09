# Airbnd-Replica

## Back-end

- **Node.js + Express Server**
  - index.js
  - server.js
  - package.json

  ### Config
  - db.js (Configuração do Banco de Dados)

  ### Domains

  #### Places
  - controller.js (Lógica de negócio para lugares)
  - model.js (Schema do MongoDB)
  - routes.js (Rotas de lugares)

  #### Users
  - model.js (Schema de usuários)
  - routes.js (Rotas de autenticação)

  ### Routes
  - index.js (Agregador de rotas)

  ### Utils
  - imageDownloader.js (Download e processamento de imagens)
  - jwt.js (Autenticação e tokens JWT)

  ### Tmp
  - Arquivos temporários

## Front-end

- **React + Vite**
  - index.html
  - package.json
  - eslint.config.js
  - vite.config.js

  ### src/

  #### Components
  - AccPlaces.jsx (Página de lugares do usuário)
  - AccProfile.jsx (Perfil do usuário)
  - Header.jsx (Cabeçalho da aplicação)
  - Item.jsx (Componente de item/lugar)
  - NewPlace.jsx (Formulário para novo lugar)
  - Perks.jsx (Amenidades/Confortos)
  - PhotoUploader.jsx (Upload de fotos)

  #### Contexts
  - UserContext.jsx (Contexto global de usuário)

  #### Pages
  - Account.jsx (Página de conta)
  - Home.jsx (Página inicial)
  - Login.jsx (Página de login)
  - Register.jsx (Página de cadastro)

  #### Estilos
  - index.css
  - App.jsx (Componente raiz)
  - main.jsx (Ponto de entrada)
