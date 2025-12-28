import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                                D
                            </div>
                            <span className="text-xl font-bold text-white">DeepTek AI</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering radiologists and healthcare professionals with advanced AI diagnostics and streamlined workflow solutions.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com/deeptekAI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all"
                                title="Follow us on Twitter"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a
                                href="https://linkedin.com/company/deeptek-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 transition-all"
                                title="Connect on LinkedIn"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="https://github.com/deeptek-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all"
                                title="View our GitHub"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                            <a
                                href="https://youtube.com/@deeptekAI"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-500/20 hover:text-red-400 transition-all"
                                title="Subscribe on YouTube"
                            >
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
                            <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
                            <li><Link to="/integrations" className="hover:text-blue-400 transition-colors">Integrations</Link></li>
                            <li><Link to="/changelog" className="hover:text-blue-400 transition-colors">Changelog</Link></li>
                            <li><Link to="/request-demo" className="hover:text-blue-400 transition-colors">Request Demo</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                            <li><Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                            <li><Link to="/security" className="hover:text-blue-400 transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} DeepTek AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Mail className="w-3 h-3" />
                        <a href="mailto:hello@deeptek.ai" className="hover:text-blue-400 transition-colors">
                            hello@deeptek.ai
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
