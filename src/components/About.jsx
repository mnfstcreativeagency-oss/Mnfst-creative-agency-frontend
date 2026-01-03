import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../Store/ThemeContext';

// const teamMembers = [
//     {
//         name: "Sharavan",
//         role: "Founder",
//         image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1767430499/Screenshot_2026-01-03_142209_llarcn.png",
//         rotate: -6,
//         yOffset: 40
//     },
//     {
//         name: "Shashank",
//         role: "Software Engineer",
//         image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1767430732/Screenshot_2026-01-03_142757-removebg-preview_ykn5za.png",
//         rotate: 4,
//         yOffset: -20
//     },
//     {
//         name: "Ravi",
//         role: "Product Designer",
//         image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1767431154/ravi2-removebg-preview_fke0qp.png",
//         rotate: -3,
//         yOffset: 50
//     },
//     {
//         name: "Harshith",
//         role: "Video Editor",
//         image: "https://res.cloudinary.com/dkxtthv23/image/upload/v1767431640/unnamed-removebg-preview_wpape2.png",
//         rotate: 5,
//         yOffset: 0
//     },
//     {
//         name: "Bessie Cooper",
//         role: "Operations Manager",
//         image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
//         rotate: -4,
//         yOffset: 30
//     }
// ];

const About = () => {
    const { isDark } = useTheme();
    const scrollRef = useRef(null);
    const autoRotateX = useMotionValue(0);

    const smoothX = useSpring(autoRotateX, {
        damping: 50,
        stiffness: 100
    });

    // Triple the array for visual abundance
    // const infiniteTeam = [...teamMembers, ...teamMembers, ...teamMembers];

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
                    className="max-w-4xl mx-auto text-center mb-16"
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
                        className="text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed font-light transition-colors duration-500"
                        style={{ color: isDark ? '#d1d5db' : '#475569' }}
                    >
                        Manifest is not an agency built on services. It is built on intent.
                        We operate at the intersection of story, systems, and scale. A creative production house fused with a tech lab.
                        A pre-production brain wired to execution.
                    </p>
                </motion.div>

                {/* Our Expertise Section */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif text-center mb-12 transition-colors duration-500"
                        style={{ color: isDark ? '#ffffff' : '#1e293b' }}
                    >
                        Our <span className="italic" style={{ color: isDark ? '#FFA726' : '#EF4444' }}>Expertise</span>
                    </motion.h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {['Strategy', 'Storytelling', 'Design', 'Technology', 'Automation', 'Production'].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl border text-center transition-all duration-300 hover:scale-105"
                                style={{
                                    backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.5)',
                                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                <span className="text-xl font-medium" style={{ color: isDark ? '#e2e8f0' : '#334155' }}>{item}</span>
                            </motion.div>
                        ))}
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mt-10 max-w-2xl mx-auto text-lg font-light italic"
                        style={{ color: isDark ? '#9ca3af' : '#64748b' }}
                    >
                        "No overlaps, no passengers. Each role is deliberate, accountable, and essential."
                    </motion.p>
                </div>

                {/* Categories Section */}
                <div className="mb-24">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif text-center mb-12 transition-colors duration-500"
                        style={{ color: isDark ? '#ffffff' : '#1e293b' }}
                    >
                        What We <span className="italic" style={{ color: isDark ? '#FFA726' : '#EF4444' }}>Deliver</span>
                    </motion.h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { title: "Brand Narrative", desc: "Shaping the story that drives the brand." },
                            { title: "Content Systems", desc: "Building engines for consistent output." },
                            { title: "High-Performance Websites", desc: "Digital experiences that convert." },
                            { title: "AI Agents & Automation", desc: "Deploying intelligent systems for velocity." },
                            { title: "Creative Production", desc: "Full-scale execution from vision to reality." }
                        ].map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`p-8 rounded-2xl border transition-all duration-300 ${index === 4 ? 'md:col-span-2' : ''}`}
                                style={{
                                    backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
                                    borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                    boxShadow: isDark ? 'none' : '0 10px 30px -10px rgba(0,0,0,0.05)'
                                }}
                            >
                                <h4 className="text-2xl font-serif mb-3" style={{ color: isDark ? '#f1f5f9' : '#1e293b' }}>{category.title}</h4>
                                <p style={{ color: isDark ? '#94a3b8' : '#64748b' }}>{category.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-10"
                >
                    <p
                        className="text-lg md:text-xl leading-relaxed font-light mb-6 transition-colors duration-500"
                        style={{ color: isDark ? '#d1d5db' : '#475569' }}
                    >
                        We work with brands, founders, and teams who don’t want noise.
                        They want clarity. Consistency. Conversion.
                        Manifest exists to turn vision into velocity.
                    </p>
                    <p
                        className="text-xl md:text-2xl font-serif italic"
                        style={{ color: isDark ? '#FFA726' : '#EF4444' }}
                    >
                        We are a creative-tech house that manifests ideas into working realities.
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
                        {/* {infiniteTeam.map((member, index) => (
                            <TeamCard
                                key={`${member.name}-${index}`}
                                member={member}
                                index={index}
                                isDark={isDark}
                            />
                        ))} */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// const TeamCard = ({ member, index, isDark }) => {
//     return (
//         <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: index * 0.1 }}
//             className="flex-shrink-0 relative group"
//             style={{
//                 width: '280px',
//                 y: member.yOffset,
//                 rotate: member.rotate
//             }}
//         >
//             <div
//                 className="p-4 bg-white rounded-2xl shadow-xl transition-all duration-500 border"
//                 style={{
//                     backgroundColor: isDark ? '#1e293b' : '#ffffff',
//                     borderColor: isDark ? '#334155' : '#f1f5f9',
//                     boxShadow: isDark
//                         ? '0 20px 40px -10px rgba(0,0,0,0.5)'
//                         : '0 20px 40px -10px rgba(0,0,0,0.1)'
//                 }}
//             >
//                 <div
//                     className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-gray-100"
//                     style={{ backgroundColor: isDark ? '#0f172a' : '#f1f5f9' }}
//                 >
//                     <img
//                         src={member.image}
//                         alt={member.name}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                         style={{ filter: isDark ? 'grayscale(0%)' : 'grayscale(0%)' }} // Reference shows colored images
//                     />
//                 </div>
//                 <div className="px-2 pb-2">
//                     <h3
//                         className="text-xl font-bold mb-1 transition-colors duration-500 font-serif"
//                         style={{ color: isDark ? '#ffffff' : '#0f172a' }}
//                     >
//                         {member.name}
//                     </h3>
//                     <p
//                         className="text-sm font-medium transition-colors duration-500"
//                         style={{ color: isDark ? '#94a3b8' : '#64748b' }}
//                     >
//                         {member.role}
//                     </p>
//                 </div>
//             </div>
//         </motion.div>
//     );
// };

export default About;
