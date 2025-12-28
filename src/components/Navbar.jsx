import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { useTheme } from '../Store/ThemeContext';
import logo from '../assets/logo-new.png';
import logoDark from '../assets/logo-dark.png';

const Navbar = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [lastY, setLastY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const diff = latest - lastY;

        // Hide if scrolling down and past 100px
        if (diff > 0 && latest > 100) {
            setHidden(true);
        } else if (diff < 0) {
            setHidden(false);
        }

        // Glass effect trigger
        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        setLastY(latest);
    });

    const navLinks = [
        { title: 'Home', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Services', href: '/#services' },
        { title: 'Academy', href: '/academy' },
        { title: 'Join Us', href: '/join' },
        // { title: 'FAQs', href: '/faqs' },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: '-100%' },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-2 nav-standard"
            >
                <div className="container mx-auto px-6 flex justify-between items-center">

                    {/* Brand */}
                    <Link to="/" className="relative z-50 flex items-center gap-2 group">
                        <img src={isDark ? logoDark : logo} alt="Mnfst" className="h-20 md:h-24 w-auto object-contain" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, i) => {
                            if (link.title === 'Services') {
                                return <ServicesDropdown key={i} title={link.title} href={link.href} />;
                            }
                            return <StaggerLink key={i} title={link.title} href={link.href} />;
                        })}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <PremiumCTAButton />
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-2xl z-50 p-2 text-[var(--text-primary)]"
                    >
                        {isOpen ? <HiX /> : <HiMenuAlt4 />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-40 flex flex-col justify-center items-center h-screen"
                        style={{ backgroundColor: 'var(--bg-primary)' }}
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Link
                                        to={link.href}
                                        className="text-4xl font-bold font-oswald uppercase hover:text-[#cf2626] transition-colors"
                                        style={{ color: 'var(--text-primary)' }}
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                onClick={() => setIsOpen(false)}
                                className="mt-8 bg-[#E60023] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm"
                            >
                                Let's Talk
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const ServicesDropdown = ({ title, href }) => {
    const [isHovered, setIsHovered] = useState(false);

    const services = [
        "Long Form Video Editing",
        "Copy Writing",
        "Content Creation Service"
    ];

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href={href} className="relative flex items-center gap-1 h-6 group cursor-pointer">
                <div className="relative overflow-hidden h-6">
                    <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                        <span className="text-sm font-semibold tracking-wide text-[var(--text-primary)] h-6 flex items-center">
                            {title}
                        </span>
                        <span className="text-sm font-bold tracking-wide text-[#E60023] h-6 flex items-center">
                            {title}
                        </span>
                    </div>
                </div>
                {/* Chevron moves with text but stays robust */}
                <motion.div
                    animate={{ rotate: isHovered ? 180 : 0 }}
                    className="text-[var(--text-primary)] group-hover:text-[#E60023] text-xs"
                >
                    <FaChevronDown />
                </motion.div>
            </a>

            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full -left-4 mt-4 w-64 p-4 rounded-xl shadow-2xl border overflow-hidden"
                        style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)', borderColor: 'var(--border-color)' }}
                    >
                        {/* Red accent line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent"></div>

                        <div className="flex flex-col gap-2 mt-2">
                            {services.map((service, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="block px-4 py-2 text-sm font-medium hover:text-accent rounded-lg transition-colors duration-200"
                                    style={{ color: 'var(--text-primary)' }}
                                >
                                    {service}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PremiumCTAButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href="#contact"
            className="relative flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial="initial"
            whileHover="hover"
            animate={isHovered ? "hover" : "initial"}
        >
            {/* The Container - Animates width */}
            <motion.div
                className="rounded-full flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: 'var(--accent-primary)' }}
                variants={{
                    initial: { width: "48px", height: "48px" },
                    hover: { width: "160px", height: "48px", backgroundColor: "var(--bg-primary)", border: "1px solid var(--accent-primary)" }
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                {/* Initial State: Arrow */}
                <motion.div
                    className="absolute"
                    variants={{
                        initial: { opacity: 1, scale: 1 },
                        hover: { opacity: 0, scale: 0.5 }
                    }}
                >
                    <BsArrowRight className="text-white text-xl" />
                </motion.div>

                {/* Hover State: Text */}
                <motion.span
                    className="whitespace-nowrap font-bold text-primary font-space"
                    variants={{
                        initial: { opacity: 0, y: 20 },
                        hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ delay: 0.1 }}
                >
                    Get in Touch
                </motion.span>
            </motion.div>
        </motion.a>
    );
};

// Kinetic Text Hover Effect Component
const StaggerLink = ({ title, href }) => {
    return (
        <Link
            to={href}
            className="relative overflow-hidden block h-6 group cursor-pointer"
        >
            <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-6">
                <span className="text-sm font-semibold tracking-wide text-[var(--text-primary)] h-6 flex items-center">
                    {title}
                </span>
                <span className="text-sm font-bold tracking-wide text-[#E60023] h-6 flex items-center">
                    {title}
                </span>
            </div>
        </Link>
    );
};

export default Navbar;
