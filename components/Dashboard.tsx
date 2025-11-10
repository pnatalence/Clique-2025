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
          <img src="https://i.postimg.cc/4ytVZvQQ/Screenshot-20251110-000132-Excel.jpg" alt="Nossas Informações" className="w-24 h-auto object-contain rounded-lg shadow-md" />
        }>
          <div className="space-y-3">
            <ActionButton onClick={() => setCurrentPage('information')}>Ver informações</ActionButton>
            <ActionButton onClick={() => setCurrentPage('progress')}>Ver progresso</ActionButton>
            <ActionButton>Ver Visitas</ActionButton>
          </div>
        </Card>

        {/* Gerir cursos Card */}
        <Card title="Gerir cursos" bgColor="bg-custom-teal" titleColor="text-white" icon={
          <img src="https://i.postimg.cc/RFHzC8kB/Screenshot-20251110-200112-Excel.jpg" alt="Gerir Cursos" className="w-24 h-auto object-contain rounded-lg shadow-md" />
        }>
           <div className="space-y-3">
            <button onClick={() => setCurrentPage('courses')} className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200">Ver cursos</button>
            <button onClick={() => setCurrentPage('classes')} className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200">Ver turmas</button>
            <button className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200">Ver módulos</button>
          </div>
        </Card>
        
        {/* Adicionar Card */}
        <Card title="Adicionar" bgColor="bg-custom-teal" titleColor="text-white" icon={
          <img src="https://i.postimg.cc/brgVq9wv/Screenshot-20251110-200340-Excel.jpg" alt="Adicionar" className="w-24 h-auto object-contain rounded-lg shadow-md" />
        }>
          <div className="space-y-3">
            <button onClick={() => setCurrentPage('add')} className="w-full bg-white text-gray-700 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200">Ver tudo</button>
          </div>
        </Card>

        {/* Documentos Card */}
        <Card title="Documentos" icon={
             <img src="https://i.postimg.cc/R0Qnqswv/Screenshot-20251110-200352-Excel.jpg" alt="Documentos" className="w-24 h-auto object-contain rounded-lg shadow-md" />
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
        <Card title="Gerir formandos" bgColor="bg-custom-teal" titleColor="text-white" icon={
           <img src="https://i.postimg.cc/wjMWXNwT/Screenshot-20251110-200347-Excel.jpg" alt="manage trainees" className="w-24 h-auto object-contain rounded-lg shadow-md" />
        }>
            <div className="w-full space-y-3">
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