import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import InfoSidebar from './components/InfoSidebar';
import CoursesPage from './pages/CoursesPage';
import ClassesPage from './pages/ClassesPage';
import AddPage from './pages/AddPage';
import DocumentsPage from './pages/DocumentsPage';
import PaymentsPage from './pages/PaymentsPage';
import CoursesSidebar from './components/CoursesSidebar';
import RegistrationFormPage from './pages/RegistrationFormPage';
import TraineeProfilePage from './pages/TraineeProfilePage';
import OurTraineesPage from './pages/OurTraineesPage';
import AssetControlPage from './pages/AssetControlPage';
import IndividualAnalysisPage from './pages/IndividualAnalysisPage';
import ProgressPage from './pages/ProgressPage';
import InformationPage from './pages/InformationPage';
import AboutPage from './pages/AboutPage';
import SettingsModal from './components/SettingsModal';
import LoginPage from './pages/LoginPage';
import ChatSystem from './components/ChatSystem';
import { MenuIcon, BellIcon } from './components/icons';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInfoSidebarOpen, setIsInfoSidebarOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved theme in localStorage, default to false (light mode)
    return localStorage.getItem('darkMode') === 'true';
  });
  const [currentPage, setCurrentPage] = useState('dashboard'); // 'dashboard', 'courses', ...

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'courses': return <CoursesPage />;
      case 'classes': return <ClassesPage />;
      case 'add': return <AddPage />;
      case 'documents': return <DocumentsPage setCurrentPage={handleSetCurrentPage} />;
      case 'pagamentos': return <PaymentsPage />;
      case 'registration-form': return <RegistrationFormPage />;
      case 'trainee-profile': return <TraineeProfilePage />;
      case 'our-trainees': return <OurTraineesPage />;
      case 'asset-control': return <AssetControlPage setCurrentPage={handleSetCurrentPage} />;
      case 'individual-analysis': return <IndividualAnalysisPage setCurrentPage={handleSetCurrentPage} />;
      case 'progress': return <ProgressPage />;
      case 'information': return <InformationPage />;
      case 'about': return <AboutPage />;
      case 'dashboard':
      default: return <Dashboard setCurrentPage={handleSetCurrentPage} />;
    }
  };

  const handleSetCurrentPage = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    setIsInfoSidebarOpen(false);
  };

  const renderSidebar = () => {
    const sidebarProps = {
      setCurrentPage: handleSetCurrentPage,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
      openSettingsModal: () => setIsSettingsModalOpen(true),
      onLogout: handleLogout,
      openChat: () => setIsChatOpen(prev => !prev),
    };

    switch (currentPage) {
      case 'courses': return <CoursesSidebar {...sidebarProps} activePage="courses" />;
      case 'classes': return <CoursesSidebar {...sidebarProps} activePage="turmas" />;
      case 'add': return <CoursesSidebar {...sidebarProps} activePage="adicionar" />;
      case 'documents': return <CoursesSidebar {...sidebarProps} activePage="documentos" />;
      case 'pagamentos': return <CoursesSidebar {...sidebarProps} activePage="pagamentos" />;
      case 'registration-form': return <CoursesSidebar {...sidebarProps} activePage="documentos" />;
      case 'trainee-profile': return <CoursesSidebar {...sidebarProps} activePage="formando" />;
      case 'our-trainees': return <CoursesSidebar {...sidebarProps} activePage="nossos-formandos" />;
      case 'asset-control': return <CoursesSidebar {...sidebarProps} activePage="controle-bens" />;
      case 'individual-analysis': return <CoursesSidebar {...sidebarProps} activePage="controle-bens" />;
      case 'progress': return <CoursesSidebar {...sidebarProps} activePage="progresso" />;
      case 'information': return <CoursesSidebar {...sidebarProps} activePage="informacoes" />;
      case 'about': return <CoursesSidebar {...sidebarProps} activePage="sobre" />;
      case 'dashboard':
      default: return <Sidebar {...sidebarProps} />;
    }
  }

  return (
    <div className="bg-slate-50 dark:bg-gray-900 h-screen flex flex-col lg:flex-row text-gray-800 dark:text-gray-200 overflow-hidden relative">
      {(isMobileMenuOpen || isInfoSidebarOpen) && (
        <div
          className="xl:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsInfoSidebarOpen(false);
          }}
          aria-hidden="true"
        />
      )}
      {renderSidebar()}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {renderPage()}
      </main>
      <InfoSidebar isInfoSidebarOpen={isInfoSidebarOpen} setIsInfoSidebarOpen={setIsInfoSidebarOpen} />
      
      {!isMobileMenuOpen && !isInfoSidebarOpen && (
        <>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden fixed top-4 left-4 z-30 bg-custom-teal text-white p-3 rounded-full shadow-lg"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
          <button
            onClick={() => setIsInfoSidebarOpen(true)}
            className="xl:hidden fixed top-4 right-4 z-30 bg-custom-teal text-white p-3 rounded-full shadow-lg"
            aria-label="Open notifications"
          >
            <BellIcon />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">5</span>
          </button>
        </>
      )}
      <SettingsModal 
        isOpen={isSettingsModalOpen} 
        onClose={() => setIsSettingsModalOpen(false)}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
      <ChatSystem isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;