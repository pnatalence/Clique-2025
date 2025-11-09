import React from 'react';
import { BellIcon, CloseIcon } from './icons';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  showClose?: boolean;
  showExternalLink?: boolean;
  titleClassName?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children, showClose = true, showExternalLink = false, titleClassName="" }) => (
  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm w-full">
    <div className="flex justify-between items-center mb-2">
      <h3 className={`font-bold text-gray-800 dark:text-gray-200 ${titleClassName}`}>{title}</h3>
      {showClose && (
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
       {showExternalLink && (
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      )}
    </div>
    <div className="text-sm text-gray-600 dark:text-gray-300">{children}</div>
  </div>
);

interface InfoSidebarProps {
  isInfoSidebarOpen: boolean;
  setIsInfoSidebarOpen: (isOpen: boolean) => void;
}

const InfoSidebar: React.FC<InfoSidebarProps> = ({ isInfoSidebarOpen, setIsInfoSidebarOpen }) => {
  return (
    <aside className={`
      bg-slate-100 dark:bg-gray-800 p-4 flex flex-col flex-shrink-0 transition-transform duration-300 ease-in-out transform
      w-full md:w-1/3 fixed inset-y-0 right-0 z-40
      ${isInfoSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
      xl:relative xl:translate-x-0 xl:w-80 xl:inset-auto xl:h-auto
    `}>
      <div className="flex items-center justify-between flex-shrink-0 mb-4">
        <button className="flex items-center space-x-2 bg-custom-teal text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-custom-teal-dark transition-colors">
          <BellIcon />
          <span>Notificações</span>
        </button>
        <button onClick={() => setIsInfoSidebarOpen(false)} className="xl:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <CloseIcon className="h-6 w-6 mr-0" />
        </button>
      </div>
      
      <div className="space-y-4 overflow-y-auto">
        <InfoCard title="Hoje">06/11/2025 19:22</InfoCard>
        <InfoCard title="Licença">
            <p>Tempo restante</p>
            <p className="font-bold text-red-500">-5 dias</p>
        </InfoCard>
        <InfoCard title="Anuncie aqui">
            <p>Email</p>
            <p className="font-semibold">cliquesg@outlook.com</p>
            <p className="mt-2">WhatsApp</p>
            <p className="font-semibold">+244 995 527 021</p>
        </InfoCard>
        <InfoCard title="P.N. Clique" showExternalLink={true}>
            <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-2">
                <h4 className="font-bold text-lg mb-1">Legalização</h4>
                <p>Legalização de sua empresa, registrar sua marca e logo, obter credenciais do INEFOP. Ajudamos a sua empresa a crescer...</p>
            </div>
             <div className="border-t border-gray-200 dark:border-gray-600 pt-2 mt-4">
                <h4 className="font-bold text-lg mb-1">Marketing</h4>
                <p>Criação de Websites | Blog | Formulários de Inscrições online | Logotipo | Cartão de Visita | Flyer | Banner | Anúncios online patrocinados...</p>
            </div>
        </InfoCard>
        <InfoCard title="SOPERFIL" titleClassName="text-lg" showExternalLink={true}>
            <p className="font-semibold text-gray-500 dark:text-gray-400 mb-2">Rent a Car e Oficina</p>
            <h4 className="font-bold text-xl mb-1 text-gray-800 dark:text-gray-200">Aluguer de Viaturas</h4>
            <p>Temos uma grande variedade de Viaturas para si, com Motoristas profissionais.</p>
            <img src="https://picsum.photos/seed/car/400/200" alt="Car rental" className="rounded-lg my-3"/>
            <ul className="list-disc list-inside text-sm">
                <li>Básico</li>
                <li>Intermédio</li>
                <li>Luxuoso</li>
            </ul>
            <p className="mt-2 text-right font-semibold">What. - 925 606 961</p>
            <p className="text-right text-xs text-gray-400 dark:text-gray-500 mt-2">Publicade</p>
        </InfoCard>
      </div>
    </aside>
  );
};

export default InfoSidebar;