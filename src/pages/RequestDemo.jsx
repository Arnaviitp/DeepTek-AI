import React, { useState } from 'react';
import { Calendar, Users, Building2, Mail, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RequestDemo = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        teamSize: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="py-24 px-6 max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Demo Request Received!</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Thank you for your interest in DeepTek AI. Our team will reach out within 24 hours to schedule your personalized demo.
                </p>
                <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-all">
                    Return to Home
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        );
    }

    return (
        <div className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Request a Demo</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        See how DeepTek AI can transform your radiology workflow. Get a personalized demo from our team.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Benefits */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold">What You'll See</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    icon: Clock,
                                    title: 'AI-Powered Reporting',
                                    desc: 'Watch how our AI generates preliminary reports in seconds, not hours.'
                                },
                                {
                                    icon: Users,
                                    title: 'Workflow Integration',
                                    desc: 'See seamless integration with your existing PACS and RIS systems.'
                                },
                                {
                                    icon: Building2,
                                    title: 'Enterprise Features',
                                    desc: 'Explore analytics, team management, and compliance tools.'
                                },
                                {
                                    icon: Calendar,
                                    title: 'Custom Implementation',
                                    desc: 'Discuss your specific needs and implementation timeline.'
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                        <p className="text-gray-400">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-white/10">
                            <h3 className="font-bold text-lg mb-4">Trusted by Leading Institutions</h3>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-3xl font-bold text-blue-400">500+</div>
                                    <div className="text-sm text-gray-400">Healthcare Facilities</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-purple-400">5M+</div>
                                    <div className="text-sm text-gray-400">Scans Analyzed</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-pink-400">99.9%</div>
                                    <div className="text-sm text-gray-400">Accuracy Rate</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-green-400">40%</div>
                                    <div className="text-sm text-gray-400">Time Saved</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h2 className="text-2xl font-bold mb-6">Schedule Your Demo</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Work Email *</label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Company *</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Job Title</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.jobTitle}
                                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Team Size</label>
                                    <select
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.teamSize}
                                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                                    >
                                        <option value="">Select...</option>
                                        <option value="1-5">1-5 radiologists</option>
                                        <option value="6-20">6-20 radiologists</option>
                                        <option value="21-50">21-50 radiologists</option>
                                        <option value="50+">50+ radiologists</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Date</label>
                                    <input
                                        type="date"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.preferredDate}
                                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Time</label>
                                    <select
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.preferredTime}
                                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                    >
                                        <option value="">Select...</option>
                                        <option value="morning">Morning (9am - 12pm)</option>
                                        <option value="afternoon">Afternoon (12pm - 5pm)</option>
                                        <option value="evening">Evening (5pm - 8pm)</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Additional Information</label>
                                <textarea
                                    rows={3}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
                                    placeholder="Tell us about your specific needs..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Request Demo
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                By submitting, you agree to our Privacy Policy and Terms of Service.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestDemo;
