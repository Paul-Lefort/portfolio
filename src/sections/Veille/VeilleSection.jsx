// src/sections/veille/veilleSection.jsx
import { motion } from 'framer-motion';

// ← Remplis ici
const themes = [
    {
        titre: "Le big Data",
        justification: "Ayant pour objectif d’évoluer vers un poste de Data Engineer, je souhaite me tenir informé des dernières" +
            " avancées et innovations du domaine. Cette veille me permet d’identifier des technologies et approches pertinentes, " +
            "afin de les explorer et les expérimenter dès à présent lorsqu’elles présentent un intérêt pour mon développement " +
            "professionnel.",
    },
    {
        titre: "Docker, CI/CD",
        justification: "J’utilise déjà Docker dans mes projets actuels afin de m’affranchir des machines virtuelles lourdes ainsi " +
            "que des contraintes liées aux configurations des postes du lycée. Par ailleurs, il est essentiel pour moi de maîtriser" +
            " à terme les pratiques avancées de CI/CD, qui constitueront l’un des piliers de mon approche pour l’industrialisation" +
            " et le déploiement fiable de mes pipelines ETL.",
    },
];

const demarche = 'Dans un premier temps, j’ai mis en place des Google Alerts hebdomadaires afin de centraliser les actualités' +
    ' pertinentes. Parallèlement, je suis régulièrement des comptes spécialisés sur Instagram, tels que becoming.lea, pour rester' +
    ' informé des tendances technologiques. Enfin, j’ai développé un projet personnel qui récupère automatiquement les notifications ' +
    'de mes Google Alerts et les synthétise sous forme de résumés concis, optimisant ainsi la veille informationnelle.';

const sources = [
    { label: "Lea", url: "https://www.instagram.com/becoming.lea/" },
    { label: "resultat dune alerte Google", url: "https://blog.stephane-robert.info/docs/securiser/supply-chain/owasp-top-10/" },
];

const VeilleSection = () => (
    <section id="veille" className="py-20 px-8 max-w-4xl mx-auto">

        {/* En-tête */}
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
        >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Veille informatique</h2>
            <p className="text-slate-400 text-sm">Mes thèmes de veille et ma démarche</p>
        </motion.div>

        {/* Deux thèmes côte à côte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {themes.map((theme, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-blue-900/15 rounded-xl overflow-hidden hover:border-blue-900/30 hover:shadow-sm transition-all duration-200"
                >
                    {/* En-tête carte */}
                    <div className="bg-slate-50 border-b border-blue-900/10 px-5 py-4 flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-900 flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xs font-bold">{i + 1}</span>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-blue-900 uppercase tracking-widest">
                                Thème {i + 1}
                            </p>
                            <h3 className="font-bold text-slate-900 text-sm leading-snug">
                                {theme.titre}
                            </h3>
                        </div>
                    </div>

                    {/* Justification */}
                    <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-1 h-4 bg-blue-900 rounded-full" />
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                                Pourquoi ce thème
                            </p>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {theme.justification}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Démarche — pleine largeur en dessous */}
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-blue-900/15 rounded-xl overflow-hidden hover:border-blue-900/30 hover:shadow-sm transition-all duration-200"
        >
            <div className="bg-slate-50 border-b border-blue-900/10 px-5 py-4">
                <div className="flex items-center gap-2">
                    <span className="w-1 h-4 bg-blue-900/40 rounded-full" />
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                        Ma démarche
                    </p>
                </div>
            </div>
            <div className="p-5 flex flex-col gap-5">
                <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                    {demarche}
                </p>

                {/* Sources */}
                {sources.length > 0 && (
                    <>
                        <div className="border-t border-slate-100" />
                        <div>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                                Sources consultées
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {sources.map((source, i) => (
                                    <a
                                        key={i}
                                        href={source.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-xs text-blue-900 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
                                    >
                                        {source.label} ↗
                                    </a>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </motion.div>

    </section>
);

export default VeilleSection;