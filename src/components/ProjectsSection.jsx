import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Rama Enterprise',
        description: 'A professional business website for a diamond tools manufacturer. Built with clean HTML/CSS/JS, fully responsive with SEO optimization and product catalog.',
        image: null,
        emoji: '💎',
        gradient: 'from-orange-400 via-red-400 to-pink-500',
        tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
        live: 'https://ramagroovingwheel.com/',
        github: null,
        badge: 'Live Client',
        badgeColor: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
        stars: true,
    },
    {
        id: 2,
        title: 'HomeHaven',
        description: 'A modern real estate platform where users can browse, list, buy or rent properties. Built with React, MongoDB, and Node.js. Deployed on Vercel.',
        image: null,
        emoji: '🏠',
        gradient: 'from-indigo-400 via-purple-400 to-cyan-500',
        tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Vercel'],
        live: 'https://home-haven-three.vercel.app/',
        github: 'https://github.com/Harshuuu12',
        badge: 'Vercel',
        badgeColor: 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300',
        stars: true,
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.12 },
    }),
};

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-500 font-semibold text-sm uppercase tracking-widest">My Work</span>
                    <h2 className="section-heading mt-2">Featured Projects</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
                        A selection of projects showcasing my skills across the full stack — from client websites to complete web applications.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.id}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="card group overflow-hidden"
                        >
                            {/* Project visual */}
                            <div className={`relative h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                                <span className="text-8xl filter drop-shadow-lg">{project.emoji}</span>
                                {/* Subtle pattern overlay */}
                                <div className="absolute inset-0 bg-black/10" />
                                {/* Stars badge */}
                                {project.stars && (
                                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                                        <Star size={11} fill="currentColor" />
                                        Featured
                                    </div>
                                )}
                                {/* Badge */}
                                <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-semibold ${project.badgeColor}`}>
                                    {project.badge}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors duration-200">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-5">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Action buttons */}
                                <div className="flex gap-3">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary flex-1 justify-center py-2.5"
                                        >
                                            <ExternalLink size={14} />
                                            Live Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-outline flex-1 justify-center py-2.5"
                                        >
                                            <Github size={14} />
                                            GitHub
                                        </a>
                                    )}
                                    {!project.live && !project.github && (
                                        <span className="text-sm text-slate-400 dark:text-slate-500 py-2.5">Private Repository</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
