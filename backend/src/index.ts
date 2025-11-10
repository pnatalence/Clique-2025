import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// A porta será fornecida pelo ambiente do Render, ou 3001 para desenvolvimento local.
const PORT = process.env.PORT || 3001;

// Configuração do CORS
// Isto é crucial para permitir que o seu frontend (ex: https://clique-sg-frontend.onrender.com)
// possa fazer requisições para este backend.
const corsOptions = {
  origin: '*', // Em um ambiente de produção real, você restringiria isso à URL do seu frontend.
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Dados de exemplo (simulando uma base de dados)
const trainees = [
    { id: '131', name: 'Adilson Jorge Fernandes da Silva', dob: '13-03-1998', bi: '005427418LA049', paid: 'AOA 0,00', total: 'AOA 20 000,00'},
    { id: '128', name: 'Suraia Cassungo Soares', dob: '27-06-2005', bi: '008097426LA051', paid: 'AOA 1 000,00', total: 'AOA 1 000,00'},
    { id: '120', name: 'Pedro Alberto Natalence', dob: '10-01-1995', bi: '001234567LA012', paid: 'AOA 15 000,00', total: 'AOA 15 000,00'},
    { id: '115', name: 'Maria Joaquina de Amaral', dob: '05-08-2001', bi: '009876543LA098', paid: 'AOA 18 000,00', total: 'AOA 20 000,00'},
];

// Dados de exemplo para Cursos (simulando uma base de dados)
const courses = [
  { 
    code: 'EXL-AV', 
    name: 'Excel Avançado',
    abbr: 'Excel Av.',
    registrationFee: '2.500,00 AOA',
    monthlyFee: '15.000,00 AOA',
    durationDays: 30,
    totalCost: '17.500,00 AOA',
    enrolled: 25
  },
  { 
    code: 'MKT-DG', 
    name: 'Marketing Digital',
    abbr: 'Mkt Digital',
    registrationFee: '5.000,00 AOA',
    monthlyFee: '20.000,00 AOA',
    durationDays: 45,
    totalCost: '25.000,00 AOA',
    enrolled: 18
  },
  { 
    code: 'GEST-PROJ', 
    name: 'Gestão de Projectos com Ms Project',
    abbr: 'Gest. Proj.',
    registrationFee: '5.000,00 AOA',
    monthlyFee: '25.000,00 AOA',
    durationDays: 60,
    totalCost: '30.000,00 AOA',
    enrolled: 22
  },
  { 
    code: 'ING-TEC', 
    name: 'Inglês Técnico',
    abbr: 'Ing. Técnico',
    registrationFee: '2.500,00 AOA',
    monthlyFee: '18.000,00 AOA',
    durationDays: 90,
    totalCost: '20.500,00 AOA',
    enrolled: 0
  },
  {
    code: 'PORT-ORA',
    name: 'Língua Portuguesa & Oratória',
    abbr: 'Por&Ora',
    registrationFee: '2.500,00 AOA',
    monthlyFee: '10.000,00 AOA',
    durationDays: 60,
    totalCost: '12.500,00 AOA',
    enrolled: 30
  }
];


// Rota principal da API
app.get('/', (req: Request, res: Response) => {
  res.send('Bem-vindo à API do Clique SG! O servidor está a funcionar.');
});

// Rota para buscar todos os formandos
app.get('/api/trainees', (req: Request, res: Response) => {
  // Em uma aplicação real, aqui você buscaria os dados de uma base de dados.
  res.json(trainees);
});

// Rota para buscar todos os cursos
app.get('/api/courses', (req: Request, res: Response) => {
  res.json(courses);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor backend a rodar na porta ${PORT}`);
});