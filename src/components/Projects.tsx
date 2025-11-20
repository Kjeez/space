'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'framer-motion';

// --- Types ---
interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string; // Using CSS gradients/colors for demo, can replace with URLs
    link: string;
    color: string;
}

const projects: Project[] = [
    {
        id: '01',
        title: 'NEURAL_NEXUS',
        category: 'AI Platform',
        description: 'A decentralized neural network visualizer handling 1M+ nodes in real-time.',
        tags: ['React', 'Three.js', 'WebGL'],
        image: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        link: '#',
        color: '#66FCF1', // Cyan
    },
    {
        id: '02',
        title: 'ORBITAL_FINANCE',
        category: 'Fintech Dashboard',
        description: 'High-frequency trading interface with sub-millisecond data updates.',
        tags: ['Next.js', 'WebSocket', 'D3.js'],
        image: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
        link: '#',
        color: '#FFD700', // Gold
    },
    {
        id: '03',
        title: 'AETHER_COMMERCE',
        category: 'E-commerce',
        description: 'Immersive 3D shopping experience with AR product preview capabilities.',
        tags: ['Shopify', 'React Fiber', 'ARKit'],
        image: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        link: '#',
        color: '#45A29E', // Slate/Teal
    },
];

// --- Card Component ---
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
            className="group relative w-full rounded-3xl border border-white/10 bg-gray-900/50 overflow-hidden backdrop-blur-sm"
        >
            {/* Hover Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
                }}
            />

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
                {/* Image Side */}
                <div className="relative h-64 lg:h-full w-full overflow-hidden bg-black/50 border-b lg:border-b-0 lg:border-r border-white/5">
                    {/* Abstract Tech Background for Image */}
                    <div
                        className="absolute inset-0 opacity-80 transition-transform duration-700 group-hover:scale-110"
                        style={{ background: project.image }}
                    >
                        {/* Geometric Patterns (Decorative) */}
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
                            backgroundSize: '24px 24px'
                        }}></div>

                        {/* Center Icon */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                            <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                        </div>
                    </div>

                    {/* Overlay Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-mono text-gray-300">
                        ID: {project.id}
                    </div>
                </div>

                {/* Details Side */}
                <div className="relative p-8 lg:p-12 flex flex-col justify-between h-full min-h-[300px]">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-8 bg-gray-700"></div>
                            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{project.category}</span>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                            {project.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-gray-400 group-hover:border-white/20 group-hover:text-gray-200 transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                        <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-4 transition-all duration-300">
                            VIEW CASE STUDY <span style={{ color: project.color }}>→</span>
                        </button>

                        {/* Project visual indicator color */}
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.color, boxShadow: `0 0 10px ${project.color}` }}></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// --- Main Projects Section ---
const Projects: React.FC = () => {
    return (
        <section className="relative py-32 bg-[#020617] overflow-hidden">
            {/* Decorative Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-[#66FCF1] rounded-full animate-pulse"></div>
                            <span className="text-[#66FCF1] font-mono text-sm tracking-widest">DEPLOYED_ARTIFACTS</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                            Featured <span className="text-gray-600">Works</span>
                        </h2>
                    </div>

                    <p className="text-gray-400 max-w-md text-right hidden md:block leading-relaxed">
                        A curated selection of digital products transmuted from pure concept into reality.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="flex flex-col gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <a href="#" className="inline-flex items-center gap-3 text-gray-500 hover:text-white transition-colors font-mono text-sm group">
                        <span>// VIEW_FULL_ARCHIVE</span>
                        <div className="h-px w-12 bg-gray-700 group-hover:bg-white transition-colors"></div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
