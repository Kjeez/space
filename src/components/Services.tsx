'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: 'Websites',
        description: 'We build fast, beautiful websites that look great on phones and computers. They are the perfect home for your business online.',
        color: '#66FCF1', // Cyan
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Content & AI',
        description: 'We use smart AI tools to write great articles and create chat bots that can talk to your customers 24/7.',
        color: '#A855F7', // Purple
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        title: 'Mobile Apps',
        description: 'We build apps for iPhones and Androids that are easy to use and help your customers connect with you anywhere.',
        color: '#3B82F6', // Blue
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Marketing & SEO',
        description: 'We help people find you on Google and run ads on social media to bring more paying customers to your door.',
        color: '#F43F5E', // Rose
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
        ),
    },
    {
        title: 'Branding',
        description: 'We design logos and pick colors that make your business look professional and memorable to everyone who sees it.',
        color: '#F59E0B', // Amber
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
    {
        title: 'Growth Strategy',
        description: 'We look at the numbers to see what is working and help you make smart decisions to grow your business faster.',
        color: '#10B981', // Emerald
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-32 bg-[#020617] overflow-hidden">
            {/* Tech Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
                <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-6">
                        <span>// CAPABILITY_MATRIX</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66FCF1] to-blue-400">Capabilities</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        We don't just build websites. We provide a full range of digital services to help you launch, market, and grow your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            <div className="relative h-full bg-[#0B1221]/80 border border-white/10 rounded-2xl p-8 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-opacity-50 group-hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                                style={{ borderColor: `${service.color}33` }} // 33 is ~20% opacity hex
                            >
                                {/* Corner Accents */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Icon Container */}
                                <div className="mb-6 relative">
                                    <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-[#020617] border border-white/10 relative z-10 group-hover:scale-110 transition-transform duration-300">
                                        <div style={{ color: service.color }}>
                                            {service.icon}
                                        </div>
                                    </div>
                                    {/* Icon Glow Background */}
                                    <div className="absolute inset-0 bg-current blur-xl opacity-20 rounded-full transform scale-75 group-hover:scale-125 transition-transform duration-300" style={{ color: service.color }}></div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Bottom Link */}
                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity" style={{ color: service.color }}>
                                    <span>Initialize</span>
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}