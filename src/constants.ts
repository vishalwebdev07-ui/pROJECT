import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  Wallet, 
  CalendarDays, 
  BarChart3, 
  Settings,
  GraduationCap
} from 'lucide-react';

export const COLORS = {
  primary: '#2beead',
  ochre: '#d9a55e',
  sage: '#9db9b0',
  red: '#ef4444',
  background: '#10221c',
  card: '#172b25',
  sidebar: '#111816',
  border: '#283933',
  terracotta: '#E07A5F',
  purple: '#a855f7',
  blue: '#3b82f6',
  green: '#22c55e',
  orange: '#f97316'
};

export const NAV_ITEMS = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'forecast', icon: BarChart3, label: 'Forecast' },
  { id: 'infrastructure', icon: Building2, label: 'Infrastructure' },
  { id: 'departments', icon: Building2, label: 'Departments' },
  { id: 'faculty', icon: Users, label: 'Faculty & Staff' },
  { label: 'Management', isHeader: true },
  { id: 'finance', icon: Wallet, label: 'Finance' },
  { id: 'scheduling', icon: CalendarDays, label: 'Scheduling' },
  { label: 'System', isHeader: true },
  { id: 'reports', icon: BarChart3, label: 'Reports' },
  { id: 'settings', icon: Settings, label: 'Settings' },
];

export const TREND_DATA = [
  { name: 'Mon', usage: 35, budget: 40 },
  { name: 'Tue', usage: 45, budget: 38 },
  { name: 'Wed', usage: 38, budget: 35 },
  { name: 'Thu', usage: 52, budget: 30 },
  { name: 'Fri', usage: 48, budget: 28 },
  { name: 'Sat', usage: 60, budget: 25 },
  { name: 'Sun', usage: 55, budget: 22 },
];

export const ALLOCATION_DATA = [
  { name: 'Engineering', value: 55, color: COLORS.primary },
  { name: 'Arts', value: 25, color: COLORS.ochre },
  { name: 'Sciences', value: 20, color: COLORS.sage },
];

export const RECENT_REQUESTS = [
  {
    status: 'Pending',
    description: 'New Lab Equipment Request',
    department: 'Engineering',
    time: '2 hrs ago',
    statusColor: 'ochre'
  },
  {
    status: 'Alert',
    description: 'Room 304 Capacity Exceeded',
    department: 'Facilities',
    time: '4 hrs ago',
    statusColor: 'red'
  },
  {
    status: 'Approved',
    description: 'Guest Lecturer Budget',
    department: 'Arts',
    time: 'Yesterday',
    statusColor: 'primary'
  }
];

export const DEPARTMENTS_DATA = [
  {
    name: 'Engineering',
    code: 'ENG-101',
    head: 'Dr. Sarah Connor',
    allocation: '$5,200,000',
    spent: '$3,900,000',
    utilization: 75,
    status: 'Warning',
    statusColor: 'terracotta',
    icon: 'engineering',
    iconColor: 'blue'
  },
  {
    name: 'Arts & Humanities',
    code: 'ART-204',
    head: 'Prof. Alan Grant',
    allocation: '$1,800,000',
    spent: '$720,000',
    utilization: 40,
    status: 'Healthy',
    statusColor: 'primary',
    icon: 'palette',
    iconColor: 'purple'
  },
  {
    name: 'Medicine',
    code: 'MED-500',
    head: 'Dr. Stephen Strange',
    allocation: '$12,500,000',
    spent: '$11,500,000',
    utilization: 92,
    status: 'Critical',
    statusColor: 'terracotta',
    icon: 'cardiology',
    iconColor: 'red'
  },
  {
    name: 'Business School',
    code: 'BUS-312',
    head: 'Prof. Gordon Gekko',
    allocation: '$3,400,000',
    spent: '$1,700,000',
    utilization: 50,
    status: 'Healthy',
    statusColor: 'primary',
    icon: 'trending_up',
    iconColor: 'blue'
  },
  {
    name: 'Computer Science',
    code: 'CS-404',
    head: 'Dr. Grace Hopper',
    allocation: '$6,100,000',
    spent: '$2,135,000',
    utilization: 35,
    status: 'Healthy',
    statusColor: 'primary',
    icon: 'terminal',
    iconColor: 'green'
  },
  {
    name: 'Athletics',
    code: 'ATH-100',
    head: 'Coach Ted Lasso',
    allocation: '$8,500,000',
    spent: '$7,225,000',
    utilization: 85,
    status: 'Warning',
    statusColor: 'terracotta',
    icon: 'sports_basketball',
    iconColor: 'orange'
  }
];

export const FACULTY_DEPT_OVERVIEW = [
  {
    name: 'Engineering',
    location: 'Main Campus',
    faculty: 120,
    students: 2500,
    ratio: '1:21',
    ratioValue: 85,
    status: 'Critical',
    statusColor: 'red',
    icon: 'engineering',
    iconColor: 'blue'
  },
  {
    name: 'Liberal Arts',
    location: 'North Wing',
    faculty: 85,
    students: 1200,
    ratio: '1:14',
    ratioValue: 40,
    status: 'Healthy',
    statusColor: 'primary',
    icon: 'palette',
    iconColor: 'purple'
  },
  {
    name: 'Business',
    location: 'Downtown',
    faculty: 95,
    students: 1800,
    ratio: '1:19',
    ratioValue: 70,
    status: 'Moderate',
    statusColor: 'ochre',
    icon: 'business_center',
    iconColor: 'orange'
  },
  {
    name: 'Sciences',
    location: 'Lab Center',
    faculty: 110,
    students: 1950,
    ratio: '1:17',
    ratioValue: 65,
    status: 'Healthy',
    statusColor: 'primary',
    icon: 'science',
    iconColor: 'blue'
  }
];

