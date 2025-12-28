import React, { useState } from 'react';
import { Download, CheckCircle, Monitor, FileText, Play, ExternalLink, HelpCircle, RefreshCw } from 'lucide-react';

const MSWordAddIn = () => {
    const [downloading, setDownloading] = useState(false);

    const handleDownload = () => {
        setDownloading(true);
        setTimeout(() => {
            setDownloading(false);
            alert('Download started! The installer will open once the download is complete.');
        }, 2000);
    };

    const features = [
        'Insert AI-generated radiology findings directly into Word',
        'Access your template library within Word',
        'Automatic formatting with your institutional headers',
        'One-click report signing and finalization',
        'Sync reports back to DeepTek AI platform'
    ];

    const requirements = [
        { item: 'Microsoft Word', version: '2016 or later (Windows/Mac)' },
        { item: 'Microsoft 365', version: 'Supported (web and desktop)' },
        { item: 'Operating System', version: 'Windows 10+ or macOS 10.14+' },
        { item: 'Internet', version: 'Broadband connection required' }
    ];

    const steps = [
        { number: 1, title: 'Download the Add-In', desc: 'Click the download button above to get the installer' },
        { number: 2, title: 'Run the Installer', desc: 'Open the downloaded file and follow the installation wizard' },
        { number: 3, title: 'Restart Word', desc: 'Close and reopen Microsoft Word to activate the add-in' },
        { number: 4, title: 'Sign In', desc: 'Use your DeepTek AI credentials to connect your account' }
    ];

    return (
        <div className="p-8 max-w-5xl mx-auto h-full overflow-y-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">MS-Word Add-In</h1>
                <p className="text-gray-400">Integrate DeepTek AI directly into Microsoft Word for seamless report creation</p>
            </div>

            {/* Download Section */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-white/10 rounded-2xl p-8 mb-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">DeepTek AI for Word</h2>
                        <p className="text-gray-300 mb-6">
                            Write radiology reports faster with our Microsoft Word add-in. Access AI-powered suggestions, templates, and one-click report generation without leaving Word.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={handleDownload}
                                disabled={downloading}
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors disabled:opacity-50"
                            >
                                {downloading ? (
                                    <>
                                        <RefreshCw className="w-5 h-5 animate-spin" />
                                        Downloading...
                                    </>
                                ) : (
                                    <>
                                        <Download className="w-5 h-5" />
                                        Download for Windows
                                    </>
                                )}
                            </button>
                            <button
                                onClick={handleDownload}
                                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 font-bold rounded-xl transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Download for Mac
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">
                            Version 2.1.0 · Released Dec 15, 2024 · 45 MB
                        </p>
                    </div>
                    <div className="w-full md:w-80 h-48 bg-[#1E293B] rounded-xl flex items-center justify-center border border-gray-700">
                        <div className="text-center">
                            <Monitor className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                            <p className="text-gray-400 text-sm">Works with Word 2016+</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features & Requirements */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-6">Features</h3>
                    <ul className="space-y-4">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-6">System Requirements</h3>
                    <ul className="space-y-4">
                        {requirements.map((req, i) => (
                            <li key={i} className="flex justify-between items-center py-2 border-b border-gray-700/50 last:border-0">
                                <span className="text-gray-400">{req.item}</span>
                                <span className="text-white font-medium">{req.version}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Installation Steps */}
            <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-6">Installation Guide</h3>
                <div className="grid md:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <div key={step.number} className="text-center">
                            <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                                {step.number}
                            </div>
                            <h4 className="font-bold mb-2">{step.title}</h4>
                            <p className="text-sm text-gray-400">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tutorial Video */}
            <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-6">Video Tutorial</h3>
                <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center border border-gray-700 cursor-pointer hover:border-blue-500/50 transition-colors group">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                            <Play className="w-10 h-10 text-blue-400 ml-1" />
                        </div>
                        <p className="text-gray-400">Watch: Getting Started with DeepTek AI for Word</p>
                        <p className="text-sm text-gray-500 mt-2">5 minutes</p>
                    </div>
                </div>
            </div>

            {/* Help Links */}
            <div className="grid md:grid-cols-3 gap-6">
                <a href="#" className="p-6 bg-[#1E293B] border border-gray-700 rounded-xl hover:border-blue-500/50 transition-colors flex items-center gap-4">
                    <FileText className="w-8 h-8 text-blue-400" />
                    <div>
                        <h4 className="font-bold mb-1">Documentation</h4>
                        <p className="text-sm text-gray-400">Read the full user guide</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                </a>
                <a href="#" className="p-6 bg-[#1E293B] border border-gray-700 rounded-xl hover:border-blue-500/50 transition-colors flex items-center gap-4">
                    <HelpCircle className="w-8 h-8 text-green-400" />
                    <div>
                        <h4 className="font-bold mb-1">FAQ</h4>
                        <p className="text-sm text-gray-400">Common questions answered</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                </a>
                <a href="#" className="p-6 bg-[#1E293B] border border-gray-700 rounded-xl hover:border-blue-500/50 transition-colors flex items-center gap-4">
                    <RefreshCw className="w-8 h-8 text-purple-400" />
                    <div>
                        <h4 className="font-bold mb-1">Release Notes</h4>
                        <p className="text-sm text-gray-400">See what's new in v2.1.0</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
                </a>
            </div>
        </div>
    );
};

export default MSWordAddIn;
