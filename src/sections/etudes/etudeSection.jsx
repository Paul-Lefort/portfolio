// src/sections/etudes/etudeSection.jsx
import { motion } from 'framer-motion';
import CardEtude from '../../components/card-etude.jsx';

const etudes = [
    {
        niveau: "BTS SIO — option SLAM",
        etablissement: "lycée Louis Armand",
        ville: "Nogent-sur-Marne",
        dateDebut: "2024",
        dateFin: "2026",
        enCours: true,
        description: "Formation axée sur le développement d'applications et la gestion de systèmes d'information.",
        axes: ["Développement", "Base de données", "Algorithmie", "Réseau", "Cybersécurité"],
    },
    {
        niveau: "Baccalauréat",
        etablissement: "lycée Condorcet",
        ville: "Montreuil",
        dateDebut: "2020",
        dateFin: "2024",
        enCours: false,
        description: "",
        axes: ["Maths", "NSI", "Physique"]
    },
    // ← Ajoute d'autres formations ici
];

const StationDot = ({ enCours }) => {
    if (enCours) {
        return (
            <div className="w-6 h-6 rounded-full bg-white border-[3px] border-blue-900 shadow-md shadow-blue-900/20 flex-shrink-0 z-10 mt-7" />
        );
    }
    return (
        <div className="w-3 h-3 rounded-full bg-white border-2 border-blue-900/40 flex-shrink-0 z-10 mt-8" />
    );
};

const EtudeSection = () => {
    return (
        <section id="formation" className="py-20 px-8 max-w-4xl mx-auto">

            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Formation</h2>
                <p className="text-slate-400 text-sm">Mon parcours scolaire</p>
            </motion.div>

            <div className="flex flex-col">
                {etudes.map((etude, i) => {
                    const isLast = i === etudes.length - 1;
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            className="flex gap-7"
                        >
                            {/* Colonne gauche — ligne + cercle */}
                            <div className="flex flex-col items-center flex-shrink-0 w-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.12 }}
                                >
                                    <StationDot enCours={etude.enCours} />
                                </motion.div>

                                {/* Ligne épaisse bleue entre stations */}
                                {!isLast && (
                                    <div className="w-[3px] flex-1 rounded-full mt-2 mb-0"
                                         style={{ background: "linear-gradient(to bottom, #1e3a8a55, #1e3a8a11)" }}
                                    />
                                )}
                            </div>

                            <div className="flex-1 pb-7">
                                <CardEtude {...etude} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default EtudeSection;