'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    {
        label: 'CLIENTS_NCR',
        value: '100+',
        description: 'Trusted partners across Delhi, Noida & Gurgaon.',
        color: '#66FCF1', // Cyan
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        label: 'LEADS_GENERATED',
        value: '50k+',
        description: 'Total leads captured for our clients.',
        color: '#FFD700', // Gold
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
    {
        label: 'RETENTION_RATE',
        value: '98%',
        description: 'Clients who stay with us long-term.',
        color: '#A855F7', // Purple
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        label: 'SUCCESS_RATE',
        value: '100%',
        description: 'Projects delivered on time and on budget.',
        color: '#3B82F6', // Blue
        icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

const Stats: React.FC = () => {
    return (
        <section className="relative py-12 bg-[#020617] border-b border-white/5 overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header - Compact */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-[10px] font-mono mb-2">
                        <span>// SYSTEM_METRICS</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Impact by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Numbers</span>
                    </h2>
                </div>

                {/* Stats Grid - Compact */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div
                                className="relative h-full bg-[#0B1221]/60 border border-white/5 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-opacity-50 hover:bg-[#0B1221]/80"
                                style={{ borderColor: `${stat.color}33` }}
                            >
                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"></div>

                                <div className="flex justify-between items-start mb-3">
                                    <div className="p-2 rounded-md bg-[#020617] border border-white/10 text-white group-hover:scale-110 transition-transform duration-300 shadow-sm" style={{ color: stat.color }}>
                                        {stat.icon}
                                    </div>
                                    <div className="h-px w-6 bg-white/10 mt-2.5"></div>
                                </div>

                                <div className="mb-1">
                                    <h3 className="text-3xl font-bold text-white tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {stat.value}
                                    </h3>
                                </div>

                                <div>
                                    <p className="text-[10px] font-mono tracking-widest uppercase mb-1" style={{ color: stat.color }}>
                                        {stat.label}
                                    </p>
                                    <p className="text-xs text-gray-400 leading-snug">
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;