import React, { useState } from 'react';
import {
    Search, FileText, Plus, Edit2, Trash2, Filter,
    ChevronRight, Layout, Copy
} from 'lucide-react';

const PREBUILT_TEMPLATES = [
    {
        id: 1, name: 'X RAY ELBOW', modality: 'DX', type: 'Augmento', content: {
            exam: 'X RAY ELBOW',
            history: 'Fall on outstretched hand.',
            technique: 'AP and Lateral views of the elbow were obtained.',
            findings: 'The bony structures of the elbow joint appear normal. No fracture or dislocation seen. The radio-capitellar and ulno-trochlear alignments are maintained. Soft tissues appear normal.',
            impression: '1. No fracture or dislocation seen.\n2. Normal study.'
        }
    },
    {
        id: 2, name: 'NCCT BRAIN', modality: 'CT', type: 'Augmento', content: {
            exam: 'NON-ENHANCED CT SCAN OF THE BRAIN',
            history: 'Headache and dizziness.',
            technique: 'Axial sections of the brain were obtained from base of skull to vertex without intravenous contrast.',
            findings: 'The brain parenchyma appears normal in attenuation values. No focal mass lesion, acute hemorrhage or territorial infarction is seen. The gray-white matter differentiation is preserved. The ventricular system, basal cisterns and sulci are normal for age. Midline structures are central. Posterior fossa structures are unremarkable.',
            impression: '1. Normal Non-contrast CT Brain study.\n2. No acute intracranial pathology.'
        }
    },
    { id: 3, name: 'LEFT KNEE', modality: 'DX', type: 'Augmento', content: { exam: 'X RAY LEFT KNEE', history: 'Knee pain.', technique: 'AP and Lateral views.', findings: 'Joint space is maintained. No osteophytes.', impression: '1. Normal study.' } },
    { id: 4, name: 'CT UROGRAPHY MALE', modality: 'CT', type: 'Augmento', content: { exam: 'CT UROGRAPHY', history: 'Flank pain.', technique: 'CT Urography protocol.', findings: 'Kidneys are normal in size and position.', impression: '1. No calculus seen.' } },
    { id: 5, name: 'MRI BRAIN', modality: 'MRI', type: 'Augmento', content: { exam: 'MRI BRAIN', history: 'Seizures.', technique: 'Multi-planar multi-sequence MRI.', findings: 'No abnormal signal intensity.', impression: '1. Normal MRI Brain.' } },
    { id: 6, name: 'HRCT TEMPORAL BONE', modality: 'CT', type: 'Augmento', content: { exam: 'HRCT TEMPORAL BONE', history: 'Hearing loss.', technique: 'High resolution CT.', findings: 'Ossicular chain intact.', impression: '1. Normal study.' } },
];

const CUSTOM_TEMPLATES = [
    {
        id: 101, name: 'Dr. Smith CXR Normal', modality: 'DX', type: 'Custom', content: {
            exam: 'CHEST X-RAY PA VIEW',
            history: 'Routine checkup.',
            technique: 'PA view in full inspiration.',
            findings: 'Lung fields are clear.',
            impression: '1. Normal Chest X-Ray.'
        }
    },
];

