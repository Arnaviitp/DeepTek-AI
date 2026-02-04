import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail, Youtube, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Product',
            links: [
                { name: 'Features', path: '/features' },
                { name: 'Pricing', path: '/pricing' },
                { name: 'Integrations', path: '/integrations' },
                { name: 'Changelog', path: '/changelog' },
                { name: 'Request Demo', path: '/request-demo' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', path: '/about' },
                { name: 'Careers', path: '/careers', badge: 'Hiring' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Security', path: '/security' },
            ],
        },
    ];

    const socialLinks = [
        { icon: Twitter, href: 'https://twitter.com/deeptekAI', label: 'Twitter', hoverColor: 'hover:bg-blue-500/20 hover:text-blue-400' },
        { icon: Linkedin, href: 'https://linkedin.com/company/deeptek-ai', label: 'LinkedIn', hoverColor: 'hover:bg-blue-600/20 hover:text-blue-400' },
        { icon: Github, href: 'https://github.com/deeptek-ai', label: 'GitHub', hoverColor: 'hover:bg-gray-500/20 hover:text-white' },
        { icon: Youtube, href: 'https://youtube.com/@deeptekAI', label: 'YouTube', hoverColor: 'hover:bg-red-500/20 hover:text-red-400' },
    ];

    return (
        <footer className="relative bg-black border-t border-white/5" role="contentinfo">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/10 to-transparent pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-2 space-y-6">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                                D
                            </div>
                            <span className="text-xl font-bold text-white">DeepTek AI</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Empowering radiologists and healthcare professionals with advanced AI diagnostics and streamlined workflow solutions.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <a
                                href="mailto:hello@deeptek.ai"
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                hello@deeptek.ai
                            </a>
                            <a
                                href="tel:+1-888-DEEPTEK"
                                className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                1-888-DEEPTEK
                            </a>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <MapPin className="w-4 h-4" />
                                Ranchi, Jharkhand
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.hoverColor}`}
                                    aria-label={`Follow us on ${social.label}`}
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.path}
                                            className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                            {link.badge && (
                                                <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase bg-blue-500/20 text-blue-400 rounded">
                                                    {link.badge}
                                                </span>
                                            )}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter Section */}
                <div className="py-8 border-y border-white/5 mb-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div>
                            <h4 className="text-white font-semibold mb-1">Stay updated</h4>
                            <p className="text-sm text-gray-400">Get the latest news and product updates.</p>
                        </div>
                        <form className="flex gap-2 w-full md:w-auto" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 md:w-64 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                                aria-label="Email for newsletter"
                            />
                            <button
                                type="submit"
                                className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {currentYear} DeepTek AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-xs text-gray-500">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            All systems operational
                        </span>
                        <a href="https://status.deeptek.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                            Status
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
