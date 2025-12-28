import React, { useState } from 'react';
import {
    Search, Plus, MapPin, Mail, Phone, Building, Power,
    CheckCircle, XCircle, Filter, ChevronLeft, ChevronRight, ExternalLink
} from 'lucide-react';

const MOCK_CLIENTS = [
    {
        id: 1,
        name: "Rad Shine Imaging Diagnostic Center Pvt. Ltd.",
        email: "radshine12@gmail.com",
        mobile: "+916287046723",
        address: "Plot No. 45, Sector 12, Kharghar, Navi Mumbai, Maharashtra 410210",
        type: "Imaging Centre",
        status: "Active"
    },
    {
        id: 2,
        name: "City X-Ray & Scan Clinic",
        email: "info@cityxray.com",
        mobile: "+919876543210",
        address: "4B/12, Tilak Nagar, New Delhi, Delhi 110018",
        type: "Diagnostic Centre",
        status: "Active"
    },
    {
        id: 3,
        name: "Apollo Diagnostics",
        email: "support@apollodiagnostics.in",
        mobile: "+918002020202",
        address: "Road No. 2, Banjara Hills, Hyderabad, Telangana 500034",
        type: "Hospital",
        status: "Inactive"
    },
    {
        id: 4,
        name: "NM Medical Centre",
        email: "contact@nmmedical.com",
        mobile: "+912222003300",
        address: "Sequeira House, Khar West, Mumbai, Maharashtra 400052",
        type: "Imaging Centre",
        status: "Active"
    },
    {
        id: 5,
        name: "Suburban Diagnostics",
        email: "help@suburbandiagnostics.com",
        mobile: "+912261700000",
        address: "Andheri West, Mumbai, Maharashtra 400053",
        type: "Diagnostic Centre",
        status: "Active"
    },
    {
        id: 6,
        name: "Lucid Medical Diagnostics",
        email: "info@luciddiagnostics.com",
        mobile: "+914044194444",
        address: "Karkhana, Secunderabad, Telangana 500009",
        type: "Imaging Centre",
        status: "Active"
    }
];

const ClientManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('name-asc');
    const [clients, setClients] = useState(MOCK_CLIENTS);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handleDeactivate = (id) => {
        setClients(clients.map(client =>
            client.id === id
                ? { ...client, status: client.status === 'Active' ? 'Inactive' : 'Active' }
                : client
        ));
    };

    // Filter & Sort
    const filteredClients = clients
        .filter(client => client.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder === 'name-asc') return a.name.localeCompare(b.name);
            if (sortOrder === 'name-desc') return b.name.localeCompare(a.name);
            return 0;
        });

    // Pagination
    const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
    const paginatedClients = filteredClients.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="clients-container fade-in">
            <header className="clients-header">
                <h1 className="page-title">Client Management</h1>
                <div className="header-actions">
                    <div className="search-bar">
                        <Search size={16} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search by Firm Name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="filter-group">
                        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                            <option value="name-asc">Name (A-Z)</option>
                            <option value="name-desc">Name (Z-A)</option>
                        </select>
                    </div>

                    <button className="btn btn-primary">
                        <Plus size={16} /> Connect New Client
                    </button>
                </div>
            </header>

            <div className="clients-grid">
                {paginatedClients.map(client => (
                    <div key={client.id} className="client-card">
                        <div className="card-header-row">
                            <div className={`status-indicator ${client.status.toLowerCase()}`}></div>
                            <span className="client-type">{client.type}</span>
                            <button
                                className={`btn-icon-action ${client.status === 'Active' ? 'danger' : 'success'}`}
                                onClick={() => handleDeactivate(client.id)}
                                title={client.status === 'Active' ? 'Deactivate' : 'Activate'}
                            >
                                <Power size={16} />
                            </button>
                        </div>

                        <h3 className="client-name">{client.name}</h3>

                        <div className="client-details">
                            <div className="detail-row">
                                <Mail size={14} className="detail-icon" />
                                <span>{client.email}</span>
                            </div>
                            <div className="detail-row">
                                <Phone size={14} className="detail-icon" />
                                <span>{client.mobile}</span>
                            </div>
                            <div className="detail-row address">
                                <MapPin size={14} className="detail-icon" />
                                <span>{client.address}</span>
                            </div>
                        </div>

                        <div className="card-footer-row">
                            <span className={`status-badge ${client.status.toLowerCase()}`}>
                                {client.status === 'Active' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                                {client.status}
                            </span>
                            <button className="btn-detail">
                                View Details <ExternalLink size={14} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Footer */}
            <footer className="pagination-footer">
                <span className="showing-text">
                    Showing {paginatedClients.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to {Math.min(currentPage * itemsPerPage, filteredClients.length)} of {filteredClients.length} clients
                </span>
                <div className="pagination-controls">
                    <button
                        className="page-btn"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <span className="page-info">Page {currentPage} of {Math.max(1, totalPages)}</span>
                    <button
                        className="page-btn"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </footer>

            <style>{`
        .clients-container {
           padding: 2rem;
           height: 100%;
           display: flex;
           flex-direction: column;
           overflow-y: hidden; /* Main scroll handled by grid container if needed, but we paginate */
        }
        
        .clients-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 2rem;
        }
        .header-actions {
           display: flex;
           gap: 1rem;
           align-items: center;
        }
        
        .clients-grid {
           flex: 1;
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
           gap: 1.5rem;
           overflow-y: auto;
           padding-bottom: 1rem;
        }

        .client-card {
           background: var(--bg-panel);
           border: 1px solid var(--border-color);
           border-radius: 12px;
           padding: 1.5rem;
           display: flex;
           flex-direction: column;
           gap: 1rem;
           transition: transform 0.2s, box-shadow 0.2s;
        }
        .client-card:hover {
           transform: translateY(-2px);
           box-shadow: var(--shadow-md);
           border-color: var(--border-focus);
        }

        .card-header-row {
           display: flex;
           justify-content: space-between;
           align-items: center;
        }
        .status-indicator {
           width: 8px; height: 8px; border-radius: 50%;
        }
        .status-indicator.active { background: var(--accent-success); box-shadow: 0 0 8px var(--accent-success); }
        .status-indicator.inactive { background: var(--text-muted); }

        .client-type {
           font-size: 0.75rem;
           text-transform: uppercase;
           letter-spacing: 0.5px;
           color: var(--text-muted);
           background: var(--bg-app);
           padding: 2px 8px;
           border-radius: 4px;
           border: 1px solid var(--border-color);
        }

        .btn-icon-action {
           background: none; border: none; cursor: pointer;
           color: var(--text-muted);
           padding: 4px;
           border-radius: 4px;
           transition: 0.2s;
        }
        .btn-icon-action:hover { background: var(--bg-hover); }
        .btn-icon-action.danger:hover { color: var(--accent-critical); background: rgba(248, 81, 73, 0.1); }
        .btn-icon-action.success:hover { color: var(--accent-success); background: rgba(63, 185, 80, 0.1); }

        .client-name {
           font-size: 1.1rem;
           font-weight: 600;
           color: var(--text-primary);
           line-height: 1.4;
        }

        .client-details {
           display: flex;
           flex-direction: column;
           gap: 0.75rem;
           margin-top: 0.5rem;
        }
        .detail-row {
           display: flex;
           align-items: flex-start;
           gap: 0.75rem;
           color: var(--text-muted);
           font-size: 0.9rem;
        }
        .detail-icon {
           margin-top: 3px;
           min-width: 14px; 
           color: var(--primary);
        }
        .address {
           line-height: 1.4;
        }

        .card-footer-row {
           margin-top: auto;
           padding-top: 1rem;
           border-top: 1px solid var(--border-color);
           display: flex;
           justify-content: space-between;
           align-items: center;
        }
        
        .status-badge {
           display: flex; align-items: center; gap: 0.4rem;
           font-size: 0.8rem;
           font-weight: 500;
        }
        .status-badge.active { color: var(--accent-success); }
        .status-badge.inactive { color: var(--text-muted); }

        .pagination-footer {
           margin-top: 1rem;
           display: flex;
           justify-content: space-between;
           align-items: center;
           padding-top: 1rem;
           border-top: 1px solid var(--border-color);
        }
        .showing-text { font-size: 0.85rem; color: var(--text-muted); }
        .pagination-controls { display: flex; align-items: center; gap: 1rem; }
        .page-btn {
           background: var(--bg-panel);
           border: 1px solid var(--border-color);
           color: var(--text-primary);
           width: 32px; height: 32px;
           border-radius: 6px;
           display: flex; align-items: center; justify-content: center;
           cursor: pointer;
        }
        .page-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .page-btn:not(:disabled):hover { border-color: var(--primary); color: var(--primary); }
        .page-info { font-size: 0.9rem; color: var(--text-muted); }

        .btn-detail {
           background: transparent;
           border: 1px solid var(--border-color);
           color: var(--text-primary);
           padding: 0.35rem 0.8rem;
           border-radius: 6px;
           font-size: 0.8rem;
           cursor: pointer;
           display: flex;
           align-items: center;
           gap: 0.4rem;
           transition: all 0.2s;
        }
        .btn-detail:hover {
           background: var(--bg-hover);
           border-color: var(--primary);
           color: var(--primary);
        }
      `}</style>
        </div>
    );
};

export default ClientManagement;
