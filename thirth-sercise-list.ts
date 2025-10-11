// 🧑‍💻 Exercícios – Node.js Intermediário(Express + Segurança)
// 1. API simples de usuários

// Crie uma API com Express que:

// GET / users → retorna todos os usuários

// POST / users → adiciona um novo usuário(recebe JSON)

// GET / users /: id → retorna usuário por id

// 2. Middleware de log

// Crie um middleware que loga método, rota e tempo de execução da request.
// Exemplo de log:

// [2025 -09 - 23T21:00:00] GET / users - 15ms

// 3. Tratamento de erros

// Implemente um middleware global de erro que capture exceções e retorne JSON no formato:

// { "error": "Mensagem de erro", "status": 500 }

// 4. Autenticação com JWT

// Crie uma rota POST / login que:

// recebe email e senha

// retorna um token JWT válido

// Crie uma rota protegida GET / profile que só responde se o usuário enviar um JWT válido no header Authorization.

// 5. Upload e download

// Implemente rota POST / upload que receba um arquivo com multer.

// Implemente rota GET / download /:filename que permita baixar o arquivo.

// 6. WebSockets(chat simples)

// Configure socket.io junto ao Express.

// Faça com que ao conectar, o usuário receba a mensagem "Bem-vindo ao chat".

// Cada vez que alguém enviar mensagem(chat), todos os usuários conectados recebam.

// 7. Segurança

// Configure:

// CORS → permita apenas http://localhost:5173.

// Helmet → para headers seguros.

// Rate limiting → limite a 10 requests por minuto.

// 8. Prevenção de injeção

// Simule uma rota POST / search que recebe um query string.

// Faça a sanitização para impedir XSS(<script>).

// Use uma lib como validator ou sanitize - html.

// 9. Configuração de ambiente

// Use dotenv para gerenciar variáveis de ambiente:

// PORT

// JWT_SECRET

// O servidor deve iniciar usando process.env.PORT.

// 10. Logging

// Configure winston(ou pino) para salvar logs:

// info → em logs / app.log

// error → em logs / error.log