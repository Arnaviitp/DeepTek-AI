import React from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                <div className="relative max-w-5xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-blue-400 font-medium animate-fade-in-up">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        New: Advanced Radiology Reporting 2.0
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 leading-tight tracking-tight">
                        The Future of <br />
                        <span className="text-blue-500">AI Diagnostics</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Accelerate your workflow with the world's most advanced AI-powered radiology platform.
                        Detailed reporting, instant analysis, and seamless integration.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
                        <Link to="/signup" className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 group">
                            Start Free Trial
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/request-demo" className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                            Request Demo
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/5 mt-16 text-center">
                        {[
                            { label: 'Active Users', value: '10k+' },
                            { label: 'Scans Processed', value: '5M+' },
                            { label: 'Accuracy', value: '99.9%' },
                            { label: 'Uptime', value: '99.99%' },
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 px-6 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose DeepTek AI?</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Our platform is built for speed, accuracy, and reliability.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: 'Lightning Fast',
                                desc: 'Generate comprehensive reports in seconds, not ours. Our AI engine processes scans with unprecedented speed.'
                            },
                            {
                                icon: Shield,
                                title: 'Bank-Grade Security',
                                desc: 'HIPAA compliant and end-to-end encrypted. Your patient data is secure with our enterprise-grade protection.'
                            },
                            {
                                icon: Activity,
                                title: '99.9% Accuracy',
                                desc: 'Trained on millions of validated cases, our models deliver market-leading diagnostic precision.'
                            }
                        ].map((feature, i) => (
                            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
                                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-blue-900 via-blue-950 to-black border border-white/10 p-12 md:p-24 text-center">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to transform your workflow?</h2>
                        <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">
                            Join thousands of radiologists who trust DeepTek AI for their daily reporting.
                        </p>
                        <Link to="/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all">
                            Get Started Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
