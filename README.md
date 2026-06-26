# FinCasal 💑

App de finanças compartilhadas para casais, desenvolvido com React + Tailwind CSS.

## 🚀 Tecnologias

- **React** + **Vite** - Interface moderna e rápida
- **Tailwind CSS** - Estilização com classes utilitárias
- **React Router** - Navegação entre telas
- **Firebase Auth** - Autenticação de usuários
- **Firestore** - Banco de dados em tempo real
- **Dinero.js** - Cálculos financeiros precisos
- **Vercel** - Deploy e hospedagem

## 📱 Funcionalidades

### ✅ Implementadas

1. **Login/Cadastro** - Autenticação com email e senha
2. **Vincular Casal** - Sistema de código de 6 dígitos para conectar parceiros
3. **Dashboard** - Visão geral do saldo, gastos individuais e últimas transações
4. **Lançar Transação** - Modal com teclado numérico, categorias e divisão
5. **Lista de Transações** - Histórico completo organizado por data
6. **Gráficos** - Visualização de despesas por categoria e comparação entre parceiros
7. **Divisão** - Cálculo automático de acerto de contas compartilhadas
8. **Metas/Objetivos** - Acompanhamento de objetivos financeiros conjuntos

## 🎨 Design

O design segue o protótipo fornecido com:
- Interface mobile-first (392x844px)
- Paleta de cores quente (tons de laranja/coral)
- Fontes: Plus Jakarta Sans (corpo) e Space Grotesk (números)
- Animações suaves e transições fluídas
- Componente de moldura mobile com status bar

## ⚙️ Configuração

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar Firebase

Crie um projeto no [Firebase Console](https://console.firebase.google.com/) e:

1. Ative **Authentication** com provedor de Email/Senha
2. Crie um banco **Firestore Database**
3. Copie as credenciais do projeto

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_FIREBASE_API_KEY=sua_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```

### 3. Estrutura do Firestore

O app utiliza as seguintes coleções:

**`couples`**
```javascript
{
  code: "123456",           // Código de 6 dígitos
  createdBy: "user_id",     // ID do criador
  members: ["user1", "user2"], // IDs dos membros
  linked: true,             // Se está vinculado
  createdAt: timestamp,
  linkedAt: timestamp
}
```

**`users`**
```javascript
{
  email: "usuario@email.com",
  coupleId: "123456",       // Código do casal
  createdAt: timestamp
}
```

**`transactions`** (a implementar)
```javascript
{
  coupleId: "123456",
  amount: 240.00,
  type: "despesa" | "receita",
  category: "Mercado",
  categoryIcon: "🛒",
  payer: "eu" | "leo" | "dois",
  userId: "user_id",
  date: timestamp,
  note: "opcional"
}
```

## 🏃 Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173)

## 📦 Build para Produção

```bash
npm run build
```

## 🚀 Deploy na Vercel

### Opção 1: Via CLI

```bash
npm install -g vercel
vercel
```

### Opção 2: Via GitHub

1. Faça push do código para o GitHub
2. Importe o repositório no [Vercel Dashboard](https://vercel.com)
3. Configure as variáveis de ambiente (VITE_FIREBASE_*)
4. Deploy automático!

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── MobileFrame.jsx     # Moldura do celular com status bar
│   ├── BottomNav.jsx       # Navegação inferior
│   └── TransactionModal.jsx # Modal de nova transação
├── screens/            # Telas principais
│   ├── Login.jsx           # Login e cadastro
│   ├── Vincular.jsx        # Vincular casal
│   ├── Dashboard.jsx       # Tela inicial
│   ├── Transacoes.jsx      # Lista de transações
│   ├── Graficos.jsx        # Gráficos e análises
│   ├── Divisao.jsx         # Divisão de gastos
│   └── Metas.jsx           # Objetivos financeiros
├── config/
│   └── firebase.js         # Configuração do Firebase
├── App.jsx             # Componente principal com rotas
├── main.jsx            # Entry point
└── index.css           # Estilos globais + Tailwind
```

## 🔮 Próximos Passos

- [ ] Integração completa com Firestore (CRUD de transações)
- [ ] Listeners em tempo real para sincronização entre usuários
- [ ] Cálculo automático de divisão baseado em transações
- [ ] Filtros por período (mês, ano)
- [ ] Edição e exclusão de transações
- [ ] Gestão de metas (criar, editar, adicionar aportes)
- [ ] Notificações push
- [ ] Exportar relatórios (PDF, CSV)
- [ ] Dark mode
- [ ] Login social (Google)

## 📄 Licença

Projeto desenvolvido para fins educacionais.

---

**Desenvolvido com ❤️ usando React + Tailwind CSS**
