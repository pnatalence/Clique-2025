import React, { useState, useEffect } from 'react';
import { BooksIcon, AddCircleIcon, EditIcon, RefreshIcon, PrintIcon, SavePdfIcon, OpenFolderIcon, WarningIcon } from '../components/icons';
import { API_BASE_URL } from '../utils/config';

const ActionButton: React.FC<{icon: React.ReactNode, label: string}> = ({icon, label}) => (
    <button className="flex items-center justify-center w-full space-x-2 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
        {icon}
        <span>{label}</span>
    </button>
);

// Interface para os dados do curso
interface Course {
    code: string;
    name: string;
    abbr: string;
    registrationFee: string;
    monthlyFee: string;
    durationDays: number;
    totalCost: string;
    enrolled: number;
}


const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalCourses, setTotalCourses] = useState(0);
  const [coursesWithTrainees, setCoursesWithTrainees] = useState(0);

  useEffect(() => {
    const fetchCourses = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${API_BASE_URL}/api/courses`);
            if (!response.ok) {
                throw new Error('Não foi possível buscar os dados dos cursos.');
            }
            const data: Course[] = await response.json();
            setCourses(data);
            setTotalCourses(data.length);
            setCoursesWithTrainees(data.filter(c => c.enrolled > 0).length);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Ocorreu um erro inesperado.');
            }
        } finally {
            setLoading(false);
        }
    };

    fetchCourses();
  }, []);

  const renderTableBody = () => {
    if (loading) {
        return (
            <tr>
                <td colSpan={7} className="text-center p-6 text-gray-500 dark:text-gray-400">Carregando cursos...</td>
            </tr>
        );
    }

    if (error) {
        return (
            <tr>
                <td colSpan={7} className="text-center p-6 text-red-500">
                    <div className="flex justify-center items-center space-x-2">
                       <WarningIcon />
                       <span>{error}</span>
                    </div>
                </td>
            </tr>
        );
    }

    if (courses.length === 0) {
         return (
            <tr>
                <td colSpan={7} className="text-center p-6 text-gray-500 dark:text-gray-400">Nenhum curso encontrado.</td>
            </tr>
        );
    }

    return courses.map((row) => (
        <tr key={row.code} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
            <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{row.code}</td>
            <td className="px-6 py-4">{row.name}</td>
            <td className="px-6 py-4">{row.abbr}</td>
            <td className="px-6 py-4">{row.registrationFee}</td>
            <td className="px-6 py-4">{row.monthlyFee}</td>
            <td className="px-6 py-4">{`${row.durationDays} dias`}</td>
            <td className="px-6 py-4">{row.totalCost}</td>
        </tr>
    ));
  };


  return (
    <div className="flex flex-col h-full">
      <header className="flex justify-center items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
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
            <div className="flex items-center justify-between gap-8"><p>Cursos adicionados</p><p className="font-bold text-lg text-gray-800 dark:text-gray-200">{totalCourses}</p></div>
            <div className="flex items-center justify-between gap-8"><p>Cursos com formandos</p><p className="font-bold text-lg text-gray-800 dark:text-gray-200">{coursesWithTrainees}</p></div>
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
              <th scope="col" className="px-6 py-3">Código</th>
              <th scope="col" className="px-6 py-3">Nome do Curso</th>
              <th scope="col" className="px-6 py-3">Nome Abreviado</th>
              <th scope="col" className="px-6 py-3">Preço de Inscrição</th>
              <th scope="col" className="px-6 py-3">Preço Parcelado (Mensalidade)</th>
              <th scope="col" className="px-6 py-3">Tempo (Duração)</th>
              <th scope="col" className="px-6 py-3">Preço Total</th>
            </tr>
          </thead>
          <tbody>
            {renderTableBody()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursesPage;