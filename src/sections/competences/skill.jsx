// src/sections/skills/skillsSection.jsx
import { motion } from "framer-motion";

const categories = [
    {
        title: "Langage",
        items: ["Java", "PHP", "Python", "SQL"],
    },
    {
        title: "Bases de données",
        items: ["MySQL", "PostgreSQL", "Mariadb"],
    },
    {
        title: "Outils",
        items: ["Git", "GitHub", "Docker", "Colima", "Linux", "WSL"],
    },
    {
        title: "Big Data",
        items: ["Pandas", "Jupyter"],
    },
];

const SkillsSection = () => (
    <section id="compétences" className="py-20 px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Compétences</h2>
        <p className="text-slate-400 text-sm mb-12">Mon stack technique actuel</p>

        <div className="flex flex-col gap-10">
            {categories.map((cat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.08 }}
                >
                    {/* Titre catégorie */}
                    <p className="text-xs font-semibold text-blue-900 uppercase tracking-widest mb-4">
                        {cat.title}
                    </p>

                    {/* Cubes */}
                    <div className="flex flex-wrap gap-2">
                        {cat.items.map((item, j) => (
                            <motion.div
                                key={j}
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 + j * 0.04 }}
                                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                                className="bg-white border border-blue-900/15 rounded-lg px-4 py-3 hover:border-blue-900/40 hover:shadow-sm transition-all duration-200 cursor-default"
                            >
                                <span className="text-sm text-slate-700 font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </section>
);

export default SkillsSection;