import React, { useState, useEffect } from 'react';
import { ThemeContext } from './useTheme';

export const ThemeProvider = ({ children }) => {
    // Get initial theme from localStorage or default to 'dark'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('mnfst-theme');
        return savedTheme || 'dark';
    });

    // Apply theme class to document root and save to localStorage
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            if (metaThemeColor) metaThemeColor.setAttribute('content', '#000000');
        } else {
            document.documentElement.classList.remove('dark');
            if (metaThemeColor) metaThemeColor.setAttribute('content', '#ffffff');
        }
        localStorage.setItem('mnfst-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {
        theme,
        toggleTheme,
        isDark: theme === 'dark',
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
