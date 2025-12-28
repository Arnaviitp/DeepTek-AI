import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Send, X, Minimize2, Bot, User } from 'lucide-react';

const Support = () => {
    const [formData, setFormData] = useState({
        subject: '',
        message: '',
        priority: 'medium'
    });
    const [submitted, setSubmitted] = useState(false);
    const [chatOpen, setChatOpen] = useState(false);
    const [chatMessages, setChatMessages] = useState([
        { from: 'bot', text: 'Hello! Welcome to DeepTek AI Support. How can I help you today?' }
    ]);
    const [chatInput, setChatInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ subject: '', message: '', priority: 'medium' });
    };

    const handleChatSend = () => {
        if (!chatInput.trim()) return;

        const userMessage = chatInput;
        setChatMessages(prev => [...prev, { from: 'user', text: userMessage }]);
        setChatInput('');

        // Simulate bot response
        setTimeout(() => {
            let botResponse = "Thank you for your message. Our team will get back to you shortly.";

            if (userMessage.toLowerCase().includes('report') || userMessage.toLowerCase().includes('template')) {
                botResponse = "For report or template issues, please check the FAQ section or describe your specific problem. A support agent will assist you soon.";
            } else if (userMessage.toLowerCase().includes('billing') || userMessage.toLowerCase().includes('payment')) {
                botResponse = "For billing inquiries, please visit the Billing section in your dashboard or contact billing@deeptek.ai directly.";
            } else if (userMessage.toLowerCase().includes('password') || userMessage.toLowerCase().includes('login')) {
                botResponse = "For password or login issues, please use the 'Forgot Password' link on the login page, or contact support@deeptek.ai.";
            } else if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
                botResponse = "Hello! I'm here to help. What would you like assistance with today?";
            }

            setChatMessages(prev => [...prev, { from: 'bot', text: botResponse }]);
        }, 1000);
    };

    return (
        <div className="p-8 max-w-5xl mx-auto h-full overflow-y-auto relative">
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
                    <a href="tel:+14155550100" className="text-green-400 font-medium hover:underline">+1 (415) 555-0100</a>
                </div>

                <div className="bg-[#1E293B] border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-500 mb-4">
                        <MessageSquare size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Live Chat</h3>
                    <p className="text-gray-400 text-sm mb-4">Chat instantly with support</p>
                    <button
                        onClick={() => setChatOpen(true)}
                        className="text-purple-400 font-medium hover:underline"
                    >
                        Start Chat
                    </button>
                </div>
            </div>

            <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6">Submit a Support Ticket</h2>

                {submitted && (
                    <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 flex items-center gap-3">
                        <Send size={20} />
                        Support ticket submitted successfully! We'll get back to you within 24 hours.
                    </div>
                )}

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

            {/* Live Chat Widget */}
            {chatOpen && (
                <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-[#1E293B] border border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50">
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Bot size={24} className="text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Support Chat</h3>
                                <span className="text-xs text-white/70 flex items-center gap-1">
                                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                    Online
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setChatOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <Minimize2 size={18} className="text-white" />
                            </button>
                            <button
                                onClick={() => setChatOpen(false)}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={18} className="text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        {chatMessages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.from === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-md'
                                        : 'bg-gray-700 text-white rounded-bl-md'
                                    }`}>
                                    <div className="flex items-start gap-2">
                                        {msg.from === 'bot' && <Bot size={16} className="flex-shrink-0 mt-0.5" />}
                                        <span className="text-sm">{msg.text}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="p-4 border-t border-gray-700">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                className="flex-1 bg-black/50 border border-gray-700 rounded-full px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
                                placeholder="Type a message..."
                                value={chatInput}
                                onChange={(e) => setChatInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleChatSend()}
                            />
                            <button
                                onClick={handleChatSend}
                                className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                            >
                                <Send size={18} className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Chat Toggle Button (when closed) */}
            {!chatOpen && (
                <button
                    onClick={() => setChatOpen(true)}
                    className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-105 transition-all z-50"
                >
                    <MessageSquare size={24} className="text-white" />
                </button>
            )}
        </div>
    );
};

export default Support;
