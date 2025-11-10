import React from 'react';
import { 
    CubeIcon, AnalysisIcon, IdCardIcon, AssetControlIcon, EditIcon, 
    DocumentsIcon, RefreshIcon, PlusIcon, MinusIcon, ViewIcon
} from '../components/icons';

const ActionButton: React.FC<{icon: React.ReactNode, label: string}> = ({icon, label}) => (
    <button className="flex items-center justify-center w-full space-x-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm whitespace-nowrap">
        {icon}
        <span>{label}</span>
    </button>
);

const tableData = [
    { no: '1', desc: 'Quadro', current: 0, min: 2, recipes: '-', costs: '-', profit: '-', attention: 'Sim' },
    { no: '2', desc: 'Apagador', current: 0, min: 4, recipes: '-', costs: '-', profit: '-', attention: 'Sim' },
    { no: '3', desc: 'Resma A4', current: 0, min: 5, recipes: '-', costs: '-', profit: '-', attention: 'Sim' },
    { no: '4', desc: 'Marcador', current: 0, min: 3, recipes: '-', costs: '-', profit: '-', attention: 'Não' },
];

interface AssetControlPageProps {
  setCurrentPage: (page: string) => void;
}

const AssetControlPage: React.FC<AssetControlPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-center items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Controle de Bens</h1>
      </header>
      
      <div className="mt-6 p-8 bg-custom-teal rounded-2xl text-white flex justify-between items-center shadow-lg">
        <div>
          <h2 className="text-4xl font-bold">Controle seus bens</h2>
          <p className="mt-2 text-lg opacity-90">Faça a gestão de seus bens físicos, adicione, remova e atualize as informações para estar no controle.</p>
        </div>
        <div className="hidden md:block">
            <CubeIcon className="h-24 w-24 text-white opacity-50" />
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Você tem tudo com um Clique</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 text-gray-600 dark:text-gray-300 border-r-0 md:border-r dark:border-gray-700 pr-0 md:pr-4 flex flex-col justify-center">
                <div className="flex items-center justify-between gap-4"><p>Bens adicionados</p><p className="font-bold text-lg text-gray-800 dark:text-gray-200">04</p></div>
                <div className="flex items-center justify-between gap-4"><p>Precisando de atenção</p><p className="font-bold text-lg text-gray-800 dark:text-gray-200">04</p></div>
            </div>
            <div onClick={() => setCurrentPage('individual-analysis')} className="bg-white dark:bg-gray-700 p-4 rounded-lg flex items-center space-x-4 border dark:border-gray-600 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <AnalysisIcon />
                <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">Análise individual</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Análise detalhada de cada bem...</p>
                </div>
            </div>
            <div className="bg-custom-teal-light p-4 rounded-lg flex items-center space-x-4 shadow-sm">
                <IdCardIcon className="h-12 w-12 text-gray-700" />
                <div>
                    <h4 className="font-bold text-gray-800">Controle de visitas</h4>
                    <p className="text-sm text-gray-600">Registro de visitas e ligações de clientes...</p>
                </div>
            </div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            <ActionButton icon={<AssetControlIcon className="h-4 w-4" />} label="Cadastrar" />
            <ActionButton icon={<EditIcon className="h-4 w-4" />} label="Editar" />
            <ActionButton icon={<DocumentsIcon className="h-4 w-4" />} label="Emitir Notas" />
            <ActionButton icon={<RefreshIcon className="h-4 w-4" />} label="Atualizar" />
            <ActionButton icon={<PlusIcon className="h-4 w-4" />} label="Entradas" />
            <ActionButton icon={<ViewIcon className="h-4 w-4" />} label="Ver Entradas" />
            <ActionButton icon={<MinusIcon className="h-4 w-4" />} label="Saídas" />
            <ActionButton icon={<ViewIcon className="h-4 w-4" />} label="Ver Saídas" />
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex-1 overflow-auto">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 whitespace-nowrap">
            <tr>
              <th scope="col" className="px-6 py-3">N°</th>
              <th scope="col" className="px-6 py-3">Descrição</th>
              <th scope="col" className="px-6 py-3">Estoque Atual</th>
              <th scope="col" className="px-6 py-3">Estoque Mínimo</th>
              <th scope="col" className="px-6 py-3">Receitas</th>
              <th scope="col" className="px-6 py-3">Custos</th>
              <th scope="col" className="px-6 py-3">Lucro</th>
              <th scope="col" className="px-6 py-3">Precisando de atenção</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.no} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4 text-custom-teal rounded border-gray-300 dark:bg-gray-600 dark:border-gray-500 focus:ring-custom-teal-light" />
                      <span>{row.no}</span>
                    </div>
                </td>
                <td className="px-6 py-4">{row.desc}</td>
                <td className="px-6 py-4">{row.current}</td>
                <td className="px-6 py-4">{row.min}</td>
                <td className="px-6 py-4">{row.recipes}</td>
                <td className="px-6 py-4">{row.costs}</td>
                <td className="px-6 py-4">{row.profit}</td>
                <td className="px-6 py-4">{row.attention}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetControlPage;