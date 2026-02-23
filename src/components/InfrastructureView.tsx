import React from 'react';
import { 
  Search, 
  Bell, 
  ChevronDown, 
  Play, 
  Users, 
  BarChart3, 
  DoorOpen, 
  Bolt,
  AlertTriangle,
  Thermometer,
  CalendarX,
  PlusCircle,
  Building2
} from 'lucide-react';
import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { COLORS, INFRASTRUCTURE_ALERTS, OCCUPANCY_TREND } from '../constants';

export default function InfrastructureView() {
  return (
    <div className="flex flex-1 overflow-hidden h-full">
      {/* Sidebar Filters */}
      <aside className="w-64 border-r border-border-dark bg-sidebar-dark flex flex-col p-4 gap-6 overflow-y-auto hidden md:flex">
        <div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Filters</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Campus Zone</label>
              <div className="relative">
                <select className="w-full bg-[#1c2e27] border border-border-dark rounded-lg px-3 py-2 text-sm text-slate-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
                  <option>North Campus</option>
                  <option>South Campus</option>
                  <option>Innovation Park</option>
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-sage pointer-events-none" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Facility Type</label>
              <div className="flex flex-col gap-2">
                {['Lecture Halls', 'Laboratories', 'Conference Rooms'].map((type, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 cursor-pointer">
                    <input 
                      type="checkbox" 
                      defaultChecked={i < 2}
                      className="rounded border-slate-600 bg-slate-800 text-primary focus:ring-offset-background-dark focus:ring-primary" 
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border-dark">
              <label className="text-sm font-medium text-slate-300 mb-2 block">Occupancy Threshold</label>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span>0%</span>
                <span>100%</span>
              </div>
              <input 
                type="range" 
                className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" 
                min="0" max="100" defaultValue="75"
              />
              <p className="text-xs text-slate-400 mt-1 text-center">Highlighting rooms &gt; 75%</p>
            </div>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="bg-[#1c2e27]/50 rounded-lg p-4 border border-border-dark">
            <div className="flex items-center gap-2 text-terracotta mb-2">
              <AlertTriangle size={14} />
              <span className="text-xs font-bold uppercase">Alert</span>
            </div>
            <p className="text-sm text-slate-300">Science Block B HVAC maintenance scheduled for 14:00 today.</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto bg-[#1c2e27]/30">
        {/* Quick Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 border-b border-border-dark">
          {[
            { label: 'Total Capacity', value: '12,500', icon: 'groups', trend: '+2.4% vs last week', color: COLORS.primary },
            { label: 'Avg Utilization', value: '82%', icon: 'analytics', trend: 'Near capacity peak', color: COLORS.terracotta },
            { label: 'Active Rooms', value: '142/156', icon: 'meeting_room', trend: '14 rooms under maintenance', color: COLORS.primary },
            { label: 'Energy Usage', value: '450 kWh', icon: 'bolt', trend: '-12% efficiency gain', color: COLORS.primary },
          ].map((stat, i) => (
            <div key={i} className="bg-[#1c2e27] p-4 rounded-xl border border-border-dark shadow-sm relative overflow-hidden group">
              <div className="absolute right-0 top-0 h-full w-1" style={{ backgroundColor: `${stat.color}80` }}></div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{stat.label}</p>
                  <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
                </div>
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${stat.color}10`, color: stat.color }}>
                  {stat.icon === 'groups' && <Users size={20} />}
                  {stat.icon === 'analytics' && <BarChart3 size={20} />}
                  {stat.icon === 'meeting_room' && <DoorOpen size={20} />}
                  {stat.icon === 'bolt' && <Bolt size={20} />}
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs" style={{ color: stat.color }}>
                <span>{stat.trend}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Heatmap Section */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-white">Campus Spatial Heatmap</h2>
              <p className="text-sm text-slate-400">Real-time occupancy visualization across North Campus.</p>
            </div>
            
            <div className="bg-[#1c2e27] rounded-lg p-3 border border-border-dark flex items-center gap-4 min-w-[320px]">
              <button className="text-slate-400 hover:text-white transition-colors">
                <Play size={18} fill="currentColor" />
              </button>
              <div className="flex-1">
                <div className="flex justify-between text-[10px] text-slate-400 mb-1 font-mono uppercase">
                  <span>8 AM</span>
                  <span className="text-white font-bold">2:30 PM (Now)</span>
                  <span>8 PM</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full relative">
                  <div className="absolute left-0 top-0 h-full w-[65%] bg-gradient-to-r from-primary/30 to-primary rounded-full"></div>
                  <div className="absolute left-[65%] top-1/2 -translate-y-1/2 h-4 w-4 bg-white rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-[500px]">
            {/* Grid View */}
            <div className="lg:col-span-2 bg-[#1c2e27] rounded-xl border border-border-dark p-6 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-xs font-medium bg-primary text-sidebar-dark rounded hover:bg-opacity-90 transition-colors">Grid View</button>
                  <button className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors">Map View</button>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-primary/20"></span> <span className="text-slate-400">Low (&lt;30%)</span></div>
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-primary"></span> <span className="text-slate-400">Optimal (30-80%)</span></div>
                  <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-terracotta"></span> <span className="text-slate-400">High (&gt;80%)</span></div>
                </div>
              </div>

              <div className="flex-1 grid grid-cols-4 gap-4 auto-rows-fr">
                <div className="col-span-2 row-span-2 bg-slate-800 rounded-lg p-4 relative border border-border-dark overflow-hidden group hover:border-slate-500 transition-all cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
                  <div className="flex justify-between items-start z-10 relative">
                    <h4 className="font-bold text-white">Science Block</h4>
                    <span className="text-xs bg-slate-900/50 px-2 py-0.5 rounded text-primary">72%</span>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 h-32">
                    <div className="bg-primary/40 rounded flex items-center justify-center text-xs font-mono text-white/80">101</div>
                    <div className="bg-terracotta rounded flex items-center justify-center text-xs font-mono text-white font-bold animate-pulse">102</div>
                    <div className="bg-primary/60 rounded flex items-center justify-center text-xs font-mono text-white/80">103</div>
                    <div className="bg-primary/20 rounded flex items-center justify-center text-xs font-mono text-white/50">201</div>
                    <div className="bg-primary/80 rounded flex items-center justify-center text-xs font-mono text-white">202</div>
                    <div className="bg-primary/50 rounded flex items-center justify-center text-xs font-mono text-white/80">203</div>
                  </div>
                </div>

                <div className="col-span-1 row-span-2 bg-slate-800 rounded-lg p-4 relative border border-border-dark overflow-hidden group hover:border-slate-500 transition-all cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-terracotta/10 to-transparent pointer-events-none"></div>
                  <div className="flex justify-between items-start z-10 relative">
                    <h4 className="font-bold text-white">Arts Wing</h4>
                    <span className="text-xs bg-slate-900/50 px-2 py-0.5 rounded text-terracotta">88%</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2 h-32">
                    <div className="bg-terracotta rounded flex items-center justify-center text-xs font-mono text-white">A</div>
                    <div className="bg-terracotta/80 rounded flex items-center justify-center text-xs font-mono text-white">B</div>
                    <div className="bg-primary/20 rounded flex items-center justify-center text-xs font-mono text-white/50">L1</div>
                    <div className="bg-terracotta rounded flex items-center justify-center text-xs font-mono text-white">L2</div>
                  </div>
                </div>

                <div className="col-span-1 row-span-1 bg-slate-800 rounded-lg p-4 relative border border-border-dark overflow-hidden group hover:border-slate-500 transition-all cursor-pointer">
                  <div className="flex justify-between items-start z-10 relative">
                    <h4 className="font-bold text-white text-sm">Eng. Labs</h4>
                    <span className="text-xs bg-slate-900/50 px-2 py-0.5 rounded text-primary">45%</span>
                  </div>
                  <div className="mt-2 h-16 w-full bg-primary/30 rounded flex items-center justify-center text-primary font-bold">Workshop</div>
                </div>

                <div className="col-span-1 row-span-1 bg-slate-800 rounded-lg p-4 relative border border-border-dark overflow-hidden group hover:border-slate-500 transition-all cursor-pointer">
                  <div className="flex justify-between items-start z-10 relative">
                    <h4 className="font-bold text-white text-sm">Library</h4>
                    <span className="text-xs bg-slate-900/50 px-2 py-0.5 rounded text-primary">60%</span>
                  </div>
                  <div className="mt-2 h-16 w-full bg-primary/40 rounded flex items-center justify-center text-primary font-bold">Reading Room</div>
                </div>

                <div className="col-span-4 row-span-1 bg-slate-800 rounded-lg p-4 relative border border-border-dark overflow-hidden group hover:border-slate-500 transition-all cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 pointer-events-none"></div>
                  <div className="flex justify-between items-center z-10 relative px-4 h-full">
                    <div>
                      <h4 className="font-bold text-white">Main Auditorium</h4>
                      <p className="text-xs text-slate-400">Currently Vacant • Next Event: 5:00 PM</p>
                    </div>
                    <span className="text-xs bg-slate-700 px-3 py-1 rounded text-slate-300">0% Occupancy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Panel */}
            <div className="flex flex-col gap-4">
              <div className="bg-[#1c2e27] rounded-xl border border-border-dark p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-white mb-4">Utilization Alerts</h3>
                <div className="space-y-3 overflow-y-auto pr-2 flex-1 max-h-[250px] lg:max-h-none">
                  {INFRASTRUCTURE_ALERTS.map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border border-border-dark hover:bg-slate-800 transition-colors cursor-pointer">
                      <div className="mt-0.5 min-w-8">
                        {alert.type === 'warning' && <AlertTriangle size={20} className="text-terracotta" />}
                        {alert.type === 'temp' && <Thermometer size={20} className="text-terracotta" />}
                        {alert.type === 'empty' && <CalendarX size={20} className="text-primary" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between w-full">
                          <h4 className="text-sm font-bold text-white">{alert.title}</h4>
                          <span className={`text-xs font-bold ${alert.type === 'empty' ? 'text-slate-400' : 'text-terracotta'}`}>{alert.value}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{alert.description}</p>
                        <button className="mt-2 text-xs text-primary hover:text-white font-medium">{alert.action}</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/20 to-[#1c2e27] rounded-xl border border-primary/30 p-5">
                <h3 className="font-bold text-white mb-2">Quick Allocation</h3>
                <p className="text-xs text-slate-300 mb-4">Assign a free room for ad-hoc requests.</p>
                <div className="space-y-3">
                  <div className="bg-background-dark/50 p-2 rounded border border-border-dark flex justify-between items-center">
                    <span className="text-xs text-slate-300">Available: <span className="text-white font-bold">Room 204</span></span>
                    <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded">Cap: 30</span>
                  </div>
                  <button className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-2 px-4 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                    <PlusCircle size={18} />
                    Allocate Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1c2e27] rounded-xl border border-border-dark p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-white text-sm uppercase tracking-wide">Weekly Occupancy Trend</h3>
                <select className="bg-slate-800 text-xs text-slate-300 border-none rounded py-1 px-2">
                  <option>Last 7 Days</option>
                  <option>This Semester</option>
                </select>
              </div>
              <div className="flex items-end gap-2 h-32 w-full px-2">
                {OCCUPANCY_TREND.map((day, i) => (
                  <div 
                    key={i}
                    className={`w-full rounded-t transition-colors relative group ${day.active ? 'bg-primary shadow-[0_0_15px_rgba(43,238,173,0.3)]' : 'bg-slate-700 hover:bg-primary/60'}`} 
                    style={{ height: `${day.value}%` }}
                  >
                    <div className={`absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded transition-opacity ${day.active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                      {day.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1c2e27] rounded-xl border border-border-dark p-6 flex flex-col justify-between">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-white text-sm uppercase tracking-wide">Resource Efficiency Score</h3>
                <span className="text-primary text-xl font-black">A-</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">Based on energy consumption per student hour and space utilization.</p>
              <div className="space-y-4">
                {[
                  { label: 'Space Utilization', value: 88, color: COLORS.primary },
                  { label: 'Energy Efficiency', value: 92, color: COLORS.primary },
                  { label: 'Maintenance Response', value: 65, color: COLORS.terracotta },
                ].map((metric, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-300">{metric.label}</span>
                      <span className="text-white font-bold">{metric.value}/100</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${metric.value}%` }}
                        className="h-full rounded-full" 
                        style={{ backgroundColor: metric.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
