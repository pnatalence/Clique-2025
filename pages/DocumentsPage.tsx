import React from 'react';
import {
    LargeDocumentsIcon,
    DeclarationIcon,
    CertificateIcon,
    TraineeCardIcon,
    CourseEndReportIcon,
    ManualInvoiceIcon,
} from '../components/icons';

interface DocumentCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col items-start text-left h-full">
        <div className="h-12 w-12 flex items-center justify-center mb-4">{icon}</div>
        <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">{description}</p>
    </div>
);

const ExploreCard: React.FC = () => (
    <div className="bg-custom-teal-light p-4 rounded-xl shadow-sm border border-transparent hover:shadow-lg transition-shadow duration-200 flex flex-col justify-center text-left h-full">
        <h4 className="font-bold text-white text-lg">Explorar Documentos<br/>Personalizados</h4>
    </div>
);

interface DocumentsPageProps {
  setCurrentPage: (page: string) => void;
}

const DocumentsPage: React.FC<DocumentsPageProps> = ({ setCurrentPage }) => {
    const actions = [
        { icon: <DeclarationIcon />, title: 'Declaração', description: 'Adicione os dados de um novo formando, inserindo manualmente ou por meio do código QR.' },
        { icon: <CertificateIcon />, title: 'Certificado', description: 'Adicione um curso ou turma diferente a um formando adicionado anteriormente.' },
        { icon: <DeclarationIcon />, title: 'F. P. INEFOP', description: 'Adicione pagamento ou receita proveniente de fontes sem faturas, como empréstimos.' },
        { icon: <DeclarationIcon />, title: 'Ficha de Inscrição', description: 'Emitir ficha de inscrição de um formando com os dados do curso e o seu pagamento.', page: 'registration-form' },
        { icon: <TraineeCardIcon />, title: 'Cartão de Formando', description: 'Emita uma fatura de pagamento de inscrição de formando adicionado anteriormente.' },
        { icon: <CourseEndReportIcon />, title: 'Pauta de Fim do Curso', description: 'Emita uma fatura de pagamento de certificado de formando adicionado anteriormente.' },
        { icon: <ManualInvoiceIcon />, title: 'Fatura Manual', description: 'Emita uma fatura de pagam. de mensalidade de formando adicionado anteriormente.' },
    ];

    return (
        <div className="flex flex-col h-full">
            <header className="flex justify-between items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest">DOCUMENTOS</h1>
            </header>

            <div className="mt-6 p-8 bg-custom-teal rounded-2xl text-white flex justify-between items-center shadow-lg">
                <div>
                    <h2 className="text-4xl font-serif">Selecione o que<br/>desejas imprimir</h2>
                    <p className="mt-2 text-lg opacity-90">Faça emição de todos os documentos que necessitas de forma simples.</p>
                </div>
                <div className="hidden md:block">
                    <LargeDocumentsIcon />
                </div>
            </div>

            <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex-1">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-4">Você tem tudo com um Clique</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {actions.map((action, index) => (
                        <div key={index} onClick={() => action.page && setCurrentPage(action.page)} className={action.page ? "cursor-pointer" : ""}>
                            <DocumentCard icon={action.icon} title={action.title} description={action.description} />
                        </div>
                    ))}
                    <ExploreCard />
                </div>
            </div>
        </div>
    );
};

export default DocumentsPage;