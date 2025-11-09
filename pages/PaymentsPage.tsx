import React from 'react';
import { LargePaymentsIcon, AddCircleIcon, PrintIcon, SavePdfIcon, RefreshIcon } from '../components/icons';

const ActionButton: React.FC<{icon: React.ReactNode, label: string}> = ({icon, label}) => (
    <button className="flex items-center justify-center w-full space-x-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
        {icon}
        <span>{label}</span>
    </button>
);

const tableData = [
    { id: 'FT00124', trainee: 'João da Silva', course: 'Excel Avançado', value: '15.000,00 AOA', date: '2025-11-05', status: 'Pago' },
    { id: 'FT00125', trainee: 'Maria dos Santos', course: 'Gestão de Projectos', value: '25.000,00 AOA', date: '2025-11-04', status: 'Pendente' },
    { id: 'FT00126', trainee: 'Carlos Pereira', course: 'Marketing Digital', value: '20.000,00 AOA', date: '2025-11-04', status: 'Pago' },
    { id: 'FT00127', trainee: 'Ana Costa', course: 'Inglês Técnico', value: '18.000,00 AOA', date: '2025-11-03', status: 'Atrasado' },
    { id: 'FT00128', trainee: 'Pedro Rodrigues', course: 'Excel Avançado', value: '15.000,00 AOA', date: '2025-11-02', status: 'Pago' },
];

const PaymentsPage: React.FC = () => {
    const getStatusClass = (status: string) => {
        switch (status) {
            case 'Pago': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
            case 'Pendente': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
            case 'Atrasado': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
        }
    }

    return (
        <div className="flex flex-col h-full">
            <header className="flex justify-between items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest">PAGAMENTOS</h1>
            </header>

            <div className="mt-6 p-8 bg-custom-teal rounded-2xl text-white flex justify-between items-center shadow-lg">
                <div>
                    <h2 className="text-4xl font-serif">Gerencie os<br/>pagamentos</h2>
                    <p className="mt-2 text-lg opacity-90">Controle faturas, recibos e o estado financeiro dos seus formandos.</p>
                </div>
                <div className="hidden md:block">
                    <LargePaymentsIcon />
                </div>
            </div>

            <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-4">Ações Rápidas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <ActionButton icon={<AddCircleIcon/>} label="Nova Fatura" />
                    <ActionButton icon={<PrintIcon/>} label="Imprimir Relatório" />
                    <ActionButton icon={<SavePdfIcon/>} label="Exportar PDF" />
                    <ActionButton icon={<RefreshIcon className="h-5 w-5" />} label="Atualizar" />
                </div>
            </div>

            <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex-1 overflow-auto">
                <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
                    <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 whitespace-nowrap">
                        <tr>
                            <th scope="col" className="px-6 py-3">Fatura N°</th>
                            <th scope="col" className="px-6 py-3">Formando</th>
                            <th scope="col" className="px-6 py-3">Curso</th>
                            <th scope="col" className="px-6 py-3">Valor</th>
                            <th scope="col" className="px-6 py-3">Data</th>
                            <th scope="col" className="px-6 py-3">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.id} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{row.id}</td>
                                <td className="px-6 py-4">{row.trainee}</td>
                                <td className="px-6 py-4">{row.course}</td>
                                <td className="px-6 py-4">{row.value}</td>
                                <td className="px-6 py-4">{row.date}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(row.status)}`}>
                                        {row.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentsPage;