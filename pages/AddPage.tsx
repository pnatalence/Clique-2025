import React from 'react';
import { 
    ShieldIcon, AddNewTraineeIcon, ExistingTraineeIcon, MoneyInIcon, MoneyOutIcon, 
    EnrollmentPaymentIcon, CertificatePaymentIcon, MonthlyPaymentIcon, InvoicePaymentIcon 
} from '../components/icons';

interface ActionCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col items-center text-center">
        <div className="h-20 w-20 flex items-center justify-center mb-3">{icon}</div>
        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 flex-1">{description}</p>
    </div>
);


const AddPage: React.FC = () => {
    const actions = [
        {
            icon: <AddNewTraineeIcon />,
            title: 'Novo Formando',
            description: 'Adicione os dados de um novo formando, inserindo manualmente ou por meio do código QR.',
        },
        {
            icon: <ExistingTraineeIcon />,
            title: 'Formando Existente',
            description: 'Adicione um curso ou turma diferente a um formando adicionado anteriormente.',
        },
        {
            icon: <MoneyInIcon />,
            title: 'Entrada de Dinheiro',
            description: 'Adicione pagamento ou receita proveniente de fontes sem faturas, como empréstimos.',
        },
        {
            icon: <MoneyOutIcon />,
            title: 'Saída de Dinheiro',
            description: 'Adicione despesas ou gastos efetuados por você, podes anexar faturas e outros tipos de comprovativos.',
        },
        {
            icon: <EnrollmentPaymentIcon />,
            title: 'Pagamento de Inscrição',
            description: 'Emita uma fatura de pagamento de inscrição de formando adicionado anteriormente.',
        },
        {
            icon: <CertificatePaymentIcon />,
            title: 'Pagamento de Certificado',
            description: 'Emita uma fatura de pagamento de certificado de formando adicionado anteriormente.',
        },
        {
            icon: <MonthlyPaymentIcon />,
            title: 'Pagamento de Mensalidade',
            description: 'Emita uma fatura de pagam. de mensalidade de formando adicionado anteriormente.',
        },
        {
            icon: <InvoicePaymentIcon />,
            title: 'Pagamento com Fatura',
            description: 'Emita uma fatura de pagamento de outros serviços, como venda de produtos, etc.',
        },
    ];

    return (
        <div className="flex flex-col h-full">
            <header className="flex justify-center items-center pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-widest">ADICIONAR</h1>
            </header>

            <div className="mt-6 p-8 bg-custom-teal rounded-2xl text-white flex justify-between items-center shadow-lg">
                <div>
                    <h2 className="text-4xl font-bold">Selecione o que desejas adicionar</h2>
                    <p className="mt-2 text-lg opacity-90">Faça emissão de faturas e adicione seus formandos, tudo em um único lugar.</p>
                </div>
                <div className="hidden md:block">
                    <ShieldIcon />
                </div>
            </div>

            <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md flex-1">
                <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-4">Você tem tudo com um Clique</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {actions.map((action, index) => (
                        <ActionCard key={index} {...action} />
                    ))}
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col justify-center items-center text-center">
                         <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Abrir pasta com documentos PDF</h4>
                         <div className="space-y-2 w-full">
                            <button className="w-full text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">Faturas</button>
                            <button className="w-full text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 font-semibold py-2 px-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">Recibos</button>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPage;