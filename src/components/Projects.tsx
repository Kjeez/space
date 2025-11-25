'use client';

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

// --- Types ---
interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
}

const projects: Project[] = [
    {
        id: '01',
        title: 'Real Estate Leads',
        category: 'Lead Gen',
        description: 'A high-converting landing page for a Gurgaon luxury property developer that increased site visits by 150%.',
        tags: ['Next.js', 'PPC', 'Lead Forms'],
        image: 'linear-gradient(135deg, #0f172a 0%, #0B1221 100%)',
        link: '#',
    },
    {
        id: '02',
        title: 'E-com Sales Engine',
        category: 'E-commerce',
        description: 'A direct-to-consumer storefront for a Delhi fashion brand, optimized for mobile shopping and fast checkout.',
        tags: ['Shopify', 'CRO', 'Analytics'],
        image: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
        link: '#',
    },
    {
        id: '03',
        title: 'B2B Service Portal',
        category: 'Web App',
        description: 'A professional service platform for a Noida-based consultancy, featuring automated booking and CRM integration.',
        tags: ['React', 'Automations', 'SEO'],
        image: 'linear-gradient(135deg, #064e3b 0%, #020617 100%)',
        link: '#',
    },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            onMouseMove={handleMouseMove}
            className="group relative w-full rounded-3xl border border-white/10 bg-[#0B1221]/60 overflow-hidden backdrop-blur-md hover:border-[#66FCF1]/30 transition-colors duration-500"
        >
            {/* Hover Spotlight - Cyan Tint */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(102, 252, 241, 0.1), 
              transparent 80%
            )
          `,
                }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* --- LEFT: VISUAL --- */}
                <div className="relative h-64 lg:h-auto w-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: project.image }}>
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
                    </div>
                    
                    {/* Floating Window UI */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="relative w-full max-w-[280px] aspect-video rounded-lg border border-white/10 bg-[#020617]/80 backdrop-blur-xl shadow-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="h-6 bg-white/5 border-b border-white/5 flex items-center gap-1.5 px-3">
                                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="p-4 flex items-center justify-center h-full">
                                <span className="font-mono text-xs text-[#66FCF1] opacity-80 tracking-widest">
                                    {project.category.toUpperCase()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT: CONTENT --- */}
                <div className="relative p-8 lg:p-12 flex flex-col justify-between h-full min-h-[340px]">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-6 bg-[#66FCF1]"></div>
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#66FCF1]">
                                {project.category}
                            </span>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#020617] border border-white/10 text-gray-400">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                        <a href={project.link} className="flex items-center gap-3 text-sm font-bold text-white group-hover:gap-5 transition-all duration-300">
                            VIEW CASE STUDY <span className="text-[#66FCF1]">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    return (
        <section id="work" className="relative py-32 bg-[#020617] overflow-hidden">
            {/* Unified Background Elements */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Centered Header (Matching Services/Stats) */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-mono mb-6">
                        <span>// SELECTED_WORKS</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66FCF1] to-blue-400">Deployments</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Engineered for performance. Optimized for conversion. Built for Delhi's market.
                    </p>
                </div>

                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <button className="group px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all flex items-center gap-2 mx-auto">
                        <span className="font-mono text-xs">VIEW_FULL_PORTFOLIO</span>
                        <svg className="w-4 h-4 text-[#66FCF1] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;