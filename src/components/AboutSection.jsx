import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { name: 'HTML5', icon: '🌐', color: 'from-orange-400 to-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
    { name: 'CSS3', icon: '🎨', color: 'from-blue-400 to-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400 to-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-cyan-600', bg: 'bg-cyan-50 dark:bg-cyan-900/20' },
    { name: 'Tailwind CSS', icon: '💨', color: 'from-teal-400 to-teal-600', bg: 'bg-teal-50 dark:bg-teal-900/20' },
    { name: 'Python', icon: '🐍', color: 'from-blue-500 to-yellow-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
    { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
    { name: 'MongoDB', icon: '🍃', color: 'from-emerald-400 to-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
    { name: 'Git', icon: '🔀', color: 'from-red-400 to-red-600', bg: 'bg-red-50 dark:bg-red-900/20' },
    { name: 'Vercel', icon: '▲', color: 'from-slate-600 to-slate-800', bg: 'bg-slate-50 dark:bg-slate-800/50' },
];

const stats = [
    { value: 'Fresher', label: 'Experience Level' },
    { value: '10+', label: 'Projects Built' },
    { value: '5+', label: 'Happy Clients' },
    { value: '100%', label: 'Client Satisfaction' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-500 font-semibold text-sm uppercase tracking-widest">Get to know me</span>
                    <h2 className="section-heading mt-2">About Me</h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left – Avatar + Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col items-center lg:items-start gap-8"
                    >
                        {/* Avatar card */}
                        <div className="relative w-64 h-64">
                            <div className="w-full h-full rounded-3xl bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 flex items-center justify-center text-white text-8xl font-black shadow-2xl shadow-indigo-500/30">
                                HS
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl flex flex-col items-center justify-center">
                                <span className="text-sm font-black gradient-text">Fresher</span>
                                <span className="text-xs text-slate-500 text-center leading-tight mt-1">Level</span>
                            </div>
                        </div>

                        {/* Mini stats */}
                        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                            {stats.map((s) => (
                                <div key={s.label} className="card p-4 text-center">
                                    <div className="text-xl font-black gradient-text">{s.value}</div>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right – Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                            Hi! I'm <strong className="text-slate-800 dark:text-white">Harsh Sharma</strong>, a passionate Frontend and Full Stack Web Developer based in India. As a fresher, I bring fresh perspectives and strong fundamentals to every project I work on.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                            I specialize in building responsive, user-friendly web applications using React, Node.js, MongoDB, and Python. I deploy seamlessly to Vercel with a focus on writing clean, maintainable code.
                        </p>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            I'm eager to learn, grow, and contribute to real-world projects. When not coding, I explore new technologies and continuously upskill to stay at the cutting edge of web development.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="https://github.com/Harshuuu12"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary py-3 px-6"
                            >
                                View GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/sharmaharsh02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-outline py-3 px-6"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Skills Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">My Tech Stack</h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Technologies I work with</p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            whileHover={{ y: -6, scale: 1.05 }}
                            className={`card p-4 flex flex-col items-center gap-2 cursor-default ${skill.bg} border-0`}
                        >
                            <span className="text-3xl">{skill.icon}</span>
                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300 text-center leading-tight">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
