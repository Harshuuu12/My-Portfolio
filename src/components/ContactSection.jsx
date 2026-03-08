import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, Phone } from 'lucide-react';

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = form;
        if (!name || !email || !message) return;

        const text = `Hello, my name is ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        const phone = '919879308454'; // Harsh Sharma's WhatsApp
        window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-500 font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
                    <h2 className="section-heading mt-2">Contact Me</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
                        Have a project in mind? Let's talk. Fill in the form below and your message will be sent directly to my WhatsApp.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                            Let's build something
                            <span className="gradient-text"> amazing together</span>
                        </h3>
                        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                            Whether you need a landing page, a complete web application, or want to improve an existing product — I'm here to help. I typically respond within a few hours.
                        </p>

                        {/* Contact cards */}
                        <div className="space-y-4">
                            <a href="mailto:harshsharma292005@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors duration-200">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                                    <Mail size={18} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-800 dark:text-white">Email</div>
                                    <div className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">harshsharma292005@gmail.com</div>
                                </div>
                            </a>
                            <a href="https://wa.me/919879308454" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-green-50 dark:bg-green-500/10 hover:bg-green-100 dark:hover:bg-green-500/20 transition-colors duration-200">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center flex-shrink-0">
                                    <Phone size={18} className="text-white" />
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-800 dark:text-white">WhatsApp / Phone</div>
                                    <div className="text-xs text-green-500 dark:text-green-400 font-medium">+91 9879308454</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="name">
                                    Your Name
                                </label>
                                <div className="relative">
                                    <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Harsh Sharma"
                                        required
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="email">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="harsh@gmail.com"
                                        required
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200 text-sm"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2" htmlFor="message">
                                    Message
                                </label>
                                <div className="relative">
                                    <MessageSquare size={16} className="absolute left-3 top-3.5 text-slate-400" />
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        required
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-200 text-sm resize-none"
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full btn-primary justify-center py-3.5 text-base"
                            >
                                {sent ? (
                                    <>
                                        <CheckCircle size={18} className="text-green-300" />
                                        Opening WhatsApp...
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message via WhatsApp
                                    </>
                                )}
                            </motion.button>

                            <p className="text-xs text-center text-slate-400 dark:text-slate-500">
                                Clicking will open WhatsApp with your message pre-filled ✓
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