const ReportTemplates = () => {
    const [activeTab, setActiveTab] = useState('augmento'); // 'augmento' or 'custom'
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTemplate, setSelectedTemplate] = useState(PREBUILT_TEMPLATES[0]);
    const [customList, setCustomList] = useState(CUSTOM_TEMPLATES);

    const filteredList = (activeTab === 'augmento' ? PREBUILT_TEMPLATES : customList).filter(t =>
        t.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getModalityColor = (mod) => {
        switch (mod) {
            case 'CT': return 'var(--accent-info)'; // Blue-ish
            case 'DX': return 'var(--accent-success)'; // Green-ish
            case 'MRI': return 'var(--accent-urgent)'; // Orange/Gold
            default: return 'var(--text-muted)';
        }
    };

    return (
        <div className="templates-container fade-in">
            <div className="templates-sidebar-panel">
                {/* Sidebar Header */}
                <div className="panel-header">
                    <h2>Report Templates</h2>
                    <div className="tabs-toggle small">
                        <button
                            className={`toggle-btn ${activeTab === 'augmento' ? 'active' : ''}`}
                            onClick={() => { setActiveTab('augmento'); setSelectedTemplate(PREBUILT_TEMPLATES[0]); }}
                        >
                            Augmento
                        </button>
                        <button
                            className={`toggle-btn ${activeTab === 'custom' ? 'active' : ''}`}
                            onClick={() => { setActiveTab('custom'); setSelectedTemplate(customList[0] || null); }}
                        >
                            Custom
                        </button>
                    </div>
                </div>

                {/* Search & Actions */}
                <div className="search-actions">
                    <div className="search-bar full">
                        <Search size={16} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search by Report Name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <button className="btn-icon" title="Filters"><Filter size={16} /></button>
                </div>

                {/* Template List */}
                <div className="template-list">
                    {activeTab === 'custom' && (
                        <button className="create-new-btn">
                            <Plus size={16} /> Create New Template
                        </button>
                    )}

                    {filteredList.map(template => (
                        <div
                            key={template.id}
                            className={`template-item ${selectedTemplate?.id === template.id ? 'active' : ''}`}
                            onClick={() => setSelectedTemplate(template)}
                        >
                            <div className="template-icon">
                                <FileText size={18} />
                            </div>
                            <div className="template-info">
                                <span className="template-name">{template.name}</span>
                                <span
                                    className="modality-badge"
                                    style={{ color: getModalityColor(template.modality), borderColor: getModalityColor(template.modality) }}
                                >
                                    {template.modality}
                                </span>
                            </div>
                            <ChevronRight size={14} className="arrow-icon" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Preview Panel */}
            <div className="preview-panel">
                {selectedTemplate ? (
                    <>
                        <header className="preview-header">
                            <div className="preview-title">
                                <h3>{selectedTemplate.name}</h3>
                                <span className="template-type-badge">{selectedTemplate.type} Template</span>
                            </div>
                            <div className="preview-actions">
                                {activeTab === 'custom' && (
                                    <>
                                        <button className="btn btn-sm"><Edit2 size={14} /> Edit</button>
                                        <button className="btn btn-sm btn-danger"><Trash2 size={14} /> Delete</button>
                                    </>
                                )}
                                <button className="btn btn-primary btn-sm"><Copy size={14} /> Use Template</button>
                            </div>
                        </header>

                        <div className="report-paper">
                            <div className="report-header">RADIOLOGY REPORT</div>

                            <div className="report-section">
                                <span className="section-label">EXAM:</span>
                                <span className="section-content">{selectedTemplate.content.exam}</span>
                            </div>

                            <div className="report-section">
                                <span className="section-label">CLINICAL HISTORY:</span>
                                <div className="section-content text-block">{selectedTemplate.content.history || 'None provided.'}</div>
                            </div>

                            <div className="report-section">
                                <span className="section-label">COMPARISON:</span>
                                <div className="section-content text-block">None.</div>
                            </div>

                            <div className="report-section">
                                <span className="section-label">TECHNIQUE:</span>
                                <div className="section-content text-block">{selectedTemplate.content.technique}</div>
                            </div>

                            <div className="report-section">
                                <span className="section-label">FINDINGS:</span>
                                <div className="section-content text-block">{selectedTemplate.content.findings}</div>
                            </div>

                            <div className="report-section impression">
                                <span className="section-label">IMPRESSION:</span>
                                <div className="section-content text-block bold">
                                    {selectedTemplate.content.impression.split('\n').map((line, i) => (
                                        <div key={i}>{line}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="empty-preview">
                        <Layout size={48} />
                        <p>Select a template to preview</p>
                    </div>
                )}
            </div>

            <style>{`
        .templates-container {
          display: flex;
          height: 100%;
          overflow: hidden;
        }
        
        /* Left Sidebar Panel */
        .templates-sidebar-panel {
          width: 320px;
          background: var(--bg-panel);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
        }
        .panel-header {
           padding: 1.5rem 1.5rem 1rem;
           border-bottom: 1px solid var(--border-color);
        }
        .panel-header h2 { font-size: 1.25rem; margin-bottom: 1rem; }
        
        .tabs-toggle.small {
           background: var(--bg-app);
           padding: 4px;
           border-radius: 8px;
           display: flex;
           border: 1px solid var(--border-color);
        }
        .toggle-btn {
           flex: 1;
           padding: 6px 12px;
           border-radius: 6px;
           border: none;
           background: transparent;
           color: var(--text-muted);
           font-size: 0.85rem;
           cursor: pointer;
           transition: all 0.2s ease;
           font-weight: 500;
        }
        .toggle-btn:hover {
           color: var(--text-primary);
        }
        .toggle-btn.active {
           background: var(--bg-panel); /* Or a highlight color */
           color: var(--text-primary); /* Primary accent */
           box-shadow: 0 1px 3px rgba(0,0,0,0.2);
           background-color: var(--bg-hover); /* Make it stand out more */
           border: 1px solid var(--border-color);
        }

        .search-actions {
           padding: 1rem;
           display: flex;
           gap: 0.5rem;
           border-bottom: 1px solid var(--border-color);
        }
        .search-bar.full { width: 100%; }
        .btn-icon {
           background: var(--bg-app);
           border: 1px solid var(--border-color);
           color: var(--text-muted);
           width: 36px;
           border-radius: 6px;
           display: flex; align-items: center; justify-content: center;
           cursor: pointer;
        }

        .template-list {
           flex: 1;
           overflow-y: auto;
           padding: 1rem;
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
        }
        .create-new-btn {
           width: 100%;
           padding: 0.75rem;
           background: rgba(59, 130, 246, 0.1);
           border: 1px dashed var(--primary);
           color: var(--primary);
           border-radius: 6px;
           cursor: pointer;
           margin-bottom: 1rem;
           display: flex; align-items: center; justify-content: center; gap: 0.5rem;
           font-weight: 500;
        }

        .template-item {
           display: flex;
           align-items: center;
           padding: 0.75rem;
           border-radius: 8px;
           cursor: pointer;
           transition: 0.2s;
           border: 1px solid transparent;
        }
        .template-item:hover { background: var(--bg-hover); }
        .template-item.active { 
           background: var(--bg-app); 
           border-color: var(--primary);
           box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        
        .template-icon {
           color: var(--text-muted);
           margin-right: 0.75rem;
        }
        .template-item.active .template-icon { color: var(--primary); }
        
        .template-info { flex: 1; display: flex; flex-direction: column; gap: 0.25rem; }
        .template-name { font-size: 0.9rem; font-weight: 500; }
        .modality-badge {
           font-size: 0.7rem;
           border: 1px solid;
           padding: 1px 6px;
           border-radius: 4px;
           align-self: flex-start;
           font-weight: 600;
        }
        
        .arrow-icon { color: var(--text-muted); opacity: 0; transition: 0.2s; }
        .template-item.active .arrow-icon { opacity: 1; color: var(--primary); }

        /* Right Preview Panel */
        .preview-panel {
           flex: 1;
           background: var(--bg-app);
           display: flex;
           flex-direction: column;
           padding: 2rem;
           overflow-y: auto;
        }
        .preview-header {
           display: flex;
           justify-content: space-between;
           align-items: flex-start;
           margin-bottom: 2rem;
        }
        .preview-title h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .template-type-badge {
           background: var(--bg-panel);
           padding: 4px 10px;
           border-radius: 20px;
           font-size: 0.8rem;
           color: var(--text-muted);
           border: 1px solid var(--border-color);
        }
        .preview-actions { display: flex; gap: 0.75rem; }
        
        .report-paper {
           background: #fff;
           color: #000;
           padding: 3rem;
           box-shadow: 0 4px 20px rgba(0,0,0,0.5);
           border-radius: 4px; /* Paper look */
           max-width: 800px;
           margin: 0 auto;
           min-height: 800px;
           font-family: 'Times New Roman', serif;
        }
        .report-header {
           text-align: center;
           font-weight: 700;
           font-size: 1.5rem;
           text-decoration: underline;
           margin-bottom: 2rem;
        }
        .report-section {
           margin-bottom: 1.5rem;
           display: flex;
           gap: 0.5rem;
        }
        .section-label { font-weight: 700; white-space: nowrap; }
        .section-content { line-height: 1.5; }
        .report-section.impression { margin-top: 2rem; }
        .text-block.bold { font-weight: 700; }
        
        .empty-preview {
           flex: 1;
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           color: var(--text-muted);
           gap: 1rem;
        }
        .btn-danger { color: var(--accent-critical); border-color: var(--accent-critical); }
        .btn-danger:hover { background: var(--accent-critical); color: #fff; }

        /* Dark mode overrides for paper if needed, but paper is usually white */
      `}</style>
        </div>
    );
};

export default ReportTemplates;
