import React from 'react';
import { useTheme } from '../Store/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <motion.button
            onClick={toggleTheme}
            className="theme-toggle"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            aria-label="Toggle theme"
        >
            <motion.div
                className="toggle-icon"
                animate={{ rotate: isDark ? 360 : 0 }}
                transition={{ duration: 0.3, type: 'spring' }}
            >
                {isDark ? (
                    // Sun icon for dark mode (to indicate switching to light)
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="12" cy="12" r="5" fill="#fbb657" />
                        <line x1="12" y1="1" x2="12" y2="3" stroke="#fbb657" strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="21" x2="12" y2="23" stroke="#fbb657" strokeWidth="2" strokeLinecap="round" />
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="#fbb657" strokeWidth="2" strokeLinecap="round" />
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="#fbb657" strokeWidth="2" strokeLinecap="round" />
                        <line x1="1" y1="12" x2="3" y2="12" stroke="#fbb657" strokeWidth="2" strokeLinecap="round" />
                        <line x1="21" y1="12" x2="23" y2="12" stroke="#fbb657" strokeWidth="2" strokeLinecap="round" />
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="#fbb657" strokeWidth="2" strokeLinecap="round" />
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="#fbb657" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                ) : (
                    // Moon icon for light mode (to indicate switching to dark)
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                            fill="#000000"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
