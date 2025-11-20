'use client';

import React, { useEffect, useRef } from 'react';

const WarpBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Configuration
        const starCount = 1000; // Increased from 350
        let wWidth = 0;
        let wHeight = 0;
        let wStars: WarpStar[] = [];
        let warpCenter = { x: 0, y: 0 };
        let mouse = { x: -1000, y: -1000 };

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
                    this.size = Math.random() * 1.5;
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
            // Calculate bounds relative to viewport
            const rect = canvas.getBoundingClientRect();

            // Check if mouse is inside the component
            const isInSection =
                mouse.x >= rect.left &&
                mouse.x <= rect.right &&
                mouse.y >= rect.top &&
                mouse.y <= rect.bottom;

            let targetX = wWidth * 0.2;
            let targetY = wHeight * 0.5;

            if (isInSection) {
                // Mouse relative to canvas
                const localX = mouse.x - rect.left;
                const localY = mouse.y - rect.top;

                // Parallax Target (Steering)
                targetX = localX;
                targetY = localY;
            }

            // Smooth warp center movement
            warpCenter.x += (targetX - warpCenter.x) * 0.05;
            warpCenter.y += (targetY - warpCenter.y) * 0.05;

            // Draw Stars & Planets
            wStars.forEach((s) => {
                s.update();
                s.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Event Listeners
        const handleResize = () => {
            resize();
            wStars = [];
            for (let i = 0; i < starCount; i++) {
                wStars.push(new WarpStar());
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        // Initial setup
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
};

export default WarpBackground;
