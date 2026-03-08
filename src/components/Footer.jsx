import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';

export default function Footer() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
                                <Code2 size={18} className="text-white" />
                            </div>
                            <span className="font-bold text-lg text-white">Harsh<span className="text-indigo-400">.</span></span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Building fast, modern, and responsive web applications with a focus on clean code and excellent user experience.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['hero', 'about', 'projects', 'process', 'contact'].map((s) => (
                                <li key={s}>
                                    <button
                                        onClick={() => scrollTo(s)}
                                        className="text-slate-400 hover:text-indigo-400 transition-colors duration-200 capitalize text-sm"
                                    >
                                        {s === 'hero' ? 'Home' : s.charAt(0).toUpperCase() + s.slice(1)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Connect</h4>
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/Harshuuu12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-indigo-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sharmaharsh02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-indigo-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                        <p className="text-slate-500 text-xs mt-6">
                            📍 India · Available Worldwide
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">

                    <p className="text-slate-500 text-sm">
                        Built with React & deployed on Vercel
                    </p>
                    <p className="text-slate-600 text-xs">
                        © {new Date().getFullYear()} Harsh Sharma. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
