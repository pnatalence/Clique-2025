import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="flex flex-col h-full bg-slate-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <header className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Sobre o Sistema</h1>
            </header>
            <main className="flex-1 flex flex-col lg:flex-row items-stretch justify-center gap-8">
                {/* Left Card */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full lg:w-1/2 flex flex-col text-center items-center">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Clique SG 11</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Comece a gerir com Clique!</p>
                    <div className="bg-white p-2 rounded-lg shadow-lg mb-6">
                        <img src="https://i.postimg.cc/fyjwfpTw/Screenshot-20251110-204145-Excel.jpg" alt="Clique Logo" className="h-32 w-32 object-contain" />
                    </div>
                    <div className="text-left space-y-4 text-gray-700 dark:text-gray-300 text-sm">
                        <p>
                            Clique SG - Um sistema de gestão feito com amor para suprir as necessidades que os centros de formação profissional têm há anos.
                        </p>
                        <p>
                            Com um design e funções inovadoras, tão necessário e incrível que parece até que não existe.
                        </p>
                        <p>
                            Ele oferece tudo com um Clique.
                        </p>
                        <p>
                            Comece a gerir com Clique.
                        </p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-full lg:w-1/2 text-center text-gray-600 dark:text-gray-400 space-y-3 text-sm flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">Licenciado para: P.N. Clique, Lda</h3>
                    <p>Versão empresarial - 11.021.05.37.1</p>
                    <p>Copyrigth © 2018 - 2022</p>
                    <p>Clique - Sistema de Gestão</p>
                    <p className="pt-2">
                        Essa é uma versão empresarial<br />
                        Produzido e distribuído por P.N.<br />
                        <span className="font-bold text-gray-700 dark:text-gray-300">Clique (SU), Lda</span><br />
                        Feito inicialmente por Pedro Alberto<br />
                        Natalence
                    </p>
                    <p className="pt-2">Todos os direitos reservados.</p>
                    <p className="pt-2">
                        Direitos Autorais do Design dos<br />
                        Documentos (pt.vecteezy.com).<br />
                        Excepto os documentos personalizados.
                    </p>
                    <p className="pt-2">
                        Direitos Autorais dos ícones usados<br />
                        (www.flaticon.com & icons8.com.br)
                    </p>
                    <p className="pt-2">
                        O Conteúdo do Aplicativo corresponde à<br />
                        P.N. Clique (SU), Lda e à empresa<br />
                        licenciada.
                    </p>
                </div>
            </main>
        </div>
    );
};

export default AboutPage;
