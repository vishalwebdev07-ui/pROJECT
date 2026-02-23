import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Line
} from 'recharts';
import { TREND_DATA, COLORS } from '../constants';

export default function TrendsChart() {
  return (
    <div className="bg-card-dark rounded-xl p-6 shadow-sm border border-border-dark h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Resource Usage Trends</h3>
          <p className="text-sm text-sage">Weekly classroom & lab utilization</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-xs font-medium bg-border-dark text-white rounded-lg hover:bg-primary hover:text-white transition-colors">Week</button>
          <button className="px-3 py-1.5 text-xs font-medium bg-transparent text-sage rounded-lg hover:bg-border-dark transition-colors">Month</button>
        </div>
      </div>
      
      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={TREND_DATA}>
            <defs>
              <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={COLORS.primary} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={COLORS.primary} stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorBudget" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={COLORS.ochre} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={COLORS.ochre} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: COLORS.sage, fontSize: 12 }}
              dy={10}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: COLORS.sidebar, border: `1px solid ${COLORS.border}`, borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Area 
              type="monotone" 
              dataKey="usage" 
              stroke={COLORS.primary} 
              strokeWidth={2}
              fillOpacity={1} 
              fill="url(#colorUsage)" 
            />
            <Area 
              type="monotone" 
              dataKey="budget" 
              stroke={COLORS.ochre} 
              strokeWidth={2}
              strokeDasharray="5 5"
              fillOpacity={1} 
              fill="url(#colorBudget)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
