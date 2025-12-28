import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { BsArrowRight, BsStars, BsLightningCharge, BsPeople } from 'react-icons/bs';

const About = () => {
    return (
        <section id="about" className="w-full overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <AboutHero />
            <KeyPillars />
            <TimelineProcess />
            <TeamCredibility />
            <AboutCTA />
        </section>
    );
};

// --- HERO SECTION ---
const AboutHero = () => {
    return (
        <div className="container mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="flex items-center gap-2 mb-6">
                    <span className="w-8 h-[2px] bg-accent"></span>
                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Who We Are</span>
                </div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-oswald uppercase leading-[1.1] mb-8 text-primary">
                    We Build <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gray-500">
                        Digital Empires
                    </span>
                </h2>
                <p className="text-lg text-gray-600 max-w-md leading-relaxed mb-8">
                    We are the architects of the new digital age. Merging strategy with storming creativity to elevate brands beyond the noise.
                </p>
            </motion.div>

            {/* Right Visual - Zipper Mask */}
            <div className="relative h-[400px] md:h-[500px] w-full items-center justify-center flex">
                <ZipperRevealImage />
            </div>
        </div>
    );
};

const ZipperRevealImage = () => {
    // Silver teeth pattern reuse
    const teethPattern = `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='silver' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23eeeeee'/%3E%3Cstop offset='50%25' stop-color='%23999999'/%3E%3Cstop offset='100%25' stop-color='%23cccccc'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M5 0 L15 0 L15 20 L5 20 Z' fill='url(%23silver)' stroke='%23666' stroke-width='1'/%3E%3C/svg%3E")`;

    return (
        <div className="relative w-full max-w-md h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
            {/* The Image being revealed */}
            <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            {/* The Zipper Mask Overlay */}
            <motion.div
                className="absolute inset-0 bg-primary z-10"
                initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)" }} // Reveals upwards
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            >
                {/* Visual Zipper Line at the bottom of the mask */}
                <div className="absolute bottom-0 w-full h-8 bg-repeat-x flex items-center justify-center" style={{ backgroundImage: teethPattern, backgroundSize: '18px 100%' }}>
                    {/* Slider Handle */}
                    <div className="w-10 h-14 bg-gradient-to-b from-gray-300 to-white border border-gray-400 rounded-lg shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center pt-2">
                        <div className="w-2 h-6 bg-black/10 rounded-full"></div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}


