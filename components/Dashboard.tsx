import React from 'react';
import Header from './Header';
import Card from './Card';
import TraineeChart from './TraineeChart';
import AnnualProgressChart from './AnnualProgressChart';

// Fix: Changed React.Node to React.ReactNode as React.Node is not a valid type.
const ActionButton: React.FC<{ children: React.ReactNode; onClick?: () => void }> = ({ children, onClick }) => (
  <button onClick={onClick} className="w-full text-custom-teal-darker dark:text-custom-teal-light border border-custom-teal-dark dark:border-custom-teal-light font-semibold py-2 px-4 rounded-full hover:bg-custom-teal-light dark:hover:bg-custom-teal-dark/20 transition-colors duration-200">
    {children}
  </button>
);

interface DashboardProps {
  setCurrentPage: (page: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentPage }) => {
  return (
    <div className="space-y-8">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Nossas informações Card */}
        <Card title="Nossas informações" icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-custom-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        }>
          <div className="space-y-3">
            <ActionButton onClick={() => setCurrentPage('information')}>Ver informações</ActionButton>
            <ActionButton onClick={() => setCurrentPage('progress')}>Ver progresso</ActionButton>
            <ActionButton>Ver Visitas</ActionButton>
          </div>
        </Card>

        {/* Gerir cursos Card */}
        <Card title="Gerir cursos" bgColor="bg-custom-teal" titleColor="text-white" icon={
          <div className="space-y-2">
            <div className="h-5 bg-red-400 rounded"></div>
            <div className="h-5 bg-orange-400 rounded"></div>
            <div className="h-5 bg-green-400 rounded"></div>
          </div>
        }>
           <div className="space-y-3">
            <button onClick={() => setCurrentPage('courses')} className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200">Ver cursos</button>
            <button onClick={() => setCurrentPage('classes')} className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200">Ver turmas</button>
            <button className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200">Ver módulos</button>
          </div>
        </Card>
        
        {/* Adicionar Card */}
        <Card title="Adicionar" bgColor="bg-custom-teal" titleColor="text-white" contentClassName="flex flex-col items-center justify-center">
            <div className="relative mb-4">
                <img src="https://picsum.photos/id/43/80" alt="add user" className="rounded-full" />
                <div className="absolute -bottom-2 -right-2 bg-white p-1 rounded-full shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </div>
            </div>
            <button onClick={() => setCurrentPage('add')} className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200">Ver tudo</button>
        </Card>

        {/* Documentos Card */}
        <Card title="Documentos" icon={
             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-custom-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 21h2a2 2 0 002-2v-1" />
            </svg>
        }>
           <div className="space-y-3">
            <ActionButton onClick={() => setCurrentPage('documents')}>Ver todos</ActionButton>
          </div>
        </Card>
        
        {/* Pagamentos Card */}
        <Card title="Pagamentos" icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-custom-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        }>
           <div className="space-y-3">
            <ActionButton onClick={() => setCurrentPage('pagamentos')}>Ver todos</ActionButton>
          </div>
        </Card>

        {/* Gerir formandos Card */}
        <Card title="Gerir formandos" bgColor="bg-custom-teal" titleColor="text-white" contentClassName="flex flex-col items-center justify-center">
           <div className="relative mb-4">
                <img src="https://picsum.photos/id/237/80" alt="manage trainees" className="rounded-full" />
                <div className="absolute -bottom-2 -right-10">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </div>
            </div>
            <div className="w-full space-y-3 mt-4">
              <button onClick={() => setCurrentPage('trainee-profile')} className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200">Ver cada</button>
              <button onClick={() => setCurrentPage('our-trainees')} className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200">Ver lista</button>
            </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <TraineeChart />
        <AnnualProgressChart />
      </div>
    </div>
  );
};

export default Dashboard;