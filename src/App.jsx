// src/App.jsx
import { AnimatePresence, motion } from "framer-motion";
import HeroSection     from "./sections/profil/profilSection.jsx";
import ProjectsSection from "./sections/projet-card/projetSection.jsx";
import VeilleSection   from "./sections/veille/veilleSection.jsx";
import EtudeSection    from "./sections/etudes/etudeSection.jsx";
import SkillsSection   from "./sections/competences/skill.jsx";
import { useState } from "react";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Projets",     href: "#projets" },
        { name: "Veille",      href: "#veille" },
        { name: "Formation",   href: "#formation" },
        { name: "Compétences", href: "#compétences" },
        { name: "Contact",     href: "#contact" },
    ];

    const menuVariants = {
        closed: { opacity: 0, y: -20, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
        opened: { opacity: 1, y: 0,   transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
    };

    const itemVariants = {
        closed: { opacity: 0, x: -10 },
        opened: { opacity: 1, x: 0 }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <span className="font-semibold text-slate-800 tracking-tight text-base z-50">
                    Paul LEFORT
                </span>

                <div className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-500 hover:text-blue-900 transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-slate-600 z-50 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate="opened"
                            exit="closed"
                            variants={menuVariants}
                            className="fixed inset-0 bg-white h-screen w-full flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            {menuItems.map((item) => (
                                <motion.a
                                    key={item.name}
                                    variants={itemVariants}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

const Footer = () => (
    <footer className="bg-slate-50 border-t border-slate-200 px-8 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
            <span className="text-xs text-slate-400">© 2026 — Paul Lefort</span>
            <span className="text-xs text-slate-400">BTS SIO</span>
        </div>
    </footer>
);

function App() {
    return (
        <div className="bg-white min-h-screen text-slate-900">
            <Nav />
            <main>
                {/* Blanc — Hero */}
                <div className="bg-white">
                    <HeroSection />
                </div>

                {/* Gris — Projets */}
                <div className="bg-slate-50 border-y border-slate-200">
                    <div id="projets" className="py-20 px-8 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Projets</h2>
                        <p className="text-slate-400 text-sm mb-10">Mes réalisations récentes</p>
                        <ProjectsSection />
                    </div>
                </div>

                {/* Blanc — Veille */}
                <div className="bg-white border-b border-slate-200">
                    <VeilleSection />
                </div>

                {/* Gris — Formation */}
                <div className="bg-slate-50 border-b border-slate-200">
                    <EtudeSection />
                </div>

                {/* Blanc — Compétences */}
                <div className="bg-white border-b border-slate-200">
                    <SkillsSection />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;