// Fix: Changed require to import for ES module compatibility, which resolves type errors for `require` and `process`.
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');

  // Apagar dados existentes para evitar duplicados
  await prisma.trainee.deleteMany();
  await prisma.course.deleteMany();
  console.log('Deleted existing data.');

  const traineesData = [
    { name: 'Adilson Jorge Fernandes da Silva', dob: new Date('1998-03-13'), bi: '005427418LA049', paid: 'AOA 0,00', total: 'AOA 20 000,00'},
    { name: 'Suraia Cassungo Soares', dob: new Date('2005-06-27'), bi: '008097426LA051', paid: 'AOA 1 000,00', total: 'AOA 1 000,00'},
    { name: 'Pedro Alberto Natalence', dob: new Date('1995-01-10'), bi: '001234567LA012', paid: 'AOA 15 000,00', total: 'AOA 15 000,00'},
    { name: 'Maria Joaquina de Amaral', dob: new Date('2001-08-05'), bi: '009876543LA098', paid: 'AOA 18 000,00', total: 'AOA 20 000,00'},
  ];

  const coursesData = [
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

  await prisma.trainee.createMany({ data: traineesData });
  await prisma.course.createMany({ data: coursesData });
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });