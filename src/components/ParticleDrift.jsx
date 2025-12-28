import React, { useEffect, useRef } from 'react';

const ParticleDrift = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let particles = [];
        const particleCount = 300; // MUCH MORE particles

        let width = window.innerWidth;
        let height = window.innerHeight;

        // Mouse tracking
        let mouse = {
            x: null,
            y: null,
            radius: 120 // Smaller, more refined repulsion radius
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        // Get theme colors from CSS variables
        const getColors = () => {
            const style = getComputedStyle(document.documentElement);
            return {
                accent: style.getPropertyValue('--accent-primary').trim() || '#fbb657',
                textSecondary: style.getPropertyValue('--text-secondary').trim() || '#a0a0a0'
            };
        };

        class Particle {
            constructor() {
                this.init();
            }

            init() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 2 + 0.8; // Refined size: 0.8-2.8px
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = -(Math.random() * 0.3 + 0.1); // Slow upward drift
                this.alpha = Math.random() * 0.3 + 0.4; // Elegant opacity: 0.4-0.7
                this.particleType = Math.random() > 0.5 ? 'accent' : 'secondary'; // 50/50 split
                this.oscillationSpeed = Math.random() * 0.001 + 0.0005;
                this.oscillationOffset = Math.random() * Math.PI * 2;
            }

            update() {
                // Natural drift
                this.y += this.speedY;
                this.x += this.speedX + Math.sin(Date.now() * this.oscillationSpeed + this.oscillationOffset) * 0.2;

                // STRONG Mouse repulsion
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius;
                        const angle = Math.atan2(dy, dx);
                        // Strong but elegant force - 15x multiplier
                        const repulsionX = -Math.cos(angle) * force * 15;
                        const repulsionY = -Math.sin(angle) * force * 15;

                        this.x += repulsionX;
                        this.y += repulsionY;
                    }
                }

                // Reset if out of bounds
                if (this.y < -10) {
                    this.y = height + 10;
                    this.x = Math.random() * width;
                }
                if (this.x < -10) this.x = width + 10;
                if (this.x > width + 10) this.x = -10;
            }

            draw() {
                const colors = getColors();

                // Elegant glow for all particles
                ctx.shadowBlur = this.particleType === 'accent' ? 12 : 6;
                ctx.shadowColor = this.particleType === 'accent' ? colors.accent : colors.textSecondary;

                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

                ctx.fillStyle = this.particleType === 'accent' ? colors.accent : colors.textSecondary;
                ctx.globalAlpha = this.alpha;
                ctx.fill();

                // Reset shadow
                ctx.shadowBlur = 0;
            }
        }

        // Initialize particles
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            // Draw subtle mouse cursor indicator
            if (mouse.x !== null && mouse.y !== null) {
                ctx.strokeStyle = 'rgba(251, 182, 87, 0.15)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
                ctx.stroke();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-20 pointer-events-none"
            style={{ opacity: 0.95 }}
        />
    );
};

export default ParticleDrift;
