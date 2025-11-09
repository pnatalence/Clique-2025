import React from 'react';
import { DocumentsIcon, EditIcon, ExclamationIcon, PaperclipIcon } from '../components/icons';

const InfoItem: React.FC<{ label: string; value: string; }> = ({ label, value }) => (
    <div className="mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="text-gray-800 dark:text-gray-200 font-medium">{value}</p>
    </div>
);

const PriceItem: React.FC<{ label: string; value: string; }> = ({ label, value }) => (
    <div className="flex justify-between items-center bg-white dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600">
        <span className="text-gray-600 dark:text-gray-300">{label}</span>
        <span className="font-bold text-gray-800 dark:text-gray-200">{value}</span>
    </div>
);

const InformationPage: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <header className="flex justify-between items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">INFORMAÇÕES</h1>
            </header>
            <main className="mt-6 flex-1">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
                    {/* Nossas Informações Card */}
                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                        <div className="flex items-center mb-6">
                            <DocumentsIcon className="h-6 w-6 mr-3 text-gray-600 dark:text-gray-300" />
                            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Nossas Informações</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                            <div>
                                <InfoItem label="Nome" value="P.N. Clique, Lda" />
                                <InfoItem label="Frase" value="O melhor nunca esteve tão perto!" />
                                <InfoItem label="NIF" value="5000489786" />
                                <InfoItem label="Cidade" value="Luanda" />
                                <InfoItem label="Endereço" value="Morro Bento, Gamek à Direita (defronte ao Inamet)" />
                            </div>
                            <div>
                                <InfoItem label="Email" value="cliquesg@outlook.com" />
                                <InfoItem label="Diretor" value="Pedro Natalence" />
                                <InfoItem label="INEFOP" value="000.00/LA/0000" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Logotipo Card */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex-1">
                            <div className="flex items-center mb-4">
                                <PaperclipIcon className="h-6 w-6 mr-3 text-gray-600 dark:text-gray-300" />
                                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Logotipo</h2>
                            </div>
                            <div className="flex items-center justify-center p-4">
                                <img src="https://i.imgur.com/5248sY3.png" alt="Logotipo" className="max-h-32" />
                            </div>
                        </div>

                        {/* Preço Padrão Card */}
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex-1">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                    <ExclamationIcon className="h-6 w-6 mr-3 text-gray-600 dark:text-gray-300" />
                                    <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Preço Padrão</h2>
                                </div>
                                <button className="p-2 rounded-full bg-custom-teal-light text-custom-teal-darker hover:bg-custom-teal-dark hover:text-white transition-colors">
                                    <EditIcon className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="space-y-3">
                                <PriceItem label="Inscrição" value="2 500,00 AOA" />
                                <PriceItem label="Mensalidade" value="10 000,00 AOA" />
                                <PriceItem label="Certificado" value="5 000,00 AOA" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InformationPage;