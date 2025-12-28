import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Building2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
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
                <h1 className="text-4xl font-bold mb-4">Message Sent!</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-500 transition-all">
                    Return to Home
                </Link>
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
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Email</h3>
                            <p className="text-gray-400 mb-3">Send us an email anytime</p>
                            <a href="mailto:hello@deeptek.ai" className="text-blue-400 hover:underline">hello@deeptek.ai</a>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 mb-4">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Phone</h3>
                            <p className="text-gray-400 mb-3">Mon-Fri from 9am to 6pm PST</p>
                            <a href="tel:+14155550100" className="text-green-400 hover:underline">+1 (415) 555-0100</a>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Office</h3>
                            <p className="text-gray-400 mb-3">Visit our headquarters</p>
                            <address className="text-purple-400 not-italic">
                                123 Innovation Drive<br />
                                San Francisco, CA 94105
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
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
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
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject *</label>
                                    <select
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
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
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                                <textarea
                                    required
                                    rows={6}
                                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 resize-none"
                                    placeholder="How can we help you?"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
