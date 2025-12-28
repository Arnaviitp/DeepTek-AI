import React, { useState } from 'react';
import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, LineChart, Line
} from 'recharts';
import { Calendar, Filter, ChevronDown, Clock, Activity } from 'lucide-react';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
const STATUS_COLORS = {
    Reported: '#3fb950',
    Unreported: '#d29922',
    Critical: '#f85149'
};

// Mock Data
const findingsData = [
    { name: 'Tuberculosis', value: 71.43 },
    { name: 'Cardiomegaly', value: 14.29 },
    { name: 'Pleural Effusion', value: 14.29 },
];

const genderData = [
    { name: 'Male', value: 55 },
    { name: 'Female', value: 45 },
];

const statusData = [
    { name: 'Reported', value: 450 },
    { name: 'Unreported', value: 120 },
    { name: 'Critical', value: 30 },
];

const tatData = [
    { date: '25-Nov', min: 10, max: 45, avg: 22 },
    { date: '30-Nov', min: 12, max: 50, avg: 25 },
    { date: '05-Dec', min: 8, max: 40, avg: 18 },
    { date: '10-Dec', min: 15, max: 60, avg: 30 },
    { date: '15-Dec', min: 10, max: 35, avg: 20 },
    { date: '20-Dec', min: 12, max: 48, avg: 24 },
    { date: '25-Dec', min: 9, max: 42, avg: 21 },
];

const hourlyAiActivity = [
    { hour: '8 AM', critical: 2, normal: 15 },
    { hour: '10 AM', critical: 5, normal: 25 },
    { hour: '12 PM', critical: 3, normal: 20 },
    { hour: '2 PM', critical: 8, normal: 30 },
    { hour: '4 PM', critical: 4, normal: 22 },
    { hour: '6 PM', critical: 1, normal: 10 },
];

