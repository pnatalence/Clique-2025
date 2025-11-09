import React, { useState, useEffect, useRef } from 'react';
import { MinimizeIcon, CloseIcon, PaperPlaneIcon } from './icons';

export interface Message {
  id: string;
  text: string;
  sender: 'me' | 'them' | 'ia';
  timestamp: number;
  isTyping?: boolean;
}

export interface Conversation {
  id: string;
  name: string;
  messages: Message[];
  unread: number;
}

interface ChatWindowProps {
    conversation: Conversation;
    onSendMessage: (conversationId: string, text: string) => void;
    onClose: (conversationId: string) => void;
    onMinimize: (conversationId: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ conversation, onSendMessage, onClose, onMinimize }) => {
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [conversation.messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim()) {
            onSendMessage(conversation.id, newMessage.trim());
            setNewMessage('');
        }
    };

    const getMessageClass = (sender: Message['sender']) => {
        switch (sender) {
            case 'me':
                return 'bg-custom-teal text-white self-end';
            case 'ia':
                return 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start';
            case 'them':
            default:
                return 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 self-start';
        }
    }

    return (
        <div className="flex flex-col h-[450px] w-80 bg-white dark:bg-gray-800 rounded-t-lg shadow-2xl border border-gray-200 dark:border-gray-700">
            <header className="flex items-center justify-between p-2 bg-custom-teal-dark text-white rounded-t-lg">
                <h3 className="font-bold text-sm">{conversation.name}</h3>
                <div className="flex items-center space-x-2">
                    <button onClick={() => onMinimize(conversation.id)} className="hover:bg-black/20 p-1 rounded-full"><MinimizeIcon /></button>
                    <button onClick={() => onClose(conversation.id)} className="hover:bg-black/20 p-1 rounded-full"><CloseIcon className="h-4 w-4 mr-0" /></button>
                </div>
            </header>
            <div className="flex-1 p-3 overflow-y-auto flex flex-col space-y-2">
                {conversation.messages.map(msg => (
                    msg.isTyping ? (
                        <div key={msg.id} className={`p-2 rounded-lg max-w-[80%] ${getMessageClass(msg.sender)}`}>
                            <div className="flex items-center space-x-1">
                                <span className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="h-2 w-2 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="h-2 w-2 bg-current rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    ) : (
                        <div key={msg.id} className={`p-2 rounded-lg max-w-[80%] break-words ${getMessageClass(msg.sender)}`}>
                            {msg.text}
                        </div>
                    )
                ))}
                <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSendMessage} className="p-2 border-t border-gray-200 dark:border-gray-700 flex items-center">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-gray-800 dark:text-gray-200"
                    aria-label="Message input"
                />
                <button type="submit" className="p-2 rounded-full bg-custom-teal text-white hover:bg-custom-teal-dark transition-colors" aria-label="Send message">
                    <PaperPlaneIcon />
                </button>
            </form>
        </div>
    );
};

export default ChatWindow;
