import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Projects', to: 'projects' },
    { label: 'Process', to: 'process' },
    { label: 'Education', to: 'education' },
    { label: 'Contact', to: 'contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
            // Determine active section
            const sections = navLinks.map(l => l.to);
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 shadow-lg shadow-black/5'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button onClick={() => scrollTo('hero')} className="flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                            <Code2 size={18} className="text-white" />
                        </div>
                        <span className="font-bold text-lg text-slate-800 dark:text-white">Harsh<span className="text-indigo-500">.</span></span>
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.to}
                                onClick={() => scrollTo(link.to)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === link.to
                                    ? 'text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10'
                                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                            aria-label="Toggle dark mode"
                        >
                            <AnimatePresence mode="wait">
                                {darkMode ? (
                                    <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <Sun size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                        <Moon size={18} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                        <button
                            onClick={() => scrollTo('contact')}
                            className="hidden md:flex btn-primary text-sm py-2 px-4"
                        >
                            Hire Me
                        </button>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                        >
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.nav
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden border-t border-slate-100 dark:border-slate-800"
                        >
                            <div className="py-3 flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.to}
                                        onClick={() => scrollTo(link.to)}
                                        className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === link.to
                                            ? 'text-indigo-500 bg-indigo-50 dark:bg-indigo-500/10'
                                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                                            }`}
                                    >
                                        {link.label}
                                    </button>
                                ))}
                                <button
                                    onClick={() => scrollTo('contact')}
                                    className="mt-2 btn-primary justify-center"
                                >
                                    Hire Me
                                </button>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