const Analytics = () => {
    const [activeTab, setActiveTab] = useState('general');
    const [metricTab, setMetricTab] = useState('scan_to_report');

    return (
        <div className="analytics-container">
            <header className="analytics-header">
                <h1 className="page-title">Analytics Dashboard</h1>
                <div className="tabs-toggle">
                    <button
                        className={`toggle-btn ${activeTab === 'general' ? 'active' : ''}`}
                        onClick={() => setActiveTab('general')}
                    >
                        General Analytics
                    </button>
                    <button
                        className={`toggle-btn ${activeTab === 'productivity' ? 'active' : ''}`}
                        onClick={() => setActiveTab('productivity')}
                    >
                        Productivity Gain
                    </button>
                </div>
            </header>

            <div className="analytics-content">
                {activeTab === 'general' ? (
                    <div className="general-view fade-in">
                        {/* Top Stats Cards */}
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="icon-box blue"><Activity size={20} /></div>
                                <div className="stat-info">
                                    <span className="label">Total Studies</span>
                                    <span className="value">684</span>
                                </div>
                            </div>
                            <div className="stat-card">
                                <div className="icon-box green"><Clock size={20} /></div>
                                <div className="stat-info">
                                    <span className="label">Avg TAT</span>
                                    <span className="value">24m</span>
                                </div>
                            </div>
                        </div>

                        {/* Charts Grid */}
                        <div className="charts-grid">
                            <div className="chart-card">
                                <h3>Study Distribution (Findings)</h3>
                                <div className="chart-wrapper">
                                    <ResponsiveContainer width="100%" height={250}>
                                        <PieChart>
                                            <Pie
                                                data={findingsData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={80}
                                                paddingAngle={5}
                                                dataKey="value"
                                            >
                                                {findingsData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <RechartsTooltip contentStyle={{ backgroundColor: '#1c2128', border: 'none', borderRadius: '8px' }} />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="chart-card">
                                <h3>Gender Distribution</h3>
                                <div className="chart-wrapper">
                                    <ResponsiveContainer width="100%" height={250}>
                                        <PieChart>
                                            <Pie
                                                data={genderData}
                                                startAngle={180}
                                                endAngle={0}
                                                cx="50%"
                                                cy="70%"
                                                outerRadius={80}
                                                dataKey="value"
                                            >
                                                <Cell fill="#0088FE" />
                                                <Cell fill="#FF8042" />
                                            </Pie>
                                            <RechartsTooltip contentStyle={{ backgroundColor: '#1c2128', border: 'none' }} />
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="chart-card wide">
                                <h3>Reporting Status</h3>
                                <div className="chart-wrapper">
                                    <ResponsiveContainer width="100%" height={250}>
                                        <BarChart data={statusData} layout="vertical">
                                            <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                                            <XAxis type="number" stroke="#8b949e" />
                                            <YAxis dataKey="name" type="category" stroke="#8b949e" width={100} />
                                            <RechartsTooltip cursor={{ fill: '#30363d' }} contentStyle={{ backgroundColor: '#1c2128', border: 'none' }} />
                                            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                                                {statusData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={STATUS_COLORS[entry.name] || '#8884d8'} />
                                                ))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="productivity-view fade-in">
                        {/* Filters */}
                        <div className="filters-row">
                            <div className="filter-input">
                                <Calendar size={16} />
                                <span>25-Nov-25 to 25-Dec-25</span>
                            </div>
                            <div className="filter-input">
                                <span>AI Result: All</span>
                                <ChevronDown size={14} />
                            </div>
                            <button className="btn btn-sm"><Filter size={14} /> More Filters</button>
                        </div>

                        {/* TAT Metrics */}
                        <div className="tat-section">
                            <div className="section-header">
                                <h3>Reporting TAT Analysis</h3>
                                <div className="metric-badges">
                                    <span className="metric-badge">Min: 8m</span>
                                    <span className="metric-badge">Max: 60m</span>
                                    <span className="metric-badge highlight">Avg: 22.8m</span>
                                </div>
                            </div>

                            <div className="chart-card wide">
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={tatData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                                        <XAxis dataKey="date" stroke="#8b949e" />
                                        <YAxis stroke="#8b949e" />
                                        <RechartsTooltip contentStyle={{ backgroundColor: '#1c2128', border: 'none' }} />
                                        <Legend />
                                        <Line type="monotone" dataKey="min" stroke="#82ca9d" name="Min Time (m)" />
                                        <Line type="monotone" dataKey="avg" stroke="#8884d8" strokeWidth={2} name="Avg Time (m)" />
                                        <Line type="monotone" dataKey="max" stroke="#ff7300" name="Max Time (m)" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Study Metrics Tabs */}
                        <div className="metrics-tabs-container">
                            <div className="metrics-tabs">
                                {['Scan to Reporting', 'Upload to Reporting', 'Assignment to Reporting', 'Open to Reporting'].map((tab) => (
                                    <button
                                        key={tab}
                                        className={`metric-tab ${metricTab === tab ? 'active' : ''}`}
                                        onClick={() => setMetricTab(tab)}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div className="metric-content">
                                <div className="ai-analysis-grid">
                                    <div className="chart-card">
                                        <h3>AI Result Criticality Distribution</h3>
                                        <ResponsiveContainer width="100%" height={200}>
                                            <PieChart>
                                                <Pie data={[{ name: 'Critical', value: 15 }, { name: 'Normal', value: 85 }]} dataKey="value" cx="50%" cy="50%" innerRadius={40} outerRadius={70}>
                                                    <Cell fill="#f85149" />
                                                    <Cell fill="#3fb950" />
                                                </Pie>
                                                <Legend />
                                                <RechartsTooltip contentStyle={{ backgroundColor: '#1c2128' }} />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <div className="chart-card">
                                        <h3>Hourly AI Activity</h3>
                                        <ResponsiveContainer width="100%" height={200}>
                                            <BarChart data={hourlyAiActivity}>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                                                <XAxis dataKey="hour" stroke="#8b949e" fontSize={12} />
                                                <YAxis stroke="#8b949e" fontSize={12} />
                                                <RechartsTooltip contentStyle={{ backgroundColor: '#1c2128' }} />
                                                <Bar dataKey="critical" stackId="a" fill="#f85149" />
                                                <Bar dataKey="normal" stackId="a" fill="#3fb950" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        .analytics-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          background-color: var(--bg-app);
          overflow-y: auto;
          color: var(--text-main);
        }
        .analytics-header {
           padding: 1.5rem 2rem;
           border-bottom: 1px solid var(--border-color);
           display: flex;
           justify-content: space-between;
           align-items: center;
        }
        .tabs-toggle {
           background: var(--bg-panel);
           padding: 4px;
           border-radius: 8px;
           display: flex;
           gap: 4px;
        }
        .toggle-btn {
           background: transparent;
           border: none;
           color: var(--text-muted);
           padding: 8px 16px;
           border-radius: 6px;
           cursor: pointer;
           font-weight: 500;
           transition: all 0.2s;
        }
        .toggle-btn.active {
           background: var(--bg-hover);
           color: var(--text-primary);
           box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }
        
        .analytics-content {
           padding: 2rem;
           max-width: 1200px;
           margin: 0 auto;
           width: 100%;
        }

        .stats-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
           gap: 1.5rem;
           margin-bottom: 2rem;
        }
        .stat-card {
           background: var(--bg-panel);
           border: 1px solid var(--border-color);
           border-radius: 12px;
           padding: 1.5rem;
           display: flex;
           align-items: center;
           gap: 1rem;
        }
        .icon-box {
           width: 48px;
           height: 48px;
           border-radius: 12px;
           display: flex;
           align-items: center;
           justify-content: center;
        }
        .icon-box.blue { background: rgba(88, 166, 255, 0.1); color: #58a6ff; }
        .icon-box.green { background: rgba(63, 185, 80, 0.1); color: #3fb950; }
        .stat-info { display: flex; flex-direction: column; }
        .stat-info .label { font-size: 0.85rem; color: var(--text-muted); }
        .stat-info .value { font-size: 1.5rem; font-weight: 700; color: var(--text-primary); }

        .charts-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
           gap: 1.5rem;
        }
        .chart-card {
           background: var(--bg-panel);
           border: 1px solid var(--border-color);
           border-radius: 12px;
           padding: 1.5rem;
        }
        .chart-card.wide { grid-column: 1 / -1; }
        .chart-card h3 { margin-bottom: 1.5rem; font-size: 1rem; color: var(--text-muted); }

        /* Productivity Styles */
        .filters-row {
           display: flex;
           gap: 1rem;
           margin-bottom: 2rem;
           background: var(--bg-panel);
           padding: 1rem;
           border-radius: 8px;
           border: 1px solid var(--border-color);
        }
        .filter-input {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           background: var(--bg-app);
           padding: 0.5rem 1rem;
           border-radius: 6px;
           border: 1px solid var(--border-color);
           color: var(--text-muted);
           font-size: 0.875rem;
           cursor: pointer;
        }
        
        .tat-section { margin-bottom: 2rem; }
        .section-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 1rem;
        }
        .metric-badges { display: flex; gap: 1rem; }
        .metric-badge {
           background: var(--bg-panel);
           border: 1px solid var(--border-color);
           padding: 4px 12px;
           border-radius: 99px;
           font-size: 0.85rem;
           color: var(--text-muted);
        }
        .metric-badge.highlight {
           background: rgba(88, 166, 255, 0.1);
           color: #58a6ff;
           border-color: rgba(88, 166, 255, 0.3);
        }

        .metrics-tabs-container {
           background: var(--bg-panel);
           border-radius: 12px;
           border: 1px solid var(--border-color);
           overflow: hidden;
        }
        .metrics-tabs {
           display: flex;
           border-bottom: 1px solid var(--border-color);
        }
        .metric-tab {
           flex: 1;
           background: transparent;
           border: none;
           padding: 1rem;
           color: var(--text-muted);
           cursor: pointer;
           border-right: 1px solid var(--border-color);
           font-size: 0.9rem;
           transition: 0.2s;
        }
        .metric-tab:hover { background: var(--bg-hover); }
        .metric-tab.active {
           background: var(--bg-app);
           color: var(--primary);
           border-bottom: 2px solid var(--primary);
        }
        .metric-content { padding: 1.5rem; }
        
        .ai-analysis-grid {
           display: grid;
           grid-template-columns: 1fr 1fr;
           gap: 1.5rem;
        }

        /* Animation */
        .fade-in { animation: fadeIn 0.3s ease-in-out; }
        @keyframes fadeIn {
           from { opacity: 0; transform: translateY(10px); }
           to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

export default Analytics;
