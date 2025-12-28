import React, { useState } from 'react';
import { User, Bell, Shield, Smartphone, Monitor } from 'lucide-react';

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile');

    return (
        <div className="settings-container fade-in">
            <h1 className="page-title">Settings</h1>

            <div className="settings-layout">
                <div className="settings-sidebar">
                    <button
                        className={`settings-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <User size={18} /> Profile
                    </button>
                    <button
                        className={`settings-nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
                        onClick={() => setActiveTab('notifications')}
                    >
                        <Bell size={18} /> Notifications
                    </button>
                    <button
                        className={`settings-nav-item ${activeTab === 'security' ? 'active' : ''}`}
                        onClick={() => setActiveTab('security')}
                    >
                        <Shield size={18} /> Security
                    </button>
                    <button
                        className={`settings-nav-item ${activeTab === 'system' ? 'active' : ''}`}
                        onClick={() => setActiveTab('system')}
                    >
                        <Monitor size={18} /> System
                    </button>
                </div>

                <div className="settings-content">
                    {activeTab === 'profile' && (
                        <div className="settings-section">
                            <h2>Public Profile</h2>
                            <p className="section-desc">Manage how you appear to other radiologists and admins.</p>

                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" defaultValue="Dr. John Smith" />
                            </div>
                            <div className="form-group">
                                <label>Title / Role</label>
                                <input type="text" defaultValue="Senior Radiologist" disabled className="bg-disabled" />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="text" defaultValue="dr.smith@augmento.ai" />
                            </div>

                            <div className="form-actions">
                                <button className="btn btn-primary">Save Changes</button>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="settings-section">
                            <h2>Notifications</h2>
                            <p className="section-desc">Control when and how you are notified.</p>

                            <div className="toggle-group">
                                <div className="toggle-info">
                                    <h4>Critical Alerts</h4>
                                    <p>Receive immediate alerts for critical AI findings.</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked />
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className="toggle-group">
                                <div className="toggle-info">
                                    <h4>Daily Summaries</h4>
                                    <p>Email digest of your reporting statistics.</p>
                                </div>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    )}

                    {activeTab === 'system' && (
                        <div className="settings-section">
                            <h2>System Preferences</h2>

                            <div className="form-group">
                                <label>Default Page Size</label>
                                <select defaultValue="50">
                                    <option value="25">25 items</option>
                                    <option value="50">50 items</option>
                                    <option value="100">100 items</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Theme</label>
                                <select defaultValue="dark">
                                    <option value="dark">Radiology Dark (Recommended)</option>
                                    <option value="light">Light (High Contrast)</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
          .settings-container {
             padding: 2rem;
             height: 100%;
             overflow-y: auto;
          }
          .settings-layout {
             display: flex;
             gap: 2rem;
             margin-top: 2rem;
             align-items: flex-start;
          }
          .settings-sidebar {
             width: 240px;
             display: flex;
             flex-direction: column;
             gap: 0.5rem;
          }
          .settings-nav-item {
             display: flex;
             align-items: center;
             gap: 0.75rem;
             padding: 0.75rem 1rem;
             background: transparent;
             border: none;
             color: var(--text-muted);
             cursor: pointer;
             border-radius: 6px;
             text-align: left;
             font-size: 0.95rem;
             transition: 0.2s;
          }
          .settings-nav-item:hover { background: var(--bg-hover); color: var(--text-primary); }
          .settings-nav-item.active { background: var(--bg-panel); color: var(--primary); font-weight: 500; }
          
          .settings-content {
             flex: 1;
             background: var(--bg-panel);
             border-radius: 12px;
             border: 1px solid var(--border-color);
             padding: 2rem;
             max-width: 600px;
          }
          .settings-section h2 { margin-bottom: 0.5rem; font-size: 1.25rem; }
          .section-desc { color: var(--text-muted); margin-bottom: 2rem; font-size: 0.9rem; }
          
          .form-group { margin-bottom: 1.5rem; }
          .form-group label { display: block; margin-bottom: 0.5rem; color: var(--text-muted); font-size: 0.85rem; }
          .form-group input, .form-group select { width: 100%; padding: 0.6rem; background: var(--bg-app); border: 1px solid var(--border-color); border-radius: 6px; color: var(--text-primary); }
          .bg-disabled { opacity: 0.6; cursor: not-allowed; }
          
          .toggle-group {
             display: flex;
             justify-content: space-between;
             align-items: center;
             padding: 1rem 0;
             border-bottom: 1px solid var(--border-color);
          }
          .toggle-group:last-child { border-bottom: none; }
          .toggle-info h4 { font-size: 1rem; margin-bottom: 0.25rem; }
          .toggle-info p { font-size: 0.85rem; color: var(--text-muted); }

          /* Switch Toggle */
          .switch { position: relative; display: inline-block; width: 44px; height: 24px; }
          .switch input { opacity: 0; width: 0; height: 0; }
          .slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: var(--bg-app); border: 1px solid var(--border-color); transition: .4s; border-radius: 34px; }
          .slider:before { position: absolute; content: ""; height: 16px; width: 16px; left: 3px; bottom: 3px; background-color: var(--text-muted); transition: .4s; border-radius: 50%; }
          input:checked + .slider { background-color: var(--primary); border-color: var(--primary); }
          input:checked + .slider:before { transform: translateX(20px); background-color: white; }

          .form-actions { margin-top: 2rem; text-align: right; }
          .btn-primary { padding: 0.6rem 1.2rem; }
        `}</style>
        </div>
    );
};

export default Settings;
