import React, { useState } from 'react';
import {
    ChevronLeft, Mic, Save, FileText, Share2,
    History, PenTool, Sparkles, Send
} from 'lucide-react';

const ReportingInterface = ({ onBack, study }) => {
    const [reportText, setReportText] = useState(
        `EXAM: ${study?.description || 'CT SCAN'}
    
CLINICAL HISTORY: Headache and dizziness.
    
TECHNIQUE: Axial sections were obtained...
    
FINDINGS:
The brain parenchyma appears normal...
    
IMPRESSION:
1. Normal study.`
    );
    const [isRecording, setIsRecording] = useState(false);

    const toggleRecording = () => {
        setIsRecording(!isRecording);
        // Simulate voice input
        if (!isRecording) {
            setTimeout(() => {
                setReportText(prev => prev + "\n[Voice]: No acute hemorrhage seen.");
                setIsRecording(false);
            }, 2000);
        }
    };

    const handleAutoFill = () => {
        setReportText(prev => prev + "\n\n[AI Auto-Fill]: \n- Ventricles are normal size.\n- Midline is central.");
    };

    return (
        <div className="reporting-container fade-in">
            {/* Header */}
            <header className="reporting-header">
                <button className="back-btn" onClick={onBack}>
                    <ChevronLeft size={20} /> Back to Worklist
                </button>
                <div className="patient-info">
                    <h2>{study?.patientName || 'Patient Name'}</h2>
                    <span className="sub-info">{study?.patientId || 'ID-12345'} | {study?.age || '45'}Y / {study?.gender || 'M'}</span>
                </div>
                <div className="header-actions">
                    <button className="btn"><History size={16} /> History</button>
                    <button className="btn"><Share2 size={16} /> Collaborate</button>
                </div>
            </header>

            <div className="reporting-layout">
                {/* Image Viewer Placeholder */}
                <div className="image-viewer">
                    <div className="viewer-placeholder">
                        <div className="dicom-overlay">
                            <span>Image 1/145</span>
                            <span>WL: 40 WW: 80</span>
                        </div>
                        <div className="ai-overlays">
                            {/* Simulated AI Boxes */}
                            <div className="ai-box" style={{ top: '30%', left: '40%', width: '100px', height: '100px' }}></div>
                        </div>
                        <p style={{ color: 'var(--text-muted)' }}>DICOM Viewer / PACS Integration</p>
                    </div>
                </div>

                {/* Report Editor */}
                <div className="report-editor">
                    <div className="editor-toolbar">
                        <div className="tool-group">
                            <button
                                className={`tool-btn ${isRecording ? 'recording' : ''}`}
                                onClick={toggleRecording}
                                title="Voice Dictation"
                            >
                                <Mic size={18} /> {isRecording ? 'Listening...' : 'Dictate'}
                            </button>
                            <button className="tool-btn" onClick={handleAutoFill} title="AI Auto-Fill">
                                <Sparkles size={18} /> AI Auto-Fill
                            </button>
                        </div>
                        <div className="tool-group">
                            <button className="tool-btn"><FileText size={18} /> Templates</button>
                        </div>
                    </div>

                    <textarea
                        className="report-textarea"
                        value={reportText}
                        onChange={(e) => setReportText(e.target.value)}
                    />

                    <div className="editor-footer">
                        <div className="signature-section">
                            <PenTool size={16} />
                            <span>Digital Signature: Dr. Smith (Verified)</span>
                        </div>
                        <button className="btn btn-primary">
                            <Send size={16} /> Sign & Finalize
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
        .reporting-container {
           display: flex;
           flex-direction: column;
           height: 100%;
           background: var(--bg-app);
        }
        .reporting-header {
           padding: 1rem 2rem;
           border-bottom: 1px solid var(--border-color);
           display: flex;
           justify-content: space-between;
           align-items: center;
           background: var(--bg-panel);
        }
        .back-btn {
           background: none; border: none; color: var(--text-muted); cursor: pointer;
           display: flex; align-items: center; gap: 0.5rem;
           font-size: 1rem;
        }
        .back-btn:hover { color: var(--text-main); }
        
        .patient-info h2 { font-size: 1.25rem; font-weight: 600; margin-bottom: 0.2rem; }
        .sub-info { color: var(--text-muted); font-size: 0.9rem; }
        
        .header-actions { display: flex; gap: 0.5rem; }

        .reporting-layout {
           flex: 1;
           display: flex;
           overflow: hidden;
        }

        .image-viewer {
           flex: 1.5;
           background: #000;
           border-right: 1px solid var(--border-color);
           position: relative;
        }
        .viewer-placeholder {
           width: 100%; height: 100%;
           display: flex; align-items: center; justify-content: center;
           background: radial-gradient(circle, #1a202c 0%, #000 100%);
           color: #fff;
        }
        .dicom-overlay {
           position: absolute; top: 1rem; left: 1rem;
           display: flex; flex-direction: column; font-family: monospace;
           color: var(--primary); font-size: 0.9rem;
        }
        .ai-box {
           position: absolute;
           border: 2px solid var(--accent-critical);
           box-shadow: 0 0 10px var(--accent-critical);
           opacity: 0.7;
        }

        .report-editor {
           flex: 1;
           display: flex;
           flex-direction: column;
           background: var(--bg-panel);
        }

        .editor-toolbar {
           padding: 0.75rem 1rem;
           border-bottom: 1px solid var(--border-color);
           display: flex;
           justify-content: space-between;
        }
        .tool-group { display: flex; gap: 0.5rem; }
        .tool-btn {
           background: var(--bg-app);
           border: 1px solid var(--border-color);
           color: var(--text-main);
           padding: 0.5rem 0.8rem;
           border-radius: 6px;
           cursor: pointer;
           display: flex; align-items: center; gap: 0.5rem;
           font-size: 0.9rem;
        }
        .tool-btn:hover { background: var(--bg-hover); }
        .tool-btn.recording {
           background: rgba(239, 68, 68, 0.1);
           color: var(--accent-critical);
           border-color: var(--accent-critical);
           animation: pulse 1.5s infinite;
        }

        .report-textarea {
           flex: 1;
           background: var(--bg-app); /* Dark editor */
           color: var(--text-main);
           border: none;
           padding: 1.5rem;
           font-family: 'Courier New', monospace;
           font-size: 1rem;
           line-height: 1.6;
           resize: none;
           outline: none;
        }

        .editor-footer {
           padding: 1rem;
           border-top: 1px solid var(--border-color);
           display: flex;
           justify-content: space-between;
           align-items: center;
           background: var(--bg-panel);
        }
        .signature-section {
           display: flex; align-items: center; gap: 0.5rem;
           color: var(--accent-success); font-size: 0.9rem; font-weight: 500;
        }

        @keyframes pulse {
           0% { opacity: 1; }
           50% { opacity: 0.5; }
           100% { opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default ReportingInterface;
