import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';

const education = [
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'Veer Narmad South Gujarat University (VNSGU)',
        location: 'India',
        period: '2023 – 2026',
        description: 'Pursuing BCA with focus on Web Development, Data Structures, Algorithms, Python programming, and modern software engineering practices.',
        icon: '🎓',
        color: 'from-indigo-400 to-purple-500',
        bg: 'bg-indigo-50 dark:bg-indigo-900/10',
    },
];

const certificates = [
    {
        title: 'Virtual Internship Program',
        issuer: 'Deloitte',
        date: '2025',
        icon: '🏢',
        color: 'from-green-400 to-teal-500',
        link: 'https://drive.google.com/drive/folders/1z-xbtQlJlKgba9hFyVmtRop08AC8h4rk',
    },
];

export default function EducationSection() {
    return (
        <section id="education" className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-500 font-semibold text-sm uppercase tracking-widest">My Background</span>
                    <h2 className="section-heading mt-2">Education & Certificates</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
                        My academic foundation and the online certifications that sharpen my skills.
                    </p>
                </motion.div>

                {/* Education Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-lg">
                            <GraduationCap size={20} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Education</h3>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -4 }}
                            className={`card p-6 ${edu.bg} border-0`}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                                    {edu.icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-slate-800 dark:text-white text-base leading-tight mb-1">{edu.degree}</h4>
                                    <p className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm mb-2">{edu.institution}</p>
                                    <div className="flex flex-wrap gap-3 mb-3">
                                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                            <Calendar size={11} /> {edu.period}
                                        </span>
                                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                                            <MapPin size={11} /> {edu.location}
                                        </span>
                                    </div>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Certificates */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
                            <Award size={20} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Certificates</h3>
                    </div>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {certificates.map((cert, i) => (
                        <motion.a
                            key={cert.title}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className="card p-5 group block"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-200`}>
                                {cert.icon}
                            </div>
                            <h4 className="text-sm font-bold text-slate-800 dark:text-white leading-tight mb-2 group-hover:text-indigo-500 transition-colors duration-200">
                                {cert.title}
                            </h4>
                            <p className="text-xs text-indigo-500 dark:text-indigo-400 font-semibold mb-1">{cert.issuer}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-400 dark:text-slate-500">{cert.date}</span>
                                <ExternalLink size={12} className="text-slate-300 group-hover:text-indigo-400 transition-colors duration-200" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
