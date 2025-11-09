import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { 
    SearchIcon, HeartIcon, HeartWithPlusIcon, OpenBoxIcon, PlusIcon, 
    EditIcon, MinusIcon, ReturnIcon, CubeIcon, ChartIcon 
} from '../components/icons';

const InfoField: React.FC<{label: string, value: string, valueClassName?: string}> = ({label, value, valueClassName=''}) => (
    <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
        <p className={`font-semibold text-gray-800 dark:text-gray-200 ${valueClassName}`}>{value}</p>
    </div>
);

const ActionButton: React.FC<{icon: React.ReactNode, label: string}> = ({icon, label}) => (
    <button className="flex items-center justify-center space-x-2 w-full text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
        {icon}
        <span>{label}</span>
    </button>
);

const FavoriteItem: React.FC<{ name: string, number: number }> = ({ name, number }) => (
    <button className="flex-shrink-0 flex items-center space-x-2 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
        <span className="flex items-center justify-center h-5 w-5 text-xs bg-gray-200 dark:bg-gray-600 rounded-full">{number}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{name}</span>
    </button>
);

const chartData = [
  { name: 'Estoque', value: 70 },
  { name: 'Em uso', value: 20 },
  { name: 'Esgotados', value: 10 },
];
const COLORS = ['#2dd4bf', '#facc15', '#a5f3fc'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, payload }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const textColor = payload.name === 'Estoque' ? 'white' : 'black';

  return (
    <text x={x} y={y} fill={textColor} textAnchor="middle" dominantBaseline="central" fontSize="12px" fontWeight="bold">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

interface IndividualAnalysisPageProps {
  setCurrentPage: (page: string) => void;
}

const IndividualAnalysisPage: React.FC<IndividualAnalysisPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col h-full space-y-4">
        <header className="flex justify-between items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Análise Individual</h1>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input type="text" placeholder="Pesquisar..." className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-teal-light" />
                </div>
                 <div className="flex items-center space-x-1">
                    <button className="p-2 text-gray-400 hover:text-red-500"><HeartIcon className="h-6 w-6" /></button>
                    <button className="p-2 text-gray-400 hover:text-red-500"><HeartWithPlusIcon className="h-6 w-6" /></button>
                </div>
            </div>
        </header>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
             <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg"><OpenBoxIcon /></div>
                <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <InfoField label="Nome do produto ou serviço" value="Quadro" />
                    <InfoField label="Código" value="001" valueClassName="text-blue-600 dark:text-blue-400 underline" />
                    <InfoField label="Departamento" value="Formação" />
                    <InfoField label="Fornecedor" value="Tabacária" />
                    <InfoField label="Condição" value="Estável" />
                </div>
                <div className="w-full md:w-auto grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    <ActionButton icon={<PlusIcon />} label="Entradas" />
                    <ActionButton icon={<EditIcon />} label="Editar" />
                    <ActionButton icon={<MinusIcon />} label="Saídas" />
                    <ActionButton icon={<ReturnIcon />} label="Voltar" />
                </div>
            </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2">
                <button className="flex-shrink-0 flex items-center space-x-2 px-4 py-2 bg-custom-teal-light text-custom-teal-darker font-bold rounded-full shadow-sm whitespace-nowrap">
                    <HeartIcon className="h-4 w-4" />
                    <span>Gerir Favoritos</span>
                </button>
                <FavoriteItem name="Quadro" number={1} />
                <FavoriteItem name="Mesa" number={2} />
                <FavoriteItem name="Folhas" number={3} />
                <FavoriteItem name="Lapizeir" number={4} />
                <FavoriteItem name="Lapis" number={5} />
                <FavoriteItem name="Giz" number={6} />
            </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <div className="flex items-center space-x-2 mb-4">
                    <CubeIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                    <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Cadastro</h3>
                </div>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <InfoField label="Cadastrado por" value="Pedro A. Natalence" />
                        <InfoField label="Editado por" value="-" />
                        <InfoField label="Data do cadastro" value="30-08-2021" />
                        <InfoField label="Data da Última Edição" value="-" />
                    </div>
                    <InfoField label="Estoque Mínimo" value="2" />
                    <div className="pt-2">
                        <ActionButton icon={<></>} label="Ver Histórico de Edição" />
                    </div>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex">
                <div className="w-2/3 pr-4">
                    <div className="flex items-center space-x-2 mb-4">
                        <ChartIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Estado</h3>
                    </div>
                    <div className="space-y-1 text-gray-800 dark:text-gray-200">
                        <div className="flex justify-between items-center p-2 rounded-md"><span>Entradas</span><span className="font-bold">10</span></div>
                        <div className="flex justify-between items-center p-2 rounded-md"><span>Saídas</span><span className="font-bold">3</span></div>
                        <div className="flex justify-between items-center p-2 rounded-md bg-yellow-100 dark:bg-yellow-500/20"><span>- Em uso</span><span className="font-bold">2</span></div>
                        <div className="flex justify-between items-center p-2 rounded-md"><span>- Esgotados</span><span className="font-bold">1</span></div>
                        <div className="flex justify-between items-center p-2 rounded-md bg-custom-teal-light dark:bg-custom-teal-dark/50 font-bold text-custom-teal-darker dark:text-custom-teal-light"><span>Estoque Atual</span><span>7</span></div>
                    </div>
                </div>
                <div className="w-1/3 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                innerRadius={45}
                                outerRadius={65}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke={index === 2 ? '#0891b2' : 'none'} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    </div>
  );
};

export default IndividualAnalysisPage;