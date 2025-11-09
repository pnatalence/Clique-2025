import React, { useState } from 'react';
import { MenuIcon, InfoIconV2, ProgressIcon, VisitsIcon, CoursesIcon, ClassesIcon, ModulesIcon, AddIcon, DocumentsIcon, TraineeIcon, OurTraineesIcon, AssetControlIcon, QuestionIcon, ExclamationIcon, ClickIcon, HomeIcon, CloseIcon, PaymentsIcon } from './icons';

interface CoursesSidebarProps {
  setCurrentPage: (page: string) => void;
  activePage: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const SidebarButton: React.FC<{icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void, isCollapsed: boolean}> = ({ icon, label, isActive, onClick, isCollapsed }) => (
  <button 
    onClick={onClick}
    className={`flex items-center w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
      isActive
        ? 'bg-white text-custom-teal-darker font-bold shadow-md'
        : 'bg-custom-teal-light text-gray-800 hover:bg-white hover:text-custom-teal-darker'
    } ${isCollapsed ? 'lg:justify-center' : ''}`}
  >
    {icon}
    <span className={`font-medium ml-3 whitespace-nowrap ${isCollapsed ? 'lg:hidden' : ''}`}>{label}</span>
  </button>
);

const CoursesSidebar: React.FC<CoursesSidebarProps> = ({ setCurrentPage, activePage, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleNavigation = (page: string) => {
    const pageMap: { [key: string]: string } = {
        'informacoes': 'information',
        'courses': 'courses',
        'turmas': 'classes',
        'adicionar': 'add',
        'documentos': 'documents',
        'pagamentos': 'pagamentos',
        'formando': 'trainee-profile',
        'nossos-formandos': 'our-trainees',
        'controle-bens': 'asset-control',
        'progresso': 'progress',
        'sobre': 'about',
    };
    const targetPage = pageMap[page] || 'dashboard'; // Default to dashboard if page not in map
    setCurrentPage(targetPage);
  };

  const iconClassName = "h-5 w-5";
  const navItems = [
    { icon: <InfoIconV2 className={iconClassName}/>, label: 'Informações', page: 'informacoes' },
    { icon: <ProgressIcon className={iconClassName}/>, label: 'Progresso', page: 'progresso' },
    { icon: <VisitsIcon className={iconClassName}/>, label: 'Visitas', page: 'visitas' },
    { icon: <CoursesIcon className={iconClassName}/>, label: 'Cursos', page: 'courses' },
    { icon: <ClassesIcon className={iconClassName}/>, label: 'Turmas', page: 'turmas' },
    { icon: <ModulesIcon className={iconClassName}/>, label: 'Módulos', page: 'modulos' },
    { icon: <AddIcon className={iconClassName}/>, label: 'Adicionar', page: 'adicionar' },
    { icon: <DocumentsIcon className={iconClassName}/>, label: 'Documentos', page: 'documentos' },
    { icon: <PaymentsIcon className={iconClassName}/>, label: 'Pagamentos', page: 'pagamentos' },
    { icon: <TraineeIcon className={iconClassName}/>, label: 'Formando', page: 'formando' },
    { icon: <OurTraineesIcon className={iconClassName}/>, label: 'Nossos formandos', page: 'nossos-formandos' },
    { icon: <AssetControlIcon className={iconClassName}/>, label: 'Controle de bens', page: 'controle-bens' },
    { icon: <QuestionIcon className={iconClassName}/>, label: 'Ajuda e feedback', page: 'ajuda' },
    { icon: <ExclamationIcon className={iconClassName}/>, label: 'Sobre o sistema', page: 'sobre' },
  ];

  return (
    <aside className={`
      w-full md:w-1/3 bg-custom-teal-light text-white flex flex-col p-4 space-y-4 flex-shrink-0 transition-transform duration-300 ease-in-out
      fixed inset-y-0 left-0 z-40
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:relative lg:translate-x-0 lg:inset-auto lg:h-auto
      ${isCollapsed ? 'lg:w-24' : 'lg:w-72'}
    `}>
      <div className="flex items-center justify-between p-2 text-black">
        <div className="flex items-center space-x-2 overflow-hidden">
          <ClickIcon />
          <h1 className={`text-xl font-bold whitespace-nowrap ${isCollapsed ? 'lg:hidden' : ''}`}>Clique SG</h1>
        </div>
        <div className="flex items-center">
            <button onClick={() => setCurrentPage('dashboard')} className="p-1 rounded-full text-gray-600 hover:bg-custom-teal-dark hover:text-white">
              <HomeIcon className="h-6 w-6" />
            </button>
            <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden p-1 rounded-full text-gray-600 hover:bg-custom-teal-dark hover:text-white ml-2">
                <CloseIcon className="h-6 w-6 mr-0" />
            </button>
        </div>
      </div>

      <div className={`flex items-center bg-custom-teal text-white p-3 rounded-lg text-left ${isCollapsed ? 'lg:justify-center' : 'space-x-4'}`}>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="hidden lg:block">
          <MenuIcon />
        </button>
        <h2 className={`font-semibold text-lg lg:hidden`}>Menu</h2>
        {!isCollapsed && <h2 className="font-semibold text-lg hidden lg:block">Menu</h2>}
      </div>

      <nav className="flex-1 space-y-2 px-2 overflow-y-auto">
        {navItems.map((item) => (
          <SidebarButton
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activePage === item.page}
            onClick={() => handleNavigation(item.page)}
            isCollapsed={isCollapsed}
          />
        ))}
      </nav>
    </aside>
  );
};

export default CoursesSidebar;