import React, { useState, useEffect } from 'react';
import { GoogleGenAI, FunctionDeclaration, Type } from "@google/genai";
import ChatWindow, { Conversation, Message } from './ChatWindow';
import { AddCircleIcon, ChatIcon, CloseIcon, MaximizeIcon } from './icons';

interface ChatSystemProps {
  isOpen: boolean;
  onClose: () => void;
  setIsDarkMode: (isDark: boolean) => void;
}

const toggleDarkModeFunction: FunctionDeclaration = {
  name: 'toggleDarkMode',
  description: 'Ativa ou desativa o modo escuro para a aplicação.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      enabled: {
        type: Type.BOOLEAN,
        description: 'Defina como verdadeiro para ativar o modo escuro, falso para desativá-lo.',
      },
    },
    required: ['enabled'],
  },
};

const ChatSystem: React.FC<ChatSystemProps> = ({ isOpen, onClose, setIsDarkMode }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeWindows, setActiveWindows] = useState<{ [key: string]: { minimized: boolean } }>({});
  const [isContactListOpen, setIsContactListOpen] = useState(true);

  // Load and clean conversations from localStorage on mount
  useEffect(() => {
    try {
      const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      const storedConversations = JSON.parse(localStorage.getItem('chatConversations') || '[]');
      
      let freshConversations: Conversation[] = storedConversations.map((conv: Conversation) => ({
        ...conv,
        messages: conv.messages.filter(msg => msg.timestamp >= sevenDaysAgo)
      }));

      // Ensure Clique IA exists
      if (!freshConversations.some(c => c.id === 'clique-ia')) {
        freshConversations.unshift({
          id: 'clique-ia',
          name: 'Clique IA',
          messages: [{
            id: 'initial',
            sender: 'ia',
            text: 'Olá! Como posso ajudar você a usar o sistema Clique SG hoje?',
            timestamp: Date.now(),
          }],
          unread: 1,
        });
      }

      setConversations(freshConversations);
    } catch (error) {
      console.error("Failed to parse chat conversations from localStorage", error);
      setConversations([]);
    }
  }, []);

  // Save conversations to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatConversations', JSON.stringify(conversations));
  }, [conversations]);

  const handleSendMessage = async (conversationId: string, text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'me',
      text,
      timestamp: Date.now(),
    };

    setConversations(prev => prev.map(c => 
      c.id === conversationId ? { ...c, messages: [...c.messages, newMessage] } : c
    ));

    // Handle AI response
    if (conversationId === 'clique-ia') {
      const typingMessage: Message = {
        id: 'typing',
        sender: 'ia',
        text: '',
        timestamp: Date.now(),
        isTyping: true,
      };
      setConversations(prev => prev.map(c => 
        c.id === 'clique-ia' ? { ...c, messages: [...c.messages, typingMessage] } : c
      ));

      try {
        // Fix: Use `process.env.API_KEY` as per the coding guidelines.
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: text,
          config: {
            systemInstruction: 'Você é a Clique IA, uma assistente prestativa para o sistema de gestão Clique SG. Você responde a perguntas dos usuários sobre como usar o aplicativo e também pode executar tarefas, como ativar ou desativar o modo escuro. Mantenha suas respostas concisas e amigáveis.',
            tools: [{ functionDeclarations: [toggleDarkModeFunction] }],
          },
        });
        
        const functionCalls = response.functionCalls;
        if (functionCalls) {
          for (const call of functionCalls) {
            if (call.name === 'toggleDarkMode' && typeof call.args.enabled === 'boolean') {
              setIsDarkMode(call.args.enabled);
            }
          }
        }
        
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'ia',
          text: response.text,
          timestamp: Date.now(),
        };
        
        setConversations(prev => prev.map(c => 
          c.id === 'clique-ia' ? { ...c, messages: [...c.messages.filter(m => !m.isTyping), aiMessage] } : c
        ));
      } catch (error) {
        console.error("Gemini API error:", error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'ia',
          text: 'Desculpe, estou com problemas para me conectar. Tente novamente mais tarde.',
          timestamp: Date.now(),
        };
        setConversations(prev => prev.map(c => 
          c.id === 'clique-ia' ? { ...c, messages: [...c.messages.filter(m => !m.isTyping), errorMessage] } : c
        ));
      }
    }
  };

  const openWindow = (id: string) => {
    setActiveWindows(prev => ({ ...prev, [id]: { minimized: false } }));
    setIsContactListOpen(false);
  };

  const closeWindow = (id: string) => {
    setActiveWindows(prev => {
      const newActive = { ...prev };
      delete newActive[id];
      // If no windows are open, show the contact list
      if(Object.keys(newActive).length === 0) {
        setIsContactListOpen(true);
      }
      return newActive;
    });
  };

  const toggleMinimize = (id: string) => {
    setActiveWindows(prev => ({ ...prev, [id]: { ...prev[id], minimized: !prev[id].minimized } }));
  };

  const handleNewChat = () => {
    const name = prompt("Digite o nome do usuário para iniciar uma nova conversa:");
    if (name && name.trim()) {
      const newId = name.trim().toLowerCase().replace(/\s+/g, '-');
      const existingConversation = conversations.find(c => c.id === newId);

      if (!existingConversation) {
        const newConversation: Conversation = {
          id: newId,
          name: name.trim(),
          messages: [],
          unread: 0,
        };
        setConversations(prev => [...prev, newConversation]);
        openWindow(newId);
      } else {
        openWindow(newId);
      }
    }
  };

  if (!isOpen) return null;

  const openConversations = Object.keys(activeWindows).filter(id => !activeWindows[id].minimized);
  const minimizedConversations = Object.keys(activeWindows).filter(id => activeWindows[id].minimized);

  return (
    <>
      <div className="fixed bottom-0 right-0 z-50 flex items-end space-x-4 p-4 pointer-events-none" aria-live="polite">
        {isContactListOpen && (
           <div className="flex flex-col h-[450px] w-72 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 pointer-events-auto">
              <header className="flex items-center justify-between p-3 bg-custom-teal-dark text-white rounded-t-lg">
                  <h3 className="font-bold text-sm">Mensagens Rápidas</h3>
                  <button onClick={onClose} className="hover:bg-black/20 p-1 rounded-full" aria-label="Close chat"><CloseIcon className="h-4 w-4 mr-0" /></button>
              </header>
              <div className="flex-1 overflow-y-auto">
                {conversations.map(c => (
                  <button key={c.id} onClick={() => openWindow(c.id)} className="w-full flex justify-between items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b dark:border-gray-600 text-left">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{c.name}</span>
                    {c.unread > 0 && <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{c.unread}</span>}
                  </button>
                ))}
              </div>
              <footer className="p-2 border-t border-gray-200 dark:border-gray-700">
                <button onClick={handleNewChat} className="flex items-center justify-center w-full space-x-2 text-custom-teal-darker dark:text-custom-teal-light font-semibold py-2 px-4 rounded-lg hover:bg-custom-teal-light/20 transition-colors">
                  <AddCircleIcon />
                  <span>Nova Conversa</span>
                </button>
              </footer>
           </div>
        )}

        {openConversations.map(id => {
          const conv = conversations.find(c => c.id === id);
          if (!conv) return null;
          return (
            <div key={id} className="pointer-events-auto">
              <ChatWindow
                conversation={conv}
                onSendMessage={handleSendMessage}
                onClose={closeWindow}
                onMinimize={toggleMinimize}
              />
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 left-0 z-50 flex items-end space-x-2 p-4">
        {!isContactListOpen && Object.keys(activeWindows).length > 0 && (
             <button onClick={() => setIsContactListOpen(true)} className="flex items-center space-x-2 px-4 py-2 bg-custom-teal-dark text-white rounded-t-lg shadow-lg" aria-label="Open contacts">
                <ChatIcon />
                <span className="font-bold text-sm hidden sm:inline">Contatos</span>
            </button>
        )}
        {minimizedConversations.map(id => {
           const conv = conversations.find(c => c.id === id);
           if (!conv) return null;
           return (
            <button key={id} onClick={() => toggleMinimize(id)} className="flex items-center justify-between w-48 px-3 py-2 bg-custom-teal-dark text-white rounded-t-lg shadow-lg" aria-label={`Maximize chat with ${conv.name}`}>
                <span className="font-bold text-sm truncate">{conv.name}</span>
                <MaximizeIcon />
            </button>
           );
        })}
      </div>
    </>
  );
};

export default ChatSystem;