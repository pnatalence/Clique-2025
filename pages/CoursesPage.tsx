import React from 'react';
import { BooksIcon, AddCircleIcon, EditIcon, RefreshIcon, PrintIcon, SavePdfIcon, OpenFolderIcon, WarningIcon } from '../components/icons';

const ActionButton: React.FC<{icon: React.ReactNode, label: string}> = ({icon, label}) => (
    <button className="flex items-center justify-center w-full space-x-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
        {icon}
        <span>{label}</span>
    </button>
);

const tableData = Array(10).fill({
    id: '!',
    name: 'Esta versão do Excel não suporta a execução ou interação com Controlos de Formulário.',
    abbr: '',
    price: '',
    installments: '',
    time: '',
    total: ''
});

const CoursesPage: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-between items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest">CURSOS</h1>
      </header>
      
      <div className="mt-6 p-8 bg-custom-teal rounded-2xl text-white flex justify-between items-center shadow-lg">
        <div>
          <h2 className="text-4xl font-bold">Gerencie seus cursos</h2>
          <p className="mt-2 text-lg opacity-90">Faça a gestão de seus cursos, adicione novos cursos ou edite as informações dos existentes.</p>
        </div>
        <div className="hidden md:block">
            <BooksIcon />
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Você tem tudo com um Clique</h3>
        <div className="flex flex-col lg:flex-row justify-between items-start mt-4 gap-4">
          <div className="space-y-3 text-gray-600 dark:text-gray-300 flex-shrink-0">
            <div className="flex items-center justify-between gap-8"><p>Cursos adicionados</p><p className="font-bold text-lg text-gray-800 dark:text-gray-200">21</p></div>
            <div className="flex items-center justify-between gap-8"><p>Cursos com formandos</p><p className="font-bold text-lg text-gray-800 dark:text-gray-200">06</p></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full lg:w-auto">
            <ActionButton icon={<AddCircleIcon/>} label="Adicionar" />
            <ActionButton icon={<EditIcon/>} label="Editar" />
            <ActionButton icon={<RefreshIcon className="h-5 w-5" />} label="Atualizar" />
            <ActionButton icon={<PrintIcon/>} label="Imprimir" />
            <ActionButton icon={<SavePdfIcon/>} label="Salvar PDF" />
            <ActionButton icon={<OpenFolderIcon/>} label="Abrir Pasta" />
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md flex-1 overflow-auto">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 whitespace-nowrap">
            <tr>
              <th scope="col" className="px-6 py-3">N°</th>
              <th scope="col" className="px-6 py-3">Nome do Curso</th>
              <th scope="col" className="px-6 py-3">Nome Abreviado</th>
              <th scope="col" className="px-6 py-3">Preço de Inscrição</th>
              <th scope="col" className="px-6 py-3">Preço Parcelado (Mensalidade)</th>
              <th scope="col" className="px-6 py-3">Tempo (Duração)</th>
              <th scope="col" className="px-6 py-3">Preço Total (Mensalidade)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  <WarningIcon />
                </td>
                <td className="px-6 py-4">{row.name}</td>
                <td className="px-6 py-4">{row.abbr}</td>
                <td className="px-6 py-4">{row.price}</td>
                <td className="px-6 py-4">{row.installments}</td>
                <td className="px-6 py-4">{row.time}</td>
                <td className="px-6 py-4">{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesPage;