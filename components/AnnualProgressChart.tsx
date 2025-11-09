
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', value: 0.2 },
  { name: 'Fev', value: 0.25 },
  { name: 'Mar', value: 0.22 },
  { name: 'Abr', value: 0.3 },
  { name: 'Mai', value: 0.35 },
  { name: 'Jun', value: 0.38 },
  { name: 'Jul', value: 0.4 },
];

const AnnualProgressChart: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
      <h3 className="font-bold text-lg text-gray-700 dark:text-gray-200">Progresso anual</h3>
      <div className="h-64 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(128,128,128,0.3)" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#a1a1aa' }} stroke="#a1a1aa" dy={10} />
            <YAxis tick={{ fontSize: 12, fill: '#a1a1aa' }} stroke="#a1a1aa" domain={[0, 1]} ticks={[0, 0.5, 1]}/>
            <Tooltip
              contentStyle={{ backgroundColor: 'rgb(31 41 55)', border: '1px solid #4b5563', borderRadius: '4px' }}
              labelStyle={{ fontWeight: 'bold', color: '#f3f4f6' }}
              itemStyle={{color: '#9ca3af'}}
              formatter={(value: number) => [value.toFixed(2), 'Progresso']}
            />
            <Line type="monotone" dataKey="value" stroke="#65c7ba" strokeWidth={3} dot={{ r: 6, fill: '#65c7ba' }} activeDot={{ r: 8 }}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
       <p className="text-center text-xs text-gray-400 mt-2">Gráfico - Formandos inscritos de janeiro à dezembro do ano atual.</p>
    </div>
  );
};

export default AnnualProgressChart;