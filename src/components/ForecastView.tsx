import React, { useState } from 'react';
import { 
  ChevronRight, 
  RotateCcw, 
  Download, 
  Save, 
  Wallet, 
  PieChart, 
  PiggyBank, 
  Users, 
  TrendingUp, 
  TrendingDown,
  HardHat,
  Palette,
  GraduationCap,
  AlertTriangle,
  CalendarDays,
  Plus,
  ChevronDown
} from 'lucide-react';
import { motion } from 'motion/react';
import { FORECAST_DEPARTMENTS, IMPACT_FORECAST_DATA, COLORS } from '../constants';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const ICON_MAP: Record<string, any> = {
  engineering: HardHat,
  palette: Palette,
  school: GraduationCap
};

export default function ForecastView() {
  const [allocations, setAllocations] = useState(FORECAST_DEPARTMENTS);

  const handleSliderChange = (id: string, newValue: number) => {
    setAllocations(prev => prev.map(dept => 
      dept.id === id ? { ...dept, percent: newValue, value: (15 * newValue) / 100 } : dept
    ));
  };

  return (
    <div className="flex flex-1 overflow-hidden h-full">
      {/* Sidebar / Scenario Context */}
      <aside className="w-64 flex-col border-r border-border-dark bg-sidebar-dark hidden xl:flex overflow-y-auto">
        <div className="p-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-sage mb-4">Planning Context</h3>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-medium text-white">Scenario Model</label>
            <div className="relative">
              <select className="w-full appearance-none rounded-lg bg-card-dark border-none py-2.5 pl-4 pr-10 text-sm font-medium text-white focus:ring-1 focus:ring-primary outline-none">
                <option>Optimistic Growth</option>
                <option>Conservative</option>
                <option selected>Baseline Projection</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="rounded-lg bg-card-dark p-4 border border-border-dark">
              <div className="flex items-center gap-2 mb-2">
                <CalendarDays size={14} className="text-primary" />
                <span className="text-xs font-bold text-white uppercase">Fiscal Period</span>
              </div>
              <p className="text-sm text-sage">Fall 2024 - Spring 2025</p>
            </div>
            <div className="rounded-lg bg-card-dark p-4 border border-border-dark">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={14} className="text-primary" />
                <span className="text-xs font-bold text-white uppercase">Inflation Rate</span>
              </div>
              <p className="text-sm text-sage">Adjusted at 3.2%</p>
            </div>
          </div>
        </div>
        <div className="mt-auto p-6 border-t border-border-dark">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary/10 py-2.5 text-sm font-bold text-primary hover:bg-primary/20 transition-colors">
            <Plus size={18} />
            New Scenario
          </button>
        </div>
      </aside>

      {/* Main Scrollable Area */}
      <main className="flex-1 overflow-y-auto bg-background-dark p-6 lg:p-10">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-8">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sage text-sm mb-1">
                <span>Planning</span>
                <ChevronRight size={14} />
                <span>Fall 2024</span>
              </div>
              <h1 className="text-3xl font-black text-white tracking-tight">Strategic Allocation</h1>
              <p className="text-sage mt-1">Simulate resource distribution across university departments.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-border-dark bg-sidebar-dark px-4 py-2 text-sm font-bold text-white hover:bg-card-dark transition-colors">
                <RotateCcw size={18} />
                Reset
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-border-dark bg-sidebar-dark px-4 py-2 text-sm font-bold text-white hover:bg-card-dark transition-colors">
                <Download size={18} />
                Export
              </button>
              <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-bold text-sidebar-dark hover:bg-primary/90 transition-colors shadow-[0_0_15px_rgba(43,238,173,0.3)]">
                <Save size={18} />
                Save Scenario
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Total Budget', value: '$15,000,000', trend: '+2.4% vs LY', trendColor: 'text-emerald-500', icon: Wallet },
              { label: 'Allocated Funds', value: '$14,750,000', sub: '98% Utilized', icon: PieChart },
              { label: 'Unallocated Surplus', value: '$250,000', sub: 'Buffer: 1.6%', icon: PiggyBank, valueColor: 'text-primary' },
              { label: 'Faculty Impact', value: '450 FTE', trend: '-3 Positions', trendColor: 'text-rose-500', icon: Users },
            ].map((card, i) => (
              <div key={i} className="rounded-xl bg-sidebar-dark p-5 border border-border-dark relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <card.icon size={64} className="text-primary" />
                </div>
                <p className="text-sage text-sm font-medium mb-1">{card.label}</p>
                <p className={`text-2xl font-bold tracking-tight ${card.valueColor || 'text-white'}`}>{card.value}</p>
                {card.trend ? (
                  <div className={`flex items-center gap-1 mt-2 ${card.trendColor} text-xs font-medium bg-white/5 w-fit px-2 py-0.5 rounded-full`}>
                    {card.trend.includes('+') ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {card.trend}
                  </div>
                ) : (
                  <div className="flex items-center gap-1 mt-2 text-sage text-xs font-medium bg-white/5 w-fit px-2 py-0.5 rounded-full">
                    {card.sub}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            {/* Left Col: Simulation Panel */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="rounded-xl bg-sidebar-dark border border-border-dark p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-white">Departmental Allocation</h3>
                  <span className="text-xs text-sage bg-card-dark px-2 py-1 rounded">Interactive</span>
                </div>
                <div className="space-y-8">
                  {allocations.map((dept) => {
                    const Icon = ICON_MAP[dept.icon] || GraduationCap;
                    return (
                      <div key={dept.id} className="group">
                        <div className="flex justify-between items-end mb-2">
                          <div className="flex items-center gap-3">
                            <div className={`h-8 w-8 rounded flex items-center justify-center`} style={{ backgroundColor: `${(COLORS as any)[dept.color]}20`, color: (COLORS as any)[dept.color] }}>
                              <Icon size={18} />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white">{dept.name}</p>
                              <p className="text-xs text-sage">{dept.sub}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-white">${dept.value.toFixed(2)}M</span>
                            <span className="text-xs text-primary ml-2 font-medium">{dept.percent}%</span>
                          </div>
                        </div>
                        <input 
                          type="range" 
                          className="w-full h-2 bg-card-dark rounded-lg appearance-none cursor-pointer accent-primary" 
                          min="0" max="100" 
                          value={dept.percent}
                          onChange={(e) => handleSliderChange(dept.id, parseInt(e.target.value))}
                        />
                      </div>
                    );
                  })}
                  
                  <div className="mt-4 flex items-start gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                    <AlertTriangle size={20} className="text-yellow-500 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-yellow-500">Accreditation Risk Warning</p>
                      <p className="text-xs text-sage mt-1">Reducing Arts budget below 30% ($4.5M) may impact NASAD accreditation standards for the upcoming review cycle.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Breakdown Table */}
              <div className="rounded-xl bg-sidebar-dark border border-border-dark overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-border-dark">
                  <h3 className="text-lg font-bold text-white">Detailed Breakdown</h3>
                  <button className="text-primary text-sm font-medium hover:underline">View Full Report</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm text-sage">
                    <thead className="bg-card-dark text-xs uppercase text-white font-semibold">
                      <tr>
                        <th className="px-6 py-3">Department</th>
                        <th className="px-6 py-3 text-right">Current</th>
                        <th className="px-6 py-3 text-right">Projected</th>
                        <th className="px-6 py-3 text-right">Delta</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-dark">
                      {[
                        { name: 'Engineering', current: '$5.8M', projected: '$6.0M', delta: '+3.4%', up: true },
                        { name: 'Arts & Sciences', current: '$5.4M', projected: '$5.25M', delta: '-2.8%', up: false },
                        { name: 'Student Affairs', current: '$3.5M', projected: '$3.75M', delta: '+7.1%', up: true },
                      ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 font-medium text-white">{row.name}</td>
                          <td className="px-6 py-4 text-right">{row.current}</td>
                          <td className="px-6 py-4 text-right">{row.projected}</td>
                          <td className={`px-6 py-4 text-right ${row.up ? 'text-emerald-500' : 'text-rose-500'}`}>{row.delta}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Col: Impact Analysis */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl bg-sidebar-dark border border-border-dark p-6 flex flex-col h-full min-h-[400px]">
                <h3 className="text-lg font-bold text-white mb-2">Impact Forecast</h3>
                <p className="text-xs text-sage mb-6">Student Satisfaction vs. Budget Shift</p>
                
                <div className="flex-1 w-full relative bg-card-dark/30 rounded-lg p-4 flex items-end justify-between gap-2 overflow-hidden">
                  <div className="w-full h-full absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `linear-gradient(${COLORS.border} 1px, transparent 1px), linear-gradient(90deg, ${COLORS.border} 1px, transparent 1px)`, backgroundSize: '20px 20px' }}></div>
                  
                  <div className="absolute inset-0 w-full h-full p-4 pointer-events-none">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={IMPACT_FORECAST_DATA}>
                        <defs>
                          <linearGradient id="impactGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={COLORS.primary} stopOpacity={0.4}/>
                            <stop offset="100%" stopColor={COLORS.primary} stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area 
                          type="monotone" 
                          dataKey="satisfaction" 
                          stroke={COLORS.primary} 
                          strokeWidth={3} 
                          fill="url(#impactGradient)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="w-full flex justify-between items-end h-[60%] z-10 px-2">
                    {IMPACT_FORECAST_DATA.map((d, i) => (
                      <div 
                        key={i}
                        className={`w-8 rounded-t transition-all cursor-help relative group ${d.active ? 'bg-primary shadow-[0_0_15px_rgba(43,238,173,0.3)]' : 'bg-primary/20 hover:bg-primary/40'}`} 
                        style={{ height: `${d.height}%` }}
                      >
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-card-dark text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-20 border border-border-dark">
                          {d.name}: {d.satisfaction}/5
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-sage">Avg. Satisfaction</p>
                    <p className="text-xl font-bold text-white">4.2/5</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-sage">Retention Risk</p>
                    <p className="text-xl font-bold text-emerald-500">Low</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-sidebar-dark border border-border-dark p-6">
                <h3 className="text-sm font-bold text-white mb-4">Grant Utilization</h3>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-xs font-semibold text-primary">Currently Tracked</span>
                    <span className="text-xs font-semibold text-white">85%</span>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 rounded bg-card-dark">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <p className="text-xs text-sage">Target is 90% by end of Q4. Engineering department leading utilization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
