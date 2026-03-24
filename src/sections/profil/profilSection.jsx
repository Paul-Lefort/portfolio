import { motion } from "framer-motion";
import CV from "../../assets/CV_Paul_Lefort.pdf"

// ─── Icônes SVG ───────────────────────────────────────────────────────────────
const IconGithub = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
);

const IconLinkedin = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);


const IconDownload = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

// ─── Socials ──────────────────────────────────────────────────────────────────
const socials = [
    { label: "GitHub",   href: "https://github.com/Paul-Lefort",                        icon: <IconGithub /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/paul-lefort-169978326/",    icon: <IconLinkedin /> },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────
const HeroSection = () => (
    <section className="pt-32 pb-24 px-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between gap-12">

            <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-tight"
                >
                    <span className="text-blue-900">Paul Lefort</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22 }}
                    className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed"
                >
                    Actuellement Etudiant au lycée Louis Armand en BTS SIO, je suis
                    à la recherche d'une alternance afin de poursuivre mes études superieurs
                    dans un cycle ingenieur à l'EFREI en Big Data et IA.
                    Je suis curieux et mon appétence est stimulé par les technologies
                    associées au big data et au cloud computing.

                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 flex-wrap"
                >
                    <a
                        href="#projets"
                        className="bg-blue-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                        Voir mes projets
                    </a>

                    <a
                        href={CV}
                        download
                        className="flex items-center gap-2 border border-slate-200 text-slate-600 text-sm font-medium px-5 py-2.5 rounded-lg hover:border-blue-900 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200"
                    >
                        <IconDownload />
                        Mon CV
                    </a>

                    <div className="w-px h-8 bg-slate-200" />

                    <div className="flex items-center gap-2">
                        {socials.map((s, i) => (
                            <motion.a
                                key={i}
                                href={s.href}
                                target={s.label !== "Email" ? "_blank" : undefined}
                                rel="noreferrer"
                                title={s.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.35 + i * 0.07 }}
                                className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-500 hover:border-blue-900 hover:text-blue-900 hover:bg-blue-50 transition-all duration-200"
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* ── Photo ronde ── */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-shrink-0 hidden md:block"
            >

            </motion.div>

        </div>
    </section>
);

export default HeroSection;