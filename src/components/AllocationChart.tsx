import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ALLOCATION_DATA, COLORS } from '../constants';

export default function AllocationChart() {
  const total = ALLOCATION_DATA.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="bg-card-dark rounded-xl p-6 shadow-sm border border-border-dark flex flex-col h-full">
      <h3 className="text-lg font-bold text-white mb-1">Budget Allocation</h3>
      <p className="text-sm text-sage mb-6">By Department</p>
      
      <div className="flex-1 relative min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={ALLOCATION_DATA}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {ALLOCATION_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: COLORS.sidebar, border: `1px solid ${COLORS.border}`, borderRadius: '8px' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-xs text-sage">Total</p>
          <p className="text-xl font-bold text-white">$12M</p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {ALLOCATION_DATA.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full" style={{ backgroundColor: item.color }}></span>
              <span className="text-slate-300">{item.name}</span>
            </div>
            <span className="font-medium text-white">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
