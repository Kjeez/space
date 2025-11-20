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
                    <div className="md:col-span-3">
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
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Transmuting complex digital challenges into golden user experiences.
                        </p>
                    </div>

                    {/* FOLLOW US Column */}
                    <div className="md:col-span-2 md:col-start-5">
                        <h4 className="text-xs font-mono text-[#66FCF1] mb-6 tracking-widest uppercase">Follow Us</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                                { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                                { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4.48 4.48 0 0116 11.37zm1.5-4.87h.01' }, // Simplified rect not ideal for path, using generic camera-ish shape
                                { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                                { name: 'WhatsApp', icon: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-3 group">
                                        <svg className="w-4 h-4 fill-current group-hover:text-[#66FCF1] transition-colors" viewBox="0 0 24 24">
                                            <path d={item.icon} />
                                            {/* Note: Instagram usually requires rect/circle, simplified for single path here or assume generic social icon */}
                                            {item.name === 'Instagram' && <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none" />}
                                        </svg>
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* PARTNERS Column */}
                    <div className="md:col-span-3">
                        <h4 className="text-xs font-mono text-[#66FCF1] mb-6 tracking-widest uppercase">Partners</h4>
                        <div className="space-y-6">
                            {/* Shopify */}
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                                <svg className="w-6 h-6 group-hover:text-[#96bf48]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.6 8.4L16.3 1.6c-.2-.3-.6-.3-.8 0l-3 4.6-3.5-6.4c-.2-.3-.6-.3-.8 0L2.9 10.3c-.2.3-.1.7.2.8l9.7 5.7c.2.1.5.1.7 0l9.7-5.7c.3-.2.4-.6.2-.8l-2.8-1.9z" />
                                </svg>
                                <span className="font-bold tracking-tight">shopify <span className="font-normal text-gray-500 group-hover:text-gray-300">partners</span></span>
                            </div>

                            {/* Meta */}
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                                <svg className="w-6 h-6 group-hover:text-[#0081fb]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                                <div className="flex flex-col leading-none">
                                    <span className="font-bold text-sm">Meta Business</span>
                                    <span className="text-xs text-gray-500 group-hover:text-gray-300">Partners</span>
                                </div>
                            </div>

                            {/* Google */}
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                                <svg className="w-6 h-6 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                                </svg>
                                <div className="flex flex-col leading-none">
                                    <span className="font-bold text-sm">Google</span>
                                    <span className="text-xs text-gray-500 group-hover:text-gray-300">Partner</span>
                                </div>
                            </div>

                            {/* Amazon (Added as requested) */}
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                                <svg className="w-6 h-6 group-hover:text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.5 13.3c.2.2.1.7-.1 1-1.5 2.1-4.1 3-7.1 2.4-2.2-.4-3.8-1.7-4.2-1.9-.3-.1-.3-.4 0-.6.1-.1.4-.1.6 0 1.1.6 2.7 1.3 4.5 1.3 2.3 0 4.3-.8 5.4-2.2.1-.2.5-.2.9 0zM18.8 8.8c-.4-.5-1-1.4-2.7-1.4-2.3 0-3.2 1.7-3.2 1.7-.2.3.1.5.3.3.1-.1 1.3-1.2 2.8-1.2.9 0 1.5.5 1.5 1.3v.2c-.7-.4-2.5-.9-4.5.3-1.6.9-1.7 2.7-1.7 2.9 0 1.7 1.6 2.7 3 2.7 1.3 0 2.2-.6 2.6-1.1v.6c0 .3.2.5.5.5h1.2c.3 0 .5-.2.5-.5V10c0-2.6-2-4.1-4.7-4.1-2.5 0-4.4 1.5-4.4 1.5-.3.2-.6.1-.7-.1-.2-.3-.1-.6.1-.8.2-.2 2.2-1.9 5.2-1.9 3.4 0 5.6 2.1 5.6 5.3v5c0 .3.2.5.5.5h.8c.3 0 .5-.2.5-.5V9.4c0-.2-.2-.4-.6-.6zm-4.7 5.5c0 .8-.8 1.5-1.8 1.5-1.1 0-1.7-.8-1.7-1.7 0-.8.6-1.5 1.5-1.8.8-.3 1.6-.1 2 .1v1.9z" />
                                </svg>
                                <div className="flex flex-col leading-none">
                                    <span className="font-bold text-sm">Amazon</span>
                                    <span className="text-xs text-gray-500 group-hover:text-gray-300">Partner Network</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div className="md:col-span-3">
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
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;