export const FACULTY_TREND_DATA = [
  { name: 'Feb', intake: 40 },
  { name: 'Mar', intake: 55 },
  { name: 'Apr', intake: 45 },
  { name: 'May', intake: 70 },
  { name: 'Jun', intake: 85 },
  { name: 'Jul', intake: 60 },
];

export const RESOURCE_REQUESTS = [
  {
    id: 1,
    type: 'Urgent',
    title: 'Adjunct Professor (Biology)',
    description: 'Requested by Dr. Smith due to increased enrollment in Bio 101.',
    time: '2h ago',
    user: 'Dr. Smith',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3BVEUwyB85cpz3BjAl4m7PCq4NBXAZ9gJPORmlwyMc90aVxMtaEWdAQ5NhIpIlVlPLBJP4KAuRew2vSvPs-DZmO2AaTZ-dZ_yHTx6BP-Pdt0DxqrruVpJZGsqFtxoN2ke6dCE-Oa7Q75tyryJCZL6YgLup_fWcTJ4Hp1QE38u2fRNxF_x-hJPXpjcWFFAO6h9mjCZcotoZ2ZEki9gS-Co4RUvstg58XQgDQNBaspd8gjV81mRcHtEqkT5ciG1ZTpcLfpHqhLxdyM',
    status: 'urgent'
  },
  {
    id: 2,
    type: 'Review',
    title: 'Dept. Coordinator (History)',
    description: 'Replacement for retiring staff member. Budget approved by HR.',
    time: '1d ago',
    user: 'Sarah Jenkins',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChPxMV5qQtqzr9eogvhZ2taVI_kcaCojSlJafVulBPkS2hp1ErkjNATs4Ul0f6r2UC_Q-3cVTR3IyTYXK_EDvTp7RfrsUmZSoRPGb4h6m9KnsUmy1JqWbvFkndGLQccQcdCpx3mzBLraMD7eU7fyZeoySA_OTwUh9fI6cQRySfz1dctP9MguCVQNQQZ3rAgvk7lp1QpYmcWjTfF6Rg79t7bSGlTbC7umq8THepopmNSR-8tPCyEprO0GgQ1gCNJQcGTuar5ZJlQbI',
    status: 'review'
  },
  {
    id: 3,
    type: 'Budget',
    title: 'Lab Technician (Physics)',
    description: 'Request for new hire to support advanced photonics lab.',
    time: '3d ago',
    user: 'Mark Doe',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjC1KZ9K-lBYw4NRCne5eVPrL5EK2uULmT483LPBCwZuWVzigVq1nRBB9i4-34vinJnUFA4bD53h23aSscKZIv49WcKqut0rvtQFBJCQRJ3B_NkDryoPaTnEAF3C4hvzfl6ESsvciSidhHJAI_-K8EbXcd1C57sz3v2vgN2ucU3Ktq2izt_0yxJQpcotcT95p1GL2ykqnD4kTxKosdXLp2Po8nh6JoMCDOaOc5FnTATQJcutl2VWtKlIQiuvVOF5Y6Nw6jvBH64AE',
    status: 'budget'
  },
  {
    id: 4,
    type: 'Approved',
    title: 'TA (Comp Sci)',
    description: 'Allocation confirmed. Onboarding starts next Monday.',
    time: '5d ago',
    user: 'System',
    status: 'approved'
  }
];

export const INFRASTRUCTURE_ALERTS = [
  {
    id: 1,
    title: 'Chem Lab 102',
    value: '115%',
    description: 'Overcrowding detected. Capacity: 40, Current: 46.',
    type: 'warning',
    action: 'View Schedule >'
  },
  {
    id: 2,
    title: 'Art Studio B',
    value: 'High Temp',
    description: 'Room temperature exceeds threshold (28°C).',
    type: 'temp',
    action: 'Contact Maintenance >'
  },
  {
    id: 3,
    title: 'Lec Hall 3',
    value: '0%',
    description: 'Reserved but empty for >15 mins.',
    type: 'empty',
    action: 'Release Room >'
  }
];

export const OCCUPANCY_TREND = [
  { name: 'Mon', value: 40 },
  { name: 'Tue', value: 75 },
  { name: 'Wed', value: 82, active: true },
  { name: 'Thu', value: 60 },
  { name: 'Fri', value: 50 },
  { name: 'Sat', value: 20 },
];

export const FORECAST_DEPARTMENTS = [
  {
    id: 'eng',
    name: 'School of Engineering',
    sub: 'Research Grants & Equipment',
    value: 6.0,
    percent: 40,
    icon: 'engineering',
    color: 'blue'
  },
  {
    id: 'arts',
    name: 'College of Arts & Sciences',
    sub: 'Faculty & Studios',
    value: 5.25,
    percent: 35,
    icon: 'palette',
    color: 'purple'
  },
  {
    id: 'student',
    name: 'Student Affairs',
    sub: 'Housing & Activities',
    value: 3.75,
    percent: 25,
    icon: 'school',
    color: 'ochre'
  }
];

export const IMPACT_FORECAST_DATA = [
  { name: 'Q1', satisfaction: 3.2, height: 40 },
  { name: 'Q2', satisfaction: 3.8, height: 65 },
  { name: 'Q3', satisfaction: 3.5, height: 55 },
  { name: 'Q4', satisfaction: 4.0, height: 80 },
  { name: 'Proj', satisfaction: 4.2, height: 90, active: true },
];
