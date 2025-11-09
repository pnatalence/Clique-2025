import React, { useState } from 'react';
import { CloseIcon, CameraIcon, AvatarPlaceholder } from './icons';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, isDarkMode, setIsDarkMode }) => {
  if (!isOpen) return null;

  const [displayName, setDisplayName] = useState('Natalence');
  const [username, setUsername] = useState('natalence');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300" role="dialog" aria-modal="true">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg transform transition-transform duration-300 scale-100">
        <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Configurações</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" aria-label="Close settings">
            <CloseIcon className="h-6 w-6 mr-0" />
          </button>
        </header>

        <main className="p-6 space-y-6">
          {/* Profile Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Perfil</h3>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <AvatarPlaceholder className="h-20 w-20" />
                <button className="absolute bottom-0 right-0 bg-custom-teal text-white p-2 rounded-full shadow-md hover:bg-custom-teal-dark transition-colors" aria-label="Change profile picture">
                  <CameraIcon className="h-4 w-4" />
                </button>
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <label htmlFor="displayName" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Nome de Exibição</label>
                  <input type="text" id="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)} className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-2 focus:ring-custom-teal-light outline-none" />
                </div>
                 <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-600 dark:text-gray-300">Nome de Usuário</label>
                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-2 focus:ring-custom-teal-light outline-none" />
                </div>
              </div>
            </div>
          </section>

          {/* Security Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Segurança</h3>
            <div className="space-y-3">
              <input type="password" placeholder="Senha Atual" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-2 focus:ring-custom-teal-light outline-none" />
              <input type="password" placeholder="Nova Senha" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-2 focus:ring-custom-teal-light outline-none" />
              <input type="password" placeholder="Confirmar Nova Senha" className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:ring-2 focus:ring-custom-teal-light outline-none" />
            </div>
          </section>
          
          {/* Appearance Section */}
          <section>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">Aparência</h3>
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <span className="font-medium text-gray-700 dark:text-gray-200">Modo Escuro</span>
              <label htmlFor="darkModeToggle" className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" id="darkModeToggle" className="sr-only peer" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
                <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-custom-teal-dark"></div>
              </label>
            </div>
          </section>
        </main>
        
        <footer className="flex justify-end items-center p-4 border-t border-gray-200 dark:border-gray-700 space-x-3">
          <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors">
            Cancelar
          </button>
          <button onClick={onClose} className="px-4 py-2 text-sm font-semibold text-white bg-custom-teal rounded-lg hover:bg-custom-teal-dark transition-colors">
            Salvar Alterações
          </button>
        </footer>
      </div>
    </div>
  );
};

export default SettingsModal;
