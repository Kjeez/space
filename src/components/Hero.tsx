'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// --- WarpBackground Component (Internal) ---
const WarpBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const spacecraftRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const spacecraft = spacecraftRef.current;
        const container = containerRef.current;
        if (!canvas || !spacecraft || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuration
        const starCount = 350;
        let wWidth = 0;
        let wHeight = 0;
        let wStars: WarpStar[] = [];
        let warpCenter = { x: 0, y: 0 };
        let mouse = { x: -1000, y: -1000 };

        // Spacecraft Physics State
        let shipPos = { x: -100, y: -100 };
        let shipAngle = 0;
        let isShipInitialized = false;

        // Resize Handler
        const resize = () => {
            wWidth = canvas.width = container.offsetWidth;
            wHeight = canvas.height = container.offsetHeight;
            // Default center
            warpCenter.x = wWidth * 0.2;
            warpCenter.y = wHeight * 0.5;
        };

        // Star/Planet Class
        class WarpStar {
            cx: number = 0;
            cy: number = 0;
            angle: number = 0;
            dist: number = 0;
            speed: number = 0;
            size: number = 0;
            color: string = '';
            isPlanet: boolean = false;

            constructor() {
                this.init(true);
            }

            init(randomX = false) {
                this.angle = Math.random() * Math.PI * 2;
                this.dist = randomX ? Math.random() * Math.max(wWidth, wHeight) : Math.random() * 50;
                this.speed = 0.5 + Math.random() * 2;
                this.size = Math.random() * 1.5;

                // 1% chance to be a planet
                this.isPlanet = Math.random() < 0.01;

                if (this.isPlanet) {
                    // Planet properties
                    this.size = 4 + Math.random() * 6; // Much larger (4px - 10px)

                    // Planet colors (Ice, Terran, Desert, Gas Giant)
                    const planetColors = [
                        'rgba(100, 200, 255, ', // Ice Blue
                        'rgba(255, 100, 100, ', // Mars Red
                        'rgba(100, 255, 150, ', // Life Green
                        'rgba(200, 150, 255, ', // Gas Purple
                        'rgba(255, 200, 100, '  // Desert Gold
                    ];
                    this.color = planetColors[Math.floor(Math.random() * planetColors.length)];
                } else {
                    // Standard Star properties
                    const r = Math.random();
                    if (r > 0.9) this.color = 'rgba(255, 215, 0, '; // Gold
                    else if (r > 0.6) this.color = 'rgba(102, 252, 241, '; // Cyan
                    else this.color = 'rgba(255, 255, 255, '; // White
                }
            }

            update() {
                // Move outward from the dynamic center
                this.dist += this.speed * (this.dist * 0.01 + 0.5);

                // Calculate position relative to dynamic center
                const x = warpCenter.x + Math.cos(this.angle) * this.dist;
                const y = warpCenter.y + Math.sin(this.angle) * this.dist;

                // Reset if out of bounds
                const boundBuffer = this.isPlanet ? 100 : 50;
                if (x < -boundBuffer || x > wWidth + boundBuffer || y < -boundBuffer || y > wHeight + boundBuffer) {
                    this.init();
                }
            }

            draw() {
                const x = warpCenter.x + Math.cos(this.angle) * this.dist;
                const y = warpCenter.y + Math.sin(this.angle) * this.dist;

                // Opacity calculation
                const alpha = Math.min(1, this.dist / 150);

                ctx!.beginPath();
                ctx!.arc(x, y, this.size, 0, Math.PI * 2);

                if (this.isPlanet) {
                    // Planet rendering: Solid circle with partial opacity
                    ctx!.fillStyle = this.color + Math.min(0.9, alpha) + ')';
                    ctx!.fill();

                    // Atmosphere glow
                    ctx!.shadowBlur = 10;
                    ctx!.shadowColor = this.color + '1)';
                    ctx!.fill();
                    ctx!.shadowBlur = 0;
                } else {
                    // Star rendering
                    ctx!.fillStyle = this.color + alpha + ')';
                    ctx!.fill();
                }
            }
        }

        // Initialize Stars
        for (let i = 0; i < starCount; i++) {
            wStars.push(new WarpStar());
        }

        // Animation Loop
        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, wWidth, wHeight);

            // --- Interaction Logic ---
            const rect = canvas.getBoundingClientRect();

            const isInSection =
                mouse.x >= rect.left &&
                mouse.x <= rect.right &&
                mouse.y >= rect.top &&
                mouse.y <= rect.bottom;

            let targetX = wWidth * 0.2;
            let targetY = wHeight * 0.5;

            if (isInSection) {
                const localX = mouse.x - rect.left;
                const localY = mouse.y - rect.top;

                if (!isShipInitialized) {
                    shipPos.x = localX;
                    shipPos.y = localY;
                    isShipInitialized = true;
                    spacecraft.style.opacity = '1';
                }

                targetX = localX;
                targetY = localY;

                // --- Spacecraft Physics ---
                const targetShipX = localX;
                const targetShipY = localY;
                const velX = targetShipX - shipPos.x;

                // Smooth Follow
                shipPos.x += (targetShipX - shipPos.x) * 0.15;
                shipPos.y += (targetShipY - shipPos.y) * 0.15;

                // Banking
                let targetAngle = velX * 3;
                targetAngle = Math.max(-30, Math.min(30, targetAngle));
                shipAngle += (targetAngle - shipAngle) * 0.1;

                // Update CSS
                // Offset to center (32px is half of 64px)
                // Added perspective and rotateX(40deg) for forward inclination
                spacecraft.style.transform = `translate(${shipPos.x - 32}px, ${shipPos.y - 32}px) perspective(1000px) rotate(${shipAngle}deg) rotateX(40deg)`;
            } else {
                isShipInitialized = false;
                spacecraft.style.opacity = '0';
            }

            // Smooth warp center movement
            warpCenter.x += (targetX - warpCenter.x) * 0.05;
            warpCenter.y += (targetY - warpCenter.y) * 0.05;

            wStars.forEach((s) => {
                s.update();
                s.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', resize);
        resize();
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full bg-black overflow-hidden cursor-none group z-0">
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
            <div ref={spacecraftRef} className="absolute top-0 left-0 pointer-events-none z-50 transition-opacity duration-300 opacity-0 will-change-transform" style={{ width: '64px', height: '64px' }}>
                {/* High-Fidelity SVG Recreation of the "Blue Interceptor" */}
                <div className="relative w-full h-full">
                    {/* SVG Layer */}
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(102,252,241,0.6)]" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="glow"><feGaussianBlur stdDeviation="2.5" result="coloredBlur" /><feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
                        </defs>
                        {/* Wings */}
                        <path d="M50 20 L75 45 L90 60 L75 75 L50 65 L25 75 L10 60 L25 45 Z" fill="#0B0C10" stroke="#66FCF1" strokeWidth="1.5" />
                        {/* Body */}
                        <path d="M50 10 L62 35 L62 75 L50 85 L38 75 L38 35 Z" fill="#1F2833" stroke="#66FCF1" strokeWidth="1" />
                        {/* Cockpit */}
                        <path d="M50 15 L58 30 L58 45 L50 50 L42 45 L42 30 Z" fill="#66FCF1" fillOpacity="0.3" stroke="#66FCF1" strokeWidth="0.5" />
                        <path d="M50 15 L50 50" stroke="#66FCF1" strokeWidth="0.5" />
                        {/* Thrusters */}
                        <circle cx="38" cy="75" r="6" fill="#111" stroke="#66FCF1" strokeWidth="1.5" />
                        <circle cx="50" cy="80" r="7" fill="#111" stroke="#66FCF1" strokeWidth="1.5" />
                        <circle cx="62" cy="75" r="6" fill="#111" stroke="#66FCF1" strokeWidth="1.5" />
                        {/* Glows */}
                        <path d="M25 45 L25 65" stroke="#66FCF1" strokeWidth="1.5" filter="url(#glow)" />
                        <path d="M75 45 L75 65" stroke="#66FCF1" strokeWidth="1.5" filter="url(#glow)" />
                    </svg>
                    {/* Engines */}
                    <div className="absolute top-[75%] left-1/2 -translate-x-1/2 w-full flex justify-center items-start gap-1">
                        <div className="relative -left-3"><div className="w-1.5 h-16 bg-gradient-to-b from-[#66FCF1] to-transparent blur-[2px] opacity-80 animate-pulse"></div></div>
                        <div className="relative top-1"><div className="w-2 h-20 bg-gradient-to-b from-[#45A29E] via-[#66FCF1] to-transparent blur-[3px] opacity-90"></div></div>
                        <div className="relative left-3"><div className="w-1.5 h-16 bg-gradient-to-b from-[#66FCF1] to-transparent blur-[2px] opacity-80 animate-pulse"></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Main Hero Component ---
export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-[#020617]">
            {/* Warp Background (Absolute Layer) */}
            <WarpBackground />

            {/* Atmospheric Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-10" />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-10 pointer-events-none mix-blend-overlay"></div>

            {/* HUD Decoration - Corner Brackets */}
            <div className="absolute inset-0 pointer-events-none z-20 p-8 hidden md:block">
                <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-white/10 rounded-tl-3xl"></div>
                <div className="absolute top-8 right-8 w-24 h-24 border-t-2 border-r-2 border-white/10 rounded-tr-3xl"></div>
                <div className="absolute bottom-8 left-8 w-24 h-24 border-b-2 border-l-2 border-white/10 rounded-bl-3xl"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-white/10 rounded-br-3xl"></div>
            </div>

            {/* System Status Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-32 z-30"
            >
                <div className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md flex items-center gap-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 tracking-widest font-bold">SYSTEM ONLINE // READY</span>
                </div>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-30 max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter text-white mb-6 relative drop-shadow-2xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500">
                            WEB ALCHEMY
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
                >
                    We transform your raw ideas into <span className="text-cyan-400 font-medium glow">Digital Gold</span>.
                    <br className="hidden md:block" />
                    Websites, Apps, and AI tools that work like magic.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    {/* Primary CTA */}
                    <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative flex items-center gap-2 z-10 group-hover:text-white transition-colors">
                            Start Your Project
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </button>

                    {/* Secondary CTA */}
                    <button className="group px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 backdrop-blur-sm transition-all hover:border-white/30 flex items-center gap-2">
                        <span>View Portfolio</span>
                        <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 opacity-50"
            >
                <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Scroll to Explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
            </motion.div>

        </section>
    );
}