'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Process Data ---
const steps = [
    {
        number: '01',
        title: 'Discovery',
        description: 'We start by listening. We learn about your business, your goals, and what makes you unique.',
        color: '#66FCF1', // Cyan
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Strategy',
        description: 'We create a clear plan. We map out exactly how your website or app will work to ensure success.',
        color: '#A855F7', // Purple
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Creation',
        description: 'This is where the magic happens. We design beautiful visuals and write clean, fast code.',
        color: '#FFD700', // Gold
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Launch',
        description: 'We test everything thoroughly. Then, we launch your project to the world, ensuring a smooth start.',
        color: '#10B981', // Emerald
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        number: '05',
        title: 'Growth',
        description: 'We don\'t just disappear. We help you analyze results and keep improving your digital presence.',
        color: '#F43F5E', // Rose
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
];

// --- Single Step Component ---
const ProcessStep = ({ step, index }: { step: typeof steps[0]; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className={`relative flex items-center justify-between mb-24 last:mb-0 w-full ${isEven ? 'flex-row' : 'flex-row-reverse'
                }`}
        >
            {/* Content Side */}
            <div className={`w-[45%] ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
                <div className="mb-2 flex items-center gap-3 justify-end" style={{ flexDirection: isEven ? 'row' : 'row-reverse' }}>
                    <span className="font-mono text-sm tracking-widest opacity-60" style={{ color: step.color }}>PHASE_{step.number}</span>
                    <div className="h-px w-8" style={{ backgroundColor: step.color }}></div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
            </div>

            {/* Center Node (Absolute positioning for perfect alignment) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                {/* Glow effect */}
                <div className="absolute w-16 h-16 rounded-full opacity-20 blur-xl animate-pulse" style={{ backgroundColor: step.color }}></div>

                {/* Hexagon Container */}
                <div className="relative w-12 h-12 bg-[#020617] border-2 flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)]" style={{ borderColor: step.color }}>
                    <div style={{ color: step.color }}>
                        {step.icon}
                    </div>
                </div>
            </div>

            {/* Empty Side for Balance (Desktop) */}
            <div className="w-[45%] hidden md:block"></div>

            {/* Connection Line (Horizontal Beam) */}
            <div
                className={`hidden md:block absolute top-1/2 h-px bg-gradient-to-r from-transparent to-transparent w-[45%] -z-10 opacity-30
          ${isEven ? 'right-1/2 bg-gradient-to-l' : 'left-1/2 bg-gradient-to-r'}
        `}
                style={{
                    backgroundImage: `linear-gradient(to ${isEven ? 'left' : 'right'}, ${step.color}, transparent)`
                }}
            />
        </motion.div>
    );
};

// --- Mobile Version Component (Simpler Stack) ---
const MobileProcessStep = ({ step, index }: { step: typeof steps[0]; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 pb-12 last:pb-0 border-l border-white/10 ml-4"
        >
            <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#020617] border-2 flex items-center justify-center" style={{ borderColor: step.color }}>
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: step.color }}></div>
            </div>

            <div className="mb-2 flex items-center gap-2">
                <span className="text-xs font-mono font-bold" style={{ color: step.color }}>{step.number}</span>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
        </motion.div>
    )
}

// --- Main Component ---
const Process: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="process" className="relative py-32 bg-[#020617] overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-[#020617] to-[#020617] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-6">
                        <span>// EXECUTION_PIPELINE</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Transformation</span> Process
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        How we turn your rough ideas into polished digital gold. A proven, step-by-step system for success.
                    </p>
                </div>

                {/* Desktop View: Center Timeline */}
                <div ref={containerRef} className="relative hidden md:block">
                    {/* Central Line Base */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2"></div>

                    {/* Central Line Active (Fills on Scroll) */}
                    <motion.div
                        style={{ height }}
                        className="absolute left-1/2 top-0 w-px bg-gradient-to-b from-cyan-500 via-purple-500 to-gold-500 -translate-x-1/2 shadow-[0_0_10px_rgba(102,252,241,0.5)]"
                    ></motion.div>

                    <div className="relative z-10">
                        {steps.map((step, index) => (
                            <ProcessStep key={step.number} step={step} index={index} />
                        ))}
                    </div>
                </div>

                {/* Mobile View: Simple Stack */}
                <div className="md:hidden">
                    {steps.map((step, index) => (
                        <MobileProcessStep key={step.number} step={step} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Process;