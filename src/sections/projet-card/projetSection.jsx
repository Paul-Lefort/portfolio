// src/sections/projet-card/projetSection.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TOneCard from './t-one-card.jsx';
import ComeEat_WS from "./ws-comeat.jsx";
import MAComeat from "./ma-comeat.jsx";
import ArchiEvent from "./mc-archievent.jsx";
import ArchiWarp from "./archiWarp.jsx";

const allProjects = [
    <TOneCard key="1" />,
    <ComeEat_WS key="2" />,
    <MAComeat key="3" />,
    <ArchiEvent key="4" />,
    <ArchiWarp key="5" />,
];

const ProjectsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setCardsToShow(1);
            else if (window.innerWidth < 1024) setCardsToShow(2);
            else setCardsToShow(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, allProjects.length - cardsToShow);
    const next = () => { if (currentIndex < maxIndex) setCurrentIndex(p => p + 1); };
    const prev = () => { if (currentIndex > 0) setCurrentIndex(p => p - 1); };

    const cardWidthPercent = 100 / cardsToShow;

    return (
        <div>
            {/* Masque horizontal uniquement */}
            <div style={{ overflowX: 'hidden' }}>
                <motion.div
                    style={{
                        display: 'flex',
                        alignItems: 'stretch',   // ← clé : tous les enfants directs s'étirent
                    }}
                    animate={{ x: `-${currentIndex * cardWidthPercent}%` }}
                    transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                >
                    {allProjects.map((project, index) => (
                        <div
                            key={index}
                            style={{
                                flex: `0 0 ${cardWidthPercent}%`,
                                display: 'flex',          // ← passe le stretch à la card enfant
                                flexDirection: 'column',
                                paddingRight: '16px',
                            }}
                        >
                            {/* Le ProjectCard a déjà h-full flex flex-col */}
                            {project}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
                <span className="text-xs text-slate-400">
                    {currentIndex + 1} / {maxIndex + 1}
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={prev}
                        disabled={currentIndex === 0}
                        className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded text-slate-400 hover:border-blue-900 hover:text-blue-900 disabled:opacity-30 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        disabled={currentIndex >= maxIndex}
                        className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded text-slate-400 hover:border-blue-900 hover:text-blue-900 disabled:opacity-30 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsSection;