'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('sending');
        // Simulate network request
        setTimeout(() => setFormState('success'), 2000);
    };

    return (
        <section id="contact" className="relative py-32 bg-[#020617] overflow-hidden border-t border-white/5">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Context & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                            CHANNEL_OPEN
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                            Initialize <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66FCF1] to-blue-500">
                                Transmission
                            </span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                            Ready to transmute your vision into a digital reality? Our frequency is open.
                            Send us your mission parameters, and we will respond with a strategic directive.
                        </p>

                        {/* Contact Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-sm">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#66FCF1]/30 transition-colors group">
                                <div className="text-gray-500 mb-2 group-hover:text-[#66FCF1] transition-colors">COMM_LINK</div>
                                <div className="text-white">hello@webalchemy.agency</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FFD700]/30 transition-colors group">
                                <div className="text-gray-500 mb-2 group-hover:text-[#FFD700] transition-colors">HQ_COORDINATES</div>
                                <div className="text-white">Sector 7G, Digital District</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: The Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <form onSubmit={handleSubmit} className="relative p-8 md:p-10 rounded-3xl bg-[#0B1221]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
                            {/* Decorative Corner Accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#66FCF1]/50 rounded-tl-xl"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#66FCF1]/50 rounded-br-xl"></div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 ml-1">CODENAME // NAME</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#66FCF1] focus:shadow-[0_0_15px_rgba(102,252,241,0.15)] transition-all duration-300"
                                            placeholder="Enter identity..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 ml-1">FREQUENCY // EMAIL</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#66FCF1] focus:shadow-[0_0_15px_rgba(102,252,241,0.15)] transition-all duration-300"
                                            placeholder="name@domain.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 ml-1">MISSION_TYPE // SUBJECT</label>
                                    <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#66FCF1] focus:shadow-[0_0_15px_rgba(102,252,241,0.15)] transition-all duration-300 appearance-none">
                                        <option>New Project</option>
                                        <option>System Upgrade</option>
                                        <option>AI Integration</option>
                                        <option>Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 ml-1">DATA_PACKET // MESSAGE</label>
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#66FCF1] focus:shadow-[0_0_15px_rgba(102,252,241,0.15)] transition-all duration-300 resize-none"
                                        placeholder="Describe your mission parameters..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={formState !== 'idle'}
                                    className={`w-full py-4 rounded-lg font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative
                      ${formState === 'success'
                                            ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                            : 'bg-[#66FCF1] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(102,252,241,0.4)]'
                                        }
                    `}
                                >
                                    {formState === 'idle' && (
                                        <>
                                            <span>TRANSMIT_DATA</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                        </>
                                    )}
                                    {formState === 'sending' && (
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-black rounded-full animate-bounce delay-100"></div>
                                            <div className="w-2 h-2 bg-black rounded-full animate-bounce delay-200"></div>
                                        </div>
                                    )}
                                    {formState === 'success' && (
                                        <>
                                            <span>TRANSMISSION_RECEIVED</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
