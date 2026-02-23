import React from 'react';
import { MoreVertical } from 'lucide-react';
import { RECENT_REQUESTS, COLORS } from '../constants';

export default function RequestsTable() {
  return (
    <div className="bg-card-dark rounded-xl shadow-sm border border-border-dark overflow-hidden">
      <div className="p-6 border-b border-border-dark flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Recent Requests & Alerts</h3>
        <a href="#" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">View All</a>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-sage">
          <thead className="bg-sidebar-dark text-xs uppercase font-semibold text-sage">
            <tr>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-dark">
            {RECENT_REQUESTS.map((request, idx) => (
              <tr key={idx} className="hover:bg-[#1f2e29] transition-colors group">
                <td className="px-6 py-4">
                  <span 
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border"
                    style={{ 
                      backgroundColor: `${(COLORS as any)[request.statusColor]}10`, 
                      color: (COLORS as any)[request.statusColor],
                      borderColor: `${(COLORS as any)[request.statusColor]}20`
                    }}
                  >
                    <span className="size-1.5 rounded-full" style={{ backgroundColor: (COLORS as any)[request.statusColor] }}></span>
                    {request.status}
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-white">{request.description}</td>
                <td className="px-6 py-4">{request.department}</td>
                <td className="px-6 py-4">{request.time}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
