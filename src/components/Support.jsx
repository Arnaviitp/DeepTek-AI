import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const Support = () => {
    const [formData, setFormData] = useState({
        subject: '',
        message: '',
        priority: 'medium'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to submit ticket would go here
        alert('Support ticket submitted successfully!');
        setFormData({ subject: '', message: '', priority: 'medium' });
    };

    return (
        <div className="p-8 max-w-5xl mx-auto h-full overflow-y-auto">
            <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
            <p className="text-gray-400 mb-8">We are here to help. Contact us or submit a ticket below.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[#1E293B] border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-4">
                        <Mail size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Email Us</h3>
                    <p className="text-gray-400 text-sm mb-4">For general inquiries and support</p>
                    <a href="mailto:support@deeptek.ai" className="text-blue-400 font-medium hover:underline">support@deeptek.ai</a>
                </div>

                <div className="bg-[#1E293B] border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                        <Phone size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Call Us</h3>
                    <p className="text-gray-400 text-sm mb-4">Mon-Fri from 9am to 6pm</p>
                    <a href="tel:+15550000000" className="text-green-400 font-medium hover:underline">+1 (555) 000-0000</a>
                </div>

                <div className="bg-[#1E293B] border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500 mb-4">
                        <MessageSquare size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Live Chat</h3>
                    <p className="text-gray-400 text-sm mb-4">Chat instantly with support</p>
                    <button className="text-purple-400 font-medium hover:underline">Start Chat</button>
                </div>
            </div>

            <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Submit a Support Ticket</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Subject</label>
                            <input
                                type="text"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                placeholder="Brief description of the issue"
                                required
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Priority</label>
                            <select
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                                value={formData.priority}
                                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                            >
                                <option value="low">Low - General Question</option>
                                <option value="medium">Medium - Minor Issue</option>
                                <option value="high">High - System Error</option>
                                <option value="critical">Critical - System Down</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Message</label>
                        <textarea
                            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white h-32 focus:outline-none focus:border-blue-500 resize-none"
                            placeholder="Describe your issue in detail..."
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <Send size={18} />
                        Submit Ticket
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Support;
