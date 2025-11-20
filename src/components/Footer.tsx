'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#66FCF1]/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[80px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-6"
                        >
                            {/* Hexagon Icon SVG */}
                            <svg className="w-8 h-8 text-[#FFD700]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span className="font-mono text-xl font-bold tracking-tighter text-white">
                                WEB<span className="text-[#45A29E]">ALCHEMY</span>
                            </span>
                        </motion.div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            We create websites that help businesses grow. We mix art, code, and AI to deliver amazing results.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map((social, i) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-[#66FCF1] transition-all border border-white/5 hover:border-[#66FCF1]/30">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-4 h-4 bg-current rounded-sm opacity-50"></div> {/* Placeholder icon shape */}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-2 md:col-start-6">
                        <h4 className="text-xs font-mono text-[#66FCF1] mb-6 tracking-widest uppercase">Menu</h4>
                        <ul className="space-y-4 text-sm">
                            {['Home', 'Agency', 'Services', 'Artifacts'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-2 h-px bg-[#66FCF1] transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-xs font-mono text-[#66FCF1] mb-6 tracking-widest uppercase">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="md:col-span-4">
                        <h4 className="text-xs font-mono text-[#66FCF1] mb-6 tracking-widest uppercase">Newsletter</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            Subscribe for the latest updates.
                        </p>
                        <form className="flex flex-col gap-3">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter email address..."
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#66FCF1] transition-colors text-sm font-mono"
                                />
                                <div className="absolute right-2 top-2 bottom-2 w-1 bg-[#66FCF1] animate-pulse opacity-50"></div>
                            </div>
                            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 group">
                                Subscribe
                                <span className="text-[#66FCF1] group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-500 text-xs font-mono">
                        © 2025 WEB ALCHEMY. ALL SYSTEMS NOMINAL.
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] font-mono text-green-500 font-bold uppercase tracking-wider">Online</span>
                        </div>
                        <div className="text-gray-600 text-xs font-mono">
                            V.3.0.1
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;