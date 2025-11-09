
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Dot } from 'recharts';

const data = [
  { name: '2023', 'Inscritos': 200 },
  { name: '2024', 'Inscritos': 450 },
  { name: '2025', 'Inscritos': 800 },
];

const legendData = [
    { color: '#82ca9d', value: 0 },
    { color: '#8884d8', value: 0 },
    { color: '#ffc658', value: 0 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-700 p-2 border border-gray-200 dark:border-gray-600 rounded shadow-sm">
        <p className="font-bold dark:text-gray-200">{`${label}`}</p>
        <p className="text-sm text-teal-500">{`Inscritos: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const TraineeChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md h-full">
      <div className="flex justify-between items-start">
        <div>
            <h3 className="font-bold text-lg text-gray-700 dark:text-gray-200">Formandos inscritos</h3>
            <div className="flex space-x-4 mt-4">
                {legendData.map(item => (
                    <div key={item.color} className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: item.color}}></div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
        
      </div>
      <div className="h-48 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(128,128,128,0.3)" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#a1a1aa' }} stroke="#a1a1aa" />
            <YAxis tick={{ fontSize: 12, fill: '#a1a1aa' }} stroke="#a1a1aa" domain={[0, 'dataMax + 100']} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="Inscritos" stroke="#4db6ac" strokeWidth={2} dot={{ r: 5, fill: '#4db6ac' }} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-xs text-gray-400 mt-2">Gráfico - Dados de 2023 à 2025.</p>
    </div>
  );
};

export default TraineeChart;