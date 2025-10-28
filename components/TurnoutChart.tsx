
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { TurnoutData } from '../types';

const data: TurnoutData[] = [
  { name: '2022 (Paper Ballots)', turnout: 38 },
  { name: '2023 (Paper Ballots)', turnout: 42 },
  { name: 'Projected (Digital)', turnout: 85 },
];

const COLORS = ['#9ca3af', '#4b5563', '#111827'];

const TurnoutChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
        <XAxis dataKey="name" stroke="#6b7280" />
        <YAxis unit="%" stroke="#6b7280" />
        <Tooltip
          cursor={{ fill: 'rgba(156, 163, 175, 0.2)' }}
          contentStyle={{
            backgroundColor: '#ffffff',
            borderColor: '#e5e7eb',
            color: '#1f2937',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
          }}
        />
        <Legend wrapperStyle={{ color: '#374151' }} />
        <Bar dataKey="turnout" name="Voter Turnout (%)" fill="#8884d8" barSize={50}>
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TurnoutChart;
