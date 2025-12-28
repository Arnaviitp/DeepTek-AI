import React, { useState } from 'react';
import { Search, Plus, ChevronLeft, ChevronRight, Edit2, Trash2, Layout } from 'lucide-react';

const MOCK_PROTOCOLS = [
    // Add some mock data later or keep empty as per screenshot
];

const HangingProtocol = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('Default');

    return (
        <div className="hp-container fade-in">
            {/* Header / Actions */}
            <div className="hp-header">
                <h2>Hanging Protocol</h2>
                <div className="hp-actions">
                    <div className="filter-group">
                        <span className="label">Search By</span>
                        <div className="search-input-wrapper">
                            <input
                                type="text"
                                placeholder="Name"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="search-btn"><Search size={16} /></button>
                        </div>
                    </div>

                    <div className="filter-group">
                        <span className="label">Sort By</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="sort-select"
                        >
                            <option value="Default">Select</option>
                            <option value="Name">Name</option>
                            <option value="Date">Date Created</option>
                        </select>
                    </div>

                    <div className="spacer"></div>

                    <button className="btn btn-primary">
                        Add Hanging Protocol
                    </button>
                </div>
            </div>

            {/* Table Header */}
            <div className="hp-table-header">
                <div className="th col-details">Details</div>
                <div className="th col-layout">Layout</div>
                <div className="th col-status">Status</div>
                <div className="th col-action">Action</div>
            </div>

            {/* Content / Empty State */}
            <div className="hp-content">
                {MOCK_PROTOCOLS.length > 0 ? (
                    <div className="protocol-list">
                        {/* Map protocols here later */}
                    </div>
                ) : (
                    <div className="empty-state">
                        <p>No Data Found (Please clear any applied filters)</p>
                    </div>
                )}
            </div>

            {/* Footer / Pagination */}
            <div className="hp-footer">
                <div className="pagination">
                    <button className="page-btn"><ChevronLeft size={16} /></button>
                    <button className="page-btn active">1</button>
                    <button className="page-btn"><ChevronRight size={16} /></button>
                </div>
            </div>

            <style>{`
                .hp-container {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    background-color: var(--bg-app);
                    padding: 2rem;
                    height: 100%;
                    overflow: hidden;
                }
                
                .hp-header h2 {
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                    color: var(--text-main);
                }

                .hp-actions {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .filter-group {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .label {
                    font-weight: 600;
                    font-size: 0.9rem;
                    color: var(--text-main);
                }

                .search-input-wrapper {
                    display: flex;
                    align-items: center;
                }

                .search-input-wrapper input {
                    background: var(--bg-app); /* Or darker */
                    border: 1px solid var(--border-color);
                    border-right: none;
                    border-radius: 4px 0 0 4px;
                    padding: 0.5rem 0.75rem;
                    color: var(--text-main);
                    width: 200px;
                }
                
                .search-btn {
                    background: var(--primary);
                    border: 1px solid var(--primary);
                    color: white;
                    padding: 0.5rem 0.75rem;
                    border-radius: 0 4px 4px 0;
                    cursor: pointer;
                    display: flex; align-items: center; justify-content: center;
                }

                .sort-select {
                    background: var(--bg-app);
                    border: 1px solid var(--border-color);
                    color: var(--text-muted);
                    padding: 0.5rem;
                    border-radius: 4px;
                    min-width: 150px;
                }

                .spacer { flex: 1; }

                .hp-table-header {
                    display: flex;
                    padding: 1rem 0;
                    border-bottom: 1px solid var(--border-color);
                    border-top: 1px solid var(--border-color); /* Match screenshot style roughly */
                    margin-bottom: 1rem;
                }
                
                .th {
                    font-weight: 700;
                    color: var(--text-main);
                    font-size: 0.95rem;
                }
                .col-details { flex: 2; }
                .col-layout { flex: 1; }
                .col-status { flex: 1; }
                .col-action { flex: 1; }

                .hp-content {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 200px;
                }

                .empty-state {
                    color: var(--text-main);
                    font-size: 1rem;
                    text-align: center;
                }

                .hp-footer {
                    margin-top: auto;
                    padding-top: 1rem;
                }
                
                .pagination {
                    display: flex;
                    gap: 0.5rem;
                }
                .page-btn {
                    width: 32px; height: 32px;
                    display: flex; align-items: center; justify-content: center;
                    background: var(--bg-panel);
                    border: 1px solid var(--border-color);
                    color: var(--text-muted);
                    border-radius: 4px;
                    cursor: pointer;
                }
                .page-btn.active {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                }
            `}</style>
        </div>
    );
};

export default HangingProtocol;
