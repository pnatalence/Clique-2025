import React from 'react';
import { PrintIcon, SavePdfIcon, ViewIcon, UserEditIcon, SearchIcon, OpenFolderIcon, BackIcon, UpdateIcon, WarningIcon, PhoneIcon, PaymentDataIcon, CourseDataIcon } from '../components/icons';

const ActionButton: React.FC<{icon: React.ReactNode, label: string, className?: string}> = ({icon, label, className = ''}) => (
    <button className={`flex items-center space-x-2 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 ${className}`}>
        {icon}
        <span>{label}</span>
    </button>
);

const TabButton: React.FC<{children: React.ReactNode, isActive?: boolean}> = ({children, isActive=false}) => (
    <button className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-semibold ${isActive ? 'bg-white dark:bg-gray-700 shadow-md text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-700/50'}`}>
        <WarningIcon />
        <span>{children}</span>
    </button>
);

const InfoField: React.FC<{label: string, value: string | React.ReactNode, valueClassName?: string}> = ({label, value, valueClassName=''}) => (
    <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
        <p className={`font-semibold text-gray-800 dark:text-gray-200 ${valueClassName}`}>{value}</p>
    </div>
);

const SectionHeader: React.FC<{icon: React.ReactNode, title: string}> = ({icon, title}) => (
    <div className="flex items-center space-x-2 mb-3">
        {icon}
        <h3 className="font-bold text-gray-800 dark:text-gray-200">{title}</h3>
    </div>
);

const RegistrationFormPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
        <header className="flex justify-center items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest">FICHA DE INSCRIÇÃO</h1>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 my-6">
            <ActionButton icon={<PrintIcon />} label="Imprimir" />
            <ActionButton icon={<SavePdfIcon />} label="Salvar PDF" />
            <ActionButton icon={<ViewIcon />} label="Visualizar" />
            <ActionButton icon={<UserEditIcon />} label="Editar" />
            <ActionButton icon={<SearchIcon />} label="Pesquisar" />
            <ActionButton icon={<OpenFolderIcon />} label="Abrir Pasta" />
            <ActionButton icon={<BackIcon />} label="Voltar" />
            <ActionButton icon={<UpdateIcon />} label="Atualizar" />
        </div>

        <div className="bg-gray-100 dark:bg-gray-900 p-2 rounded-xl flex items-center justify-start space-x-2">
            <TabButton isActive>Ficha A4</TabButton>
            <TabButton>Ficha e Fatura A5</TabButton>
            <TabButton>Ficha A4 e duas vias de Fatura A5</TabButton>
        </div>

        <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <InfoField label="Código" value={<a href="#" className="text-blue-600 dark:text-blue-400 underline">104/2021</a>} />
                <InfoField label="Nome" value="Suraia Cassungo Soares" />
                <InfoField label="Sexo" value="Feminino" />
                <InfoField label="Fase de Idade" value="Adolescente" />
                <InfoField label="Bilhete de Identificação" value="008097426LA051" />
                <InfoField label="Nascimento" value="27-06-2005" />
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-8">
                    {/* Contactos */}
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border dark:border-gray-600">
                        <SectionHeader icon={<PhoneIcon />} title="Contactos" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoField label="Residência" value="Morro Bento - junto ao Inamet" />
                            <InfoField label="Telefone Principal" value="966 333 555" />
                            <InfoField label="T. Alternativo" value="934 183 591" />
                            <InfoField label="E-mail" value="suraiasoares@gmail.com" />
                        </div>
                    </div>

                    {/* Dados do Curso */}
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border dark:border-gray-600">
                        <SectionHeader icon={<CourseDataIcon />} title="Dados do Curso" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <InfoField label="Curso" value="CURSO INTEGRADO DE RÁDIO" valueClassName="col-span-4" />
                            <InfoField label="Turma" value="ESSE-14/15-1/20" />
                            <InfoField label="Formador" value="Sem Formador" />
                            <InfoField label="Sala" value="7" />
                            <div />
                            <InfoField label="Turno" value="Tarde" />
                            <InfoField label="Horário" value="14h/15h" />
                            <InfoField label="Começo" value="25-02-2021" />
                            <InfoField label="Fim" value="05-04-2021" />
                        </div>
                    </div>
                </div>

                {/* Dados de Pagamento */}
                <div className="bg-green-500 text-white p-6 rounded-2xl flex flex-col justify-center space-y-6">
                     <div className="flex items-center space-x-2">
                        <PaymentDataIcon className="h-8 w-8" />
                        <h3 className="font-bold text-xl">Dados de Pagamento</h3>
                    </div>
                    <div className="space-y-4">
                        <InfoField label="Nº da Fatura" value="FR C2021/2" valueClassName="text-white" />
                        <InfoField label="Método" value="Numerário" valueClassName="text-white" />
                        <InfoField label="Data" value="11-08-2021" valueClassName="text-white" />
                        <InfoField label="Valor Pago" value="AOA 1 000,00" valueClassName="text-white" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RegistrationFormPage;