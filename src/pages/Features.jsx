import React from 'react';
import {
    Zap, Shield, Activity, Clock, Brain, FileText,
    Globe, Lock, BarChart3, Users, Smartphone, Cloud,
    CheckCircle, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
    const mainFeatures = [
        {
            icon: Brain,
            title: 'AI-Powered Analysis',
            desc: 'Our advanced deep learning models analyze medical images with 99.9% accuracy, detecting abnormalities that might be missed by the human eye.',
            color: 'blue'
        },
        {
            icon: Zap,
            title: 'Lightning Fast Reports',
            desc: 'Generate comprehensive radiology reports in seconds. Our AI pre-fills findings, measurements, and impressions for quick review.',
            color: 'yellow'
        },
        {
            icon: Shield,
            title: 'HIPAA Compliant',
            desc: 'Bank-grade security with end-to-end encryption, secure data storage, and full HIPAA compliance for patient data protection.',
            color: 'green'
        },
        {
            icon: Clock,
            title: 'Priority Worklist',
            desc: 'AI-driven case prioritization automatically flags critical findings and organizes your worklist for maximum efficiency.',
            color: 'purple'
        }
    ];

    const allFeatures = [
        { icon: FileText, title: 'Custom Templates', desc: 'Create and manage report templates tailored to your practice' },
        { icon: Globe, title: 'Multi-Language', desc: 'Support for reports in multiple languages' },
        { icon: Lock, title: 'Role-Based Access', desc: 'Granular permissions for team members' },
        { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track productivity and performance metrics' },
        { icon: Users, title: 'Team Collaboration', desc: 'Real-time collaboration and case discussions' },
        { icon: Smartphone, title: 'Mobile Access', desc: 'Access your worklist from any device' },
        { icon: Cloud, title: 'Cloud Storage', desc: 'Secure cloud storage with unlimited capacity' },
        { icon: Activity, title: 'Integration APIs', desc: 'Seamless integration with PACS, RIS, and EHR systems' }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero */}
            <section className="py-24 px-6 text-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
                <div className="relative max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Powerful Features for Modern Radiology
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Everything you need to streamline your radiology workflow, improve accuracy, and deliver faster results.
                    </p>
                    <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            {/* Main Features */}
            <section className="py-24 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {mainFeatures.map((feature, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                                    ${feature.color === 'blue' ? 'bg-blue-500/10 text-blue-500' : ''}
                                    ${feature.color === 'yellow' ? 'bg-yellow-500/10 text-yellow-500' : ''}
                                    ${feature.color === 'green' ? 'bg-green-500/10 text-green-500' : ''}
                                    ${feature.color === 'purple' ? 'bg-purple-500/10 text-purple-500' : ''}
                                    group-hover:scale-110 transition-transform
                                `}>
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Features Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need</h2>
                        <p className="text-gray-400">A comprehensive suite of tools for your radiology practice</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {allFeatures.map((feature, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                                    <feature.icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className="py-24 px-6 bg-gradient-to-b from-black to-blue-950/20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">DeepTek AI vs Traditional Workflow</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
                            <h3 className="text-xl font-bold mb-6 text-red-400">Traditional Workflow</h3>
                            <ul className="space-y-4">
                                {[
                                    'Manual report writing takes 15-30 minutes per case',
                                    'No automated prioritization of critical findings',
                                    'Limited integration with modern systems',
                                    'Inconsistent report quality',
                                    'High radiologist burnout rates'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400">
                                        <span className="text-red-400">✗</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/20">
                            <h3 className="text-xl font-bold mb-6 text-green-400">With DeepTek AI</h3>
                            <ul className="space-y-4">
                                {[
                                    'AI-generated reports in under 60 seconds',
                                    'Automatic critical finding detection and alerts',
                                    'Seamless PACS, RIS, and EHR integration',
                                    'Standardized, high-quality reports every time',
                                    'Reduced workload, happier radiologists'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to experience the future?</h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Start your free trial today and see how DeepTek AI can transform your practice.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/signup" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all">
                            Start Free Trial
                        </Link>
                        <Link to="/request-demo" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                            Request Demo
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
