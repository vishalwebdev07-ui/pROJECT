import React from 'react';
import { NAV_ITEMS } from '../constants';
import { GraduationCap } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside className="w-64 flex-shrink-0 flex flex-col border-r border-border-dark bg-sidebar-dark hidden md:flex">
      <div className="flex h-16 items-center gap-3 px-6 border-b border-border-dark">
        <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <GraduationCap size={20} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-base font-bold leading-none">UniAdmin</h1>
          <span className="text-xs text-sage mt-1">Resource Allocation</span>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {NAV_ITEMS.map((item, idx) => {
          if (item.isHeader) {
            return (
              <div key={idx} className="pt-4 pb-2 px-3">
                <p className="text-xs font-semibold text-[#5a7a70] uppercase tracking-wider">
                  {item.label}
                </p>
              </div>
            );
          }
          
          const Icon = item.icon!;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={idx}
              onClick={() => item.id && onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
                isActive 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-sage hover:text-white hover:bg-border-dark'
              }`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border-dark">
        <div className="flex items-center gap-3">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1Gtx9J0_z_rBmECbFA3d42HeyeZIBFuBd1bSJwjznWLqgKyGpvZkFYUjON8-OXlcObN8CeQRMIJ4eKpUuoTfYY6m2-L8vhe4HeKOIHgb5v0lF63ZCALggdIM_AAPialvbJAibh3Kd8xgtw6m7kbyFHThwCYrDvaMbDxRtDcfTZP-1T695RhiGaby-2DAYBLnqpHthHOiTXr0JPezub0zdNtbgiY9hn7N1KJHpNLmEGy4W3A3pLaU1bNYZ5ps0ENhMGp0U_QBxPUk" 
            alt="Dr. A. Jensen"
            className="size-10 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-white">Dr. A. Jensen</p>
            <p className="text-xs text-sage">Admin Director</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
