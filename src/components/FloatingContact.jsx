import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiChatAlt2 } from 'react-icons/hi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const FloatingContact = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="fixed bottom-8 left-8 z-50 flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Icon - Always Visible */}
            <div className="w-[3.5rem] h-[3.5rem] text-white rounded-full shadow-2xl flex items-center justify-center z-20 relative cursor-pointer hover:scale-105 transition-transform" style={{ backgroundColor: 'var(--accent-primary)' }}>
                <HiChatAlt2 className="text-2xl" />
            </div>

            {/* Expandable Socials Container */}
            <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{
                    width: isHovered ? 'auto' : 0,
                    opacity: isHovered ? 1 : 0
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="overflow-hidden h-[3.5rem] flex items-center"
            >
                {/* Inner flex container to hold buttons with gap */}
                <div className="flex gap-3 pl-3 pr-1">
                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-[3.5rem] h-[3.5rem] text-white rounded-full shadow-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                    >
                        <FaInstagram className="text-2xl" />
                    </motion.a>

                    <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-[3.5rem] h-[3.5rem] text-white rounded-full shadow-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'var(--accent-primary)' }}
                    >
                        <FaWhatsapp className="text-2xl" />
                    </motion.a>
                </div>
            </motion.div>
        </div>
    );
};

export default FloatingContact;
