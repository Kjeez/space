'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const services = ["Discovery", "Design", "Development", "Marketing", "AI Automation"];

const Contact: React.FC = () => {
    let toast: any = (props: any) => console.log(props);
    try { const { toast: hookToast } = useToast(); toast = hookToast; } catch (e) { }

    const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [activeTab, setActiveTab] = useState<'quote' | 'call'>('quote');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState('sending');
        // Simulation
        setTimeout(() => { setFormState('success'); setTimeout(() => { setFormState('idle'); setSelectedServices([]); (e.target as HTMLFormElement).reset(); }, 3000); }, 1000);
    };

    return (
        <section id="contact" className="relative py-32 bg-[#020617] overflow-hidden border-t border-white/5">
            {/* Tech Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#66FCF1]/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* --- LEFT COLUMN: CONTENT RICH --- */}
                    <motion.div 
                        className="lg:col-span-5 flex flex-col justify-between h-full"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div>
                            {/* Header Group */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-8">
                                <span className="relative flex h-2 w-2 mr-1">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#66FCF1] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#66FCF1]"></span>
                                </span>
                                <span>// INITIATE_SEQUENCE</span>
                            </div>

                            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                Let's Build <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66FCF1] to-blue-400">Something Real.</span>
                            </h2>

                            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">
                                Stop settling for generic templates. We engineer high-performance digital systems tailored for the Delhi market.
                            </p>

                            {/* Contact Cards (Fills space) */}
                            <div className="space-y-4 mb-12">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B1221]/80 border border-white/5 hover:border-[#66FCF1]/30 transition-colors group">
                                    <div className="w-12 h-12 rounded-lg bg-[#020617] border border-white/10 flex items-center justify-center text-[#66FCF1] group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-[#66FCF1] font-mono tracking-widest uppercase mb-0.5">Email Us</p>
                                        <a href="mailto:contact@webalchemy.co.in" className="text-white font-medium hover:text-[#66FCF1] transition-colors">contact@webalchemy.co.in</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0B1221]/80 border border-white/5 hover:border-[#66FCF1]/30 transition-colors group">
                                    <div className="w-12 h-12 rounded-lg bg-[#020617] border border-white/10 flex items-center justify-center text-[#66FCF1] group-hover:scale-110 transition-transform">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-[#66FCF1] font-mono tracking-widest uppercase mb-0.5">Call / WhatsApp</p>
                                        <a href="tel:+919625429686" className="text-white font-medium hover:text-[#66FCF1] transition-colors">+91 96254 29686</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Social Proof */}
                        <div className="pt-8 border-t border-white/5">
                            <div className="flex items-center gap-4 mb-3">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-gray-800 overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="client" className="w-full h-full object-cover opacity-80" />
                                        </div>
                                    ))}
                                    <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-[#1e293b] flex items-center justify-center text-[10px] font-bold text-white">
                                        100+
                                    </div>
                                </div>
                                <div className="text-sm text-gray-400">
                                    <span className="block text-white font-bold">Trusted by Founders</span>
                                    in Delhi NCR & Beyond
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- RIGHT COLUMN: FORM (Col Span 7) --- */}
                    <motion.div 
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
                            <div className="bg-[#0B1221] rounded-xl p-6 md:p-10 border border-white/5 relative overflow-hidden shadow-2xl">
                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#66FCF1] rounded-tl-lg opacity-60"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#66FCF1] rounded-br-lg opacity-60"></div>

                                {/* Form Tabs */}
                                <div className="flex p-1 bg-[#020617] rounded-lg mb-8 border border-white/10">
                                    <button onClick={() => setActiveTab('quote')} className={`flex-1 py-3 rounded-md text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === 'quote' ? 'bg-[#66FCF1] text-[#020617] shadow-[0_0_15px_rgba(102,252,241,0.2)]' : 'text-gray-400 hover:text-white'}`}>GET A QUOTE</button>
                                    <button onClick={() => setActiveTab('call')} className={`flex-1 py-3 rounded-md text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === 'call' ? 'bg-[#66FCF1] text-[#020617] shadow-[0_0_15px_rgba(102,252,241,0.2)]' : 'text-gray-400 hover:text-white'}`}>BOOK A CALL</button>
                                </div>

                                <AnimatePresence mode='wait'>
                                    {activeTab === 'quote' ? (
                                        <motion.form key="quote" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-mono text-[#66FCF1] tracking-widest opacity-80">FULL_NAME *</label>
                                                    <input type="text" name="name" required className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#66FCF1] focus:ring-1 focus:ring-[#66FCF1]/20 outline-none transition-all placeholder-gray-700" placeholder="Enter name" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-[10px] font-mono text-[#66FCF1] tracking-widest opacity-80">EMAIL_ID *</label>
                                                    <input type="email" name="email" required className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#66FCF1] focus:ring-1 focus:ring-[#66FCF1]/20 outline-none transition-all placeholder-gray-700" placeholder="name@company.com" />
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono text-[#66FCF1] tracking-widest opacity-80">SERVICES_REQUIRED</label>
                                                <div className="flex flex-wrap gap-2">
                                                    {services.map(s => (
                                                        <button key={s} type="button" onClick={() => toggleService(s)} className={`px-4 py-2 rounded-md text-xs font-mono border transition-all duration-300 ${selectedServices.includes(s) ? 'bg-[#66FCF1]/10 border-[#66FCF1] text-[#66FCF1] shadow-[0_0_10px_rgba(102,252,241,0.2)]' : 'bg-[#020617] border-white/10 text-gray-500 hover:text-white hover:border-white/30'}`}>
                                                            [{selectedServices.includes(s) ? 'x' : ' '}] {s}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-[10px] font-mono text-[#66FCF1] tracking-widest opacity-80">PROJECT_BRIEF</label>
                                                <textarea name="message" rows={4} className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:border-[#66FCF1] focus:ring-1 focus:ring-[#66FCF1]/20 outline-none transition-all resize-none placeholder-gray-700" placeholder="Describe your goals..." />
                                            </div>

                                            <button type="submit" disabled={formState !== 'idle'} className={`w-full py-4 rounded-lg font-bold text-sm tracking-widest uppercase transition-all duration-300 ${formState === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/50' : 'bg-[#66FCF1] text-[#020617] hover:bg-white hover:shadow-[0_0_20px_rgba(102,252,241,0.4)]'}`}>
                                                {formState === 'idle' ? 'Initiate Sequence' : formState === 'sending' ? 'Transmitting...' : 'Message Received'}
                                            </button>
                                        </motion.form>
                                    ) : (
                                        <motion.div key="call" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="h-[500px] bg-white rounded-xl overflow-hidden">
                                            <iframe src="https://calendly.com/yourtrickster-kg/30min" width="100%" height="100%" frameBorder="0" title="Schedule Call"></iframe>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;