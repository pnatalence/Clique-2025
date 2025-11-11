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
    const minRows = 10;
    const cellPadding = "px-6 py-5"; // Aumentado de py-4 para py-5

    if (loading) {
        return Array.from({ length: minRows }).map((_, index) => (
            <tr key={`loading-skeleton-${index}`} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                <td className={cellPadding}><div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-12"></div></td>
                <td className={cellPadding}><div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse"></div></td>
                <td className={cellPadding}><div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-24"></div></td>
                <td className={cellPadding}><div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-32"></div></td>
                <td className={cellPadding}><div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-32"></div></td>
                <td className={cellPadding}><div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-20"></div></td>
                <td className={cellPadding}><div className="h-4 bg-gray-200 dark:bg-gray-600 rounded animate-pulse w-32"></div></td>
            </tr>
        ));
    }

    if (error) {
        const rows = [(
            <tr key="error-message">
                <td colSpan={7} className="text-center p-6 text-red-500">
                    <div className="flex justify-center items-center space-x-2">
                       <WarningIcon />
                       <span>{error}</span>
                    </div>
                </td>
            </tr>
        )];
        for (let i = 0; i < minRows - 1; i++) {
            rows.push(
                <tr key={`empty-error-${i}`} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                    <td colSpan={7} className={cellPadding}>&nbsp;</td>
                </tr>
            );
        }
        return rows;
    }
    
    if (courses.length === 0) {
        const rows = [(
            <tr key="no-courses-message">
                <td colSpan={7} className="text-center p-6 text-gray-500 dark:text-gray-400">Nenhum curso encontrado.</td>
            </tr>
        )];
        for (let i = 0; i < minRows - 1; i++) {
            rows.push(
                <tr key={`empty-no-courses-${i}`} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                    <td colSpan={7} className={cellPadding}>&nbsp;</td>
                </tr>
            );
        }
        return rows;
    }

    const courseRows = courses.map((row) => (
        <tr key={row.code} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700">
            <td className={`${cellPadding} font-medium text-gray-900 dark:text-white`}>{row.code}</td>
            <td className={cellPadding}>{row.name}</td>
            <td className={cellPadding}>{row.abbr}</td>
            <td className={cellPadding}>{row.registrationFee}</td>
            <td className={cellPadding}>{row.monthlyFee}</td>
            <td className={cellPadding}>{`${row.durationDays} dias`}</td>
            <td className={cellPadding}>{row.totalCost}</td>
        </tr>
    ));
    
    const emptyRowsCount = minRows - courses.length;

    if (emptyRowsCount > 0) {
        const emptyRows = Array.from({ length: emptyRowsCount }).map((_, index) => (
            <tr key={`empty-${index}`} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                <td className={cellPadding}>&nbsp;</td>
                <td className={cellPadding}>&nbsp;</td>
                <td className={cellPadding}>&nbsp;</td>
                <td className={cellPadding}>&nbsp;</td>
                <td className={cellPadding}>&nbsp;</td>
                <td className={cellPadding}>&nbsp;</td>
                <td className={cellPadding}>&nbsp;</td>
            </tr>
        ));
        return [...courseRows, ...emptyRows];
    }

    return courseRows;
  };


  return (
    <div className="flex flex-col">
      <header className="flex justify-center items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700 flex-shrink-0">
        <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest">CURSOS</h1>
      </header>
      
      <div className="mt-6 p-8 bg-custom-teal rounded-2xl text-white flex justify-between items-center shadow-lg flex-shrink-0">
        <div>
          <h2 className="text-4xl font-bold">Gerencie seus cursos</h2>
          <p className="mt-2 text-lg opacity-90">Faça a gestão de seus cursos, adicione novos cursos ou edite as informações dos existentes.</p>
        </div>
        <div className="hidden md:block">
            <BooksIcon />
        </div>
      </div>

      <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex-shrink-0">
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

      <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
          <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700 whitespace-nowrap sticky top-0">
            <tr>
              <th scope="col" className="px-6 py-4">Código</th>
              <th scope="col" className="px-6 py-4">Nome do Curso</th>
              <th scope="col" className="px-6 py-4">Nome Abreviado</th>
              <th scope="col" className="px-6 py-4">Preço de Inscrição</th>
              <th scope="col" className="px-6 py-4">Preço Parcelado (Mensalidade)</th>
              <th scope="col" className="px-6 py-4">Tempo (Duração)</th>
              <th scope="col" className="px-6 py-4">Preço Total</th>
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