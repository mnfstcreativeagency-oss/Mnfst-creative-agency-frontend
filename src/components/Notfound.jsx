import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTheme } from '../Store/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaArrowLeft } from 'react-icons/fa6';

const NotFound = () => {
    const canvasRef = useRef(null);
    const { isDark } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let particles = [];
        const particleCount = 100;
        let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                ctx.fillStyle = isDark ? 'rgba(255, 167, 38, 0.8)' : 'rgba(239, 68, 68, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }

            update() {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    if (this.x !== this.baseX) {
                        let dx = this.x - this.baseX;
                        this.x -= dx / 10;
                    }
                    if (this.y !== this.baseY) {
                        let dy = this.y - this.baseY;
                        this.y -= dy / 10;
                    }
                }
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].draw();
                particles[i].update();
            }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = isDark ? `rgba(255, 167, 38, ${opacityValue})` : `rgba(239, 68, 68, ${opacityValue})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
            mouse.radius = 150;
        });

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark]);

    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: isDark ? '#000000' : '#ffffff' }}>

                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 pointer-events-none"
                    style={{ opacity: 0.3 }}
                />

                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-[12rem] md:text-[20rem] font-bold leading-none tracking-tighter select-none"
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: isDark ? '2px #FFA726' : '2px #EF4444',
                            filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))'
                        }}
                    >
                        404
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 font-oswald uppercase"
                            style={{ color: isDark ? '#ffffff' : '#000000' }}>
                            Reality Not Found
                        </h2>
                        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-70"
                            style={{ color: isDark ? '#ffffff' : '#000000' }}>
                            You've wandered into the digital void. The page you're looking for doesn't exist in this dimension.
                        </p>

                        <Link to="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 font-bold rounded-full shadow-2xl flex items-center gap-3 mx-auto transition-colors duration-300"
                                style={{
                                    backgroundColor: isDark ? '#FFA726' : '#EF4444',
                                    color: '#000000'
                                }}
                            >
                                <FaArrowLeft /> Return Home
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>5
            <Footer />
        </>
    );
};

export default NotFound;
