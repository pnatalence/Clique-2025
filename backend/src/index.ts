// backend/src/index.ts

// Fix: Import express default export separately from its types.
import express from 'express';
// Fix: Use `import type` for type-only imports and alias Request/Response to avoid conflict with global types.
import type { Express, Request as ExpressRequest, Response as ExpressResponse } from 'express';
import cors from 'cors';
// Fix: Changed require to import for ES module compatibility, which resolves type errors for `require` and `process`.
import { PrismaClient } from '@prisma/client';

// Fix: Explicitly type the Express app instance to ensure correct type inference.
const app: Express = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: '*', 
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
// Fix: Using a correctly typed express app instance ensures middleware like express.json() is resolved correctly.
app.use(express.json());

// Rota principal da API
// Fix: Use aliased Express types for route handlers to ensure correct method resolution.
app.get('/', (req: ExpressRequest, res: ExpressResponse) => {
  res.send('Bem-vindo à API do Clique SG! O servidor está a funcionar e conectado à base de dados.');
});

// Rota para buscar todos os formandos
// Fix: Use aliased Express types for route handlers to ensure correct method resolution.
app.get('/api/trainees', async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const trainees = await prisma.trainee.findMany();
    res.json(trainees);
  } catch (error) {
    console.error("Erro ao buscar formandos:", error);
    res.status(500).json({ error: 'Não foi possível buscar os dados dos formandos.' });
  }
});

// Rota para buscar todos os cursos
// Fix: Use aliased Express types for route handlers to ensure correct method resolution.
app.get('/api/courses', async (req: ExpressRequest, res: ExpressResponse) => {
  try {
    const courses = await prisma.course.findMany();
    res.json(courses);
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    res.status(500).json({ error: 'Não foi possível buscar os dados dos cursos.' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor backend a rodar na porta ${PORT}`);
});

// Garante que a conexão com o prisma seja fechada corretamente
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});