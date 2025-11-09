import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { VisitsIcon, CoursesIcon, ClassesIcon, PaymentsIcon } from '../components/icons';

// Mock Data
const generateData = (period: string) => {
    switch (period) {
        case 'dia':
            return Array.from({ length: 7 }, (_, i) => ({ name: `Dia ${i + 1}`, inscrições: Math.floor(Math.random() * 10) + 1, receita: (Math.floor(Math.random() * 50000) + 10000) }));
        case 'semana':
            return Array.from({ length: 4 }, (_, i) => ({ name: `Semana ${i + 1}`, inscrições: Math.floor(Math.random() * 50) + 5, receita: (Math.floor(Math.random() * 250000) + 50000) }));
        case 'mês':
            return [
                { name: 'Jan', inscrições: 65, receita: 250000 },
                { name: 'Fev', inscrições: 59, receita: 220000 },
                { name: 'Mar', inscrições: 80, receita: 300000 },
                { name: 'Abr', inscrições: 81, receita: 310000 },
                { name: 'Mai', inscrições: 56, receita: 200000 },
                { name: 'Jun', inscrições: 55, receita: 190000 },
                { name: 'Jul', inscrições: 40, receita: 150000 },
            ];
        case 'trimestre':
            return Array.from({ length: 4 }, (_, i) => ({ name: `T${i + 1}`, inscrições: Math.floor(Math.random() * 200) + 50, receita: (Math.floor(Math.random() * 800000) + 200000) }));
        case 'semestre':
            return Array.from({ length: 2 }, (_, i) => ({ name: `S${i + 1}`, inscrições: Math.floor(Math.random() * 500) + 100, receita: (Math.floor(Math.random() * 2000000) + 500000) }));
        case 'ano':
            return Array.from({ length: 3 }, (_, i) => ({ name: `${2023 + i}`, inscrições: Math.floor(Math.random() * 1000) + 200, receita: (Math.floor(Math.random() * 5000000) + 1000000) }));
        default:
            return [];
    }
};

const summaryData: { [key: string]: { inscricoes: number; cursos: number; turmas: number; receita: string; } } = {
    dia: { inscricoes: 7, cursos: 1, turmas: 1, receita: '35.000,00' },
    semana: { inscricoes: 25, cursos: 2, turmas: 3, receita: '150.000,00' },
    mês: { inscricoes: 81, cursos: 5, turmas: 8, receita: '310.000,00' },
    trimestre: { inscricoes: 200, cursos: 10, turmas: 15, receita: '800.000,00' },
    semestre: { inscricoes: 500, cursos: 15, turmas: 25, receita: '2.000.000,00' },
    ano: { inscricoes: 1000, cursos: 21, turmas: 69, receita: '5.000.000,00' },
};

const LargeProgressIcon = () => (
    <svg className="h-32 w-32 text-white/50" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 52h8v-8h-8v8zm12 0h8v-16h-8v16zm12 0h8V20h-8v32zm12 0h8V12h-8v40zM4 60h56v4H4v-4z" opacity="0.6"/>
        <path d="M54 8l-8 8-8-8-8 8-8-8-8 8-8-8-6 6 8 8-8 8 8 8-8 8 8 8-8 8 6 6 8-8 8 8 8-8 8 8 8-8 8-8-8-8-8-8 8-6-6 8-8-8-8-8 8-8-8 8-8 8-8-8-8z" opacity="0.2"/>
    </svg>
);

const FilterButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${
            isActive ? 'bg-custom-teal-darker text-white shadow-md' : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600'
        }`}
    >
        {label}
    </button>
);

const SummaryCard: React.FC<{ icon: React.ReactNode; label: string; value: string | number; }> = ({ icon, label, value }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border dark:border-gray-700 flex items-center space-x-4">
        <div className="bg-custom-teal-light p-3 rounded-full">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
            <p className="text-xl font-bold text-gray-800 dark:text-gray-200">{value}</p>
        </div>
    </div>
);

const ProgressPage: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('mês');
    const data = generateData(activeFilter);
    const summary = summaryData[activeFilter];

    return (
        <div className="flex flex-col h-full space-y-6">
            <header className="flex justify-between items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Progresso</h1>
            </header>
            
            <div className="p-8 bg-custom-teal rounded-2xl text-white flex justify-between items-center shadow-lg">
                <div>
                    <h2 className="text-4xl font-bold">Acompanhe o Progresso</h2>
                    <p className="mt-2 text-lg opacity-90">Analise o desempenho do seu centro de formação com gráficos e relatórios detalhados.</p>
                </div>
                <div className="hidden md:block">
                    <LargeProgressIcon />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md flex flex-wrap items-center justify-center gap-2">
                {['dia', 'semana', 'mês', 'trimestre', 'semestre', 'ano'].map(filter => (
                    <FilterButton 
                        key={filter} 
                        label={filter.charAt(0).toUpperCase() + filter.slice(1)} 
                        isActive={activeFilter === filter} 
                        onClick={() => setActiveFilter(filter)}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <SummaryCard icon={<VisitsIcon className="h-6 w-6 text-custom-teal-darker" />} label="Total Inscrições" value={summary.inscricoes} />
                <SummaryCard icon={<CoursesIcon className="h-6 w-6 text-custom-teal-darker" />} label="Novos Cursos" value={summary.cursos} />
                <SummaryCard icon={<ClassesIcon className="h-6 w-6 text-custom-teal-darker" />} label="Novas Turmas" value={summary.turmas} />
                <SummaryCard icon={<PaymentsIcon className="h-6 w-6 text-custom-teal-darker" />} label="Receita Total" value={`${summary.receita} AOA`} />
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-4">Inscrições vs. Receita ({activeFilter})</h3>
                 <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(128,128,128,0.3)" />
                            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#a1a1aa' }} stroke="#a1a1aa" />
                            <YAxis yAxisId="left" tick={{ fontSize: 12, fill: '#a1a1aa' }} stroke="#a1a1aa" />
                            <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: '#a1a1aa' }} stroke="#65c7ba" tickFormatter={(value) => `${value / 1000}k`} />
                            <Tooltip
                                contentStyle={{ backgroundColor: 'rgb(31 41 55 / 0.8)', border: '1px solid #4b5563', borderRadius: '4px' }}
                                labelStyle={{ fontWeight: 'bold', color: '#f3f4f6' }}
                                itemStyle={{color: '#9ca3af'}}
                                formatter={(value: number, name: string) => [name === 'Receita (AOA)' ? value.toLocaleString('pt-AO') : value, name]}
                            />
                            <Legend wrapperStyle={{color: "#a1a1aa"}} />
                            <Bar yAxisId="left" dataKey="inscrições" fill="#a5f3fc" name="Inscrições" />
                            <Bar yAxisId="right" dataKey="receita" fill="#65c7ba" name="Receita (AOA)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md flex-1 overflow-auto">
                 <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 p-6">Relatório Detalhado</h3>
                <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
                    <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">Período ({activeFilter})</th>
                            <th scope="col" className="px-6 py-3 text-right">Inscrições</th>
                            <th scope="col" className="px-6 py-3 text-right">Receita (AOA)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100">{row.name}</td>
                                <td className="px-6 py-4 text-right">{row.inscrições}</td>
                                <td className="px-6 py-4 text-right">{row.receita.toLocaleString('pt-AO')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ProgressPage;