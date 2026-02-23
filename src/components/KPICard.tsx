import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { motion } from 'motion/react';

interface KPICardProps {
  title: string;
  value: string;
  subValue?: string;
  icon: LucideIcon;
  iconColor: string;
  progress?: number;
  trend?: {
    label: string;
    type: 'up' | 'down' | 'stable';
  };
  tags?: string[];
}

export default function KPICard({ 
  title, 
  value, 
  subValue, 
  icon: Icon, 
  iconColor, 
  progress, 
  trend,
  tags 
}: KPICardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-card-dark rounded-xl p-6 shadow-sm border border-border-dark relative overflow-hidden group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium text-sage">{title}</p>
          <h3 className="text-2xl font-bold text-white">
            {value} {subValue && <span className="text-lg font-normal text-sage/60">{subValue}</span>}
          </h3>
        </div>
        <div className={`p-2 rounded-lg`} style={{ backgroundColor: `${iconColor}20`, color: iconColor }}>
          <Icon size={20} />
        </div>
      </div>

      {progress !== undefined && (
        <div className="w-full bg-border-dark h-2 rounded-full mb-3">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-2 rounded-full"
            style={{ backgroundColor: iconColor }}
          />
        </div>
      )}

      {tags && (
        <div className="flex gap-2 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-border-dark rounded text-xs text-white">
              {tag}
            </span>
          ))}
        </div>
      )}

      {trend && (
        <div className={`flex items-center gap-2 text-xs font-medium ${
          trend.type === 'up' ? 'text-primary' : trend.type === 'down' ? 'text-red-400' : 'text-sage'
        }`}>
          {trend.type === 'up' ? <TrendingUp size={14} /> : trend.type === 'down' ? <TrendingDown size={14} /> : <Minus size={14} />}
          <span>{trend.label}</span>
        </div>
      )}
    </motion.div>
  );
}
