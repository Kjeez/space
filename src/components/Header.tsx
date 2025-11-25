'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Sub-Menu Data ---
const serviceColumns = [
    {
        title: "AI Solutions",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        color: "bg-black",
        accent: "text-[#66FCF1]",
        items: ["AI Workflow Automation", "Voice Agents", "Chatbots", "Predictive Analytics"]
    },
    {
        title: "Design",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        color: "bg-[#FFD700]",
        accent: "text-[#FFD700]",
        items: ["Brand Identity", "UI/UX Design", "Web Design", "Mobile App UI"]
    },
    {
        title: "Development",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        color: "bg-[#3B82F6]",
        accent: "text-[#3B82F6]",
        items: ["Web Development", "Mobile Apps", "SaaS Platforms", "Blockchain"]
    },
    {
        title: "Growth",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        color: "bg-[#A855F7]",
        accent: "text-[#A855F7]",
        items: ["SEO & Content", "Performance Marketing", "Social Media", "Data Analytics"]
    }
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Hover State Management
    const [isServicesHovered, setIsServicesHovered] = useState(false);
    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Interaction Handlers with Delay
    const handleMouseEnter = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setIsServicesHovered(true);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setIsServicesHovered(false);
        }, 200); // 200ms delay to allow mouse transition
    };

    const navItems = ['Results', 'Services', 'Process', 'Contact'];

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
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                            W
                        </div>
                        <span className="text-white font-bold text-lg tracking-tight">Webalchemy</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isServices = item === 'Services';
                            return (
                                <div
                                    key={item}
                                    className="relative h-full flex items-center"
                                    onMouseEnter={isServices ? handleMouseEnter : undefined}
                                    onMouseLeave={isServices ? handleMouseLeave : undefined}
                                >
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group py-4"
                                    >
                                        {item}
                                        <span className="absolute bottom-2 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
                                    </a>

                                    {/* Invisible Bridge for Hover Continuity */}
                                    {isServices && (
                                        <div className="absolute top-full left-0 w-full h-8 bg-transparent"></div>
                                    )}
                                </div>
                            );
                        })}
                    </nav>

                    {/* CTA Button */}
                    <button className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-0.5">
                        Book Strategy Call
                    </button>

                    {/* Mobile Toggle */}
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

            {/* --- DESKTOP MEGA MENU (FIXED CENTER POSITION) --- */}
            <AnimatePresence>
                {isServicesHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        // Fixed positioning relative to viewport to ensure it's dead center
                        className="fixed top-28 left-1/2 z-40 w-[95vw] max-w-[1000px] p-3 rounded-3xl bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden hidden md:block"
                        style={{ x: '-50%' }} // Center horizontally
                    >
                        <div className="grid grid-cols-4 gap-3">
                            {serviceColumns.map((col, idx) => (
                                <div key={idx} className="p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group/card h-full">
                                    {/* Icon Header */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${col.color} shadow-lg text-white`}>
                                            {col.icon}
                                        </div>
                                        <h3 className={`font-bold text-lg leading-tight ${col.accent}`}>
                                            {col.title}
                                        </h3>
                                    </div>

                                    {/* List */}
                                    <ul className="space-y-2.5">
                                        {col.items.map((subItem) => (
                                            <li key={subItem}>
                                                <a href="#" className="block text-sm font-medium text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 flex items-center gap-2">
                                                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-cyan-400 transition-colors"></span>
                                                    {subItem}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Bottom Line */}
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 opacity-50"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Navigation Overlay (Unchanged) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#020617]/95 flex flex-col md:hidden overflow-y-auto pt-24"
                    >
                        {/* Mobile menu content same as before... */}
                        <div className="flex flex-col w-full max-w-md mx-auto px-6 relative z-10">
                            <nav className="flex flex-col gap-6 mb-8">
                                {navItems.map((item, i) => (
                                    <div key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-3xl font-bold text-white block mb-4"
                                        >
                                            {item}
                                        </a>
                                    </div>
                                ))}
                            </nav>
                            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg">
                                Book Strategy Call
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;