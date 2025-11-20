'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navItems = ['Services', 'Projects', 'About', 'Contact'];

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${isScrolled ? 'pt-4' : 'pt-6'}`}
            >
                <div className={`relative flex items-center justify-between w-full max-w-5xl px-6 py-3 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                    ? 'bg-[#0f172a]/90 border-white/10 shadow-2xl'
                    : 'bg-[#0f172a]/60 border-white/5'
                    } backdrop-blur-md border rounded-full`}
                >
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer z-50"
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                            W
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight">Webalchemy</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button (Desktop) */}
                    <button className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5">
                        Book Strategy Call
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <div className="relative w-5 h-4">
                            <span className={`absolute left-0 top-0 w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-2 bg-cyan-400' : ''}`} />
                            <span className={`absolute left-0 top-2 w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                            <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 bottom-1.5 bg-cyan-400' : ''}`} />
                        </div>
                    </button>
                </div>
            </motion.header>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#020617]/90 flex flex-col justify-center items-center md:hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
                            <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px]"></div>
                        </div>

                        <nav className="flex flex-col items-center gap-8 w-full max-w-xs relative z-10">
                            {navItems.map((item, i) => (
                                <motion.a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-bold text-white/80 hover:text-white transition-colors tracking-tight relative group w-full text-center"
                                >
                                    <span className="relative z-10">{item}</span>
                                    <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-full h-3 bg-cyan-500/20 -z-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center blur-md"></span>
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                className="w-full pt-8 border-t border-white/10 mt-4"
                            >
                                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95 transition-transform">
                                    Start Your Project
                                </button>
                            </motion.div>
                        </nav>

                        {/* Decorative tech lines */}
                        <div className="absolute left-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                        <div className="absolute right-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;