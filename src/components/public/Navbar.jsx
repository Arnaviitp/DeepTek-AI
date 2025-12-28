import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Careers', path: '/careers' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
                        D
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">DeepTek AI</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors duration-300 ${location.pathname === link.path ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                        Log In
                    </Link>
                    <Link to="/signup" className="group flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-all duration-300">
                        Get Started
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-lg font-medium ${location.pathname === link.path ? 'text-blue-400' : 'text-gray-400'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="h-px bg-white/10 my-2" />
                    <Link to="/login" className="text-gray-300 block">Log In</Link>
                    <Link to="/signup" className="bg-white text-black text-center py-3 rounded-xl font-bold block">Get Started</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
