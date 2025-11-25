'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-[#020617] pt-24 pb-12 overflow-hidden border-t border-white/5">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#66FCF1]/20 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* --- 1. BRAND & SOCIALS (Col Span 3) --- */}
                    <div className="md:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-6"
                        >
                            {/* Header Style Animated Logo */}
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/20">
                                W
                            </div>
                            <span className="text-white font-bold text-lg tracking-tight">Webalchemy</span>
                        </motion.div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                            Transmuting complex digital challenges into golden user experiences. Engineering revenue for the modern web.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a href="https://www.linkedin.com/company/webalchemy-in" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#66FCF1] hover:border-[#66FCF1]/30 transition-all group" aria-label="LinkedIn">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                            <a href="https://www.instagram.com/webalchemy.in/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#66FCF1] hover:border-[#66FCF1]/30 transition-all group" aria-label="Instagram">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61575864416205" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#66FCF1] hover:border-[#66FCF1]/30 transition-all group" aria-label="Facebook">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* --- 2. EXPLORE (LINKS) (Col Span 2) --- */}
                    <div className="md:col-span-2">
                        <h4 className="text-xs font-mono text-[#66FCF1] mb-6 tracking-widest opacity-80">EXPLORE</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-[#66FCF1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Capabilities
                                </a>
                            </li>
                            <li>
                                <a href="#process" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-[#66FCF1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Process
                                </a>
                            </li>
                            <li>
                                <a href="#work" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-[#66FCF1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Work
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                                    <span className="w-1 h-1 bg-[#66FCF1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* --- 3. ECOSYSTEM (PARTNERS) (Col Span 3) --- */}
                    <div className="md:col-span-3">
                        <h4 className="text-xs font-mono text-[#66FCF1] mb-6 tracking-widest opacity-80">ECOSYSTEM</h4>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                                <svg className="w-6 h-6 group-hover:text-[#96bf48]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.6 8.4L16.3 1.6c-.2-.3-.6-.3-.8 0l-3 4.6-3.5-6.4c-.2-.3-.6-.3-.8 0L2.9 10.3c-.2.3-.1.7.2.8l9.7 5.7c.2.1.5.1.7 0l9.7-5.7c.3-.2.4-.6.2-.8l-2.8-1.9z" />
                                </svg>
                                <span className="font-bold tracking-tight text-sm">Shopify <span className="font-normal text-gray-500 group-hover:text-gray-300">Partners</span></span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                                <svg className="w-6 h-6 group-hover:text-[#0081fb]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                                <div className="flex flex-col leading-none">
                                    <span className="font-bold text-sm">Meta Business</span>
                                    <span className="text-[10px] text-gray-500 group-hover:text-gray-300">PARTNER</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                                <svg className="w-6 h-6 group-hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                                </svg>
                                <div className="flex flex-col leading-none">
                                    <span className="font-bold text-sm">Google</span>
                                    <span className="text-[10px] text-gray-500 group-hover:text-gray-300">CERTIFIED</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                                <svg className="w-6 h-6 group-hover:text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.5 13.3c.2.2.1.7-.1 1-1.5 2.1-4.1 3-7.1 2.4-2.2-.4-3.8-1.7-4.2-1.9-.3-.1-.3-.4 0-.6.1-.1.4-.1.6 0 1.1.6 2.7 1.3 4.5 1.3 2.3 0 4.3-.8 5.4-2.2.1-.2.5-.2.9 0zM18.8 8.8c-.4-.5-1-1.4-2.7-1.4-2.3 0-3.2 1.7-3.2 1.7-.2.3.1.5.3.3.1-.1 1.3-1.2 2.8-1.2.9 0 1.5.5 1.5 1.3v.2c-.7-.4-2.5-.9-4.5.3-1.6.9-1.7 2.7-1.7 2.9 0 1.7 1.6 2.7 3 2.7 1.3 0 2.2-.6 2.6-1.1v.6c0 .3.2.5.5.5h1.2c.3 0 .5-.2.5-.5V10c0-2.6-2-4.1-4.7-4.1-2.5 0-4.4 1.5-4.4 1.5-.3.2-.6.1-.7-.1-.2-.3-.1-.6.1-.8.2-.2 2.2-1.9 5.2-1.9 3.4 0 5.6 2.1 5.6 5.3v5c0 .3.2.5.5.5h.8c.3 0 .5-.2.5-.5V9.4c0-.2-.2-.4-.6-.6zm-4.7 5.5c0 .8-.8 1.5-1.8 1.5-1.1 0-1.7-.8-1.7-1.7 0-.8.6-1.5 1.5-1.8.8-.3 1.6-.1 2 .1v1.9z" />
                                </svg>
                                <div className="flex flex-col leading-none">
                                    <span className="font-bold text-sm">Amazon</span>
                                    <span className="text-[10px] text-gray-500 group-hover:text-gray-300">NETWORK</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- 4. NEWSLETTER & CONTACT INFO (Col Span 4) --- */}
                    <div className="md:col-span-4">
                        <h4 className="text-xs font-mono text-[#66FCF1] mb-6 tracking-widest opacity-80">UPDATES</h4>
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                            Strategies for growth, delivered to your inbox.
                        </p>
                        <form className="flex flex-col gap-3 mb-8">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter email address..."
                                    className="w-full bg-[#0B1221] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#66FCF1] focus:ring-1 focus:ring-[#66FCF1]/20 transition-all text-sm"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#66FCF1] rounded-full animate-pulse"></div>
                            </div>
                            <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-lg text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 group">
                                Subscribe
                                <svg className="w-3 h-3 text-[#66FCF1] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>

                        {/* Contact Details Compact */}
                        <div className="space-y-2 pt-6 border-t border-white/5">
                            <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group cursor-default">
                                <svg className="w-4 h-4 text-[#66FCF1] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Based in New Delhi</span>
                            </div>
                            <a href="mailto:contact@webalchemy.co.in" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                                <svg className="w-4 h-4 text-[#66FCF1] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                contact@webalchemy.co.in
                            </a>
                            <a href="tel:+919625429686" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm group">
                                <svg className="w-4 h-4 text-[#66FCF1] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                +91 96254 29686
                            </a>
                        </div>
                    </div>

                </div>

                {/* --- BOTTOM BAR --- */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-gray-600 text-xs font-mono tracking-wide">
                        © 2025 WEBALCHEMY. ALL SYSTEMS OPERATIONAL.
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/5 border border-green-500/10">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] font-mono text-green-500 font-bold uppercase tracking-widest">Systems Online</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;