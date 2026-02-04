import React from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, Activity, Play, Star, Users, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const stats = [
        { label: 'Active Users', value: '10k+', icon: Users },
        { label: 'Scans Processed', value: '5M+', icon: Globe },
        { label: 'Accuracy', value: '99.9%', icon: Award },
        { label: 'Uptime', value: '99.99%', icon: Activity },
    ];

    const features = [
        {
            icon: Zap,
            title: 'Lightning Fast',
            desc: 'Generate comprehensive reports in seconds, not hours. Our AI engine processes scans with unprecedented speed.',
            gradient: 'from-yellow-500 to-orange-500',
        },
        {
            icon: Shield,
            title: 'Bank-Grade Security',
            desc: 'HIPAA compliant and end-to-end encrypted. Your patient data is secure with our enterprise-grade protection.',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            icon: Activity,
            title: '99.9% Accuracy',
            desc: 'Trained on millions of validated cases, our models deliver market-leading diagnostic precision.',
            gradient: 'from-blue-500 to-cyan-500',
        },
    ];

    const testimonials = [
        {
            quote: "DeepTek AI has transformed our radiology department. Reports that took 30 minutes now take 30 seconds.",
            author: "Dr. Sarah Chen",
            role: "Chief Radiologist, Metro Hospital",
            rating: 5,
        },
        {
            quote: "The accuracy is remarkable. It catches subtle findings that could easily be missed in a busy workflow.",
            author: "Dr. Michael Torres",
            role: "Diagnostic Imaging Director",
            rating: 5,
        },
        {
            quote: "Seamless PACS integration and excellent support. Best investment we've made for our practice.",
            author: "Dr. Emily Watson",
            role: "Private Practice Owner",
            rating: 5,
        },
    ];

    const trustedBy = [
        'Stanford Health', 'Mayo Clinic', 'Cleveland Clinic', 'Johns Hopkins', 'Mass General'
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center px-6">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />

                {/* Floating orbs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

                <div className="relative max-w-5xl mx-auto text-center space-y-8">
                    {/* Announcement Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm text-blue-400 font-medium animate-fade-in-up backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        New: Advanced Radiology Reporting 2.0
                        <ArrowRight className="w-4 h-4" />
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
                            The Future of
                        </span>
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
                            AI Diagnostics
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Accelerate your workflow with the world's most advanced AI-powered radiology platform.
                        Detailed reporting, instant analysis, and seamless integration.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link
                            to="/signup"
                            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
                        >
                            <span>Start Free Trial</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/request-demo"
                            className="group px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
                        >
                            <Play className="w-5 h-5" />
                            <span>Watch Demo</span>
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="pt-12">
                        <p className="text-gray-500 text-sm mb-6">Trusted by leading healthcare institutions</p>
                        <div className="flex flex-wrap justify-center gap-8 opacity-50">
                            {trustedBy.map((name, i) => (
                                <span key={i} className="text-gray-400 font-medium text-sm tracking-wider">
                                    {name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-16 border-t border-white/5 mt-16">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10"
                            >
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <stat.icon className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 md:py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 md:mb-24">
                        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            Why Choose Us
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                            Why Choose DeepTek AI?
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Our platform is built for speed, accuracy, and reliability —
                            everything you need to deliver exceptional patient care.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                        {features.map((feature, i) => (
                            <div
                                key={i}
                                className="group relative p-8 md:p-10 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2"
                            >
                                {/* Glow effect */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`} />

                                <div className={`relative w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
                            Testimonials
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Loved by Radiologists
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">
                            See what healthcare professionals are saying about DeepTek AI.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>
                                <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div>
                                    <div className="font-semibold text-white">{testimonial.author}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-32 px-6">
                <div className="max-w-5xl mx-auto relative rounded-[2rem] md:rounded-[3rem] overflow-hidden">
                    {/* Background with multiple layers */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700" />
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

                    {/* Decorative circles */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl" />

                    <div className="relative p-10 md:p-16 lg:p-24 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm">
                            <CheckCircle className="w-4 h-4" />
                            No credit card required
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Ready to transform
                            <br />
                            your workflow?
                        </h2>
                        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                            Join thousands of radiologists who trust DeepTek AI for their daily reporting.
                            Start your free trial today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/signup"
                                className="group inline-flex items-center gap-2 px-10 py-5 bg-white text-blue-700 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 hover:scale-105"
                            >
                                Get Started Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                to="/pricing"
                                className="text-white/80 hover:text-white font-medium transition-colors"
                            >
                                View Pricing →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
