import React from 'react';
import { 
  Download, 
  Plus, 
  Users, 
  BadgeCheck, 
  Scale, 
  ClipboardList, 
  TrendingUp, 
  TrendingDown,
  MoreVertical,
  HardHat,
  Palette,
  Briefcase,
  FlaskConical,
  AlertCircle,
  Clock,
  CircleDollarSign,
  CheckCircle2
} from 'lucide-react';
import { FACULTY_DEPT_OVERVIEW, FACULTY_TREND_DATA, RESOURCE_REQUESTS, COLORS } from '../constants';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const ICON_MAP: Record<string, any> = {
  engineering: HardHat,
  palette: Palette,
  business_center: Briefcase,
  science: FlaskConical
};

export default function FacultyAllocationView() {
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-y-auto p-6 lg:p-10 gap-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white">Faculty & Staff Allocation</h1>
            <p className="text-sage mt-1">Manage resources and monitor staff-to-student ratios across colleges.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 h-10 px-4 rounded-lg border border-border-dark bg-[#1c2e27] text-slate-200 text-sm font-medium hover:bg-[#253830] transition-colors">
              <Download size={18} />
              Export Report
            </button>
            <button className="flex items-center gap-2 h-10 px-4 rounded-lg bg-primary hover:bg-primary/90 text-sidebar-dark text-sm font-bold shadow-lg shadow-primary/20 transition-all">
              <Plus size={18} />
              New Allocation
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="flex flex-col gap-4 p-5 rounded-xl bg-[#1c2e27] border border-border-dark shadow-sm">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-[#253830] rounded-lg text-slate-300">
                <Users size={20} />
              </div>
              <span className="flex items-center gap-1 text-emerald-500 text-xs font-medium bg-emerald-500/10 px-2 py-1 rounded-full">
                <TrendingUp size={14} /> +5%
              </span>
            </div>
            <div>
              <p className="text-sage text-sm font-medium">Total Faculty</p>
              <p className="text-2xl font-bold text-white mt-1">1,240</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-5 rounded-xl bg-[#1c2e27] border border-border-dark shadow-sm">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-[#253830] rounded-lg text-slate-300">
                <BadgeCheck size={20} />
              </div>
              <span className="flex items-center gap-1 text-rose-500 text-xs font-medium bg-rose-500/10 px-2 py-1 rounded-full">
                <TrendingDown size={14} /> -2%
              </span>
            </div>
            <div>
              <p className="text-sage text-sm font-medium">Total Staff</p>
              <p className="text-2xl font-bold text-white mt-1">850</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-5 rounded-xl bg-[#1c2e27] border border-primary/30 shadow-sm relative overflow-hidden group">
            <div className="flex justify-between items-start relative z-10">
              <div className="p-2 bg-primary/20 rounded-lg text-primary">
                <Scale size={20} />
              </div>
              <span className="flex items-center gap-1 text-primary text-xs font-medium bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                Optimal
              </span>
            </div>
            <div className="relative z-10">
              <p className="text-sage text-sm font-medium">Overall S:S Ratio</p>
              <p className="text-2xl font-bold text-white mt-1">1:18</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-5 rounded-xl bg-[#1c2e27] border border-border-dark shadow-sm">
            <div className="flex justify-between items-start">
              <div className="p-2 bg-[#253830] rounded-lg text-slate-300">
                <ClipboardList size={20} />
              </div>
              <span className="flex items-center gap-1 text-amber-500 text-xs font-medium bg-amber-500/10 px-2 py-1 rounded-full">
                +3 New
              </span>
            </div>
            <div>
              <p className="text-sage text-sm font-medium">Pending Requests</p>
              <p className="text-2xl font-bold text-white mt-1">12</p>
            </div>
          </div>
        </div>

        {/* Visualization Area */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Table */}
          <div className="xl:col-span-2 flex flex-col bg-[#1c2e27] rounded-xl border border-border-dark overflow-hidden">
            <div className="px-6 py-5 border-b border-border-dark flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">Departmental Overview</h3>
              <button className="text-sm text-primary hover:text-primary/80 font-medium">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#253830]/50 text-sage text-xs uppercase tracking-wider">
                    <th className="px-6 py-4 font-medium">Department</th>
                    <th className="px-6 py-4 font-medium">Faculty</th>
                    <th className="px-6 py-4 font-medium">Students</th>
                    <th className="px-6 py-4 font-medium">Ratio</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                    <th className="px-6 py-4 font-medium text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-dark">
                  {FACULTY_DEPT_OVERVIEW.map((dept, idx) => {
                    const Icon = ICON_MAP[dept.icon] || FlaskConical;
                    return (
                      <tr key={idx} className="hover:bg-[#253830] transition-colors group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className={`size-8 rounded flex items-center justify-center`} style={{ backgroundColor: `${(COLORS as any)[dept.iconColor]}20`, color: (COLORS as any)[dept.iconColor] }}>
                              <Icon size={16} />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">{dept.name}</p>
                              <p className="text-xs text-slate-400">{dept.location}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-300">{dept.faculty}</td>
                        <td className="px-6 py-4 text-sm text-slate-300">{dept.students}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white">{dept.ratio}</span>
                            <div className="h-1.5 w-16 bg-[#3b544b] rounded-full overflow-hidden">
                              <div className="h-full" style={{ width: `${dept.ratioValue}%`, backgroundColor: (COLORS as any)[dept.statusColor] }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border"
                            style={{ 
                              backgroundColor: `${(COLORS as any)[dept.statusColor]}10`, 
                              color: (COLORS as any)[dept.statusColor],
                              borderColor: `${(COLORS as any)[dept.statusColor]}20`
                            }}
                          >
                            {dept.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                            <MoreVertical size={18} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Trend Analysis */}
          <div className="xl:col-span-1 bg-[#1c2e27] rounded-xl border border-border-dark p-6 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Trend Analysis</h3>
              <select className="bg-transparent text-xs font-medium text-sage border-none focus:ring-0 cursor-pointer pr-6">
                <option>Last 6 Months</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="flex-1 min-h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={FACULTY_TREND_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke={COLORS.border} vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: COLORS.sage, fontSize: 12 }}
                  />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: COLORS.sidebar, border: `1px solid ${COLORS.border}`, borderRadius: '8px' }}
                  />
                  <Bar dataKey="intake" radius={[4, 4, 0, 0]}>
                    {FACULTY_TREND_DATA.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={index >= 3 ? COLORS.primary : '#253830'} 
                        fillOpacity={index === 3 ? 0.4 : index === 4 ? 0.7 : 1}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-sage">Student Intake</span>
                <span className="text-sm font-bold text-white">+12%</span>
              </div>
              <div className="w-full bg-[#253830] rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar: Resource Request Queue */}
      <aside className="w-full lg:w-96 bg-[#162621] border-l border-border-dark flex flex-col h-auto lg:h-full overflow-y-auto">
        <div className="p-6 border-b border-border-dark sticky top-0 bg-[#162621] z-10">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-lg font-bold text-white">Resource Requests</h2>
            <span className="bg-primary text-sidebar-dark text-xs font-bold px-2 py-1 rounded-full">5 New</span>
          </div>
          <p className="text-sm text-sage">Pending approvals for this week</p>
        </div>
        
        <div className="flex-1 p-6 flex flex-col gap-4">
          {RESOURCE_REQUESTS.map((request) => (
            <div 
              key={request.id}
              className="p-4 rounded-xl bg-[#1c2e27] border border-[#3b544b] hover:border-primary/50 transition-colors cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  {request.status === 'urgent' && <AlertCircle size={14} className="text-rose-500" />}
                  {request.status === 'review' && <Clock size={14} className="text-amber-500" />}
                  {request.status === 'budget' && <CircleDollarSign size={14} className="text-slate-400" />}
                  {request.status === 'approved' && <CheckCircle2 size={14} className="text-primary" />}
                  <span className={`text-xs font-bold uppercase tracking-wide ${
                    request.status === 'urgent' ? 'text-rose-500' : 
                    request.status === 'review' ? 'text-amber-500' : 
                    request.status === 'approved' ? 'text-primary' : 'text-slate-400'
                  }`}>
                    {request.type}
                  </span>
                </div>
                <span className="text-xs text-slate-500">{request.time}</span>
              </div>
              <h4 className={`text-sm font-bold text-white mb-1 group-hover:text-primary transition-colors ${request.status === 'approved' ? 'line-through decoration-slate-500' : ''}`}>
                {request.title}
              </h4>
              <p className="text-xs text-sage mb-3">{request.description}</p>
              
              {request.user !== 'System' && (
                <div className="flex items-center gap-2 mt-2">
                  <img 
                    src={request.avatar} 
                    alt={request.user}
                    className="size-6 rounded-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-xs font-medium text-slate-300">{request.user}</span>
                  <div className="flex-1"></div>
                  {request.status === 'review' ? (
                    <button className="bg-primary hover:bg-primary/90 text-sidebar-dark rounded px-3 py-1 text-xs font-bold transition-colors">Approve</button>
                  ) : (
                    <button className="bg-[#253830] hover:bg-[#324a40] text-slate-200 border border-[#3b544b] rounded px-3 py-1 text-xs font-medium transition-colors">Review</button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-6 mt-auto">
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-dashed border-[#3b544b] text-sage hover:bg-[#1c2e27] hover:text-primary transition-all text-sm font-medium">
            <Plus size={18} />
            Create Manual Request
          </button>
        </div>
      </aside>
    </div>
  );
}
