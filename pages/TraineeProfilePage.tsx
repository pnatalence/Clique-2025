import React, { useState } from 'react';
import { 
    SearchIcon, HeartIcon, EditIcon, PersonRunningIcon, CalendarIcon, 
    GenderIcon, HomeIcon, IdCardIcon, PhoneIcon, CoursesIcon, 
    AddCircleIcon, NotesIcon, FormationIcon, PrintIcon, QuoteIcon,
    AvatarPlaceholder, LockIcon, PaymentsSectionIcon, DollarSignIcon
} from '../components/icons';

const TraineeButton: React.FC<{ name: string, number: number }> = ({ name, number }) => (
    <button className="flex items-center space-x-2 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
        <span className="flex items-center justify-center h-5 w-5 text-xs bg-gray-200 dark:bg-gray-600 dark:text-gray-200 rounded-full">{number}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{name}</span>
    </button>
);

const InfoItem: React.FC<{ icon: React.ReactNode, label: string, value: string }> = ({ icon, label, value }) => (
    <div className="flex items-start space-x-3">
        <div className="text-gray-400 mt-0.5">{icon}</div>
        <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">{value}</p>
        </div>
    </div>
);

const StatCard: React.FC<{icon: React.ReactNode, title: string, value: string, unit: string, actionIcon?: React.ReactNode}> = ({ icon, title, value, unit, actionIcon }) => (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border dark:border-gray-600 flex flex-col items-center justify-center text-center relative">
        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 font-bold self-start">
            {icon}
            <span>{title}</span>
        </div>
        {actionIcon && <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">{actionIcon}</button>}
        <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-6xl font-light text-custom-teal">{value}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{unit}</p>
        </div>
    </div>
);

const PrintButton: React.FC<{label: string}> = ({label}) => (
    <button className="w-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold py-2 px-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">
        {label}
    </button>
);

const TraineeProfilePage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [observationText, setObservationText] = useState('');
    const [savedObservation, setSavedObservation] = useState('');

    const handleOpenModal = () => {
        setObservationText(savedObservation);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveObservation = () => {
        setSavedObservation(observationText);
        handleCloseModal();
    };


    return (
        <div className="flex flex-col h-full">
            <header className="flex justify-center items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Formando</h1>
            </header>
            
            <main className="mt-6 flex-1 overflow-y-auto space-y-6 pb-6">
                {/* Main Profile Card */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    {/* Search and Favorites Header */}
                    <div className="flex flex-col space-y-4">
                        <div className="relative">
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input type="text" placeholder="Pesquisar..." className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-teal-light" />
                        </div>
                        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                            <button className="flex items-center space-x-2 px-4 py-2 bg-custom-teal-light text-custom-teal-darker font-bold rounded-full shadow-sm whitespace-nowrap">
                                <HeartIcon />
                                <span>Gerir Favoritos</span>
                            </button>
                            <TraineeButton name="Pedro" number={1} />
                            <TraineeButton name="João" number={2} />
                            <TraineeButton name="Alberto" number={3} />
                            <TraineeButton name="Adilson" number={4} />
                            <TraineeButton name="José" number={5} />
                            <TraineeButton name="Sara" number={6} />
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Left Column - Personal Info */}
                        <div className="md:col-span-1 lg:col-span-1 bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border dark:border-gray-600 space-y-4">
                            <div className="relative w-24 h-24 mx-auto">
                                <AvatarPlaceholder />
                                <button className="absolute top-0 right-0 bg-custom-teal-light p-1.5 rounded-full text-custom-teal-darker shadow-sm"><EditIcon className="w-3 h-3" /></button>
                                <button className="absolute bottom-0 right-0 bg-white dark:bg-gray-600 p-1.5 rounded-full text-red-500 shadow-sm border dark:border-gray-500"><HeartIcon className="w-3 h-3" /></button>
                            </div>
                            <div className="text-center">
                                <h2 className="font-bold text-lg dark:text-gray-100">Adilson Jorge Fernandes da Silva</h2>
                                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 underline">Código - 131/2021</a>
                            </div>
                            <div className="space-y-3 pt-2 border-t dark:border-gray-600">
                                <h3 className="font-bold text-sm text-gray-500 dark:text-gray-400">Info. Pessoal</h3>
                                <InfoItem icon={<PersonRunningIcon />} label="Idade" value="28" />
                                <InfoItem icon={<PersonRunningIcon />} label="Fase" value="Adulto" />
                                <InfoItem icon={<CalendarIcon />} label="Data" value="13-03-1998" />
                                <InfoItem icon={<GenderIcon />} label="Sexo" value="Masculino" />
                                <InfoItem icon={<HomeIcon />} label="Local" value="LUANDA" />
                                <InfoItem icon={<IdCardIcon />} label="B.I." value="005427418LA049" />
                            </div>
                            <div className="space-y-3 pt-2 border-t dark:border-gray-600">
                                <h3 className="font-bold text-sm text-gray-500 dark:text-gray-400">Contactos</h3>
                                <InfoItem icon={<PhoneIcon className="h-5 w-5" />} label="Principal" value="924 463 322" />
                                <InfoItem icon={<PhoneIcon className="h-5 w-5" />} label="Alternat." value="934 183 591" />
                                <InfoItem icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} label="E-mail" value="-" />
                            </div>
                             <div className="space-y-3 pt-2 border-t dark:border-gray-600">
                                <h3 className="font-bold text-sm text-gray-500 dark:text-gray-400">Info. Extras</h3>
                                 <div className="pl-8">
                                    <div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Registrado por</p>
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">Pedro Natalence</p>
                                    </div>
                                    <div className="mt-3">
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Data do Registro</p>
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">03-03-2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Center Column - Stats & Formation */}
                        <div className="md:col-span-2 lg:col-span-2 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <StatCard icon={<CoursesIcon className="h-6 w-6"/>} title="Cursos" value="1" unit="Turmas" actionIcon={<AddCircleIcon className="h-6 w-6" />} />
                                <StatCard icon={<NotesIcon />} title="Notas" value="16" unit="Valores" />
                            </div>
                            <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border dark:border-gray-600 relative">
                                <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"><EditIcon className="w-5 h-5" /></button>
                                <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 font-bold mb-4">
                                    <FormationIcon />
                                    <span>Formação</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <InfoItem icon={<></>} label="Curso" value="LÍNGUA PORTUGUESA & ORATÓRIA" />
                                    <div/>
                                    <InfoItem icon={<></>} label="Turma" value="INF710/11-1/19" />
                                    <InfoItem icon={<></>} label="Formador" value="Sem Formador" />
                                    <InfoItem icon={<></>} label="Começo" value="01-12-2019" />
                                    <InfoItem icon={<></>} label="Sala" value="7" />
                                    <InfoItem icon={<></>} label="Fim" value="01-02-2020" />
                                    <InfoItem icon={<></>} label="Turno" value="Manhã" />
                                    <InfoItem icon={<></>} label="Horário" value="10h/11h" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border dark:border-gray-600">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 font-bold">
                                        <PaymentsSectionIcon />
                                        <span>Pagamentos</span>
                                    </div>
                                    <div className="flex items-center text-red-500 text-xs font-semibold text-right">
                                        <LockIcon className="h-4 w-4 mr-1 flex-shrink-0" />
                                        <span>Edição Financeira<br/>bloqueada</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2 p-2 border dark:border-gray-600 rounded-lg">
                                        <h4 className="font-semibold text-gray-600 dark:text-gray-300">Percentual</h4>
                                        <div className="flex justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">Inscrição</span> <span>0%</span></div>
                                        <div className="flex justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">Certificado</span> <span>0%</span></div>
                                        <div className="flex justify-between text-sm"><span className="text-gray-500 dark:text-gray-400">Mensalidade</span> <span>0%</span></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="p-3 border dark:border-gray-600 rounded-lg text-center">
                                            <CalendarIcon className="h-5 w-5 mx-auto text-gray-400 mb-1"/>
                                            <p className="text-sm font-semibold dark:text-gray-200">-</p>
                                            <p className="text-xs text-gray-400">Último pagamento</p>
                                        </div>
                                        <div className="p-3 border dark:border-gray-600 rounded-lg">
                                            <p className="text-xs text-gray-400">Certificado</p>
                                            <p className="text-sm font-semibold dark:text-gray-200">- AOA</p>
                                        </div>
                                        <div className="p-3 border dark:border-gray-600 rounded-lg">
                                            <p className="text-xs text-gray-400">Inscrição</p>
                                            <p className="text-sm font-semibold dark:text-gray-200">- AOA</p>
                                        </div>
                                    </div>
                                    <div className="bg-green-600 text-white p-4 rounded-lg flex flex-col justify-between">
                                        <h4 className="font-bold">Mensalidade</h4>
                                        <div>
                                            <p className="text-xs opacity-80">Pagou</p>
                                            <p className="text-lg font-bold">- AOA</p>
                                        </div>
                                        <div>
                                            <p className="text-xs opacity-80">Devendo (2 Meses)</p>
                                            <p className="text-lg font-bold text-red-300">20 000 AOA</p>
                                        </div>
                                        <p className="text-xs opacity-80 mt-2">Custo Total (2 Meses)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FIX: Moved Right Column inside the grid and fixed overall structure. */}
                        {/* Right Column - Actions */}
                        <div className="md:col-span-3 lg:col-span-1 space-y-6">
                            <div className="bg-custom-teal-light p-4 rounded-xl shadow-sm">
                                <div className="flex items-center space-x-2 text-custom-teal-darker font-bold mb-4">
                                    <PrintIcon className="h-6 w-6" />
                                    <span>Impressão</span>
                                </div>
                                <div className="space-y-2">
                                    <PrintButton label="Pagamentos PDF" />
                                    <PrintButton label="Ficha de Inscrição" />
                                    <PrintButton label="Declaração" />
                                    <PrintButton label="Certificado" />
                                    <PrintButton label="Cartão" />
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-700 p-4 rounded-xl shadow-sm border dark:border-gray-600">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-200 font-bold">
                                        <QuoteIcon />
                                        <span>Observações</span>
                                    </div>
                                    {savedObservation && (
                                        <button onClick={handleOpenModal} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                                            <EditIcon className="w-5 h-5" />
                                        </button>
                                    )}
                                </div>
                                <div className="flex items-start justify-start w-full min-h-[40px]">
                                    {savedObservation ? (
                                        <p className="text-sm text-gray-700 dark:text-gray-200 w-full text-left whitespace-pre-wrap">{savedObservation}</p>
                                    ) : (
                                        <div className="w-full flex justify-center items-center">
                                          <button onClick={handleOpenModal} className="text-blue-600 dark:text-blue-400 hover:underline">
                                              Clique para Adicionar
                                          </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* All Payments Card */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Todos os pagamentos</h3>
                        <button className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                            <SearchIcon className="h-4 w-4" />
                            <span>Pesquisar</span>
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <DollarSignIcon />
                        <p className="mt-4 text-lg font-semibold text-gray-500 dark:text-gray-400">SEM PAGAMENTOS DE MENSALIDADES</p>
                    </div>
                </div>
            </main>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-lg font-bold text-gray-800 dark:text-gray-200">Adicionar Observação</h4>
                            <button onClick={handleCloseModal} className="text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <textarea
                            value={observationText}
                            onChange={(e) => setObservationText(e.target.value)}
                            className="w-full h-32 p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-teal-light"
                            placeholder="Escreva a sua observação aqui..."
                        />
                        <div className="mt-4 flex justify-end">
                            <button
                                onClick={handleSaveObservation}
                                className="bg-custom-teal text-white font-bold py-2 px-6 rounded-lg hover:bg-custom-teal-dark transition-colors"
                            >
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TraineeProfilePage;