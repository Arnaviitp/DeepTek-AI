import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Building2, CheckCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '../components/Toast';
import { contactStorage, validate } from '../utils/storage';

const Contact = () => {
    const toast = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
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
            newErrors.email = 'Please enter a valid email';
        }

        if (!validate.required(formData.subject)) {
            newErrors.subject = 'Please select a topic';
        }

        if (!validate.required(formData.message)) {
            newErrors.message = 'Message is required';
        } else if (!validate.minLength(formData.message, 10)) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            toast.error('Please fix the errors in the form');
            return;
        }

        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Save to localStorage
        contactStorage.add(formData);

        setLoading(false);
        setSubmitted(true);
        toast.success('Message sent successfully! We\'ll get back to you soon.');
    };

    if (submitted) {
        return (
            <div className="py-24 px-6 max-w-3xl mx-auto text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h1 className="text-4xl font-bold mb-4">Message Sent!</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-all">
                        Return to Home
                    </Link>
                    <button
                        onClick={() => {
                            setSubmitted(false);
                            setFormData({ name: '', email: '', company: '', subject: '', message: '' });
                        }}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have a question or want to learn more? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Email</h3>
                            <p className="text-gray-400 mb-3">Send us an email anytime</p>
                            <a href="mailto:hello@deeptek.ai" className="text-blue-400 hover:underline">hello@deeptek.ai</a>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-4">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Phone</h3>
                            <p className="text-gray-400 mb-3">Mon-Fri from 9am to 6pm IST</p>
                            <a href="tel:+919876543210" className="text-green-400 hover:underline">+91 98765 43210</a>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Office</h3>
                            <p className="text-gray-400 mb-3">Visit our headquarters</p>
                            <address className="text-purple-400 not-italic">
                                Ranchi, Jharkhand
                            </address>
                        </div>

                        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-white/10">
                            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/request-demo" className="text-blue-400 hover:underline flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" />
                                        Request a Demo
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pricing" className="text-blue-400 hover:underline flex items-center gap-2">
                                        <Building2 className="w-4 h-4" />
                                        View Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/careers" className="text-blue-400 hover:underline flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        Join Our Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2 p-8 rounded-2xl bg-white/5 border border-white/10">
                        <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        className={`w-full bg-black/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors ${errors.name ? 'border-red-500' : 'border-white/10'}`}
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                                    <input
                                        type="email"
                                        className={`w-full bg-black/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        placeholder="Your Company"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject *</label>
                                    <select
                                        className={`w-full bg-black/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors ${errors.subject ? 'border-red-500' : 'border-white/10'}`}
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    >
                                        <option value="">Select a topic...</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="sales">Sales Question</option>
                                        <option value="support">Technical Support</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="press">Press & Media</option>
                                    </select>
                                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                                <textarea
                                    rows={6}
                                    className={`w-full bg-black/50 border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none transition-colors ${errors.message ? 'border-red-500' : 'border-white/10'}`}
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
