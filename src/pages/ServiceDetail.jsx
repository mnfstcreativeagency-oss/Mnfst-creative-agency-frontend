import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa6';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('ALL VIDEOS');

    // Content mapping based on ID
    // In a real app, fetch from API or store
    const serviceData = {
        'videography': {
            title: "OUR VIDEOGRAPHY",
            filters: ["ALL VIDEOS", "ED-TECH", "PRODUCTS AND ACCESSORIES", "FOOD & BEVERAGES"],
            images: [
                "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2074&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44c?q=80&w=1000&auto=format&fit=crop"
            ]
        },
        'website-design': {
            title: "WEBSITE DESIGN",
            filters: ["ALL PROJECTS", "E-COMMERCE", "SAAS", "LANDING PAGES"],
            images: [
                "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
            ]
        },
        'cgi-animation': {
            title: "CGI & ANIMATION",
            filters: ["ALL", "3D PRODUCT", "MOTION GRAPHICS", "CHARACTER"],
            images: [
                "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop"
            ]
        }
    };

    const data = serviceData[id] || serviceData['videography'];

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
            {/* Header / Nav */}
            <div className="container mx-auto px-6 py-8 flex items-center justify-between">
                <button onClick={() => navigate(-1)} className="transition-colors flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                    <FaArrowLeft /> Back
                </button>
                <div className="px-4 py-1 rounded text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}>
                    Visual Stories in Motion
                </div>
                <div className="w-10"></div> {/* Spacer */}
            </div>

            {/* Title */}
            <div className="container mx-auto px-6 text-center mb-12">
                <h1 className="text-6xl md:text-8xl font-bold font-oswald text-primary uppercase tracking-tight mb-2">
                    {data.title}
                </h1>
            </div>

            {/* Filters */}
            <div className="container mx-auto px-6 mb-16 flex flex-wrap justify-center gap-4">
                {data.filters.map(filter => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-8 py-3 rounded-full border-2 text-sm font-bold tracking-wide uppercase transition-all
                            ${activeFilter === filter
                                ? 'bg-[#FFBC00] border-[#FFBC00] text-primary'
                                : 'bg-transparent border-primary hover:bg-[var(--bg-secondary)]'}`}
                        style={{ color: activeFilter === filter ? 'black' : 'var(--text-primary)', borderColor: activeFilter === filter ? '#FFBC00' : 'var(--border-color)' }}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="aspect-square rounded-lg overflow-hidden relative group cursor-pointer border"
                            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                        >
                            <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
