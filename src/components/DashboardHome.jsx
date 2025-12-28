import React from 'react';
import {
    Activity, Clock, FileText, AlertCircle, TrendingUp, Users, Calendar
} from 'lucide-react';
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell
} from 'recharts';

const activityData = [
    { name: 'Mon', studies: 12 },
    { name: 'Tue', studies: 19 },
    { name: 'Wed', studies: 15 },
    { name: 'Thu', studies: 22 },
    { name: 'Fri', studies: 28 },
    { name: 'Sat', studies: 10 },
    { name: 'Sun', studies: 5 },
];

const DashboardHome = ({ user, onNavigate }) => {
    return (
        <div className="dashboard-container fade-in">
            <header className="dashboard-header">
                <div>
                    <h1 className="welcome-title">Welcome back, {user?.name || 'Doctor'}</h1>
                    <p className="welcome-subtitle">Here is your daily radiology overview.</p>
                </div>
                <div className="current-date">
                    <Calendar size={16} />
                    <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
            </header>

            {/* Hero Stats */}
            <div className="stats-grid">
                <div className="stat-card primary">
                    <div className="stat-icon"><FileText size={24} /></div>
                    <div className="stat-data">
                        <span className="value">42</span>
                        <span className="label">Assigned Today</span>
                    </div>
                    <div className="trend up">+12% vs yesterday</div>
                </div>
                <div className="stat-card warning">
                    <div className="stat-icon"><Clock size={24} /></div>
                    <div className="stat-data">
                        <span className="value">15</span>
                        <span className="label">Pending Reports</span>
                    </div>
                    <div className="trend flat">AVG TAT: 24m</div>
                </div>
                <div className="stat-card critical">
                    <div className="stat-icon"><AlertCircle size={24} /></div>
                    <div className="stat-data">
                        <span className="value">3</span>
                        <span className="label">Critical Findings</span>
                    </div>
                    <div className="trend action">Review Now</div>
                </div>
                <div className="stat-card success">
                    <div className="stat-icon"><Activity size={24} /></div>
                    <div className="stat-data">
                        <span className="value">98%</span>
                        <span className="label">AI Accuracy</span>
                    </div>
                    <div className="trend up">Consistent</div>
                </div>
            </div>

            <div className="main-grid">
                {/* Chart Section */}
                <div className="card chart-section">
                    <div className="card-header">
                        <h3>Weekly Reporting Activity</h3>
                        <button className="btn-text">View Details</button>
                    </div>
                    <div style={{ height: '250px', width: '100%' }}>
                        <ResponsiveContainer>
                            <BarChart data={activityData}>
                                <XAxis dataKey="name" stroke="#8b949e" fontSize={12} tickLine={false} axisLine={false} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{ backgroundColor: '#1c2128', border: '1px solid #30363d', borderRadius: '8px' }}
                                />
                                <Bar dataKey="studies" fill="#58a6ff" radius={[4, 4, 0, 0]}>
                                    {activityData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.studies > 20 ? '#58a6ff' : 'rgba(88, 166, 255, 0.5)'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Urgent Tasks */}
                <div className="card tasks-section">
                    <div className="card-header">
                        <h3>Urgent Attention</h3>
                        <span className="badge-count">3</span>
                    </div>
                    <div className="tasks-list">
                        <div className="task-item">
                            <div className="task-priority critical"></div>
                            <div className="task-info">
                                <h4>Sarah Miller (CT Chest)</h4>
                                <p>P-1006 | AI Flag: Pulmonary Embolism</p>
                            </div>
                            <button className="btn-sm" onClick={() => onNavigate('worklist')}>Open</button>
                        </div>
                        <div className="task-item">
                            <div className="task-priority high"></div>
                            <div className="task-info">
                                <h4>Michael Wilson (CR Knee)</h4>
                                <p>P-1005 | Query: Fracture</p>
                            </div>
                            <button className="btn-sm" onClick={() => onNavigate('worklist')}>Open</button>
                        </div>
                        <div className="task-item">
                            <div className="task-priority normal"></div>
                            <div className="task-info">
                                <h4>Pending Review</h4>
                                <p>5 cases waiting for QC validation</p>
                            </div>
                            <button className="btn-sm text-only">View QC</button>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .dashboard-container {
          padding: 2rem;
          height: 100%;
          overflow-y: auto;
        }
        .dashboard-header {
           display: flex;
           justify-content: space-between;
           align-items: flex-end;
           margin-bottom: 2rem;
        }
        .welcome-title { font-size: 1.75rem; color: var(--text-primary); margin-bottom: 0.25rem; }
        .welcome-subtitle { color: var(--text-muted); font-size: 0.95rem; }
        
        .current-date {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           color: var(--text-muted);
           background: var(--bg-panel);
           padding: 0.5rem 1rem;
           border-radius: 20px;
           border: 1px solid var(--border-color);
           font-size: 0.85rem;
        }

        .stats-grid {
           display: grid;
           grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
           gap: 1.5rem;
           margin-bottom: 2rem;
        }
        .stat-card {
           background: var(--bg-panel);
           border-radius: 12px;
           padding: 1.5rem;
           border: 1px solid var(--border-color);
           position: relative;
           overflow: hidden;
           display: flex;
           flex-direction: column;
           gap: 1rem;
        }
        .stat-card::before {
           content: '';
           position: absolute;
           top: 0; left: 0; width: 4px; height: 100%;
        }
        .stat-card.primary::before { background: var(--primary); }
        .stat-card.warning::before { background: var(--accent-urgent); }
        .stat-card.critical::before { background: var(--accent-critical); }
        .stat-card.success::before { background: var(--accent-success); }
        
        .stat-icon {
           width: 40px; height: 40px;
           border-radius: 8px;
           background: var(--bg-hover);
           display: flex; align-items: center; justify-content: center;
           color: var(--text-primary);
        }
        .stat-data { flex: 1; }
        .stat-data .value { display: block; font-size: 2rem; font-weight: 700; line-height: 1; margin-bottom: 0.25rem; }
        .stat-data .label { color: var(--text-muted); font-size: 0.85rem; }
        
        .trend { font-size: 0.8rem; font-weight: 500; }
        .trend.up { color: var(--accent-success); }
        .trend.flat { color: var(--accent-urgent); }
        .trend.action { color: var(--accent-critical); cursor: pointer; text-decoration: underline; }

        .main-grid {
           display: grid;
           grid-template-columns: 2fr 1fr;
           gap: 1.5rem;
        }
        .card {
           background: var(--bg-panel);
           border: 1px solid var(--border-color);
           border-radius: 12px;
           padding: 1.5rem;
        }
        .card-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 1.5rem;
        }
        .card-header h3 { font-size: 1.1rem; color: var(--text-primary); }
        .btn-text { background: none; border: none; color: var(--primary); cursor: pointer; font-size: 0.85rem; }

        .tasks-list { display: flex; flex-direction: column; gap: 1rem; }
        .task-item {
           display: flex;
           align-items: center;
           gap: 1rem;
           padding: 1rem;
           background: var(--bg-app);
           border-radius: 8px;
           border: 1px solid var(--border-color);
           transition: transform 0.2s;
        }
        .task-item:hover { transform: translateX(4px); border-color: var(--border-focus); }
        .task-priority { width: 4px; height: 32px; border-radius: 2px; }
        .task-priority.critical { background: var(--accent-critical); }
        .task-priority.high { background: var(--accent-urgent); }
        .task-priority.normal { background: var(--text-muted); }
        
        .task-info { flex: 1; }
        .task-info h4 { font-size: 0.95rem; margin-bottom: 0.2rem; }
        .task-info p { font-size: 0.8rem; color: var(--text-muted); }

        .btn-sm {
           padding: 0.4rem 0.8rem;
           font-size: 0.8rem;
           border-radius: 4px;
           background: var(--bg-hover);
           color: var(--text-primary);
           border: 1px solid var(--border-color);
           cursor: pointer;
        }
        .btn-sm:hover { background: var(--primary); color: #000; border-color: var(--primary); }
        .btn-sm.text-only { background: none; border: none; color: var(--text-muted); }
        .btn-sm.text-only:hover { color: var(--text-primary); text-decoration: underline; background: none; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .fade-in { animation: fadeIn 0.4s ease-out; }
      `}</style>
        </div>
    );
};

export default DashboardHome;
