'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
    "Discovery", "Design", "Development", "Marketing", "AI Automation"
];

const Contact: React.FC = () => {
    const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
    const [activeTab, setActiveTab] = useState<'quote' | 'call'>('quote');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (service: string) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter(s => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column: Updated Design based on your image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="sticky top-32"
                    >
                        {/* Start A Project Badge */}
                        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                            Start A Project
                        </div>

                        {/* Main Headline */}
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Tell us more about <br />
                            your idea
                        </h2>

                        <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
                            Let us know your goals, challenges, and vision, and we'll craft tailored strategies to achieve success. Share your ideas, and together, we'll create something extraordinary.
                        </p>

                        {/* Trusted Clients Section */}
                        <div className="mb-12">
                            <h3 className="text-white font-bold text-lg mb-5">Our Trusted Clients</h3>
                            <div className="flex items-center -space-x-4">
                                {/* Avatar Placeholders */}
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="w-14 h-14 rounded-full border-4 border-[#020617] overflow-hidden bg-gray-800 relative">
                                        <img
                                            src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                            alt="Client"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="w-14 h-14 rounded-full border-4 border-[#020617] bg-white flex items-center justify-center text-black font-bold text-sm z-10">
                                    1.5K
                                </div>
                            </div>
                        </div>

                        {/* Verified by Google Section */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-2 text-white font-medium text-lg">
                                <span>Verified by</span>
                                {/* Google Logo */}
                                <svg className="w-20 h-auto relative top-[1px]" viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M137.015 38.6237C136.257 44.6961 132.341 49.7571 126.985 52.2449V38.6237H137.015Z" fill="#4285F4" />
                                    <path d="M126.985 52.2449C123.562 53.8342 119.684 54.4004 115.825 53.7754C109.389 52.733 104.078 48.0619 102.253 41.7436L111.384 37.955C112.201 40.3585 114.219 42.2209 116.665 42.944C119.11 43.6671 121.722 43.1714 123.741 41.6331L126.985 52.2449Z" fill="#34A853" />
                                    <path d="M102.253 41.7436C100.891 37.0236 101.421 31.8517 103.657 27.5423L112.036 33.1598C111.301 34.5775 111.082 36.2522 111.384 37.955L102.253 41.7436Z" fill="#FBBC05" />
                                    <path d="M103.657 27.5423C106.663 21.7509 112.964 18.2441 119.469 18.9569C123.37 19.3844 126.932 21.1934 129.524 24.0042L136.37 17.1583C132.06 12.4801 126.136 9.46729 119.656 8.7564C108.848 7.57159 98.3832 13.3965 93.3906 22.9958L103.657 27.5423Z" fill="#EA4335" />
                                    <path d="M164.737 37.5098V38.8779H163.963C163.343 37.8695 162.039 37.2949 160.632 37.2949C157.542 37.2949 155.086 39.8893 155.086 43.2552C155.086 46.621 157.542 49.2154 160.632 49.2154C162.039 49.2154 163.343 48.6409 163.963 47.6324H164.737V48.8441C164.737 50.7575 163.715 51.8127 160.756 51.8127C158.423 51.8127 157.184 50.2531 156.961 49.3889L154.491 50.4167C155.049 52.0231 157.307 54.2891 160.756 54.2891C165.245 54.2891 167.478 51.6393 167.478 48.4355V37.5098H164.737ZM161.351 46.8773C159.752 46.8773 157.81 45.5313 157.81 43.2552C157.81 40.9914 159.74 39.6331 161.351 39.6331C162.937 39.6331 164.886 41.0038 164.886 43.2552C164.886 45.5189 162.925 46.8773 161.351 46.8773ZM173.912 51.2926H173.491C171.928 51.2926 171.048 50.3769 171.048 48.6336V39.9427H169.027V37.5098H171.048V34.6617L173.751 33.8692V37.5098H177.095V39.9427H173.751V48.2744C173.751 48.7698 173.825 48.9307 174.061 48.9307H177.095V51.2926H173.912ZM146.103 43.2552C146.103 41.0162 147.851 39.6331 150.117 39.6331C152.396 39.6331 154.13 40.9914 154.13 43.2552C154.13 45.5065 152.396 46.8773 150.117 46.8773C147.851 46.8773 146.103 45.5065 146.103 43.2552ZM156.855 43.2552C156.855 39.757 154.106 37.2949 150.117 37.2949C146.14 37.2949 143.379 39.757 143.379 43.2552C143.379 46.7411 146.14 49.2154 150.117 49.2154C154.106 49.2154 156.855 46.7411 156.855 43.2552ZM183.236 43.2552C183.236 41.0409 184.784 39.6331 186.89 39.6331C188.722 39.6331 190.121 40.7437 190.418 42.4131H192.97C192.61 39.373 190.097 37.2949 186.89 37.2949C183.36 37.2949 180.511 39.7817 180.511 43.2552C180.511 46.7163 183.335 49.2154 186.914 49.2154C190.022 49.2154 192.535 47.3084 193.006 44.3944H190.443C190.022 45.8557 188.66 46.8773 186.914 46.8773C184.846 46.8773 183.236 45.4817 183.236 43.2552Z" fill="white" />
                                </svg>
                            </div>
                            <div className="flex items-center gap-1 text-[#FFB400]">
                                {[1, 2, 3, 4, 5].map(star => (
                                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                                ))}
                                <span className="text-white font-bold text-lg ml-2">4.5</span>
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
                        {/* Form Container with increased size */}
                        <div className="relative p-7 md:p-9 rounded-2xl bg-[#0B1221]/80 border border-white/10 backdrop-blur-xl shadow-2xl max-w-xl ml-auto">
                            {/* Decorative Corner Accents */}
                            <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-[#66FCF1]/50 rounded-tl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-[#66FCF1]/50 rounded-br-lg"></div>

                            {/* TABS */}
                            <div className="flex p-1 bg-black/40 rounded-xl mb-7 border border-white/5">
                                <button
                                    onClick={() => setActiveTab('quote')}
                                    className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'quote' ? 'bg-[#66FCF1] text-black shadow-[0_0_15px_rgba(102,252,241,0.3)]' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Request A Quote
                                </button>
                                <button
                                    onClick={() => setActiveTab('call')}
                                    className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${activeTab === 'call' ? 'bg-[#66FCF1] text-black shadow-[0_0_15px_rgba(102,252,241,0.3)]' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Book A Call
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Row 1: Name & Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 ml-1 tracking-wider">FULL NAME *</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-[#66FCF1] focus:shadow-[0_0_15px_rgba(102,252,241,0.15)] transition-all duration-300"
                                            placeholder="Enter name..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 ml-1 tracking-wider">EMAIL ID *</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-[#66FCF1] focus:shadow-[0_0_15px_rgba(102,252,241,0.15)] transition-all duration-300"
                                            placeholder="name@domain.com"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Phone & Budget */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 ml-1 tracking-wider">PHONE NO.</label>
                                        <div className="flex">
                                            <div className="flex items-center justify-center bg-black/40 border border-white/10 border-r-0 rounded-l-lg px-3 text-gray-400">
                                                <span className="text-lg">🇮🇳</span>
                                                <span className="ml-2 text-sm text-white">+91</span>
                                            </div>
                                            <input
                                                type="tel"
                                                className="w-full bg-black/40 border border-white/10 rounded-r-lg px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-[#66FCF1] focus:shadow-[0_0_15px_rgba(102,252,241,0.15)] transition-all duration-300 border-l-0"
                                                placeholder="000 000 0000"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-mono text-gray-500 ml-1 tracking-wider">BUDGET *</label>
                                        <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-base focus:outline-none focus:border-[#66FCF1] focus:shadow-[0_0_15px_rgba(102,252,241,0.15)] transition-all duration-300 appearance-none cursor-pointer">
                                            <option className="text-black">Select Range</option>
                                            <option className="text-black">$1k - $5k</option>
                                            <option className="text-black">$5k - $10k</option>
                                            <option className="text-black">$10k - $50k</option>
                                            <option className="text-black">$50k+</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3: Service Chips */}
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 ml-1 tracking-wider">HOW CAN WE ASSIST YOU? *</label>
                                    <div className="flex flex-wrap gap-3">
                                        {services.map((service) => {
                                            const isSelected = selectedServices.includes(service);
                                            return (
                                                <button
                                                    key={service}
                                                    type="button"
                                                    onClick={() => toggleService(service)}
                                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${isSelected
                                                            ? 'bg-[#66FCF1] border-[#66FCF1] text-black shadow-[0_0_15px_rgba(102,252,241,0.4)]'
                                                            : 'bg-transparent border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
                                                        }`}
                                                >
                                                    {service} {isSelected && '✓'}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </div>

                                {/* Row 4: Message */}
                                <div className="space-y-2">
                                    <label className="text-xs font-mono text-gray-500 ml-1 tracking-wider">PROJECT DETAILS *</label>
                                    <textarea
                                        rows={4}
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white text-base placeholder-gray-600 focus:outline-none focus:border-[#66FCF1] focus:shadow-[0_0_15px_rgba(102,252,241,0.15)] transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-3">
                                    <button
                                        type="submit"
                                        disabled={formState !== 'idle'}
                                        className={`w-full py-4 rounded-lg font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden relative text-base
                        ${formState === 'success'
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                                : 'bg-[#66FCF1] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(102,252,241,0.4)]'
                                            }
                        `}
                                    >
                                        {formState === 'idle' && (
                                            <>
                                                <span>Send Message</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                            </>
                                        )}
                                        {formState === 'sending' && (
                                            <div className="flex items-center gap-2 px-4">
                                                <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-black rounded-full animate-bounce delay-100"></div>
                                                <div className="w-2 h-2 bg-black rounded-full animate-bounce delay-200"></div>
                                            </div>
                                        )}
                                        {formState === 'success' && (
                                            <>
                                                <span>SENT</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;