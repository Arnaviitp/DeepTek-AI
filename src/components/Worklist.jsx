import React, { useState, useMemo } from 'react';
import {
    Search, Upload, Download, RefreshCw, Filter,
    ChevronLeft, ChevronRight, Lock, AlertTriangle,
    MoreVertical, FileText, Activity, Save, CheckCircle, BookOpen, Clock,
} from 'lucide-react';
import { studies as initialStudies } from '../data';
import StatusBadge from './StatusBadge';

const TABS = [
    { id: 'Unreported', label: 'Unreported', icon: Clock },
    { id: 'Saved', label: 'Saved', icon: Save },
    { id: 'Reported', label: 'Reported', icon: FileText },
    { id: 'QC Fix', label: 'QC Fix', icon: CheckCircle }, // Using CheckCircle roughly for QC
    { id: 'Critical', label: 'Critical', icon: AlertTriangle },
    { id: 'Library', label: 'Library', icon: BookOpen },
];

const Worklist = ({ onOpenStudy }) => {
    const [activeTab, setActiveTab] = useState('Unreported');
    const [aiFilter, setAiFilter] = useState('All');
    const [searchType, setSearchType] = useState('Patient'); // 'Patient' or 'Accession'
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCasesOnly, setActiveCasesOnly] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50;

    // Filter Logic
    const filteredStudies = useMemo(() => {
        return initialStudies.filter(study => {
            // Tab Filter (Mocking logic, assuming 'Unreported' matches 'Unreported' status etc)
            // For demo purposes, we might just show empty if no data matches strictly, but let's try to match some.
            if (activeTab === 'Critical' && !study.alerts.includes('Critical')) return false;
            // if (activeTab !== 'Critical' && study.status !== activeTab) return false; 
            // The screenshot shows "No Data Found", so maybe strictly filtering is desired.
            if (activeTab !== 'Unreported' && study.status !== activeTab && activeTab !== 'Critical') return false;
            if (activeTab === 'Unreported' && study.status !== 'Unreported') return false;

            // AI Filter
            if (aiFilter === 'No AI Detection' && study.aiStatus !== 'No AI Detection') return false;
            if (aiFilter === 'FO Detection Only' && study.aiStatus !== 'FO Detection Only') return false;
            if (aiFilter === 'With AI Detection' && study.aiStatus !== 'With AI Detection') return false;

            // Search Filter
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                if (searchType === 'Patient') {
                    if (!study.patientName.toLowerCase().includes(q) && !study.patientId.toLowerCase().includes(q)) return false;
                } else {
                    if (!study.accession.toLowerCase().includes(q)) return false;
                }
            }

            return true;
        });
    }, [activeTab, aiFilter, searchType, searchQuery]);


    return (
        <div className="worklist-container fade-in">
            {/* Top Toolbar */}
            <div className="top-toolbar">
                <div className="search-section">
                    <span className="search-label">Search</span>
                    <div className="search-type-toggle">
                        <button
                            className={`type-btn ${searchType === 'Patient' ? 'active' : ''}`}
                            onClick={() => setSearchType('Patient')}
                        >
                            Patient Name or ID
                        </button>
                        <button
                            className={`type-btn ${searchType === 'Accession' ? 'active' : ''}`}
                            onClick={() => setSearchType('Accession')}
                        >
                            Accession Number
                        </button>
                    </div>
                    <div className="search-input-group">
                        <input
                            type="text"
                            placeholder={searchType === 'Patient' ? "Patient Name or ID" : "Accession Number"}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="search-submit"><Search size={16} /></button>
                    </div>

                    <div className="divider"></div>

                    <span className="search-label">Sort By</span>
                    <select className="sort-select">
                        <option>Assigned On ↓</option>
                        <option>Assigned On ↑</option>
                    </select>

                    <button className="filters-btn-primary">
                        <Filter size={14} /> Filters
                    </button>
                </div>

                <div className="toolbar-right">
                    <label className="switch-label">
                        <div className={`switch ${activeCasesOnly ? 'on' : ''}`} onClick={() => setActiveCasesOnly(!activeCasesOnly)}>
                            <div className="slider"></div>
                        </div>
                        Active Cases
                    </label>
                </div>
            </div>

            {/* Sub Nav Bar */}
            <div className="sub-nav">
                <div className="status-tabs">
                    {TABS.map(tab => (
                        <button
                            key={tab.id}
                            className={`status-tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <span className="icon-wrapper"><tab.icon size={14} /></span>
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="sub-nav-actions">
                    <button className="action-icon-btn"><Download size={16} /></button>
                    <button className="action-text-btn dark">Upload Study</button>
                    <button className="action-text-btn blue"><RefreshCw size={14} /> Refresh</button>
                </div>
            </div>

            {/* AI Filters Row */}
            <div className="ai-filters-row">
                {['All Studies', 'No AI Detection', 'FO Detection Only', 'With AI Detection'].map(filter => (
                    <button
                        key={filter}
                        className={`ai-filter-pill ${aiFilter === filter || (filter === 'All Studies' && aiFilter === 'All') ? 'active' : ''}`}
                        onClick={() => setAiFilter(filter === 'All Studies' ? 'All' : filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Table */}
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Patient Details</th>
                            <th>Study Details</th>
                            <th>Radiologist / Firm</th>
                            <th>Report Details</th>
                            <th>Actions</th>
                            <th>Alerts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudies.length > 0 ? (
                            filteredStudies.map(study => (
                                <tr key={study.id}>
                                    <td>
                                        <div className="cell-group">
                                            <span className="primary-text">{study.patientName}</span>
                                            <span className="secondary-text">{study.patientId}</span>
                                            <span className="secondary-text">{study.age}Y / {study.gender}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cell-group">
                                            <span className="primary-text">{study.description}</span>
                                            <span className="secondary-text">{study.modality} | {study.accession}</span>
                                            <span className="secondary-text">{study.date}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cell-group">
                                            <span className="primary-text">{study.assignedTo}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <StatusBadge status={study.status} />
                                        <div style={{ marginTop: 4 }}>
                                            <StatusBadge status={study.aiStatus} type="ai" />
                                        </div>
                                    </td>
                                    <td>
                                        <button className="icon-action" onClick={() => onOpenStudy && onOpenStudy(study)}>
                                            <FileText size={16} />
                                        </button>
                                    </td>
                                    <td>
                                        {study.alerts.map(a => (
                                            <AlertTriangle key={a} size={16} color="var(--accent-critical)" />
                                        ))}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">
                                    <div className="empty-state-container">
                                        No Study Found (Please clear any applied filters)
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="footer-bar">
                <div className="footer-left">
                    <select className="rows-select">
                        <option>50</option>
                    </select>
                    <button className="footer-btn">Go To Start</button>
                    <button className="footer-icon-btn"><ChevronLeft size={16} /></button>
                    <button className="footer-page-btn active">1</button>
                    {/* <button className="footer-icon-btn"><ChevronRight size={16}/></button> */}
                    <span className="pagination-link">Show Pagination (1 of 1)</span>
                </div>
                <div className="footer-right">
                    <span>Previous day:</span>
                    <span>Total Studies: 0</span>
                    <span className="separator">|</span>
                    <span>Reported: 0</span>
                    <span className="separator">|</span>
                    <span>Unreported: 0</span>
                    <span className="separator">|</span>
                    <span>Assigned: 0</span>
                    <span className="separator">|</span>
                    <span>Locked by You: 0</span>
                </div>
            </div>

            <style>{`
                .worklist-container {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    background: #050B14; /* Deep dark bg */
                    font-family: 'Inter', sans-serif;
                }

                /* Top Toolbar */
                .top-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.75rem 1rem;
                    background: #0A1628;
                    border-bottom: 1px solid #1E293B;
                }
                .search-section {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                .search-label {
                    font-weight: 600;
                    color: #fff;
                    font-size: 0.9rem;
                }
                .search-type-toggle {
                    display: flex;
                    background: #111;
                    border-radius: 4px;
                    padding: 2px;
                    border: 1px solid #333;
                }
                .type-btn {
                    background: transparent;
                    border: none;
                    color: #888;
                    padding: 4px 12px;
                    cursor: pointer;
                    font-size: 0.85rem;
                    border-radius: 3px;
                }
                .type-btn.active {
                    background: #00A6FB;
                    color: white;
                }
                .search-input-group {
                    display: flex;
                    align-items: center;
                }
                .search-input-group input {
                    background: #000;
                    border: 1px solid #333;
                    border-right: none;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 4px 0 0 4px;
                    width: 180px;
                }
                .search-submit {
                    background: #00A6FB;
                    border: 1px solid #00A6FB;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 0 4px 4px 0;
                    cursor: pointer;
                }
                .divider {
                    width: 1px;
                    height: 20px;
                    background: #333;
                    margin: 0 0.5rem;
                }
                .sort-select {
                    background: #000;
                    color: white;
                    border: 1px solid #333;
                    padding: 4px 8px;
                    border-radius: 4px;
                }
                .filters-btn-primary {
                    background: #00A6FB;
                    color: white;
                    border: none;
                    padding: 5px 12px;
                    border-radius: 4px;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-left: 0.5rem;
                    cursor: pointer;
                }

                .toolbar-right {
                    display: flex;
                    align-items: center;
                }
                .switch-label {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #fff;
                    font-size: 0.9rem;
                    cursor: pointer;
                }
                .switch {
                    width: 36px;
                    height: 18px;
                    background: #333;
                    border-radius: 10px;
                    position: relative;
                    transition: 0.2s;
                }
                .switch.on { background: #00A6FB; }
                .slider {
                    width: 14px;
                    height: 14px;
                    background: white;
                    border-radius: 50%;
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    transition: 0.2s;
                }
                .switch.on .slider { left: 20px; }

                /* Sub Nav */
                .sub-nav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.5rem 1rem;
                    background: #0F1D30; /* Slightly lighter than top */
                    border-bottom: 1px solid #1E293B;
                }
                .status-tabs {
                    display: flex;
                    gap: 0.5rem;
                }
                .status-tab {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: transparent;
                    border: 1px solid #333;
                    color: #888;
                    padding: 6px 12px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-size: 0.85rem;
                }
                .status-tab.active {
                    background: #1E293B;
                    border-color: #00A6FB; /* Highlight active border or bg */
                    color: white;
                    background: #00A6FB;
                    border: none;
                }
                /* Or follow screenshot: Active tab is blue button, others are outlined dark */
                
                .sub-nav-actions {
                    display: flex;
                    gap: 0.5rem;
                }
                .action-icon-btn {
                    background: #00A6FB;
                    border: none;
                    color: white;
                    width: 30px; height: 30px;
                    display: flex; align-items: center; justify-content: center;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .action-text-btn {
                    padding: 0 12px;
                    border-radius: 4px;
                    color: white;
                    font-size: 0.85rem;
                    border: none;
                    cursor: pointer;
                    display: flex; align-items: center; gap: 0.5rem;
                }
                .action-text-btn.dark { background: #000; border: 1px solid #333; }
                .action-text-btn.blue { background: #00A6FB; }

                /* AI Filters */
                .ai-filters-row {
                    display: flex;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: #050B14;
                    border-bottom: 1px solid #1E293B;
                }
                .ai-filter-pill {
                   background: #111;
                   color: #888;
                   border: none;
                   padding: 4px 12px;
                   border-radius: 12px;
                   font-size: 0.8rem;
                   cursor: pointer;
                }
                .ai-filter-pill.active {
                    background: #00A6FB;
                    color: white;
                }

                /* Table */
                .table-container {
                    flex: 1;
                    overflow: auto;
                    background: #000;
                }
                .custom-table {
                    width: 100%;
                    border-collapse: collapse;
                    color: white;
                }
                .custom-table th {
                    background: #0F1D30;
                    text-align: left;
                    padding: 0.75rem 1rem;
                    font-size: 0.9rem;
                    color: #ccc;
                    border-bottom: 1px solid #333;
                }
                .custom-table td {
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid #111;
                    vertical-align: top;
                }
                .cell-group { display: flex; flex-direction: column; gap: 2px; }
                .primary-text { font-weight: 600; font-size: 0.95rem; color: #fff; }
                .secondary-text { font-size: 0.8rem; color: #888; }
                
                .icon-action {
                    background: none; border: none; color: #00A6FB; cursor: pointer;
                }
                
                .empty-state-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 300px;
                    font-size: 1rem;
                    color: #aaa;
                }

                /* Footer */
                .footer-bar {
                    background: #000;
                    border-top: 1px solid #333;
                    padding: 0.5rem 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.8rem;
                    color: #fff;
                }
                .footer-left { display: flex; align-items: center; gap: 0.5rem; }
                .rows-select { background: #111; color: white; border: 1px solid #333; padding: 2px 6px; }
                .footer-btn { background: #00A6FB; border: none; color: white; padding: 4px 8px; border-radius: 2px; cursor: pointer; }
                .footer-icon-btn { background: #111; border: 1px solid #333; color: #fff; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; cursor: pointer; }
                .footer-page-btn { width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; cursor: pointer; border: 1px solid #333; background: #111; color: #fff; }
                .footer-page-btn.active { background: #00A6FB; border-color: #00A6FB; }
                .pagination-link { color: #fff; text-decoration: underline; margin-left: 0.5rem; cursor: pointer; }

                .footer-right { display: flex; align-items: center; gap: 0.5rem; color: #ccc; }
                .separator { color: #555; }
            `}</style>
        </div>
    );
};

export default Worklist;
