import React from 'react';
import { Search, Bell, HelpCircle, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex-shrink-0 h-16 bg-sidebar-dark border-b border-border-dark flex items-center justify-between px-6 z-10">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-sage hover:text-white">
          <Menu size={20} />
        </button>
        <h2 className="text-lg font-bold text-white tracking-tight">Fall Semester 2024 Overview</h2>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden sm:block">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sage">
            <Search size={18} />
          </span>
          <input 
            type="text"
            className="w-64 py-2 pl-10 pr-4 bg-border-dark border-none rounded-lg text-sm text-white placeholder-sage focus:ring-2 focus:ring-primary focus:bg-[#1f2e29] transition-all outline-none"
            placeholder="Search resources, faculty..."
          />
        </div>
        
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg text-sage hover:bg-border-dark hover:text-primary transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-sidebar-dark"></span>
          </button>
          <button className="p-2 rounded-lg text-sage hover:bg-border-dark hover:text-primary transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
