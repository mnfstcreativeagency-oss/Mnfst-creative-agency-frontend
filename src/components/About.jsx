import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../Store/ThemeContext';

const teamMembers = [
    {
        name: "Robert Fox",
        role: "Marketing Coordinator",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        rotate: -6,
        yOffset: 40
    },
    {
        name: "Ralph Edwards",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
        rotate: 4,
        yOffset: -20
    },
    {
        name: "Arlene McCoy",
        role: "Product Designer",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
        rotate: -3,
        yOffset: 50
    },
    {
        name: "James Cocolom",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
        rotate: 5,
        yOffset: 0
    },
    {
        name: "Bessie Cooper",
        role: "Operations Manager",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
        rotate: -4,
        yOffset: 30
    }
];

const About = () => {
    const { isDark } = useTheme();
    const scrollRef = useRef(null);
    const autoRotateX = useMotionValue(0);

    const smoothX = useSpring(autoRotateX, {
        damping: 50,
        stiffness: 100
    });

    // Triple the array for visual abundance
    const infiniteTeam = [...teamMembers, ...teamMembers, ...teamMembers];

    // Gentle auto-scroll animation
    useEffect(() => {
        const interval = setInterval(() => {
            const current = autoRotateX.get();
            autoRotateX.set(current - 0.5);
        }, 50);

        return () => clearInterval(interval);
    }, [autoRotateX]);

    return (
        <section
            id="about"
            className="relative py-32 min-h-screen flex flex-col justify-center overflow-hidden transition-colors duration-500"
            style={{ backgroundColor: isDark ? '#000000' : '#f0f4f8' }}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: isDark ? 'radial-gradient(circle, #fff 1px, transparent 1px)' : 'radial-gradient(circle, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto text-center mb-24"
                >
                    <h2
                        className="text-5xl md:text-7xl font-serif leading-tight mb-8 tracking-tight transition-colors duration-500"
                        style={{ color: isDark ? '#ffffff' : '#1e293b' }}
                    >
                        The Team Behind <br />
                        <span
                            className="italic font-normal transition-colors duration-500"
                            style={{ color: isDark ? '#FFA726' : '#EF4444' }}
                        >
                            Our Product
                        </span>
                    </h2>
                    <p
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light transition-colors duration-500"
                        style={{ color: isDark ? '#9ca3af' : '#64748b' }}
                    >
                        At Lowker, our AI-driven team is dedicated to making the job search
                        smarter, faster, and more effective for job seekers and recruiters.
                    </p>
                </motion.div>
                <div className="relative overflow-visible pb-20">
                    <motion.div
                        ref={scrollRef}
                        className="flex gap-20 px-8 cursor-grab active:cursor-grabbing items-center"
                        style={{ x: smoothX }}
                        drag="x"
                        dragConstraints={{ left: -2500, right: 0 }}
                        dragElastic={0.2}
                        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                        onDragStart={() => autoRotateX.stop()}
                        onDragEnd={() => {
                            setTimeout(() => {
                                const interval = setInterval(() => {
                                    const current = autoRotateX.get();
                                    autoRotateX.set(current - 0.5);
                                }, 50);
                            }, 100);
                        }}
                    >
                        {infiniteTeam.map((member, index) => (
                            <TeamCard
                                key={`${member.name}-${index}`}
                                member={member}
                                index={index}
                                isDark={isDark}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const TeamCard = ({ member, index, isDark }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="flex-shrink-0 relative group"
            style={{
                width: '280px',
                y: member.yOffset,
                rotate: member.rotate
            }}
        >
            <div
                className="p-4 bg-white rounded-2xl shadow-xl transition-all duration-500 border"
                style={{
                    backgroundColor: isDark ? '#1e293b' : '#ffffff',
                    borderColor: isDark ? '#334155' : '#f1f5f9',
                    boxShadow: isDark
                        ? '0 20px 40px -10px rgba(0,0,0,0.5)'
                        : '0 20px 40px -10px rgba(0,0,0,0.1)'
                }}
            >
                <div
                    className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-gray-100"
                    style={{ backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }}
                >
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ filter: isDark ? 'grayscale(0%)' : 'grayscale(0%)' }} // Reference shows colored images
                    />
                </div>
                <div className="px-2 pb-2">
                    <h3
                        className="text-xl font-bold mb-1 transition-colors duration-500 font-serif"
                        style={{ color: isDark ? '#ffffff' : '#0f172a' }}
                    >
                        {member.name}
                    </h3>
                    <p
                        className="text-sm font-medium transition-colors duration-500"
                        style={{ color: isDark ? '#94a3b8' : '#64748b' }}
                    >
                        {member.role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
