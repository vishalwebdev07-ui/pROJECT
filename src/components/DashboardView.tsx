import React from 'react';
import KPICard from './KPICard';
import TrendsChart from './TrendsChart';
import AllocationChart from './AllocationChart';
import RequestsTable from './RequestsTable';
import { Wallet, DoorOpen, BellRing } from 'lucide-react';
import { COLORS } from '../constants';
import { motion } from 'motion/react';

export default function DashboardView() {
  return (
    <div className="p-6 scroll-smooth">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KPICard 
            title="Budget Utilized"
            value="$4.2M"
            subValue="/ $10M"
            icon={Wallet}
            iconColor={COLORS.ochre}
            progress={42}
            trend={{ label: '12% increase vs last year', type: 'up' }}
          />
          <KPICard 
            title="Active Classrooms"
            value="88%"
            icon={DoorOpen}
            iconColor={COLORS.primary}
            progress={88}
            trend={{ label: 'Stable capacity this week', type: 'stable' }}
          />
          <KPICard 
            title="Pending Requests"
            value="12"
            icon={BellRing}
            iconColor="#ef4444"
            tags={['4 Faculty', '8 Equipment']}
            trend={{ label: '4 new requests today', type: 'up' }}
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TrendsChart />
          </div>
          <div className="lg:col-span-1">
            <AllocationChart />
          </div>
        </div>

        {/* Table Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <RequestsTable />
        </motion.div>

      </div>
    </div>
  );
}
