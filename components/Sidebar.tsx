import React, { useState, useEffect } from 'react';
import { LockIcon, ChatIcon, CogIcon, QuestionIcon, InfoIcon, CloseIcon } from './icons';
import { motivationalQuotes } from '../utils/quotes';

interface SidebarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="flex items-center w-full px-4 py-3 text-left bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

interface SidebarProps {
  setCurrentPage: (page: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  openSettingsModal: () => void;
  onLogout: () => void;
  openChat: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen, openSettingsModal, onLogout, openChat }) => {
  const [dailyTip, setDailyTip] = useState('');

  useEffect(() => {
    const getDailyTip = () => {
      const tipDataString = localStorage.getItem('dailyTipData');
      const twentyFourHours = 24 * 60 * 60 * 1000;

      if (tipDataString) {
        try {
          const { tip, timestamp } = JSON.parse(tipDataString);
          const isExpired = (Date.now() - timestamp) > twentyFourHours;
          if (!isExpired) {
            setDailyTip(tip);
            return;
          }
        } catch (error) {
          console.error("Failed to parse daily tip data:", error);
        }
      }

      // If no valid tip is found, generate a new one
      const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
      const newTip = motivationalQuotes[randomIndex];
      setDailyTip(newTip);
      localStorage.setItem('dailyTipData', JSON.stringify({ tip: newTip, timestamp: Date.now() }));
    };

    getDailyTip();
  }, []);

  return (
    <aside className={`w-full md:w-1/3 bg-custom-teal text-white flex flex-col p-4 space-y-4 transition-transform duration-300 ease-in-out
      ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      fixed inset-y-0 left-0 z-40
      lg:relative lg:translate-x-0 lg:w-72 lg:h-auto
    `}>
      <div className="flex items-center p-4">
        <div className="flex-1 flex flex-col items-center">
            <div className="bg-white p-2 rounded-lg shadow-lg">
              <img src="https://i.postimg.cc/fyjwfpTw/Screenshot-20251110-204145-Excel.jpg" alt="Clique Logo" className="h-16 w-16 object-contain" />
            </div>
            <h1 className="text-xl font-bold mt-2 text-black">Clique</h1>
        </div>
        <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden absolute top-4 right-4 text-white p-2">
            <CloseIcon className="h-6 w-6 mr-0" />
        </button>
      </div>

      <div className="bg-custom-teal-dark p-3 rounded-lg text-center">
        <h2 className="font-semibold text-lg">Acesso rápido</h2>
      </div>

      <nav className="flex-1 space-y-3 px-2 overflow-y-auto">
        <SidebarButton icon={<LockIcon />} label="Terminar Secção" onClick={onLogout} />
        <SidebarButton icon={<ChatIcon />} label="Mensagens Rápidas" onClick={openChat} />
        <SidebarButton icon={<CogIcon />} label="Configurações" onClick={openSettingsModal} />
        <SidebarButton icon={<QuestionIcon />} label="Ajuda e feedback" />
        <SidebarButton icon={<InfoIcon />} label="Sobre o sistema" onClick={() => setCurrentPage('about')} />
      </nav>

      <div className="bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 p-4 rounded-lg mt-4 shadow-md">
        <h3 className="font-bold mb-2">Dica do dia</h3>
        <p className="font-handwriting text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {dailyTip}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;