import React, { useState } from 'react';
import { UserIcon, EyeIcon, EyeOffIcon } from '../components/icons';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setError('');
      onLoginSuccess();
    } else {
      setError('Usuário ou senha inválidos.');
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-white flex flex-col items-center justify-center overflow-hidden p-4">
      {/* Background Shapes */}
      <div className="absolute top-[-20%] left-[-15%] w-[500px] h-[500px] bg-custom-teal rounded-full opacity-90 blur-xl"></div>
      <div className="absolute bottom-[-25%] right-[-10%] w-[600px] h-[600px] bg-custom-teal rounded-tr-[50%] rounded-tl-[30%] rounded-bl-[40%] rounded-br-[60%] transform -rotate-45 opacity-90 blur-xl"></div>
      <div className="absolute bottom-[-10%] left-[5%] w-[300px] h-[300px] bg-custom-teal rounded-full opacity-80 blur-lg"></div>
      
      {/* Teal bar at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-custom-teal-dark"></div>
      
      <main className="relative z-10 flex items-center justify-center w-full">
        <div className="w-full max-w-4xl lg:grid lg:grid-cols-2 rounded-2xl shadow-2xl shadow-custom-teal/30 overflow-hidden">
          
          <div className="hidden lg:flex relative flex-col items-center justify-center bg-custom-teal-dark text-white text-center p-12">
            <h2 className="text-4xl font-bold leading-tight">Clique SG 11</h2>
            <p className="text-lg mt-4">O melhor nunca esteve tão perto!</p>
            <p className="absolute bottom-6 text-xs opacity-80">Feito com 🤍 pela PN Clique</p>
          </div>

          <div className="bg-white p-8 sm:p-12">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">
                Bem vindo(a) ao <span className="text-custom-teal-darker">Clique SG</span>
              </h1>
              <p className="text-gray-500 text-sm mt-2">Preencha com seus dados de login para acessar o melhor sistema de gestão</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="text-sm font-medium text-gray-600" htmlFor="username">Usuário</label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <UserIcon />
                  </div>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-3 pr-10 py-2 border-b-2 border-gray-300 focus:border-custom-teal-dark focus:outline-none bg-transparent transition text-black"
                    placeholder="johndoe"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600" htmlFor="password">Senha</label>
                <div className="relative mt-1">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                  </button>
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-3 pr-10 py-2 border-b-2 border-gray-300 focus:border-custom-teal-dark focus:outline-none bg-transparent transition text-black"
                    placeholder="********"
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <button
                type="submit"
                className="w-full bg-custom-teal-dark text-white font-bold py-3 px-4 rounded-lg hover:bg-custom-teal-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-teal transition-transform transform hover:scale-105"
              >
                ENTRAR
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;