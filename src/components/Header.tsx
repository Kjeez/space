'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            // pointer-events-none on wrapper ensures the fixed header doesn't block clicks on the sides
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
            <div className="pointer-events-auto flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-[#0f172a]/80 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-6 h-6 bg-blue-500 rounded-md flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/20">
                        W
                    </div>
                    <span className="text-white font-semibold text-lg tracking-tight">Webalchemy</span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {['Services', 'Projects', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-sm text-gray-300 hover:text-white transition-colors relative group"
                        >
                            {item}
                            {/* Hover underline effect */}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-5 py-2 rounded-full transition-all shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] hover:-translate-y-0.5">
                    Start Project
                </button>
            </div>
        </motion.header>
    );
};

export default Header;