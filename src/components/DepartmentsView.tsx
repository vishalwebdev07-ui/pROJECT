import React from 'react';
import { 
  ChevronRight, 
  FileUp, 
  Download, 
  Search, 
  ChevronDown, 
  Filter, 
  MoreVertical,
  HardHat,
  Palette,
  HeartPulse,
  TrendingUp,
  Terminal,
  Trophy,
  Landmark,
  Wallet,
  PiggyBank,
  TrendingDown
} from 'lucide-react';
import { DEPARTMENTS_DATA, COLORS } from '../constants';
import { motion } from 'motion/react';

const ICON_MAP: Record<string, any> = {
  engineering: HardHat,
  palette: Palette,
  cardiology: HeartPulse,
  trending_up: TrendingUp,
  terminal: Terminal,
  sports_basketball: Trophy
};

export default function DepartmentsView() {
  return (
    <div className="flex flex-col h-full">
      {/* Header Section */}
      <div className="p-6 border-b border-border-dark bg-sidebar-dark">
        <div className="flex items-center gap-2 text-sm mb-4">
          <span className="text-sage">Home</span>
          <ChevronRight size={14} className="text-sage" />
          <span className="text-sage">Budgeting</span>
          <ChevronRight size={14} className="text-sage" />
          <span className="text-primary font-medium">Departments</span>
        </div>

        <div className="flex flex-wrap justify-between items-end gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <h1 className="text-white text-3xl font-bold tracking-tight">Departmental Allocation</h1>
            <p className="text-sage text-sm">Manage fiscal year budgets and track utilization across all faculties.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 h-10 px-4 rounded-lg border border-[#3b544b] text-sage hover:text-white hover:border-sage transition-colors text-sm font-medium">
              <FileUp size={18} />
              Import Data
            </button>
            <button className="flex items-center gap-2 h-10 px-4 rounded-lg bg-primary hover:bg-primary/90 text-sidebar-dark transition-colors text-sm font-bold shadow-[0_0_15px_rgba(43,238,173,0.15)]">
              <Download size={18} />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col justify-between rounded-xl p-5 border border-border-dark bg-[#161e1c] hover:border-[#3b544b] transition-colors">
            <div className="flex justify-between items-start mb-2">
              <p className="text-sage text-sm font-medium">Total University Budget</p>
              <Landmark size={20} className="text-sage" />
            </div>
            <div>
              <p className="text-white text-2xl font-bold tracking-tight">$45.2M</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp size={14} className="text-primary" />
                <p className="text-primary text-xs font-medium">+5.2% vs last year</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl p-5 border border-border-dark bg-[#161e1c] hover:border-[#3b544b] transition-colors">
            <div className="flex justify-between items-start mb-2">
              <p className="text-sage text-sm font-medium">Total Spent YTD</p>
              <Wallet size={20} className="text-sage" />
            </div>
            <div>
              <p className="text-white text-2xl font-bold tracking-tight">$28.4M</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp size={14} className="text-terracotta" />
                <p className="text-terracotta text-xs font-medium">+12.4% above projection</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl p-5 border border-border-dark bg-[#161e1c] hover:border-[#3b544b] transition-colors">
            <div className="flex justify-between items-start mb-2">
              <p className="text-sage text-sm font-medium">Remaining Reserve</p>
              <PiggyBank size={20} className="text-sage" />
            </div>
            <div>
              <p className="text-white text-2xl font-bold tracking-tight">$16.8M</p>
              <div className="flex items-center gap-1 mt-1">
                <TrendingDown size={14} className="text-terracotta" />
                <p className="text-terracotta text-xs font-medium">-2.1% below buffer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center justify-between">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-sage" />
            </div>
            <input 
              type="text"
              className="block w-full p-2.5 pl-10 text-sm text-white bg-[#161e1c] border border-border-dark rounded-lg focus:ring-primary focus:border-primary placeholder-[#5f746d] outline-none"
              placeholder="Search departments, heads, or codes..."
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <div className="relative">
              <select className="appearance-none h-10 pl-3 pr-10 rounded-lg bg-[#161e1c] border border-border-dark text-white text-sm focus:outline-none focus:border-primary cursor-pointer">
                <option>Fiscal Year 2024</option>
                <option>Fiscal Year 2023</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sage">
                <ChevronDown size={14} />
              </div>
            </div>
            <div className="relative">
              <select className="appearance-none h-10 pl-3 pr-10 rounded-lg bg-[#161e1c] border border-border-dark text-white text-sm focus:outline-none focus:border-primary cursor-pointer">
                <option>All Statuses</option>
                <option>On Track</option>
                <option>Warning</option>
                <option>Critical</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-sage">
                <ChevronDown size={14} />
              </div>
            </div>
            <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-border-dark bg-[#161e1c] text-sage hover:text-white hover:border-sage transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="relative overflow-x-auto rounded-lg border border-border-dark bg-[#161e1c]">
          <table className="w-full text-left text-sm text-sage">
            <thead className="bg-[#1f2b27] text-xs uppercase text-sage font-semibold border-b border-border-dark">
              <tr>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4">Head of Dept</th>
                <th className="px-6 py-4 text-right">Total Allocation</th>
                <th className="px-6 py-4 text-right">Spent</th>
                <th className="px-6 py-4 w-1/4">Utilization</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark">
              {DEPARTMENTS_DATA.map((dept, idx) => {
                const Icon = ICON_MAP[dept.icon] || Landmark;
                return (
                  <motion.tr 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="hover:bg-[#1c2623] transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center`} style={{ backgroundColor: `${(COLORS as any)[dept.iconColor]}20`, color: (COLORS as any)[dept.iconColor] }}>
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="text-white font-medium">{dept.name}</div>
                          <div className="text-xs">{dept.code}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-white">{dept.head}</td>
                    <td className="px-6 py-4 text-right font-medium text-white">{dept.allocation}</td>
                    <td className="px-6 py-4 text-right">{dept.spent}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white">{dept.utilization}%</span>
                          <span className="text-sage">$1.3M Left</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-border-dark">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${dept.utilization}%` }}
                            className="h-2 rounded-full"
                            style={{ backgroundColor: (COLORS as any)[dept.statusColor] }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span 
                        className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium border"
                        style={{ 
                          backgroundColor: `${(COLORS as any)[dept.statusColor]}10`, 
                          color: (COLORS as any)[dept.statusColor],
                          borderColor: `${(COLORS as any)[dept.statusColor]}20`
                        }}
                      >
                        {dept.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-sage hover:text-white transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
