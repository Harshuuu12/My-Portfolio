import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Lightbulb,
        title: 'Idea',
        description: 'We start with a discovery session — understanding your goals, target audience, and vision. Every great product begins with a crystal-clear idea.',
        color: 'from-yellow-400 to-orange-500',
        bg: 'bg-yellow-50 dark:bg-yellow-900/10',
        number: '01',
    },
    {
        icon: PenTool,
        title: 'Design',
        description: 'I craft wireframes and high-fidelity UI mockups focused on aesthetics and usability — designing experiences users love before a single line of code is written.',
        color: 'from-pink-400 to-rose-500',
        bg: 'bg-pink-50 dark:bg-pink-900/10',
        number: '02',
    },
    {
        icon: Code2,
        title: 'Development',
        description: 'Clean, modern code using React, Tailwind CSS, and best-in-class tools. I build performant, accessible, and fully responsive applications.',
        color: 'from-indigo-400 to-purple-500',
        bg: 'bg-indigo-50 dark:bg-indigo-900/10',
        number: '03',
    },
    {
        icon: Rocket,
        title: 'Deployment',
        description: 'I deploy your application to production using Vercel, with CI/CD pipelines for seamless updates. Your site is live, fast, and production-ready.',
        color: 'from-emerald-400 to-teal-500',
        bg: 'bg-emerald-50 dark:bg-emerald-900/10',
        number: '04',
    },
];

export default function ProcessSection() {
    return (
        <section id="process" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-500 font-semibold text-sm uppercase tracking-widest">How I Work</span>
                    <h2 className="section-heading mt-2">My Process</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
                        A structured, transparent workflow that delivers results — from the first conversation to launch day.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting line (desktop) */}
                    <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-yellow-400 via-pink-400 via-indigo-400 to-emerald-400 opacity-30" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    whileHover={{ y: -8 }}
                                    className={`relative card p-6 ${step.bg} border-0`}
                                >
                                    {/* Step number */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center text-xs font-black text-slate-400 dark:text-slate-500 shadow-md">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-5`}>
                                        <Icon size={24} className="text-white" />
                                    </div>

                                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">{step.title}</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
