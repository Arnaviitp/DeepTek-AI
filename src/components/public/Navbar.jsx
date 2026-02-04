import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);
    const dropdownTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setProductsOpen(false);
    }, [location]);

    // Handle body scroll lock for mobile menu
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle dropdown hover with delay
    const handleDropdownEnter = () => {
        if (dropdownTimeoutRef.current) {
            clearTimeout(dropdownTimeoutRef.current);
        }
        setProductsOpen(true);
    };

    const handleDropdownLeave = () => {
        dropdownTimeoutRef.current = setTimeout(() => {
            setProductsOpen(false);
        }, 150);
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Features', path: '/features' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
    ];

    const productLinks = [
        { name: 'Features', path: '/features', desc: 'AI-powered diagnostics' },
        { name: 'Integrations', path: '/integrations', desc: 'PACS, RIS & EHR' },
        { name: 'Security', path: '/security', desc: 'HIPAA compliant' },
        { name: 'Changelog', path: '/changelog', desc: 'Latest updates' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3'
                        : 'bg-transparent py-5'
                    }`}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group" aria-label="DeepTek AI Home">
                        <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
                            <span>D</span>
                            <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all duration-300">
                            DeepTek AI
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${location.pathname === link.path
                                        ? 'text-white bg-white/10'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            ref={dropdownRef}
                            onMouseEnter={handleDropdownEnter}
                            onMouseLeave={handleDropdownLeave}
                        >
                            <button
                                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${productsOpen ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                aria-expanded={productsOpen}
                                aria-haspopup="true"
                            >
                                Products
                                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute top-full left-0 pt-2 transition-all duration-300 ${productsOpen
                                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                                        : 'opacity-0 -translate-y-2 pointer-events-none'
                                    }`}
                            >
                                <div className="bg-gray-950/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 min-w-[240px] shadow-2xl shadow-black/50">
                                    {productLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className={`flex flex-col px-4 py-3 rounded-xl text-sm transition-all duration-200 ${location.pathname === link.path
                                                    ? 'text-blue-400 bg-blue-500/10'
                                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            <span className="font-medium">{link.name}</span>
                                            <span className="text-xs text-gray-500 mt-0.5">{link.desc}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Auth Buttons */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Link
                            to="/login"
                            className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/signup"
                            className="group flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105"
                        >
                            Get Started
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white rounded-xl hover:bg-white/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
                aria-hidden={!isOpen}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-[300px] max-w-[85vw] bg-gray-950 border-l border-white/10 lg:hidden transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                <div className="flex flex-col h-full p-6">
                    {/* Close Button */}
                    <div className="flex justify-end mb-8">
                        <button
                            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                        >
                            <X size={22} />
                        </button>
                    </div>

                    {/* Mobile Nav Links */}
                    <nav className="flex-1 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${location.pathname === link.path
                                        ? 'text-blue-400 bg-blue-500/10'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile Products Submenu */}
                        <div className="pt-4 mt-4 border-t border-white/10">
                            <div className="text-xs text-gray-500 uppercase tracking-wider px-4 mb-3">Products</div>
                            {productLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block px-4 py-3 rounded-xl transition-colors ${location.pathname === link.path
                                            ? 'text-blue-400 bg-blue-500/10'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <span className="font-medium">{link.name}</span>
                                    <span className="block text-xs text-gray-500 mt-0.5">{link.desc}</span>
                                </Link>
                            ))}
                        </div>
                    </nav>

                    {/* Mobile Auth Buttons */}
                    <div className="space-y-3 pt-6 border-t border-white/10">
                        <Link
                            to="/login"
                            className="block w-full text-center px-4 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-colors font-medium"
                        >
                            Log In
                        </Link>
                        <Link
                            to="/signup"
                            className="block w-full text-center px-4 py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/20"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
