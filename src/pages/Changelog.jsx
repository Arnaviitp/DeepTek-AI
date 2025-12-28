import React from 'react';
import { Rocket, Bug, Sparkles, Shield, Zap, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Changelog = () => {
    const releases = [
        {
            version: '2.5.0',
            date: 'December 28, 2024',
            type: 'major',
            title: 'Multi-Modality AI Expansion',
            changes: [
                { type: 'feature', text: 'Added AI support for mammography imaging' },
                { type: 'feature', text: 'New ultrasound measurement tools' },
                { type: 'improvement', text: 'Enhanced CT brain analysis with hemorrhage detection' },
                { type: 'improvement', text: '35% faster report generation performance' },
                { type: 'fix', text: 'Fixed DICOM upload timeout issues for large studies' }
            ]
        },
        {
            version: '2.4.2',
            date: 'December 15, 2024',
            type: 'patch',
            title: 'Performance & Stability',
            changes: [
                { type: 'fix', text: 'Resolved memory leak in image viewer' },
                { type: 'fix', text: 'Fixed template loading issues on slow connections' },
                { type: 'improvement', text: 'Improved worklist filtering performance' }
            ]
        },
        {
            version: '2.4.0',
            date: 'December 1, 2024',
            type: 'minor',
            title: 'Workflow Enhancements',
            changes: [
                { type: 'feature', text: 'Custom report templates with variable support' },
                { type: 'feature', text: 'Batch report signing for increased efficiency' },
                { type: 'feature', text: 'New keyboard shortcuts for power users' },
                { type: 'improvement', text: 'Redesigned settings panel' },
                { type: 'security', text: 'Enhanced session security with token refresh' }
            ]
        },
        {
            version: '2.3.0',
            date: 'November 15, 2024',
            type: 'minor',
            title: 'Analytics Dashboard',
            changes: [
                { type: 'feature', text: 'New analytics dashboard with productivity metrics' },
                { type: 'feature', text: 'Export reports to PDF with custom branding' },
                { type: 'improvement', text: 'Better mobile responsiveness' },
                { type: 'fix', text: 'Fixed timezone issues in scheduling' }
            ]
        },
        {
            version: '2.2.0',
            date: 'October 20, 2024',
            type: 'minor',
            title: 'Collaboration Features',
            changes: [
                { type: 'feature', text: 'Real-time case collaboration with colleagues' },
                { type: 'feature', text: 'In-app messaging and case discussions' },
                { type: 'feature', text: 'Case assignment and delegation' },
                { type: 'improvement', text: 'Improved notification system' }
            ]
        },
        {
            version: '2.1.0',
            date: 'September 10, 2024',
            type: 'minor',
            title: 'Enhanced AI Models',
            changes: [
                { type: 'feature', text: 'New AI model for chest X-ray pathology detection' },
                { type: 'improvement', text: '15% improvement in CT detection accuracy' },
                { type: 'improvement', text: 'Faster DICOM parsing and loading' },
                { type: 'security', text: 'SOC 2 Type II certification achieved' }
            ]
        },
        {
            version: '2.0.0',
            date: 'August 1, 2024',
            type: 'major',
            title: 'Platform Redesign',
            changes: [
                { type: 'feature', text: 'Completely redesigned user interface' },
                { type: 'feature', text: 'Dark mode support' },
                { type: 'feature', text: 'New image viewer with advanced tools' },
                { type: 'feature', text: 'Voice dictation integration' },
                { type: 'improvement', text: 'Performance optimizations throughout' },
                { type: 'fix', text: 'Numerous bug fixes and stability improvements' }
            ]
        }
    ];

    const getTypeIcon = (type) => {
        switch (type) {
            case 'feature': return <Sparkles className="w-4 h-4 text-blue-400" />;
            case 'improvement': return <Zap className="w-4 h-4 text-green-400" />;
            case 'fix': return <Bug className="w-4 h-4 text-orange-400" />;
            case 'security': return <Shield className="w-4 h-4 text-purple-400" />;
            default: return null;
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'feature': return 'bg-blue-500/10 text-blue-400';
            case 'improvement': return 'bg-green-500/10 text-green-400';
            case 'fix': return 'bg-orange-500/10 text-orange-400';
            case 'security': return 'bg-purple-500/10 text-purple-400';
            default: return '';
        }
    };

    const getVersionBadge = (type) => {
        switch (type) {
            case 'major': return 'bg-blue-500 text-white';
            case 'minor': return 'bg-green-500/20 text-green-400 border border-green-500/30';
            case 'patch': return 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
            default: return '';
        }
    };

    return (
        <div className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Rocket className="w-8 h-8 text-blue-400" />
                    </div>
                    <h1 className="text-5xl font-bold mb-4">Changelog</h1>
                    <p className="text-xl text-gray-400">
                        Track all updates, improvements, and new features in DeepTek AI
                    </p>
                </div>

                {/* Release Timeline */}
                <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-green-500 to-gray-500" />

                    <div className="space-y-12">
                        {releases.map((release, i) => (
                            <div key={i} className="relative pl-20">
                                <div className={`absolute left-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getVersionBadge(release.type)}`}>
                                    {release.type === 'major' ? '★' : release.type === 'minor' ? '●' : '○'}
                                </div>

                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${getVersionBadge(release.type)}`}>
                                            v{release.version}
                                        </span>
                                        <span className="flex items-center gap-2 text-gray-400 text-sm">
                                            <Calendar className="w-4 h-4" />
                                            {release.date}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold mb-4">{release.title}</h2>

                                    <ul className="space-y-3">
                                        {release.changes.map((change, j) => (
                                            <li key={j} className="flex items-start gap-3">
                                                <span className={`mt-1 p-1 rounded ${getTypeColor(change.type)}`}>
                                                    {getTypeIcon(change.type)}
                                                </span>
                                                <span className="text-gray-300">{change.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Newsletter CTA */}
                <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-white/10 text-center">
                    <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                    <p className="text-gray-400 mb-6">
                        Get notified about new features and updates. We send updates about once a month.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                        />
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Changelog;
