import React, { useEffect, useRef } from 'react';
import { useTheme } from '../Store/ThemeContext';

const JoinUsCanvas = () => {
    const canvasRef = useRef(null);
    const { isDark } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animationFrame;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.color = isDark
                    ? `rgba(255, 255, 255, ${Math.random() * 0.3})`
                    : `rgba(0, 0, 0, ${Math.random() * 0.1})`;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            resize();
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Connect nearby particles
            particles.forEach((p, i) => {
                p.update();
                p.draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.strokeStyle = isDark
                            ? `rgba(255, 255, 255, ${0.1 - dist / 1500})`
                            : `rgba(0, 0, 0, ${0.05 - dist / 3000})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });

            animationFrame = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resize);
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrame);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-10"
            style={{ opacity: 0.6 }}
        />
    );
};

export default JoinUsCanvas;
