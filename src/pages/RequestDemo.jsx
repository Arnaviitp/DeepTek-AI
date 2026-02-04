import React, { useState } from 'react';
import { Calendar, Users, Building2, Clock, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/Toast';
import { demoStorage, validate } from '../utils/storage';

const RequestDemo = () => {
    const toast = useToast();
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
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!validate.required(formData.name)) {
            newErrors.name = 'Name is required';
        }

        if (!validate.required(formData.email)) {
            newErrors.email = 'Email is required';
        } else if (!validate.email(formData.email)) {
            newErrors.email = 'Please enter a valid work email';
        }

        if (!validate.required(formData.company)) {
            newErrors.company = 'Company name is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fill in all required fields');
            return;
        }

        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Save to localStorage
        demoStorage.add(formData);

        setLoading(false);
        setSubmitted(true);
        toast.success('Demo request submitted! Our team will contact you soon.');
    };

    if (submitted) {
        return (
            <div className="py-24 px-6 max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Demo Request Received!</h1>
                <p className="text-xl text-gray-400 mb-4">
                    Thank you for your interest in DeepTek AI.
                </p>
                <p className="text-gray-400 mb-8">
                    Our team will reach out to <span className="text-blue-400">{formData.email}</span> within 24 hours to schedule your personalized demo.
                </p>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8 text-left max-w-md mx-auto">
                    <h3 className="font-semibold mb-4 text-center">What happens next?</h3>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                            <span>You'll receive a confirmation email shortly</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                            <span>Our team will call you to confirm the demo time</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                            <span>Get a personalized demo tailored to your needs</span>
                        </li>
                    </ul>
                </div>
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
                                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
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
                                        className={`w-full bg-black/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Dr. John Smith"
                                    />
                                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Work Email *</label>
                                    <input
                                        type="email"
                                        className={`w-full bg-black/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@hospital.com"
                                    />
                                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Company/Hospital *</label>
                                    <input
                                        type="text"
                                        className={`w-full bg-black/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors ${errors.company ? 'border-red-500' : 'border-white/10'}`}
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        placeholder="City Hospital"
                                    />
                                    {errors.company && <p className="text-red-400 text-sm mt-1">{errors.company}</p>}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Job Title</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.jobTitle}
                                        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                        placeholder="Chief Radiologist"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Team Size</label>
                                    <select
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
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
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.preferredDate}
                                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Time (IST)</label>
                                    <select
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
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
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none transition-colors"
                                    placeholder="Tell us about your specific needs..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Calendar className="w-5 h-5" />
                                        Request Demo
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-gray-500 text-center">
                                By submitting, you agree to our{' '}
                                <Link to="/privacy" className="text-blue-400 hover:underline">Privacy Policy</Link>
                                {' '}and{' '}
                                <Link to="/terms" className="text-blue-400 hover:underline">Terms of Service</Link>.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestDemo;
