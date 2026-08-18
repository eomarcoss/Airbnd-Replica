# Airbnd Replica

Uma aplicação full-stack que replica as funcionalidades principais do Airbnb, permitindo aos usuários listar, reservar e gerenciar acomodações.

## 🎯 Sobre o Projeto

Airbnd Replica é uma plataforma de aluguel de acomodações construída com tecnologias modernas de desenvolvimento web. O projeto demonstra experiência em desenvolvimento full-stack, arquitetura de aplicações escaláveis e boas práticas.

### Funcionalidades Principais

- ✅ Autenticação de usuários com JWT
- ✅ Listagem de acomodações 
- ✅ Upload e gerenciamento de imagens (AWS S3)
- ✅ Sistema de reservas com datas e validações
- ✅ Perfil de usuário de reservas
- ✅ Dashboard de anfitrião para gerenciar propriedades
- ✅ Interface responsiva e moderna

---

## 🛠️ Tech Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express 5.x
- **Banco de Dados:** MongoDB com Mongoose
- **Autenticação:** JWT (JSON Web Tokens)
- **Criptografia:** bcryptjs
- **Cloud Storage:** AWS S3
- **Validação:** Multer (upload de arquivos)

### Frontend
- **Framework:** React 19.x
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Roteamento:** React Router v7
- **HTTP Client:** Axios
- **State Management:** Context API

---

## 📁 Estrutura do Projeto

```
Airbnd-Replica/
├── back/                    # API Rest
│   ├── config/             # Configuração do banco
│   ├── domains/            # Lógica de negócio
│   │   ├── users/          
│   │   ├── places/         
│   │   └── bookings/       
│   ├── utils/              # Utilitários (JWT, upload)
│   └── server.js           # Configuração Express
│
└── front/                   # Aplicação React
    ├── src/
    │   ├── components/      # Componentes reutilizáveis
    │   ├── pages/          # Páginas da aplicação
    │   ├── contexts/       # Context API
    │   └── App.jsx         # Componente raiz
    └── vite.config.js      # Configuração Vite
```

---

## 🚀 Instalação Rápida

```bash
# Backend
cd back && npm install

# Frontend (outro terminal)
cd front && npm install
```

Configure `.env` no backend:
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/airbnd
JWT_SECRET=sua-chave
AWS_ACCESS_KEY_ID=chave-aws
AWS_SECRET_ACCESS_KEY=secret-aws
AWS_BUCKET_NAME=bucket-nome
```

Inicie os servidores:
```bash
# Backend
cd back && npm run dev

# Frontend
cd front && npm run dev
```

Aplicação em `http://localhost:5173`

---

## 🚀 Como Rodar Localmente (Detalhado)

### Pré-requisitos
- Node.js v18+
- npm ou yarn
- MongoDB rodando localmente ou URL de conexão
- Variáveis de ambiente configuradas

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <seu-repositorio>
   cd Airbnd-Replica
   ```

2. **Instale as dependências do Backend**
   ```bash
   cd back
   npm install
   ```

3. **Configure as variáveis de ambiente** (`.env`)
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/airbnd
   JWT_SECRET=sua-chave-secreta
   AWS_ACCESS_KEY_ID=sua-chave-aws
   AWS_SECRET_ACCESS_KEY=sua-secret-aws
   AWS_REGION=us-east-1
   AWS_BUCKET_NAME=seu-bucket
   ```

4. **Instale as dependências do Frontend**
   ```bash
   cd ../front
   npm install
   ```

5. **Inicie o servidor Backend**
   ```bash
   cd back
   npm run dev
   ```

6. **Em outro terminal, inicie o Frontend**
   ```bash
   cd front
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:5173`

---

## 📚 API Endpoints Principais

### Autenticação
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Fazer login
- `POST /api/auth/logout` - Fazer logout

### Lugares/Acomodações
- `GET /api/places` - Listar todas as acomodações
- `GET /api/places/:id` - Detalhes de uma acomodação
- `POST /api/places` - Criar nova acomodação (autenticado)
- `PUT /api/places/:id` - Atualizar acomodação (autenticado)

### Reservas
- `GET /api/bookings` - Listar reservas do usuário
- `POST /api/bookings` - Criar nova reserva
- `DELETE /api/bookings/:id` - Cancelar reserva

---

## 🔒 Segurança

- Senhas criptografadas com bcryptjs
- Tokens JWT com expiração
- Validação de entrada com Multer
- CORS configurado
- Cookies HTTP-only para autenticação
- Variáveis de ambiente para dados sensíveis

---

## 📦 Build e Deploy

### Build de Produção

```bash
# Frontend
cd front
npm run build

# Backend já está pronto (sem bundling necessário)
```

### Deploy
A aplicação está deployada em: **https://airbnd-replica.onrender.com**

---

## 🎨 Features Implementadas

| Feature | Status |
|---------|--------|
| Autenticação JWT | ✅ Completo |
| CRUD de Acomodações | ✅ Completo |
| Sistema de Reservas | ✅ Completo |
| Upload de Imagens | ✅ Completo |
| Dashboard Anfitrião | ✅ Completo |
| Responsividade | ✅ Completo |

---

## 🔧 Scripts Disponíveis

### Backend
```bash
npm run dev      # Inicia servidor com watch mode
npm start        # Inicia servidor em produção
```

### Frontend
```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build para produção
npm run lint     # Executa ESLint
npm run preview  # Preview do build de produção
```

---

## 📊 Performance e Melhores Práticas

- ✅ Componentes React otimizados com lazy loading
- ✅ Paginação de listagens
- ✅ Compressão de imagens no Upload
- ✅ Cache de requisições com Axios
- ✅ Validação de dados em backend
- ✅ Tratamento de erros centralizado

---

## 📝 Licença

Este projeto é fornecido como está para fins educacionais e de portfólio.

---

## 📧 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Desenvolvido com React, Node.js e ❤️**
