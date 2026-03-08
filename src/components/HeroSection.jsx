import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';

export default function HeroSection() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950/30">
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/10 dark:bg-purple-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-400/8 dark:bg-pink-500/8 rounded-full blur-3xl"
                />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] dark:opacity-30 opacity-60" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8"
                    >
                        <Sparkles size={14} className="animate-pulse" />
                        Available for Projects
                        <span className="ml-1 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-4"
                    >
                        <span className="text-slate-800 dark:text-white">Hi, I'm </span>
                        <span className="gradient-text">Harsh</span>
                        <br />
                        <span className="text-slate-800 dark:text-white">Sharma</span>
                    </motion.h1>

                    {/* Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-xl sm:text-2xl font-medium text-indigo-500 dark:text-indigo-400 mb-6"
                    >
                        Frontend / Full Stack Web Developer
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        I build fast, modern, and responsive web applications that deliver exceptional user experiences. From pixel-perfect UIs to scalable full-stack solutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.55 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                    >
                        <button onClick={() => scrollTo('projects')} className="btn-primary text-base px-8 py-4">
                            <ExternalLink size={18} />
                            View My Work
                        </button>
                        <button onClick={() => scrollTo('contact')} className="btn-outline text-base px-8 py-4">
                            Contact Me
                        </button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex items-center justify-center gap-4 mb-20"
                    >
                        <a
                            href="https://github.com/Harshuuu12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                        >
                            <Github size={16} /> GitHub
                        </a>
                        <div className="w-px h-4 bg-slate-200 dark:bg-slate-700" />
                        <a
                            href="https://www.linkedin.com/in/sharmaharsh02"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                        >
                            <Linkedin size={16} /> LinkedIn
                        </a>
                    </motion.div>

                    {/* Scroll indicator */}
                    <motion.button
                        onClick={() => scrollTo('about')}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
                    >
                        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
                        <ArrowDown size={16} />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
