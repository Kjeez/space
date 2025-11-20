'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Physics State
        let mouse = { x: -100, y: -100 };
        let pos = { x: -100, y: -100 };
        let angle = 0;
        let vel = { x: 0, y: 0 };

        let animationFrameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            if (!isVisible) setIsVisible(true);
        };

        const animate = () => {
            // Smooth Follow (Lerp)
            const targetX = mouse.x;
            const targetY = mouse.y;

            // Calculate velocity for banking
            vel.x = targetX - pos.x;
            vel.y = targetY - pos.y;

            pos.x += (targetX - pos.x) * 0.15;
            pos.y += (targetY - pos.y) * 0.15;

            // Banking: Tilt based on X velocity
            let targetAngle = vel.x * 3;
            targetAngle = Math.max(-30, Math.min(30, targetAngle));

            // Smooth Rotation
            angle += (targetAngle - angle) * 0.1;

            // Update Cursor CSS
            // Offset to center (24px is half of 48px width/height)
            if (cursor) {
                cursor.style.transform = `translate(${pos.x - 24}px, ${pos.y - 24}px) rotate(${angle}deg)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible]);

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
            style={{ willChange: 'transform' }}
        >
            {/* Simple SVG Spacecraft */}
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_0_10px_rgba(100,200,255,0.8)]"
            >
                <path d="M12 2L2 22L12 18L22 22L12 2Z" fill="#fff" />
                <path d="M12 18V2" stroke="#000" strokeWidth="1" strokeOpacity="0.2" />
            </svg>
            {/* Engine Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-6 bg-blue-400 blur-md rounded-full opacity-80" />
        </div>
    );
}
