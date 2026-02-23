import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import DepartmentsView from './components/DepartmentsView';
import FacultyAllocationView from './components/FacultyAllocationView';
import InfrastructureView from './components/InfrastructureView';
import ForecastView from './components/ForecastView';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background-dark text-slate-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <Header />
        
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'departments' && <DepartmentsView />}
          {activeTab === 'faculty' && <FacultyAllocationView />}
          {activeTab === 'infrastructure' && <InfrastructureView />}
          {activeTab === 'forecast' && <ForecastView />}
          
          {activeTab !== 'dashboard' && activeTab !== 'departments' && 
           activeTab !== 'faculty' && activeTab !== 'infrastructure' && 
           activeTab !== 'forecast' && (
            <div className="flex items-center justify-center h-full text-sage">
              <p>This section is under development.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
