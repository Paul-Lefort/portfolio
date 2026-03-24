// src/components/card-veille.jsx
import React from 'react';

const CardVeille = ({ titre, resume, url }) => {
    return (
        <div className="group h-full flex flex-col bg-white border border-blue-900/15 rounded-lg overflow-hidden hover:border-blue-900/40 hover:shadow-sm transition-all duration-200">

            {/* Bandeau accent */}
            <div className="h-1 w-full bg-blue-900/10 group-hover:bg-blue-900/30 transition-colors duration-200 flex-shrink-0" />

            {/* Contenu */}
            <div className="p-5 flex flex-col flex-grow">

                {/* Icône veille */}
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 12h6m-6-4h6" />
                    </svg>
                </div>

                <h3 className="font-semibold text-slate-900 mb-3 leading-snug group-hover:text-blue-900 transition-colors">
                    {titre || "Titre de l'article"}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-5">
                    {resume || "Résumé à renseigner."}
                </p>

                <a
                    href={url || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-blue-900 hover:underline font-medium"
                >
                    Lire l'article →
                </a>
            </div>
        </div>
    );
};

export default CardVeille;