import React from 'react';

const StatusBadge = ({ status, type = 'status' }) => {
    const getStyle = () => {
        if (type === 'ai') {
            switch (status) {
                case 'With AI Detection': return { bg: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', border: 'rgba(59, 130, 246, 0.2)' };
                case 'No AI Detection': return { bg: 'rgba(148, 163, 184, 0.1)', color: '#94a3b8', border: 'rgba(148, 163, 184, 0.2)' };
                case 'FO Detection Only': return { bg: 'rgba(168, 85, 247, 0.1)', color: '#c084fc', border: 'rgba(168, 85, 247, 0.2)' };
                default: return { bg: 'transparent', color: 'inherit' };
            }
        }

        // Study Status
        switch (status) {
            case 'Reported': return { bg: 'rgba(34, 197, 94, 0.1)', color: '#4ade80', border: 'rgba(34, 197, 94, 0.2)' };
            case 'Unreported': return { bg: 'rgba(249, 115, 22, 0.1)', color: '#fb923c', border: 'rgba(249, 115, 22, 0.2)' };
            case 'Critical': return { bg: 'rgba(239, 68, 68, 0.1)', color: '#f87171', border: 'rgba(239, 68, 68, 0.2)' };
            case 'QC Fix': return { bg: 'rgba(234, 179, 8, 0.1)', color: '#facc15', border: 'rgba(234, 179, 8, 0.2)' };
            case 'Saved': return { bg: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: 'rgba(56, 189, 248, 0.2)' };
            default: return { bg: '#2d333b', color: '#8b949e', border: '#444c56' };
        }
    };

    const style = getStyle();

    return (
        <span
            className="badge"
            style={{
                backgroundColor: style.bg,
                color: style.color,
                border: `1px solid ${style.border}`,
                fontSize: '0.75rem',
                whiteSpace: 'nowrap'
            }}
        >
            {status}
        </span>
    );
};

export default StatusBadge;
