import React, { useState, useEffect } from 'react';
import { 
    UserGroupIcon, RefreshIcon, EditIcon, FilterListIcon,
    SearchUserIcon, DebtorsIcon, ViewIcon, SavePdfIcon, PrintIcon, 
    OpenFolderIcon, WarningIcon 
} from '../components/icons';
import { API_BASE_URL } from '../utils/config';

// Interface para definir o tipo de dado de um formando
interface Trainee {
    id: string;
    name: string;
    dob: string; // date of birth
    bi: string;
    paid: string;
    total: string;
}

const InfoBox: React.FC<{ label: string; value: string; className?: string }> = ({ label, value, className = '' }) => (
  <div className={className}>
    <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
    <p className="font-semibold text-gray-800 dark:text-gray-200">{value}</p>
  </div>
);

const LargeActionButton: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({ icon, title, description }) => (
    <div className="bg-custom-teal-light p-4 rounded-lg flex items-center space-x-4 h-full">
        <div>{icon}</div>
        <div>
            <h4 className="font-bold text-custom-teal-darker">{title}</h4>
            <p className="text-sm text-gray-700">{description}</p>
        </div>
    </div>
);

const ActionButton: React.FC<{icon: React.ReactNode, label: string}> = ({icon, label}) => (
    <button className="flex items-center justify-center w-full space-x-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
        {icon}
        <span>{label}</span>
    </button>
);

const OurTraineesPage: React.FC = () => {
    const [trainees, setTrainees] = useState<Trainee[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTrainees = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/trainees`);
                if (!response.ok) {
                    throw new Error('Não foi possível buscar os dados dos formandos.');
                }
                const data = await response.json();
                setTrainees(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('Ocorreu um erro inesperado.');
                }
                // Em caso de erro, podemos manter os dados estáticos como fallback
                setTrainees([
                    { id: '131', name: 'Adilson Jorge Fernandes da Silva (Fallback)', dob: '13-03-1998', bi: '005427418LA049', paid: 'AOA 0,00', total: 'AOA 20 000,00'},
                    { id: '128', name: 'Suraia Cassungo Soares (Fallback)', dob: '27-06-2005', bi: '008097426LA051', paid: 'AOA 1 000,00', total: 'AOA 1 000,00'},
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchTrainees();
    }, []);

    const renderTableContent = () => {
        if (loading) {
            return (
                <tr>
                    <td colSpan={6} className="text-center p-6">Carregando dados...</td>
                </tr>
            );
        }

        if (error) {
            return (
                <tr>
                    <td colSpan={6} className="text-center p-6 text-red-500">
                        Erro ao carregar dados: {error}. Exibindo dados de fallback.
                    </td>
                </tr>
            );
        }
        
        if (trainees.length === 0) {
            return (
                <tr>
                    <td colSpan={6} className="text-center p-6">Nenhum formando encontrado.</td>
                </tr>
            );
        }

        return trainees.map((row) => (
            <tr key={row.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 font-medium text-blue-600 dark:text-blue-400 underline border-r dark:border-gray-600">{row.id}</td>
                <td className="px-6 py-4 border-r dark:border-gray-600">{row.name}</td>
                <td className="px-6 py-4 border-r dark:border-gray-600">{row.dob}</td>
                <td className="px-6 py-4 border-r dark:border-gray-600">{row.bi}</td>
                <td className="px-6 py-4 border-r dark:border-gray-600">{row.paid}</td>
                <td className="px-6 py-4">{row.total}</td>
            </tr>
        ));
    }


    return (
        <div className="flex flex-col h-full">
            <header className="flex justify-center items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Nossos Formandos</h1>
            </header>

            <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex-1 flex flex-col">
                <div className="bg-custom-teal text-white p-8 rounded-t-2xl -m-6 mb-0 flex justify-between items-center">
                    <div>
                        <h2 className="text-4xl font-serif">Gerencie seus alunos</h2>
                        <p className="mt-2 text-lg opacity-90">Faça a gestão de seus formandos, analise os dados pessoais e os pagamentos de cada um deles.</p>
                    </div>
                    <div className="hidden md:block">
                        <UserGroupIcon />
                    </div>
                </div>

                <div className="bg-custom-teal-light text-custom-teal-darker p-3 rounded-md flex justify-between items-center my-6">
                    <p className="font-semibold">🧐 Encontramos {trainees.length} formandos inscritos nessa turma!</p>
                    <div className="flex items-center space-x-2">
                        <button className="p-2 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"><RefreshIcon className="h-4 w-4 text-gray-600 dark:text-gray-300 mr-0" /></button>
                        <button className="p-2 bg-custom-teal rounded-full hover:bg-custom-teal-dark"><EditIcon className="h-4 w-4 text-white" /></button>
                        <button className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-full border border-gray-300 dark:border-gray-600">
                            <FilterListIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                            <span className="font-semibold text-gray-700 dark:text-gray-200">Filtrar lista</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-6 mb-6">
                    <InfoBox label="Código da Turma" value="1" />
                    <InfoBox label="Nome de Turma" value="INF710/11-1/19" />
                    <InfoBox label="Nome do Curso" value="LÍNGUA PORTUGUESA & ORATÓRIA" className="col-span-2 md:col-span-3 lg:col-span-1" />
                    <InfoBox label="Curso Abrev." value="Por&Ora" />
                    <InfoBox label="Formador" value="Sem Formador" />
                    <InfoBox label="Turno" value="Manhã" />
                    <InfoBox label="Sala" value="7" />
                    <InfoBox label="Horário" value="10h/11h" />
                    <InfoBox label="Início do Curso" value="01-12-2019" />
                    <InfoBox label="Fim do Curso" value="01-02-2020" />
                    <InfoBox label="Duração da Turma" value="2 mês(es)" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <LargeActionButton icon={<SearchUserIcon/>} title="Análise individual" description="Análise detalhada de cada formando..." />
                        <LargeActionButton icon={<DebtorsIcon/>} title="Ver Devedores" description="Lista dos formandos com dívidas..." />
                    </div>
                    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600 grid grid-cols-2 gap-4 content-center">
                        <ActionButton icon={<ViewIcon/>} label="Visualizar" />
                        <ActionButton icon={<SavePdfIcon/>} label="Salvar PDF" />
                        <ActionButton icon={<PrintIcon/>} label="Imprimir" />
                        <ActionButton icon={<OpenFolderIcon/>} label="Abrir Pasta" />
                    </div>
                </div>

                <div className="overflow-x-auto flex-1">
                    <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300 border-t dark:border-gray-700">
                        <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 whitespace-nowrap">
                            <tr>
                                <th scope="col" className="px-6 py-3 border-r dark:border-gray-600">Código</th>
                                <th scope="col" className="px-6 py-3 border-r dark:border-gray-600">Nome do Formando</th>
                                <th scope="col" className="px-6 py-3 border-r dark:border-gray-600">Nascimento</th>
                                <th scope="col" className="px-6 py-3 border-r dark:border-gray-600">B.I.</th>
                                <th scope="col" className="px-6 py-3 border-r dark:border-gray-600">Valor Pago</th>
                                <th scope="col" className="px-6 py-3">Custo Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTableContent()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OurTraineesPage;