// --- KEY PILLARS ---
const KeyPillars = () => {
    const pillars = [
        { icon: <BsStars />, title: "Creative Chaos", desc: "Breaking patterns to build new ones." },
        { icon: <BsLightningCharge />, title: "Rapid Execution", desc: "Speed without compromising quality." },
        { icon: <BsPeople />, title: "Community First", desc: "Building cults, not just customers." },
    ];

    return (
        <div className="container mx-auto px-6 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pillars.map((item, i) => (
                    <motion.div
                        key={i}
                        className="p-10 rounded-2xl border group transition-colors cursor-default"
                        style={{
                            backgroundColor: 'var(--bg-secondary)',
                            borderColor: 'var(--border-color)'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        whileHover={{ y: -8, boxShadow: "0 20px 40px -15px var(--shadow-color)" }}
                    >
                        <div className="w-12 h-12 rounded-xl shadow-sm flex items-center justify-center text-2xl text-accent mb-6 group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: 'var(--bg-primary)' }}>
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold font-oswald uppercase mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                        <p className="leading-relaxed text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};


// --- TIMELINE / PROCESS ---
const TimelineProcess = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Simulate zipper opening horizontally based on scroll
    // Map scroll progress to a clip-path or width
    const width = useTransform(scrollYProgress, [0.2, 0.6], ["0%", "100%"]);

    const steps = [
        { id: "01", title: "Audit", desc: "Deep dive analysis." },
        { id: "02", title: "Strategy", desc: "The master plan." },
        { id: "03", title: "Creation", desc: "High-octane produc." },
        { id: "04", title: "Launch", desc: "Ignition & blastoff." },
    ];

    // Silver teeth pattern
    const teethPattern = `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='silver' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23eeeeee'/%3E%3Cstop offset='50%25' stop-color='%23999999'/%3E%3Cstop offset='100%25' stop-color='%23cccccc'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M5 0 L15 0 L15 20 L5 20 Z' fill='url(%23silver)' stroke='%23666' stroke-width='1'/%3E%3C/svg%3E")`;

    return (
        <div ref={containerRef} className="w-full bg-primary text-white py-24 relative overflow-hidden">

            {/* Background / Revealed Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between relative">
                    {/* The gray line track */}
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 hidden md:block"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="relative z-10 w-full md:w-1/4 px-4 py-8 md:py-0 text-center md:text-left group border-l md:border-l-0 border-white/10 md:pl-0">
                            {/* Step Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                            >
                                <span className="block text-4xl md:text-6xl font-bold font-oswald text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 opacity-30 mb-2">{step.id}</span>
                                <h4 className="text-xl font-bold uppercase mb-1">{step.title}</h4>
                                <p className="text-gray-400 text-sm">{step.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* The Zipper Cover (Unzips to reveal) */}
            {/* Just purely visual decoration that moves across? 
                 Actually, simpler: A zipper line that moves across "unlocking" the steps. */}
            <motion.div
                className="absolute top-1/2 left-0 h-12 w-full -translate-y-1/2 pointer-events-none z-20 hidden md:block"
                style={{ width }} // Width grows effectively moving the right edge
            >
                {/* The slider at the rightmost tip */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-10 flex items-center justify-center">
                    {/* Puller */}
                    <div className="w-12 h-16 bg-gradient-to-b from-gray-200 to-gray-400 rounded-md border border-gray-500 shadow-xl flex items-center justify-center relative transform rotate-90">
                        <div className="w-2 h-8 bg-black/20 rounded-full"></div>
                    </div>
                </div>
                {/* The 'open' trail - maybe just void or a glow? */}
            </motion.div>

        </div>
    );
};


// --- TEAM / CREDIBILITY ---
const TeamCredibility = () => {
    // Rotating Text "Trusted by Creator"

    return (
        <div className="py-24 overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="container mx-auto px-6">

                {/* Rotating Header */}
                <div className="relative flex justify-center mb-16">
                    <div className="relative w-48 h-48 flex items-center justify-center">
                        {/* Rotating text svg */}
                        <motion.div
                            className="absolute inset-0 w-full h-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                            <svg viewBox="0 0 200 200" className="w-full h-full">
                                <path id="textPath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" />
                                <text className="text-sm font-bold uppercase tracking-widest font-oswald" style={{ fill: 'var(--text-primary)' }}>
                                    <textPath href="#textPath" startOffset="0%">
                                        Trusted by Creators • Trusted by Creators • Trusted by Creators •
                                    </textPath>
                                </text>
                            </svg>
                        </motion.div>
                        <div className="text-4xl font-bubble text-accent">M</div>
                    </div>
                </div>

                {/* Team/Partner Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item}
                            className="h-24 md:h-32 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 cursor-pointer"
                            style={{ backgroundColor: 'var(--bg-secondary)' }}>
                            {/* Placeholder Logos */}
                            <span className="font-bold text-xl" style={{ color: 'var(--text-muted)' }}>PARTNER {item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

// --- CALL TO ACTION ---
const AboutCTA = () => {
    return (
        <div className="py-20 flex flex-col items-center text-center px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <h2 className="text-4xl md:text-5xl font-bold font-oswald uppercase mb-8" style={{ color: 'var(--text-primary)' }}>
                Ready to make <br /> some noise?
            </h2>
            <a href="#contact" className="group relative overflow-hidden rounded-full bg-accent px-10 py-5 text-white transition-all hover:bg-primary shadow-lg hover:shadow-xl">
                <div className="relative flex items-center gap-3">
                    <span className="font-bold text-lg uppercase tracking-wide">Start Your Project</span>
                    <motion.div className="relative flex flex-col items-center h-5 overflow-hidden">
                        <div className="group-hover:-translate-y-5 transition-transform duration-300">
                            <BsArrowRight className="w-5 h-5" />
                        </div>
                        <div className="absolute top-5 group-hover:-translate-y-5 transition-transform duration-300">
                            <BsArrowRight className="w-5 h-5" />
                        </div>
                    </motion.div>
                </div>
            </a>
        </div>
    )
}

export default About;
