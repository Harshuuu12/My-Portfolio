import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Code2, Smartphone, Search, Shield, Clock } from 'lucide-react';

const benefits = [
    {
        icon: Zap,
        title: 'Fast Delivery',
        description: 'I respect your time. Projects are delivered on schedule with regular updates throughout the development cycle.',
        color: 'from-yellow-400 to-orange-500',
        bg: 'bg-yellow-50 dark:bg-yellow-900/10',
    },
    {
        icon: Code2,
        title: 'Clean Code',
        description: 'Every project is built with readable, well-structured, and maintainable code following industry best practices.',
        color: 'from-indigo-400 to-purple-500',
        bg: 'bg-indigo-50 dark:bg-indigo-900/10',
    },
    {
        icon: Smartphone,
        title: 'Responsive Design',
        description: 'Pixel-perfect on every device — mobile, tablet, and desktop. Your site will look stunning at any screen size.',
        color: 'from-cyan-400 to-blue-500',
        bg: 'bg-cyan-50 dark:bg-cyan-900/10',
    },
    {
        icon: Search,
        title: 'SEO Friendly',
        description: 'Built with semantic HTML, optimized meta tags, fast load times, and best practices for search engine visibility.',
        color: 'from-green-400 to-emerald-500',
        bg: 'bg-green-50 dark:bg-green-900/10',
    },
    {
        icon: Shield,
        title: 'Secure & Reliable',
        description: 'Security-first mindset with proper authentication, data validation, and protection against common vulnerabilities.',
        color: 'from-rose-400 to-pink-500',
        bg: 'bg-rose-50 dark:bg-rose-900/10',
    },
    {
        icon: Clock,
        title: 'Post-launch Support',
        description: "My relationship doesn't end at delivery. I provide support, bug fixes, and guidance even after your site goes live.",
        color: 'from-violet-400 to-purple-500',
        bg: 'bg-violet-50 dark:bg-violet-900/10',
    },
];

export default function BenefitsSection() {
    return (
        <section id="benefits" className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-500 font-semibold text-sm uppercase tracking-widest">Why Me?</span>
                    <h2 className="section-heading mt-2">Why Clients Choose Me</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
                        I don&apos;t just write code — I craft digital experiences that achieve real business goals.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className={`card p-6 ${item.bg} border-0 group`}
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5 group-hover:scale-110 transition-transform duration-200`}>
                                    <Icon size={22} className="text-white" />
                                </div>
                                <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
